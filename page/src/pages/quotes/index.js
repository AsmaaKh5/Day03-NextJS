import { getSession } from 'next-auth/react';
import React from 'react';

const index = ({quotes}) => {
    console.log(quotes);
    return (
        <div>
            
        </div>
    );
};

export default index;
export async function getServerSideProps(context){
    const session = await getSession(context)
    const res = await fetch("https://dummyjson.com/quotes")
    const data = await res.json()
    const quotes = session ? data.quotes : data.quotes.slice(0,3)
    return{
        props:{
            quotes,
            session
        }
    }
}