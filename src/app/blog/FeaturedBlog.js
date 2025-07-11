import Image from "next/image";
import React from "react";
import Tag from "../../src/common/Tag";
import Link from "next/link";

function FeaturedBlog() {
  return (
    <div className="flex flex-col items-center px-[1.25rem] md:px-0 ">
      <h2>Featured Article</h2>
      <Link
        href="/blog/click-click-goose"
        className="flex flex-col items-center px-0 "
      >
        <div className="flex items-start bg-white rounded-[20px] md:rounded-[40px] flex-col lg:flex-row max-w-[73.875rem] mt-[2.375rem] border border-[#EAEAEA] transition ease-in-out delay-20  hover:shadow-2xl duration-300">
          <div className="w-full h-[25rem] md:w-[36.9375rem] relative">
            <Image
              src="/blog/click-click-goose/header.png"
              alt=""
              className="md:rounded-l-[40px] rounded-t-[20px]"
              loading="lazy"
              fill={true}
            />
          </div>

          <div className="p-[1.5rem] max-w-[36.938rem] dynamic-payment-card">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#4071DF] text-[1rem] leading-[1.375rem]">
                  Sanjana Palisetti , Shyam Santhosh
                </p>
                <div className="flex gap-[0.75rem] items-center">
                  <p className="text-[1rem] leading-[1.375rem] font-[500]">
                    6 Jan 2023{" "}
                  </p>
                  <div className="border border-l h-[1.25rem]"></div>
                  <p className="text-[1rem] leading-[1.375rem] font-[500]">
                    5 min read
                  </p>
                </div>
              </div>
              <div className="border rounded-full p-[0.69rem] moving-img-bg">
                <Image
                  src="/arrow-up-right.svg"
                  width={30}
                  height={30}
                  alt=""
                  className="cursor-pointer transition ease-in-out delay-50 moving-img-invert "
                />
              </div>
            </div>
            <div className="mt-[2.5rem] mb-[4.438rem]">
              <h4 className="mb-[0.5rem]">
                Click, Click, Goose! What do your clicks say about you?
              </h4>
              <p className="text-[1rem] leading-[1.375rem] ">
                Synapse Framework: Using Behavior Analysis Patterns to Decrease
                Fraudulent Activity
              </p>
            </div>
            <div className="max-w-[3.75rem]">
              <Tag name="Tech" width={80} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FeaturedBlog;
