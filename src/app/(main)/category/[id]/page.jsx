import LeftSideBar from '@/components/Home/LeftSideBar';
import RightSideBar from '@/components/Home/RightSideBar';
import NewsCard from '@/components/shared/NewsCard';
import NotFound from '@/components/shared/NotFound';
import { getCategory, getNewsByCategory } from '@/lib/data';
import React from 'react';



const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);
    const categories = await getCategory();
    // console.log(categories);
    const categoryNews = await getNewsByCategory(id);
    // console.log(categoryNews);
    return (

        <div className="container mx-auto my-8">
            <div className="grid grid-cols-12 gap-8">
                {/* mother */}
                <div className="col-span-3">
                    <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
                </div>
                <div className="col-span-6 space-y-6">
                    <h2 className='font-bold text-lg'>News By Categories</h2>
                    {
                        categoryNews.length > 0 ? (
                            categoryNews.map((news) => (
                                <NewsCard key={news._id} news={news} />
                            ))
                        ) : (
                            <NotFound />
                        )
                    }
                </div>
                <div className="col-span-3">
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>

    );
};

export default NewsCategoryPage;