'use server'

export async function fetchListOfProducts(){

    const apiResponse = await fetch('https://dummyjson.com/products')
    const data = await apiResponse.json()

    return data?.products
}