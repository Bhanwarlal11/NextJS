'use client'

import { usePathname,useSearchParams } from "next/navigation"

export default function Cart(){

    const pathname = usePathname();

    console.log(pathname)

    const searchParams = useSearchParams();

    console.log(searchParams.get('search'),searchParams.get('randomValue'))

    return <div>this is cart page</div>
}