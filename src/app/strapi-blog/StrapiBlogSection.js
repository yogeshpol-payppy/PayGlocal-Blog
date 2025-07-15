'use client';
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { JetBrains_Mono, Manrope } from "next/font/google";

//read our blogs section images
import Search from "@/Images/Blog/search.svg";
import { blogs } from "../blog/blogs";
// import BlogCard from "../../Components/SmallComponents/BlogCard";
import Link from "next/link";
import HomepageReadOurBlogCompo from "@/Components/HomepageReadOurBlogCompo";


import LeftArrow from '@/Images/Homepage/left-arrow.svg';
import { getFormattedDate, getImgUrl } from "@/lib/utils";
import { resolve } from "styled-jsx/css";
import { debounce } from "lodash";

const jetBrains_Mono = JetBrains_Mono({
    subsets: ["latin"],
    display: "swap",
});
const manrope = Manrope({
    subsets: ["latin"],
    display: "swap",
});
export const StrapiBlogSection = () => {

    // const [filter, setFilter] = useState("Payments"); // Default filter is 'All'
    const [search, setSearch] = useState(""); // For search input
    // const [currentPage, setCurrentPage] = useState(1);
    const [prevPage, setPrevPage] = useState(0);
    const [nextPage, setNextPage] = useState(1);
    // const [hasMore.current, sethasMore.current] = useState(true);
    const [featuredBlog, setFeaturedBlog] = useState({});
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [isCatagoryBlogFetching, setIsCatagoryBlogFetching] = useState(false);
    const filter = useRef(''); // To hold the current filter value
    const currentPage = useRef(1);
    const hasMore = useRef(true);
    const blogsPerPage = 6; // Number of blogs per page

    let searchBarRef = useRef();

    let filterButtons = ["", "Tech", "Business", "Discussion", "Payments", "Multi Currency Accounts"];
    // const featuredBlog = Object.values(blogs)[0];

    // const filteredBlogs = Object.values(blogs).filter((blog) => {
    //     const matchesFilter = filter === "All" || blog.tag === filter;
    //     const matchesSearch =
    //         search.trim() === "" ||
    //         blog.name.toLowerCase().includes(search.toLowerCase()) || // Search by name
    //         blog.heading.toLowerCase().includes(search.toLowerCase()) || // Search by heading
    //         blog.preface.toLowerCase().includes(search.toLowerCase()); // Search by preface

    //     return matchesFilter && matchesSearch;
    // });

    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    const handleNextPage = () => {
        // if (currentPage < totalPages - 1) {
        //     setCurrentPage(currentPage + 1);
        //     
        // }
        if (isCatagoryBlogFetching) { return; }

        // Wait until blogs are updated/rendered
        setTimeout(() => {
            searchBarRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 200); // or try 150–200ms if needed

        setPrevPage(prev => prev + 1);
        setNextPage(prev => prev + 1);
        if (hasMore.current && search?.length === 0) {
            getCatagoriesBlogs(); //fetch new blogs
        }

    };

    const handlePreviousPage = () => {
        if (isCatagoryBlogFetching) { return; }

        // Wait until blogs are updated/rendered
        setTimeout(() => {
            searchBarRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 200); // or try 150–200ms if needed
        setPrevPage(prev => prev - 1);
        setNextPage(prev => prev - 1);
    };

    // Calculate the blogs to display based on the current page
    const displayedBlogs = filteredBlogs.slice(
        currentPage * blogsPerPage,
        currentPage * blogsPerPage + blogsPerPage
    );

    //fetch featured blog
    useEffect(() => {
        const getFeaturedBlog = async () => {
            try {
                const response = await fetch('https://strapi.payglocal.in/api/blogs?populate=*&sort=publishedAt:desc&pagination[limit]=1');
                const json = await response.json();

                setFeaturedBlog(json?.data[0] || {});
            } catch (error) {
                console.error(error);
            }
        }

        getFeaturedBlog();
    }, []);

    useEffect(() => {
        getCatagoriesBlogs();
    }, []);

    //to handle search input with dbouncing
    const handleSearch = useCallback(debounce(async (value) => {
        try {
            const query = `https://strapi.payglocal.in/api/blogs?populate=*&filters[title][$containsi]=${value}`;
            const response = await fetch(query);
            const json = await response.json();

            setFilteredBlogs([...json.data]);

        } catch (error) {
            console.error(error);
        }
    }, 800), []);

    const handleSearchInput = (e) => {
        setSearch(e.target.value);
        setPrevPage(0);
        setNextPage(1);
        if (e.target.value.length === 0) {
            setFilteredBlogs([...blogs]);
        }
        else {
            handleSearch(e.target.value);
        }
    }

    const strapiEndpoint = 'https://strapi.payglocal.in/';

    const getCatagoriesBlogs = async () => {
        try {
            console.log('function intiated');
            console.log('isCatagoryBlogFetching ', isCatagoryBlogFetching);
            console.log('hasMore.current ', hasMore.current);
            console.log('search?.length>0 ', search?.length > 0);


            if (isCatagoryBlogFetching || !hasMore.current || search?.length > 0) { return; }

            setIsCatagoryBlogFetching(true);

            const query = filter.current === '' ? `${strapiEndpoint}api/blogs?populate=*&sort=publishedAt:desc&pagination[page]=${currentPage?.current}&pagination[pageSize]=6`
                : `${strapiEndpoint}api/blogs?populate=*&sort=publishedAt:desc&filters[category][$eq]=${filter?.current}&pagination[page]=${currentPage?.current}&pagination[pageSize]=6`

            console.log('query is :', query);

            const response = await fetch(query);
            const json = await response.json();

            const blogsData = json?.data || [];

            if (blogsData?.length > 0) {
                setBlogs(prev => {
                    //to avoid duplicate blogs and the featured blog (shown on the top of the page)
                    const existingIds = new Set(prev?.map(blog => blog?.documentId));
                    const newUnique = blogsData?.filter(blog => !existingIds.has(blog?.documentId || featuredBlog?.documentId));
                    const mergedBlogs = [...prev, ...newUnique];

                    console.log('filtered merged data :', mergedBlogs);

                    // Set to filteredBlogs too
                    setFilteredBlogs(mergedBlogs);

                    return mergedBlogs;
                });
                currentPage.current = json?.meta?.pagination?.page + 1; // update the current page value
                // setCurrentPage(page ? page + 1 : currentPage + 1);
            }
            else {
                setBlogs([]);
                setFilteredBlogs([]);
            }
            hasMore.current = json?.meta?.pagination?.page < json?.meta?.pagination?.pageCount; //to check if the pagination reached till last page
            console.log('has more :', json?.meta?.pagination?.page < json?.meta?.pagination?.pageCount);

            setIsCatagoryBlogFetching(false);

        } catch (error) {
            console.error(error);
        }
    }

    //when user change the catagory
    const handleFilterChange = (value) => {

        // if (value === filter) { return; } // If the same category is clicked, do nothing

        setIsCatagoryBlogFetching(false);
        hasMore.current = true;
        // setCurrentPage(1);
        currentPage.current = 1;
        // setFilter(value);
        filter.current = value;
        setBlogs([]); // Reset blogs when filter changes
        setPrevPage(0);
        setNextPage(1);
        console.log('before filter changed');

        getCatagoriesBlogs(); // Fetch blogs for the selected category
    };

    return (
        <>
            {/* header  */}
            <header className='homepage-hero-linear-gradient px-4 sm:px-10 pb-14 pt-48 flex justify-center items-center'>
                <h2 className="common-h2-heading custom-text-white">PayGlocal Blogs</h2>
            </header>

            {/* featured blog section  */}
            <Link href={'/strapi-blog/' + featuredBlog?.documentId} className="cursor-pointer">
                <section className="px-4 py-10 sm:px-10 sm:py-14 flex justify-center items-center">
                    <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-5 sm:gap-10 items-center">
                        <Image
                            src={getImgUrl(featuredBlog?.cover_img)}
                            width={554}
                            height={377}
                            alt="img"
                            quality={100}
                            className="rounded-xl"
                        />
                        <div className="flex flex-col gap-5 sm:gap-6 max-w-xl w-full">
                            <div className="flex flex-col gap-3">
                                <div className={"common-body2-text custom-text-grey600 " + manrope.className}>
                                    {featuredBlog?.author} | {getFormattedDate(featuredBlog?.publish_date ?? featuredBlog?.publishedAt)} |{" "}
                                    {featuredBlog?.read_min} min read
                                </div>
                                <h4 className="common-h4-heading">{featuredBlog?.title}</h4>
                                <p className={"common-body2-text custom-text-grey800 " + manrope.className}>{featuredBlog.preface}</p>
                                <div className="">
                                    <button className={"py-1 px-4 rounded-full background-custom-grey50 custom-text-blue1 " + manrope.className}>
                                        {featuredBlog?.category}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Link>


            {/* read our blogs section  */}
            <section className="px-4 py-14 sm:px-10 lg:pt-24 pb-20 flex justify-center items-center">
                <div className="w-full flex flex-col gap-6 max-w-[1300px] ">
                    <div className={"common-all-caps custom-text-grey400 " + jetBrains_Mono.className}>
                        Read our BLOGS
                    </div>
                    <h3 className="common-h3-heading">Our Blog Collection</h3>
                    <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-6">
                        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4 lg:gap-8 w-full">
                            <div className="flex flex-wrap items-center justify-center">
                                {filterButtons.map((category) => (
                                    <button key={category} onClick={() => handleFilterChange(category)} className={`py-1 px-4 m-1 common-body1-text   rounded-full ${filter?.current === category ? "bg-blue-600 text-white" : "custom-text-grey600"}`}>
                                        {category === '' ? 'All' : category}
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 border p-3 rounded-xl" ref={searchBarRef}>
                                <Image
                                    src={Search}
                                    width={24}
                                    height={24}
                                    alt="img"
                                    quality={100}
                                    className=""
                                />
                                <input
                                    type="text"
                                    name="search"
                                    className="outline-none border-none p-1 custom-text-grey600"
                                    placeholder="Search"
                                    onChange={handleSearchInput}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredBlogs?.length > 0 && filteredBlogs?.slice(prevPage * 6, nextPage * 6).map((blog, index) => {
                            return (
                                // <BlogCard
                                //   key={key}
                                //   img={blog.img}
                                //   date={blog.date}
                                //   heading={blog.heading}
                                //   preface={blog.preface}
                                //   tag={blog.tag}
                                //   src={blog.src}
                                // />
                                <HomepageReadOurBlogCompo key={index} img={getImgUrl(blog?.cover_img)} publishedDay={'Published ' + getFormattedDate(blog?.publish_date ?? blog?.publishedAt)} publishedByWhome={blog?.author} title={blog?.title} link={'/strapi-blog/' + blog?.documentId} para={blog?.preface} catagory={blog?.category} />
                            );
                        })}
                    </div>
                    {filteredBlogs?.length > 0 && search?.length === 0 && <div className="flex justify-center items-center gap-5 w-full pt-5">
                        <button className="background-custom-white p-3 rounded-3xl  border home-left-arrow-btn custom-border-grey200 hover-custom-border-grey400" onClick={handlePreviousPage} disabled={prevPage === 0}>
                            <Image
                                src={LeftArrow}
                                width={20}
                                height={20}
                                quality={100}
                                alt="arrow"
                            />
                        </button>
                        {/* instead of importing right arrow image using left arrow image with rotate property reduces our assets load */}
                        <button className="background-custom-white p-3 rounded-3xl  border home-left-arrow-btn custom-border-grey200 hover-custom-border-grey400" onClick={handleNextPage} disabled={nextPage === currentPage.current - 1 && !hasMore.current}>
                            <Image
                                src={LeftArrow}
                                width={20}
                                height={20}
                                quality={100}
                                alt="arrow"
                                className="rotate-180"

                            />
                        </button>
                    </div>}

                </div>
            </section>
        </>
    );
};

export default StrapiBlogSection;
