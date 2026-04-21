import { useRouter } from 'next/router';
import React from 'react';

const ID = () => {
    const router = useRouter()
    const {ID} = router.query;

    return (
        <div>
            <h1>Dynamic Product</h1>
            <h2>the id is : {ID}</h2>
        </div>
    );
};

export default ID;