import Link from "next/link"

export default function NotFound(){

    return <div>
        <h1>page not found</h1>
        <Link href={'/'} className="italic bg-gray-400">go to homePage</Link>
    </div>
}