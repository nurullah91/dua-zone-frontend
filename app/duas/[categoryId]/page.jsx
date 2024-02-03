import React from 'react';

async function getDuas(categoryId){
    const res = await fetch(`http://localhost:5000/api/dua/${categoryId}`, {
        next: {
            revalidate: 60
        }
    })
    return res.json()
}


const page = async ({params}) => {

    const categoryId = params.categoryId;
    const duas =await getDuas(categoryId);
    console.log(duas);

    return (
        <div>
            
        </div>
    );
};

export default page;