export const addToCart =(product, cart)=>{
    if(cart.items.length){
        cart.totalPrice+=product.price;
            cart.totalQuantity+=1;
        const checkProd=cart.items.filter(e=>e.product._id===product._id)
        if(checkProd.length){
             cart.items=cart.items.map(e=>{
                if(e.product._id===product._id){
                    return{
                        ...e,
                        quantity:e.quantity +1
                    }
                }
                else{
                    return e;
                }
             })
        }else{
            cart.items.push({
                product,
                quantity:1
            });
            
        }
    }else{
        cart.items.push({
            product,
            quantity:1
        });
        cart.totalPrice=product.price;
        cart.totalQuantity=1;
    }
    console.log(cart);
    return cart;
}


export const removefromCart=(product,cart)=>{
    console.log(cart.items);
    if(cart.items.length){
        const checkProd=cart.items.filter(e=>e.product._id===product._id);
        if(checkProd.length){
            cart.totalPrice-=product.price;
            cart.totalQuantity-=1;
            if(checkProd.quantity === 1){
                cart.items=cart.items.filter(e=>e.product._id !== product._id);
            }
            else{
                cart.items=cart.items.map(e=>{
                    if(e.product._id===product._id){
                    return{
                        ...e,
                        quantity:e.quantity-1
                    }
                }
                else{
                    return e;
                }
                })
            }
            if(!cart.items.length){
                cart.totalPrice=0;
                cart.totalQuantity=0;
            }
        }
        else{
            return cart;
        }
    }
    else{
        return cart;
    }
    return cart;
}


// export const removefromCart = (product, cart) => {
//     if(!cart.items.length) 
//         return cart;
//      else {
//         const checkProd = cart.items.filter(e=>e.product._id === product._id);
//         if(!checkProd.length)
//         return cart;
//         else {
//             cart.totalQuantity -=1;
//             cart.totalPrice -= product.price;
//             if(checkProd[0].quantity===1) {
//                 cart.items = cart.items.filter(e=>e.product._id !== product._id)
//             }
//             else {
//                 cart.items = cart.items.map(e => {
//                     if(e.product._id === product._id) {
//                         return {
//                             ...e,
//                             quantity: e.quantity - 1
//                         }
//                     } else {
//                         return e;
//                     }
//                 })
//                 if(cart.items.length === 0) 
//                 cart.totalPrice = 0;
//                 cart.totalQuantity = 0;
//             }
//         }
//     }
//    return cart;
// }


// export const deleteItem=(product,cart)=>{
//   if(cart.items.length){
//     const checkProd=cart.items.filter(e=>e.product._id===product._id);
//     if(checkProd.length){
//         cart.totalQuantity-=checkProd[0].quantity;
//         cart.totalPrice-=checkProd[0].quantity*product.price;
//         cart.items=cart.items.filter(e=>e.product._id !== product._id);
//     }else{
//         return cart;
//     }
//   } else{
//        return cart; 
//   }
//   return cart;
// }