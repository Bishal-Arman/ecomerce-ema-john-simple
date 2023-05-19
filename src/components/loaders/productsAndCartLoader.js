import { getShoppingCart } from "../../utilities/fakedb";

export const productAndCartLoader=async()=>{
  const productsdata=await fetch("products.json")
  const products=await productsdata.json();



 
  const storedCart=getShoppingCart()
  let initialCart=[]
  if(storedCart){
    for(const id in storedCart){
        const addedProduct=products.find(product=>product.id===id)
        if(addedProduct){
          // console.log(addedProduct)
            const quantity=storedCart[id]
            addedProduct.quantity=quantity
            initialCart.push(addedProduct)
        }
    }
  }
  return {products:products,initialCart:initialCart};
}