'use client'

import { useState,useEffect } from "react";

import { fetchListOfProducts } from "@/actions";
import { Skeleton } from "@/components/ui/skeleton";


function clientActionExamples(){

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    async function fetchProductData(){
        const data = await fetchListOfProducts();
        console.log(data)
        if(data){
            setProducts(data)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchProductData()
    },[])

    if(loading) return <h1>loading Data..... please wait ......</h1> />


    return (<div>
        <h1>example : Client action page</h1>
        <ul>
            {
                products && products.length>0
                ? products.map((item,index)=>(
                    <li key={index}>{item.title}</li>
                ))  
                : <h2>product not fetched</h2>
            }
        </ul>
    </div>)
}

export default clientActionExamples;