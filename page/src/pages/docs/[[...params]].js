import { useRouter } from 'next/router';
import React from 'react';

const Docs = () => {
    const router = useRouter();
    let {params = []} = router.query;
    if(params.length === 2){
        return <>
        <h1>the first : {params[0]}</h1>
        <h1>the second : {params[1]}</h1>
        </>
    }else if(params.length === 1){
      return  <h1>the first : {params[0]}</h1>
        
    }
    return (
        <div>
            <h1>Docs Page</h1>
        </div>
    );
};

export default Docs;