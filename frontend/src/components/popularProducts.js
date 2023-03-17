import React from "react";
import "../styles/popularProducts.css";
import{addToCart, removefromCart} from"../components/cartMangement";
export default function PopularProducts(x){
return(
<div>
    <h2>PopularProducts</h2>
    <div id='productsArr'>
        {
            x.products.map(e=>{
                return <div className="productCard">
                <img src={e.thumbnail.main}/>
                <p>{e.brand}</p>
                <p>{e.name}</p>
                <div className="priceContainer">
                    <button id="btn1" onClick={()=>x.setCart(removefromCart(e,x.cart))} >less</button>
                    <h5>${e.price}</h5>
                    <button id="btn2" onClick={()=>x.setCart(addToCart(e,x.cart))}>Add</button>
                </div>
                </div>
            })
        }
    </div>
</div>
) }
