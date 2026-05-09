import { getNewsDetailsById } from '@/lib/data';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

export const generateMetadata = async ({ params }) => {
    const {id} = await params;
    // console.log(paramRes);
    const news = await getNewsDetailsById(id);
    return{
        title: news.title,
        description: news.details
    }
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id);
    // console.log(news);
    return (
        <div className='max-w-4xl mx-auto my-8'>
            <div className="card bg-base-100 shadow-sm">

                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        {/* left */}
                        <div className='flex items-center gap-2'>
                            <Image className='rounded-full' src={news.author?.img} width={40} height={40} alt={news.author?.name}></Image>
                            <div>
                                <p>{news.author?.name}</p>
                                <p>{news.author?.published_date}</p>
                            </div>
                        </div>
                        {/* right */}
                        <div className='flex items-center gap-2 text-2xl'>
                            <CiBookmark />
                            <CiShare2 />
                        </div>
                    </div>
                    <h2 className="card-title">{news.title}</h2>
                    <Image src={news.image_url} height={300} width={300} alt={news.title} className='w-full'></Image>
                    <div>
                        <p className=''>{news.details}</p>
                    </div>
                    <div className="card-actions justify-between items-center">
                        <div className='flex justify-between items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <IoIosStar className='text-yellow-500' />
                                <p>{news.rating?.number}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaEye />
                                <p>{news.total_view} K</p>
                            </div>
                        </div>
                        <Link href={`/category/${news.category_id}`}>
                            <button className="btn btn-error text-white">Read More News From This Category <BsArrowRight /> </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;