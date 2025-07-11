'use client';
import { Manrope } from "next/font/google";
import Image from "next/image";
import '@/Styles/Homepage/payglocalHomepage.css';
import Link from "next/link";


const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})
//valuegradient style is definedd in Homepage.css
function HomepageReadOurBlogCompo({ img, publishedDay, publishedByWhome, title,para ,link,catagory }) {

    return (
        <>
            <Link href={link} >
                <div className="read-our-blogs-div flex flex-col gap-5 sm:gap-7 cursor-pointer pb-2 ">
                    <Image src={img} width={426} height={426} alt='img' quality={100} className='rounded-xl' />
                    <div className="flex flex-col gap-3 5">
                        <div className={"font-bold custom-text-grey500 common-body2-text  " + manrope.className}>{publishedDay} |  {publishedByWhome}</div>
                        <h5 className="common-h5-heading  custom-text-black">{title}</h5>
                        <p className={" custom-text-grey800 common-body2-text  " + manrope.className}>{para}</p>
                        {catagory&&<div className="flex">
                            <div className="py-1 px-4 common-body2-text background-custom-grey50 custom-text-blue1 rounded-full ">{catagory}</div>
                        </div>}
                    </div>
                </div>
            </Link>
        </>
    )
}
export default HomepageReadOurBlogCompo;