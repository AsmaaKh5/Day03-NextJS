import React from 'react';

const index = ({quote}) => {
    console.log(quote);
    return (
        <div>
            
        </div>
    );
};

export default index;
export async function getServerSideProps(context) {
const {params} = context;
const res = await fetch(`https://dummyjson.com/quotes/${params.ID}`)
const data = await res.json()
return{
    props:{
        quote:data,
       
    }
}
    
}