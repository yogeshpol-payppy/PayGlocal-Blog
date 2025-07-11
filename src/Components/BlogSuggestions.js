import Blogs from "./Blogs";
import Link from "next/link";
// import { blogs } from "../constants/blogs";
import { blogs } from "@/app/blog/blogs";

function BlogSuggestions({ names }) {
  return (
    <div className="next-blog pt-[5rem]">
      <div className="section-tags author-data-title">Read this next</div>
      {names?.map((name) => {
        return (
          <div key={name} className="blog-recommendations text-left mb-[2rem]">
            <Blogs
              img={blogs[name].img}
              name={blogs[name].name}
              date={blogs[name].date}
              heading={blogs[name].heading}
              preface={blogs[name].preface}
              src={blogs[name].src}
              tag={blogs[name].tag}
            />
          </div>
        );
      })}
      <div className="all-blogs-link small-card-body">
        <Link href="/blog" className="more-blogs-link flex hover:underline">
        <span>View all blogs</span>
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            fill="#4071df"
            width="6px"
            className="ml-[5px]"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default BlogSuggestions;
