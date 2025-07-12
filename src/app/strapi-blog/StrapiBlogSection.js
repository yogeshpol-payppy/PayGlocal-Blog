'use client';
import { Manrope } from 'next/font/google';
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

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
    const [activeHeading, setActiveHeading] = useState('');

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

    //to fill the progress bar as per the scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            const bar = document.getElementById('scroll-progress-bar');
            if (bar) {
                bar.style.width = `${scrollPercent}%`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    //to extract the headings from the markdown  content
    const getHeadingsFromMarkdown = (markdown) => {
        const headingRegex = /^(#{1,6})\s+(.*)$/gm;
        const matches = [...markdown.matchAll(headingRegex)];

        return matches.map((match) => {
            const level = match[1].length;
            const text = match[2].trim();
            const slug = text
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-');

            return { level, text, slug };
        });
    };

    return (
        <>
            {/* blue top border  */}
            <div className=" w-full fixed top-[76px]">
                <div className="border-t custom-border-grey200 hidden lg:block">
                    <div className="h-1 bg-[#4071DF] " id="scroll-progress-bar"></div>
                </div>
            </div>
            <div className=" w-full pt-14 lg:pt-24 "></div>
            {/* section  */}
            <section className={" flex items-center justify-center px-4 pb-20 sm:px-10 pt-6 w-full " + manrope.className}>
                <div className="max-w-[1138px] w-full ">

                    <div className="flex items-center gap-2 py-2">
                        <div className="common-body2-text custom-text-grey600">Home</div>
                        <Image src={BreadCrumb} width={20} height={20} alt='BreadCrumb' />
                        <div className="common-body2-text custom-text-grey600">Blog</div>
                        <Image src={BreadCrumb} width={20} height={20} alt='BreadCrumb' />
                        <div className="common-body2-text custom-text-grey600 overflow-hidden whitespace-nowrap text-ellipsis">{data?.title}</div>
                    </div>

                    <div className="flex flex-row gap-12 mt-5  ">
                        <div className='max-w-[300px] w-full hidden lg:block '>
                            <div className="background-custom-blue2 flex flex-col gap-5 p-5  rounded-xl sticky top-24">
                                <h6 className="common-h6-heading matterfont font-bold">In this blog</h6>
                                {getHeadingsFromMarkdown(data?.content || '')?.map(({ text, slug }, index) => (
                                    <div key={index} className="common-body1-text">
                                        <a href={`#${slug}`} className={`common-body1-text active:text-blue-600 hover:text-blue-600 ${activeHeading === slug ? 'text-blue-600' : ''}`}>
                                            {text}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='w-full'>

                            <div className="flex flex-col gap-4 lg:gap-10">

                                <div className="flex flex-col gap-4 lg:gap-6">

                                    <div className="flex justify-between items-center w-full gap-2">
                                        <div className="flex items-center gap-4 flex-wrap">
                                            <div className=".common-body1-text custom-text-grey500 flex items-center flex-wrap gap-x-2">
                                                <div>{getFormattedDate()}  &nbsp;| </div>
                                                <div>{data?.read_min} min read</div>
                                            </div>
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

                                <div className="flex flex-row gap-4 items-center">
                                    <div className="border custom-border-grey200 rounded-full w-12 h-12 overflow-hidden">
                                        <Image src={getImgUrl(data?.author_img)} width={48} height={48} alt='BlogShare' />
                                    </div>
                                    <div className="common-body1-text">{data?.author}</div>
                                </div>

                                <div className="border border-[#D9D9D9]"></div>
                            </div>

                            <div className="flex flex-col gap-14 mt-10">
                                <div className={"strapi-blog " + manrope.className}>

                                    <ReactMarkdown
                                        children={data?.content}
                                        remarkPlugins={[remarkGfm]}
                                        rehypePlugins={[rehypeRaw]}
                                        // className="prose max-w-none"
                                        components={{
                                            h1: ({ node, children }) => {
                                                const text = children?.toString() || '';
                                                const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\s-]/g, '');
                                                return <h1 id={slug} className="font-bold mt-14 lg:mt-20 mb-5 text-3xl scroll-mt-28">{children}</h1>;
                                            },
                                            h2: ({ node, children }) => {
                                                const text = children?.toString() || '';
                                                const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\s-]/g, '');
                                                return <h2 id={slug} className="font-bold mt-14 lg:mt-20 mb-5 text-2xl scroll-mt-28">{children}</h2>;
                                            },
                                            h3: ({ node, children }) => {
                                                const text = children?.toString() || '';
                                                const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\s-]/g, '');
                                                return <h3 id={slug} className="font-bold mt-14 lg:mt-20 mb-5 text-xl scroll-mt-28">{children}</h3>;
                                            },
                                            h4: ({ node, children }) => {
                                                const text = children?.toString() || '';
                                                const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\s-]/g, '');
                                                return <h4 id={slug} className="font-bold mt-14 lg:mt-20 mb-5 text-xl scroll-mt-28">{children}</h4>;
                                            },
                                            h5: ({ node, children }) => {
                                                const text = children?.toString() || '';
                                                const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\s-]/g, '');
                                                return <h5 id={slug} className="font-bold mt-14 lg:mt-20 mb-5 text-xl scroll-mt-28">{children}</h5>;
                                            },
                                            h6: ({ node, children }) => {
                                                const text = children?.toString() || '';
                                                const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\s-]/g, '');
                                                return <h6 id={slug} className="font-bold mt-14 lg:mt-20 mb-5 text-xl scroll-mt-28">{children}</h6>;
                                            },
                                            table: ({ node, ...props }) => (
                                                <div className="overflow-x-auto ">
                                                    <table className="" {...props} />
                                                </div>
                                            ),
                                        }}
                                    />
                                    {/* <BlocksRenderer content={data?.content || []}
                                        blocks={{
                                            heading: ({ level, children }) => {
                                                const text = children?.[0]?.props?.text || '';
                                                const slug = text.toLowerCase().replace(/\s+/g, '-');
                                                const Tag = `h${level}`;

                                                return (
                                                    <Tag id={slug} className="font-bold scroll-mt-28"> {children} </Tag>
                                                );
                                            },

                                        }}
                                    /> */}
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