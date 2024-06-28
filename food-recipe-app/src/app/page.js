import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
     
        <h1 className="text-2xl">Food Recipe App</h1>
        <Link className="mt-12 bg-gray-200 p-4" href={'/recipe-list'}>Explore Recipes👆</Link>
     
    </main>
  );
}
