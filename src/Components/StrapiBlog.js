import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';
import { Manrope } from 'next/font/google';
import Link from 'next/link';

const manrope=Manrope({
    display:'swap',
    subsets:['latin'],
});

const StrapiBlog = ({imgSrc,link,date,name,heading,catagory}) => {
    
  return (
    <Link href={link} className='max-w-72 w-full h-auto border border-transparent'>
        <div className={"flex flex-col gap-7 max-w-72 w-full "+ manrope.className}>
            <div className="rounded-xl overflow-hidden">
                <Image src={imgSrc} width={288} height={182} />
            </div>
            <div className="flex flex-col gap-3">
                <div className="common-body3-text custom-text-grey500">Published {date}  |  {name}</div>
                <h5 className="common-h5-heading custom-text-grey900 font-matter">{heading}</h5>
                <div className='flex'>
                    <div className="bg-[#F6F8FE] py-1 px-4 rounded-full ">
                        <span className="text-[#4071DF] ">{catagory}</span>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  );
};

export default StrapiBlog;

StrapiBlog.propTypes={
    imgSrc: PropTypes.string,
    link: PropTypes.string,
    date: PropTypes.string,
    name: PropTypes.string,
    heading: PropTypes.string,
    catagory: PropTypes.string
}