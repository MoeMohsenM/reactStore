import { useEffect, useState } from "react"
import { axiosInstance } from "../../network/interveptor"
import ProductCard from "../productCard/ProductCard"
import "./ProductList.css"


function ProductList(){
const [products, setProducts]=useState([])

    useEffect(()=>{
        axiosInstance.get("").then((res)=>{
            setProducts(res.data?.products)
        })
    })
    return(
       <>
<div className="productGrid">
  {products.map(product => (<ProductCard key={product.id} product={product} />))}
</div>

       </>
    )
}

export default ProductList