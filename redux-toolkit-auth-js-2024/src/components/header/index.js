'use client'

import { loginAction, logoutAction } from "@/app/actions";
import { Button } from "../ui/button";

const { default: Link } = require("next/link")



function Header({getSession}){

    async function handleOathSignIn() {
        await loginAction();
    }
    async function handleOathSignOut(){
        await logoutAction();
    }

    return <header className="flex shadow-md items-center  py-4 px-4 bg-white min-h-[70] tracking-wide relative z-50 mb-5">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full">
            <Link className="text-4xl font-extrabold my-5" href={'/'}>Shopping Cart</Link>
        </div>
        <div>
            <ul className="flex gap-6 items-center justify-center mr-10">
                <li className="text-lg font-semibold ">
                    <Link href={'/'}>Products</Link>
                </li>
                <li className="text-lg font-semibold ">
                    <Link href={'/cart'}>Cart</Link>
                </li>
                
            </ul>
        </div>

        <div className="flex space-x-3">
            <form action={getSession?.user ? handleOathSignOut : handleOathSignIn}>
                <Button type="submit">{getSession?.user ? 'Logout' : 'Login'}</Button>
            </form>
        </div>
    </header>
}

export  default Header;