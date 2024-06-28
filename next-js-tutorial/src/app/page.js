'use client'

import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Home() {

  const router = useRouter();

  function navigateToProducts(){
    router.push("products")
    console.log("push")
  }
  function reloadPage(){
    router.prefetch('/account')
    console.log("prefetch")
  }

  function refreshPage(){
    router.refresh();
    console.log("refreshpage")
  }

  function backPage(){
    router.back();
    console.log("backpage")
  }

  console.log(router)
  


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Learn NextJS😊😊</h1>
      

      <Link href={'products'}><button>Navigate to product page using link</button></Link>
      
      <Link href={'/account'}><button>Navigate to account page using link</button></Link>

      <h1>Navigate using useRouter hook!!</h1>
      <button onClick={navigateToProducts}>Navigate to account page using <i>USEROUTER HOOK</i></button>
      <button onClick={reloadPage}>reload page</button>
      <button onClick={refreshPage}>refresh page</button>
      <button onClick={backPage}>back page</button>

      <Link href={'/server-data-fetch'} className="bg-gray-200">go to ListOfuser Page--'/server-data-fetch'</Link>
    </main>
  );
}
