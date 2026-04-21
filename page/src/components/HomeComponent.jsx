import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const HomeComponent = () => {
    const {data:session} = useSession();
    if(!session){
        return(
            <>
            <h1>Home</h1>
            <Link href="/api/auth/signin" onClick={signIn} className='btn btn-dark'>Sign In using Github</Link>
            </>
        )
    }
    return (
        <div>
            <h1>Hello , NextJS Course</h1>
        </div>
    );
};

export default HomeComponent;