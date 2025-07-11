import Link from "next/link";
import Image from "next/image";

export const BlogCard = ({ img, date, name, heading, preface, tag, src }) => {
  return (
    <Link href={src}>
    <div className="read-our-blogs-div flex flex-col gap-5 sm:gap-7 cursor-pointer duration-300 hover:bg-[#F0F3F5] p-4 rounded-xl">
      <Image
        src={img}
        width={426}
        height={240}
        alt="img"
        quality={100}
        className="payclocal-home-blog-img rounded-xl"
      />
      <div className="flex flex-col gap-3 5">
        <div className={"font-bold custom-text-grey500 common-body2-text  "}>
          Published {date} | {name}
        </div>
        <h5 className="common-h5-heading  custom-text-black">{heading}</h5>
        <p className={" custom-text-grey800 common-body2-text  "}>{preface}</p>
        <div className="">
          <button
            className={
              "py-1 px-4 rounded-full background-custom-grey50 custom-text-blue1 "
            }
          >
            {tag}
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default BlogCard;
