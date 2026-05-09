import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories,activeId }) => {
    return (
        <div>
            <h2 className='font-bold text-lg'>All Category</h2>
            <ul className='flex flex-col gap-3 my-2'>
                {
                    categories.map(category =>
                        <li key={category.category_id} className={`${activeId===category.category_id ? "bg-purple-500 text-white":" bg-slate-400 "} text-center text-md font-bold rounded-md p-2`} >
                           <Link href={`/category/${category.category_id}`}>
                           <h2> {category.category_name} </h2> 
                           </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;