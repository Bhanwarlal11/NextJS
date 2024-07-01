'use server'

import { signIn, signOut } from "@/auth"

export async function fetchAllProducts(){
    try{
        const result = await fetch('https://dummyjson.com/products',{
            method : 'GET',
            cache : 'no-store'
        })

        const data = await result.json()
        return {
            success : true,
            data : data?.products,
        }
    }
    catch(e){
        console.log(e)
        return {
            success : false,
            message : 'error occured from the fetchAllProductsAction;'
        }
    }
}



export async function fetchProductDetails(currentProductID){
    try{
        const result = await fetch(`https://dummyjson.com/products/${currentProductID}`,{
            method : 'GET',
            cache : 'no-store'
        })

        const data = await result.json()
        return data;

    }catch(e){
        console.log(e);
        return {
            success : false,
            message : 'error occured from the fetchProductDetailsAction;'
        }
    }
}


export async function loginAction(){
    await signIn('github')
}

export async function logoutAction(){
    await signOut();
}

