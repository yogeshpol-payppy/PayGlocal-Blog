import Image from 'next/image';
import React from 'react'

//section 1 - blog images

import { Manrope } from 'next/font/google';

const manrope=Manrope({
    subsets:['latin'],
    display:'swap'
})
function SingleBlogHeader ({ img, heading, name, date, preface, readMins, tag }) {
  return (
        <>
        <header className=' px-4 sm:px-10 pb-14 pt-24 flex justify-center items-center border-b border-custom-grey200 '>
                <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-5 sm:gap-14 items-center ">
                    <div className="flex flex-col gap-5 sm:gap-6 max-w-xl w-full">
                        <div className="flex flex-col gap-3">
                            <div className={"common-body2-text custom-text-grey600 "+manrope.className}>{name} |  {date}  |  {readMins} min read</div>
                            <h3 className="common-h3-heading ">{heading}</h3>
                            <p className={"common-body2-text custom-text-grey800 "+manrope.className}>{preface}</p>
                            <div className="">
                                <button className={"py-1 px-4 rounded-full background-custom-grey50 custom-text-blue1 "+manrope.className}>{tag}</button>
                            </div>
                        </div>
                    </div>
                    <Image src={img} width={554} height={356} alt='img' quality={100} className='rounded-xl'/>
                </div>
        </header>
        </>
  )
}

export default SingleBlogHeader;
