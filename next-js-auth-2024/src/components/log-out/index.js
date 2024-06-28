'use client'
import { logoutUserAction } from "@/actions";
import { Button } from "../ui/button";


export default function Logout(){
    async function handleLogout(){
       await logoutUserAction();
    }

    return (
        <Button onClick={handleLogout}>Logout</Button>
    )
}