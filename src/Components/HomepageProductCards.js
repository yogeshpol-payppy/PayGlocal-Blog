'use client';
import { Manrope } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

import ExploreBtn from "./ExploreMoreBtn";

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})
//valuegradient style is definedd in Homepage.css
function HomepageProductCards({img,imgWidth,imgHeight,imgClassname,backgroundGradient,title,para,link,icon})  
{

    let router=useRouter();
    
    function handleClick()
    {
        router.push(link);
    }
    return(
        <>
            <div className=" payglocal-section3-product-card background-custom-white w-full p-1 rounded-3xl border custom-border-grey200 cursor-pointer overflow-hidden flex-shrink-0  shadow-sm scroll-snap-horizontal-child" onClick={handleClick}>
                <div className={`relative product-card-img-div overflow-hidden duration-300 rounded-tr-3xl rounded-tl-3xl background-custom-grey100 ${backgroundGradient}`}>
                    <Image src={img} width={imgWidth} height={imgHeight} alt='img' quality={100} className={`${imgClassname} duration-300 product-card-bg-img`} />
                </div>
                <div className="flex flex-col gap-3 py-6 px-7 relative">
                    <div className='flex items-center gap-2'>
                        <Image src={icon} width={28} height={28} alt='img' quality={100} className='' />
                        <h6 className="common-h6-heading custom-text-black ">{title}</h6>
                    </div>
                    <p className={"common-body2-text  custom-text-grey600  " + manrope.className}>{para}</p>

                    <div className="duration-300 product-card-explore-btn-container max-h-0 overflow-hidden">
                        <ExploreBtn />
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomepageProductCards;