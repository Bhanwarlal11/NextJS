import { fetchAuthUserAction } from "@/actions";
import { redirect } from "next/navigation";
import Logout from "@/components/log-out";

export default async function Home() {
  const currentUser = await fetchAuthUserAction();

  if(!currentUser?.success) redirect("/sign-in")

  return (
    <div className="flex flex-col items-center justify-center mt-2 gap-7">
      <h1>next-js-auth-2024</h1>
      <div className="border bottom-3 border-gray-600 rounded-lg bg-gray-300 font-bold p-5 grid grid-cols-2 gap-5 place-items-center">
      <h1 className="text-2xl">Authenticated User Details</h1>
        <div>
          <h2>Username: {currentUser?.data?.userName}</h2>
          <h2>User Email: {currentUser?.data?.email}</h2>
        </div>
      </div>
      <Logout/>

      
    </div>
  );
}
