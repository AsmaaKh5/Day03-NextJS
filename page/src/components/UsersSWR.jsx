import React from "react";
import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return data.users;
};
const UsersSWR = () => {
    const {data,error} = useSWR('Users',fetcher)
    if(error) return "something is wrong";
    if(!data) return "Loading...."
  return <div>
    {data.map((d)=>{
        return(
            <h1 key={d.id}>{d.firstName}</h1>
        )
    })}
  </div>;
};

export default UsersSWR;
