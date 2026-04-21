import { useRouter } from 'next/router';
import React from 'react';

const ErrorComponent = () => {
    const router = useRouter();
    const back =()=>{
        //? operations 
        router.replace("/")
    }
    return (
        <div>
            <h1 className='alert alert-danger'>OOPS, Something Wrong</h1>
            <button className='btn btn-dark w-100' onClick={back}>Back To Home</button>
        </div>
    );
};

export default ErrorComponent;