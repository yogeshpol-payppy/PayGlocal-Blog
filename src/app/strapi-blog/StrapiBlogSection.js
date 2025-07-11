'use client';
import { Manrope } from 'next/font/google';
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

//images
import BreadCrumb from '@/Images/strapi-blog/breadcrumb-item.png';
import BlogShare from '@/Images/strapi-blog/blog-share.png';
import PayglocalBlogLogo from '@/Images/strapi-blog/blog- thumbnail.png';


import Image from 'next/image';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

const manrope = Manrope({
    display: 'swap',
    subsets: ['latin']
})

const StrapiBlogSection = () => {

    const [data, setData] = useState({});

    //to fetch data from api
    const fetchBlog = async () => {
        try {
            const apiResponse = await fetch('https://strapi.payglocal.in/api/blogs/g6j7ik5lh56ah0t615fg73ja?populate=*');
            const json = await apiResponse.json();

            setData({ ...json.data });

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchBlog();
    }, []);

    //function to get the date in readable format
    const getFormattedDate = useCallback(() => {
        const date = new Date(data?.publishedAt);

        const readableDate = date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })

        return readableDate;
    }, [data]);

    //get strapi images
    const strapibaseUrl = 'https://strapi.payglocal.in';
    function getImgUrl(data) {
        console.log('img data :', data);

        const imgName = data?.formats?.large?.url || data?.formats?.medium?.url || data?.formats?.small?.url || data?.formats?.thumbnail.url;
        return (imgName ? (strapibaseUrl + imgName) : '');
    }

    return (
        <>
            {/* blue top border  */}
            <div className=" w-full  pt-24">
                <div className="border-t custom-border-grey200">
                    <div className="h-1 w-[240px] bg-[#4071DF] border border-blue-800"></div>
                </div>
            </div>

            {/* section  */}
            <section className={" flex items-center justify-center px-4 pb-20 sm:px-10 sm:pb-28 pt-6 w-full " + manrope.className}>
                <div className="max-w-[1138px] w-full ">

                    <div className="flex items-center gap-2 py-2">
                        <div className="common-body2-text custom-text-grey600">Home</div>
                        <Image src={BreadCrumb} width={20} height={20} alt='BreadCrumb' />
                        <div className="common-body2-text custom-text-grey600">Blog</div>
                        <Image src={BreadCrumb} width={20} height={20} alt='BreadCrumb' />
                        <div className="common-body2-text custom-text-grey600">{data?.title}</div>
                    </div>

                    <div className="flex flex-row gap-12 mt-5">
                        <div className='max-w-[300px] w-full hidden lg:block'>
                            <div className="background-custom-blue2 flex flex-col gap-5 p-5  rounded-xl">
                                <h6 className="common-h6-heading matterfont font-bold">In this blog</h6>
                                <div className="common-body1-text">Lack of global payment options </div>
                                <div className="common-body1-text">Lack of global payment options </div>
                                <div className="common-body1-text">Lack of global payment options </div>
                                <div className="common-body1-text">Lack of global payment options </div>
                                <div className="common-body1-text">Lack of global payment options </div>
                            </div>
                        </div>

                        <div className='w-full'>

                            <div className="flex flex-col gap-10">

                                <div className="flex flex-col gap-6">

                                    <div className="flex justify-between items-center w-full ">
                                        <div className="flex items-center gap-4">
                                            <div className=".common-body1-text custom-text-grey500">{getFormattedDate()}  |  {data?.read_min} min read</div>
                                            <div className="rounded-full py-1 px-4 bg-[#F6F8FE]">
                                                <span className="common-body2-tex  custom-text-blue1">{data?.category}</span>
                                            </div>
                                        </div>

                                        <button>
                                            <Image src={BlogShare} width={40} height={40} alt='BlogShare' />
                                        </button>
                                    </div>

                                </div>

                                <h3 className="common-h3-heading custom-text-grey900 matterfont">{data?.title}</h3>

                                <div className="flex flex-row gap-5 items-center">
                                    <Image src={getImgUrl(data?.author_img)} width={48} height={48} alt='BlogShare' />
                                    <div className="common-body1-text">{data?.author}</div>
                                </div>

                                <div className="border border-[#D9D9D9]"></div>
                            </div>

                            <div className="flex flex-col gap-14 mt-10">
                                <div className="strapi-blog">
                                    <BlocksRenderer content={data?.content || []} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default StrapiBlogSection;

StrapiBlogSection.propTypes = {
    data: PropTypes.object
};