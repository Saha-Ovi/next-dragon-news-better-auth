import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = async () => {
    const res = await fetch('http://localhost:3000/breaking.json');
    const data = await res.json();
    const news =data.news;
    // console.log(news);

    return (
        <div className='container mx-auto my-8'>
           <div className=' flex items-center border border-gray-200 py-4 px-2 rounded-2xl'>
            <button className='btn bg-[#D72050] text-white'>Latest</button>
             <Marquee pauseOnHover speed={50}>
                {
                    news.map(n=>
                        <span className='mx-10 font-medium text-red-500' key={n.id}>| {n.title} |</span>
                    )
                }
            </Marquee>
           </div>
        </div>
    );
};

export default BreakingNews;