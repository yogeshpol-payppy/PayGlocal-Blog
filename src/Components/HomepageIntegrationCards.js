'use client';
import { Manrope } from "next/font/google";
import Image from "next/image";
import ExploreBtn from "./ExploreMoreBtn";
import { useRouter } from "next/navigation";

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})
//valuegradient style is definedd in Homepage.css
function HomepageIntegrationCards({img,imgWidth,imgHeight,imgClassname='',title,titleColor='black',para,paraColor='grey800',exploreBtnProps,link})  
{
    let router=useRouter();
    return(
        <>
            <div className={"integration-resources-divs flex flex-col gap-6 p-8 lg:p-10 rounded-3xl cursor-pointer hover:scale-105 duration-300 "+manrope.className} onClick={()=>{router.push(link)}}>
                <Image src={img} width={imgWidth} height={imgHeight} alt='img' quality={100} className={`${imgClassname}`} />
                <div className="flex flex-col gap-1.5 ">
                    <h5 className={`common-h5-heading custom-text-${titleColor} `}>{title}</h5>
                    <p className={`common-body2-text custom-text-${paraColor}  ` + manrope.className}>{para}</p>
                </div>
                <ExploreBtn {...exploreBtnProps} />
            </div>
        </>
    )
}
export default HomepageIntegrationCards;