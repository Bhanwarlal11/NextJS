"use client";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ClientDataFetch() {
  const { data, error, isLoading } = useSWR(
    "http://dummyjson.com/users",
    fetcher
  );

console.log(data)


  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }
  
  return (
    <div>
      <h1>client side data fetching</h1>
      <ul>
        {data && data?.users && data?.users.length > 0
          ? data?.users.map((user) => <li>{user.firstName}</li>)
          : null}
      </ul>
    </div>
  );
}
