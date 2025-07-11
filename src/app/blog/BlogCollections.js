import React, { useState } from "react";
import Tag from "../../src/common/Tag";
import Image from "next/image";
import Blogs from "../../src/components/Blogs";
import { blogs as blogDetails } from "../../src/constants/blogs";
const blogs = Object.values(blogDetails);

function BlogCollections() {
  const [page, setPage] = useState(0);
  const [tags, setTags] = useState([
    { name: "All", isSelector: true, width: 75 },
    { name: "Tech", isSelector: false, width: 101 },
    { name: "Business", isSelector: false, width: 143 },
    { name: "Engineering", isSelector: false, width: 179 },
  ]);

  const onBlogTypeClick = (i) => {
    setTags((prev) =>
      prev.map((p, index) =>
        index === i ? { ...p, isSelector: true } : { ...p, isSelector: false }
      )
    );
  };

  return (
    <div className="mt-[7.5rem] flex flex-col items-center max-w-[74rem] w-full px-[1.25rem] md:px-0">
      <h2 className="mb-[56px]">Our Blog Collection</h2>
      <div className="flex items-center justify-between w-full flex-wrap">
        <div className="flex items-center flex-wrap">
          {tags?.map((i, index) => (
            <div key={i.name}>
              <Tag
                name={i?.name}
                width={75}
                bgColor={i?.isSelector ? "black" : "#11ffee00"}
                color={i?.isSelector ? "white" : "black"}
                onClick={() => {
                  onBlogTypeClick(index);
                  setPage(0);
                }}
              />
            </div>
          ))}
        </div>
        <div className="relative mt-6 md:mt-0">
          <input
            type="text"
            className="search-input p-[12px]  border rounded-[2rem] bg-[#11ffee00] w-full text-[#757575]"
            placeholder="Search"
            style={{ paddingLeft: "12px" }}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 top-3">
            <Image src="/search-icon.svg" height={32} width={32} alt="" />
          </div>
        </div>
      </div>
      <div className="laptop">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[1.25rem] auto-cols-min mt-[2.375rem]">
          {blogs?.map(
            (i, index) =>
              index > page * 6 &&
              index < (page + 1) * 6 && (
                <div key={i?.src} className="w-full">
                  <Blogs {...i} />
                </div>
              )
          )}
        </div>
        <div className="flex items-center gap-x-[2.375rem] mt-[40px]">
          <button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page == 0}
            className="bg-black rotate-90 rounded-full p-[16px] cursor-pointer"
          >
            <Image src="/Chevron.svg" height={24} width={24} alt="" />
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={
              page + 1 ===
              (blogs?.length || 0) / 6 + (blogs?.length % 6 == 0 ? 0 : 1)
            }
            className="bg-black -rotate-90 rounded-full p-[16px] cursor-pointer"
          >
            <Image src="/Chevron.svg" height={24} width={24} alt="" />
          </button>
        </div>
      </div>
      <div className="mobile-view">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[1.25rem] auto-cols-min mt-[2.375rem]">
          {blogs?.map(
            (i, index) =>
              index === page + 1 && (
                <div key={i?.src} className="w-full">
                  <Blogs {...i} />
                </div>
              )
          )}
        </div>
        <div className="flex items-center gap-x-[2.375rem] mt-[40px]">
          <button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page == 0}
            className="bg-black rotate-90 rounded-full p-[16px] cursor-pointer"
          >
            <Image src="/Chevron.svg" height={24} width={24} alt="" />
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === blogs.length - 1}
            className="bg-black -rotate-90 rounded-full p-[16px] cursor-pointer"
          >
            <Image src="/Chevron.svg" height={24} width={24} alt="" />
          </button>
        </div>
      </div>
      {/* <SubscribeNow /> */}
    </div>
  );
}

export default BlogCollections;
