import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <h1>learn : server action</h1>
    <Link href={'/theory/client-page-examples'}> <button className="p-6 m-2 bg-blue-600 text-white border rounded-xl cursor-pointer">go to client page example</button> </Link>
   </div>
  );
}
