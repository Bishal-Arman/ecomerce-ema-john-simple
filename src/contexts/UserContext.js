
import { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init"
import { useState } from 'react';

export const AuthContext=createContext()
const auth=getAuth(app)

const UserContext = ({children}) => {

  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)
    
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate=(name)=>{
       return updateProfile(auth.currentUser, {
        displayName:name
      })
    }

    const varifyEmail=()=>{
        const auth = getAuth();
      return sendEmailVerification(auth.currentUser)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
         })
         return ()=>{
            unSubscribe()
         }
      },[])

      const logout=()=>{
        return signOut(auth)
          
      }

    const authInfo={user,createUser,profileUpdate,varifyEmail,signIn,loading,logout}
    return (
       <AuthContext.Provider value={authInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default UserContext;