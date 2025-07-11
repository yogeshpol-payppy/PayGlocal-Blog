'use client';
import Image from "next/image";
import React, { useRef, useState } from "react";

import { JetBrains_Mono, Manrope } from "next/font/google";

//read our blogs section images
import Search from "@/Images/Blog/search.svg";
import { blogs } from "./blogs";
// import BlogCard from "../../Components/SmallComponents/BlogCard";
import Link from "next/link";
import HomepageReadOurBlogCompo from "@/Components/HomepageReadOurBlogCompo";


import LeftArrow from '@/Images/Homepage/left-arrow.svg';

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});
export const BlogSection = () => {

  const [filter, setFilter] = useState("All"); // Default filter is 'All'
  const [search, setSearch] = useState(""); // For search input
  const [currentPage, setCurrentPage] = useState(0);

  const blogsPerPage = 6; // Number of blogs per page

  let searchBarReference=useRef();

  let filterButtons=["All", "Tech", "Business", "Discussion", "Payments","Multi Currency Accounts"];
  const featuredBlog = Object.values(blogs)[0];

  const filteredBlogs = Object.values(blogs).filter((blog) => {
    const matchesFilter = filter === "All" || blog.tag === filter;
    const matchesSearch =
      search.trim() === "" ||
      blog.name.toLowerCase().includes(search.toLowerCase()) || // Search by name
      blog.heading.toLowerCase().includes(search.toLowerCase()) || // Search by heading
      blog.preface.toLowerCase().includes(search.toLowerCase()); // Search by preface

    return matchesFilter && matchesSearch;
  });

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      searchBarReference.current.scrollIntoView({behavior:'smooth'});
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      searchBarReference.current.scrollIntoView({behavior:'smooth'});
    }
  };

  // Calculate the blogs to display based on the current page
  const displayedBlogs = filteredBlogs.slice(
    currentPage * blogsPerPage,
    currentPage * blogsPerPage + blogsPerPage
  );

  return (
    <>
      <Link href={featuredBlog.src} className="cursor-pointer">
        <section className="px-4 py-10 sm:px-10 sm:py-14 flex justify-center items-center">
          <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-5 sm:gap-10 items-center">
            <Image
              src={featuredBlog.img}
              width={554}
              height={377}
              alt="img"
              quality={100}
              className="rounded-xl"
            />
            <div className="flex flex-col gap-5 sm:gap-6 max-w-xl w-full">
              <div className="flex flex-col gap-3">
                <div className={"common-body2-text custom-text-grey600 " + manrope.className}>
                  {featuredBlog.name} | {featuredBlog.date} |{" "}
                  {featuredBlog.readMins} min read
                </div>
                <h4 className="common-h4-heading">{featuredBlog.heading}</h4>
                <p className={ "common-body2-text custom-text-grey800 " + manrope.className}>{featuredBlog.preface}</p>
                <div className="">
                  <button className={ "py-1 px-4 rounded-full background-custom-grey50 custom-text-blue1 " +manrope.className}>
                    {featuredBlog.tag}
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
          <div className={ "common-all-caps custom-text-grey400 " + jetBrains_Mono.className }>
            Read our BLOGS
          </div>
            <h3 className="common-h3-heading">Our Blog Collection</h3>
          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-6">
            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4 lg:gap-8 w-full">
              <div className="flex flex-wrap items-center justify-center">
              {filterButtons.map((category) => (
                <button key={category} onClick={() => setFilter(category)}  className={`py-1 px-4 m-1 common-body1-text   rounded-full ${filter === category? "bg-blue-600 text-white": "custom-text-grey600"}`}>
                  {category}
                </button>
              ))}
              </div>

              <div className="flex items-center gap-2 border p-3 rounded-xl" ref={searchBarReference}>
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
                  onChange={(e)=>{setSearch(e.target.value)}}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedBlogs.map((blog, index) => {
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
                <HomepageReadOurBlogCompo key={index} img={blog.img} publishedDay={'Published '+blog.date} publishedByWhome={blog.name} title={blog.heading}  link={blog.src} para={blog.preface} catagory={blog.tag}/>
              );
            })}
          </div>
         {filteredBlogs.length > blogsPerPage &&  <div className="hidden sm:flex justify-center items-center gap-5 w-full pt-5">
            <button className="background-custom-white p-3 rounded-3xl  border home-left-arrow-btn custom-border-grey200 hover-custom-border-grey400"  onClick={handlePreviousPage} disabled={currentPage === 0}>
              <Image
                src={LeftArrow}
                width={20}
                height={20}
                quality={100}
                alt="arrow"
              />
            </button>
            {/* instead of importing right arrow image using left arrow image with rotate property reduces our assets load */}
            <button className="background-custom-white p-3 rounded-3xl  border home-left-arrow-btn custom-border-grey200 hover-custom-border-grey400"  onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
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

export default BlogSection;
