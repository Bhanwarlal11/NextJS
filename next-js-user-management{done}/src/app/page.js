import AddNewUser from "@/components/add-new-user";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4  items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
      
      <Link href={'/user-management'}><Button className="p-10 text-xl font-bold">Go to user-management page🫵</Button></Link>
      
    </div>
  );
}
