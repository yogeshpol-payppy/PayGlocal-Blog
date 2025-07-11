import { Manrope } from "next/font/google";
import Image from "next/image";

import DoubleQoutes from '@/Images/Homepage/double-qoutes.svg';


const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})
//valuegradient style is definedd in Homepage.css
function HomepageTestimonialBox({img,imgWidth,imgHeight,para,position,textImg=false,textContent})  
{


    return(
        <>
            <div className=" flex flex-col gap-10 lg:gap-14 py-6 px-5 lg:py-10 lg:px-14 background-custom-white rounded-3xl section-6-testimonial-info-box w-full flex-shrink-0 shadow-sm border border-custom-grey200 scroll-snap-horizontal-child" >
                <div className="flex flex-col gap-10">
                    <Image src={DoubleQoutes} width={37} height={32} quality={100} alt='img' className='mx-auto' />
                    <p className={"common-body1-text  " + manrope.className}>{para}</p>
                </div>
                <div className="flex items-center justify-between gap-4 ">
                    <div className="flex flex-col gap-2">
                        {/* <div className={"common-body1-text  " + manrope.className}>Vipul Kumar</div> */}
                        <p className={"common-body2-text custom-text-grey600 whitespace-nowrap " + manrope.className}>{position}</p>
                    </div>
                    {textImg?<h6 className="common-h6-heading font-medium">{textContent}</h6>:
                    <Image src={img} width={imgWidth} height={imgHeight} quality={100} alt='img' className='section6-testimonial-logo-img' />}
                </div>
            </div>
        </>
    )
}
export default HomepageTestimonialBox;