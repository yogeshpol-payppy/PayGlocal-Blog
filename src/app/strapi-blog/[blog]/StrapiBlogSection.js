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
import BlueActiveArrow from '@/Images/strapi-blog/blue-active-arrow.png';


import Image from 'next/image';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { RWebShare } from 'react-web-share';
import Blogs from '@/Components/Blogs';
import StrapiBlog from '@/Components/StrapiBlog';
import Head from 'next/head';

const manrope = Manrope({
    display: 'swap',
    subsets: ['latin']
})

const StrapiBlogSection = ({ id }) => {

    const [data, setData] = useState({});
    const [readMoreData, setReadMoreData] = useState([]);
    const [activeHeading, setActiveHeading] = useState('');
    const url = window?.location?.origin + window?.location?.pathname;

    //to fetch blog data from api
    const fetchBlog = useCallback(async () => {
        try {
            // const apiResponse = await fetch(`https://strapi.payglocal.in/api/blogs/${id}?populate=*`);
            const apiResponse = await fetch(`https://strapi.payglocal.in/api/blogs/${id}?populate[cover_img]=true&populate[author_img]=true&populate[SEO][populate]=metaImage&populate[blogs]=true`);
            
            const json = await apiResponse.json();

            setData({ ...json.data });

        } catch (error) {
            console.error(error);
        }
    }, [id]);

    //to fetch read more blogs data 
    const fetchReadMoreBlogs = useCallback(async () => {
        try {
            const apiResponse = await fetch(`https://strapi.payglocal.in/api/blogs?filters[publishedAt][$notNull]=true&sort=publishedAt:desc&pagination[page]=1&pagination[pageSize]=3&populate=*`);
            const json = await apiResponse.json();

            //this will filter out the current blog from the read more blogs
            const filteredBlogs = json?.data?.filter(blog => blog?.documentId !== id);

            setReadMoreData([...filteredBlogs]);

        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        if (!id) { return; }

        fetchBlog();
    }, [id]);

    useEffect(() => {
        fetchReadMoreBlogs();
    }, []);

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


    //function to get the date in readable format
    const getFormattedDate = useCallback((dateValue) => {
        const date = new Date(dateValue);

        const readableDate = date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })

        return readableDate;
    }, []);

    //get strapi images high quality url first
    const strapibaseUrl = 'https://strapi.payglocal.in';
    function getImgUrl(data) {
        console.log('img data :', data);

        const imgName = data?.formats?.large?.url || data?.formats?.medium?.url || data?.formats?.small?.url || data?.formats?.thumbnail.url;
        return (imgName ? (strapibaseUrl + imgName) : '');
    }

    useEffect(() => {
        const handleScroll = () => {
            const headings = Array.from(document.querySelectorAll('[id]')).filter(el =>
                /^h[1-6]$/.test(el.tagName.toLowerCase())
            );

            let current = '';
            const scrollPosition = window.scrollY + 250; // offset to trigger earlier

            headings.forEach((heading) => {
                if (heading.offsetTop <= scrollPosition) {
                    current = heading.id;
                }
            });

            setActiveHeading(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            {/* meta data  */}
            <Head>
                <title>{data?.SEO?.metaTitle || data?.title}</title>
                <meta name="description" content={data?.SEO?.metaDescription || ''} />
                <meta name="keywords" content={data?.SEO?.keywords || ''} />
                {data?.SEO?.canonicalURL && <link rel="canonical" href={data?.SEO?.canonicalURL} />}

                {/* Open Graph / Facebook */}
                <meta property="og:title" content={data?.SEO?.metaTitle || ''} />
                <meta property="og:description" content={data?.SEO?.metaDescription || ''} />
                {data?.SEO?.metaImage && <meta property="og:image" content={getImgUrl(data?.SEO?.metaImage)} />}
                {data?.SEO?.metaImage && <meta name="twitter:image" content={getImgUrl(data?.SEO?.metaImage)} />}

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={data?.SEO?.metaTitle || ''} />
                <meta name="twitter:description" content={data?.SEO?.metaDescription || ''} />

                {/* Optional Meta */}
                {data?.SEO?.metaViewport && <meta name="viewport" content={data?.SEO?.metaViewport} />}
                {data?.SEO?.metaRobots && <meta name="robots" content={data?.SEO?.metaRobots} />}
            </Head>


         {/* page section  */}

            {/* blue top border  */}
            <div className=" w-full fixed top-[76px]">
                <div className="border-t custom-border-grey200 ">
                    <div className="h-1 bg-[#4071DF] " id="scroll-progress-bar"></div>
                </div>
            </div>
            <div className=" w-full pt-14 lg:pt-24 "></div>
            {/* section  */}
            <section className={" flex items-center justify-center px-4 pb-20 sm:px-10 pt-6 w-full " + manrope.className}>
                <div className="max-w-[1138px] w-full ">

                    <div className="flex items-center gap-2 py-5 lg:py-2">
                        <div className="common-body2-text custom-text-grey600">Home</div>
                        <Image src={BreadCrumb} width={20} height={20} alt='BreadCrumb' />
                        <div className="common-body2-text custom-text-grey600">Blog</div>
                        <Image src={BreadCrumb} width={20} height={20} alt='BreadCrumb' />
                        <div className="common-body2-text custom-text-grey600 overflow-hidden whitespace-nowrap text-ellipsis">{data?.title}</div>
                    </div>

                    <div className="flex flex-row gap-12 mt-5  ">

                        {/* sticky sidebar content  */}
                        <div className='max-w-[300px] w-full hidden lg:block '>
                            <div className="background-custom-blue2 flex flex-col gap-5 p-5  rounded-xl sticky top-24">
                                <h6 className="common-h6-heading matterfont font-bold">In this blog</h6>
                                {getHeadingsFromMarkdown(data?.content || '')?.map(({ text, slug }, index) => (
                                    <div key={index} className=" flex flex-row gap-1.5">
                                        <div className='flex-shrink-0'>
                                            <Image src={BlueActiveArrow} quality={100} width={16} height={16} alt='BlueActiveArrow' className={`pt-1 transition-opacity duration-300 ${activeHeading === slug ? 'opacity-100' : 'opacity-0'}`} />
                                        </div>
                                        <div>
                                            <a href={`#${slug}`} className={`common-body1-text active:text-blue-600 hover:text-blue-600 ${activeHeading === slug ? 'text-blue-600' : ''}`}>
                                                {text}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* blog content  */}
                        <div className='w-full'>

                            <div className="flex flex-col gap-4 lg:gap-10">

                                <div className="flex flex-col gap-4 lg:gap-6">

                                    <div className="flex justify-between items-center w-full gap-2">
                                        <div className="flex items-center gap-4 flex-wrap">
                                            <div className=".common-body1-text custom-text-grey500 flex items-center flex-wrap gap-x-2">
                                                <div>{getFormattedDate(data?.publish_date ?? data?.publishedAt)}  &nbsp;| </div>
                                                <div>{data?.read_min} min read</div>
                                            </div>
                                            <div className="rounded-full py-1 px-4 bg-[#F6F8FE]">
                                                <span className="common-body2-tex  custom-text-blue1">{data?.category}</span>
                                            </div>
                                        </div>

                                        {/* <button>
                                            <Image src={BlogShare} width={40} height={40} alt='BlogShare' quality={100} />
                                        </button> */}

                                        {/* share button */}
                                        <RWebShare
                                            data={{ title: "Hey, I found this blog from PayGlocal! I love reading their insightful blogs. Check this out: ", url: url + '/' + id, }} >
                                            <Image src={BlogShare} width={40} height={40} alt='BlogShare' quality={100} />
                                        </RWebShare>
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
                                        remarkPlugins={[remarkGfm]}
                                        rehypePlugins={[rehypeRaw]}
                                        // className="prose max-w-none"
                                        components={{
                                            h1: ({ node, children }) => {
                                                const text = children?.toString() || '';
                                                const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\s-]/g, '');
                                                return <h1 id={slug} className="font-bold mt-14 lg:mt-20 mb-5 text-3xl scroll-mt-28 font-matter">{children}</h1>;
                                            },
                                            h2: ({ node, children }) => {
                                                const text = children?.toString() || '';
                                                const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\s-]/g, '');
                                                return <h2 id={slug} className="font-bold mt-14 lg:mt-20 mb-5 text-2xl scroll-mt-28 font-matter">{children}</h2>;
                                            },
                                            h3: ({ node, children }) => {
                                                const text = children?.toString() || '';
                                                const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\s-]/g, '');
                                                return <h3 id={slug} className="font-bold mt-14 lg:mt-20 mb-5 text-xl scroll-mt-28 font-matter">{children}</h3>;
                                            },
                                            h4: ({ node, children }) => {
                                                const text = children?.toString() || '';
                                                const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\s-]/g, '');
                                                return <h4 id={slug} className="font-bold mt-14 lg:mt-20 mb-5 text-xl scroll-mt-28 font-matter">{children}</h4>;
                                            },
                                            h5: ({ node, children }) => {
                                                const text = children?.toString() || '';
                                                const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\s-]/g, '');
                                                return <h5 id={slug} className="font-bold mt-14 lg:mt-20 mb-5 text-xl scroll-mt-28 font-matter">{children}</h5>;
                                            },
                                            h6: ({ node, children }) => {
                                                const text = children?.toString() || '';
                                                const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\s-]/g, '');
                                                return <h6 id={slug} className="font-bold mt-14 lg:mt-20 mb-5 text-xl scroll-mt-28 font-matter">{children}</h6>;
                                            },
                                            table: ({ node, ...props }) => (
                                                <div className="overflow-x-auto mb-10">
                                                    <table className="" {...props} />
                                                </div>
                                            ),
                                        }}
                                    >
                                        {data?.content}
                                    </ReactMarkdown>
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

                            <div className="border border-[#D9D9D9] my-10"></div>

                            <div className="flex flex-col gap-8">
                                <h6 className='common-h6-heading font-matter custom-text-grey900'>Read this next</h6>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-start">
                                    {readMoreData?.slice(0,2)?.map((blog) => {
                                        return <StrapiBlog key={blog?.documentId}
                                            catagory={blog?.category}
                                            link={'/strapi-blog/' + blog?.documentId}
                                            imgSrc={getImgUrl(blog?.cover_img)}
                                            date={getFormattedDate(blog?.publish_date ?? blog?.publishedAt)}
                                            name={data?.author}
                                            heading={blog?.title}
                                        />
                                    })}
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
    id: PropTypes.object
};