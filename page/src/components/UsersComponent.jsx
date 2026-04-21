import { getSession, signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const UsersComponent = () => {

    const [users ,setUsers] = useState([])
    const [isLoading,setIsloading] = useState(true)
    async function securePage() {
        const session = await getSession();
        if(!session){
            signIn();
        }else{
         setIsloading(false)
        }
        
    }
    async function fetchUsers() {
        const res = await fetch("http://localhost:3000/api/products")
        const data = await res.json()
        // setUsers(data.users)
        
        console.log(data);
        setIsloading(false)
    }
    useEffect(()=>{
        securePage()
        if(isLoading){

            fetchUsers()
        }
    },[users])
    return (
        <div>
            <h1>Users</h1>
        </div>
    );
};

export default UsersComponent;