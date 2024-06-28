import Link from "next/link";
import { Suspense } from "react";
import Loading from "../loading";

async function fetchListOfUsers() {
  try {
    const apiResponse = await fetch("http://dummyjson.com/users");
    const result = await apiResponse.json();
    return result.users;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function ServerSideDataFetching() {
  const listOfUsers = await fetchListOfUsers();

  return (
    <div>
      <h1 className="text-5xl text-center">ServerSideDataFetching : user list page</h1>
      <ul className="grid grid-cols-4 gap-8 mt-10 ">
        {listOfUsers && listOfUsers.length > 0 ? (
          listOfUsers.map((user) => (
            <div className="border-solid border-2 border-gray-500 p-3   border rounded-md shadow-sm shadow-gray-500 hover:shadow-xl hover:shadow-gray-500">
              <p className="text-lg font-extrabold">
                👤{user.firstName} {user.lastName}
              </p>
              <p className="text-xs italic mt-1">☎️{user.phone}</p>
              <Suspense fallback={<Loading/>}>
                <Link href={`/server-data-fetch/${user.id}`}>
                  <button>more Details...</button>
                </Link>
              </Suspense>
            </div>
          ))
        ) : (
          <div>data not fetched</div>
        )}
      </ul>
    </div>
  );
}
