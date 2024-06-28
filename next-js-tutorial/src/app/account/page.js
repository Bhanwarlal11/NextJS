import { redirect } from "next/navigation"

export default function Accounts(){


    const userProfileInfo = null 
    if(userProfileInfo === null) redirect("products?search=product1")

    return <div>Account page</div>
}