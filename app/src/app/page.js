// import Image from "next/image";
// import styles from "./page.module.css";

export default async function Home() {
  let res = await fetch("https://dummyjson.com/users",{
    cache:"force-cache", //SSG
    next:{
      revalidate:60 // ISR
    }
  })
  let data = await res.json()
  console.log(data.users);
  return (
    <div >
   <main>
    <h1>Home Page</h1>
   </main>
    </div>
  );
}
