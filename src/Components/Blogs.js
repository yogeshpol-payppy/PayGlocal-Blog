import Image from "next/image";
import React from "react";
import Tag from "./Tag";
import Link from "next/link";

function Blogs({ img, name, date, heading, preface, src, tag }) {
  return (
    <Link href={src || "/"}>
      <div className="flex h-full items-start bg-white border border-[#CCCCCC] rounded-[20px] md:rounded-[20px] flex-col lg:max-w-[23.183rem] relative cursor-pointer transition ease-in-out delay-20  hover:shadow-2xl duration-300 w-full dynamic-payment-card">
        <Image
          src={img}
          height={230}
          width={366}
          alt=""
          className="rounded-t-[20px] w-full h-[14.375rem]"
        />
        <div className="border rounded-full p-[0.4rem] absolute bg-white right-[0px] m-[20px] moving-img-bg">
          <Image
            src="/arrow-up-right.svg"
            width={30}
            height={30}
            alt=""
            className="cursor-pointer transition ease-in-out delay-50 moving-img-invert"
          />
        </div>
        <div className="p-[1.5rem] flex flex-col justify-between h-full">
          <div className="flex items-center gap-[0.75rem]">
            <p className="text-[#4071DF] text-[1rem] leading-[1.375rem]">
              {name?.includes(",")
                ? name.split(",")?.map((n) => (
                    <span key={n}>
                      {n}
                      <br />
                    </span>
                  ))
                : name}{" "}
            </p>
            <div className="border border-l h-[1.25rem]"></div>
            <p className="text-[1rem] leading-[1.375rem] font-[500]">{date} </p>
          </div>    
          <div>
            <p className="text-[1.5rem] leading-[2rem] mb-[0.5rem]">
              {heading}
            </p>
            <p className="text-[1rem] leading-[1.375rem]">{preface}</p>
          </div>
          <div className="w-56">
            <Tag name={tag} width={60} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Blogs;
