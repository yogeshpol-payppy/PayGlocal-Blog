import TextRenderEffectCompo from '@/app/TextRenderEffectCompo';
import '@/Styles/OnePlatform/OnePlatform.css';              //our platform css file contains the css of this component
import { Manrope } from 'next/font/google';
import Image from 'next/image';


import PurpleGradient from '@/Images/OnePlatform/purple-gradient.png';
import GreenGradient from '@/Images/OnePlatform/green-gradient.png';
import BlueGradient from '@/Images/OnePlatform/blue-gradient.png';
import PinkGradient from '@/Images/OnePlatform/purple-gradient.png';

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})
let colorName={
    'PurpleGradient':PurpleGradient,
    'GreenGradient':GreenGradient,
    'BlueGradient':BlueGradient,
    'PinkGradient':PinkGradient,
}
function OurPlatformSectionGridBox({imageSrc,imageWidth,imageHeight,firstBoxContainsImage=false,srNo,headingTitle,para,imageGradientColorName='GreenGradient'}) {
    return (
        <>
            <div className={`flex ${firstBoxContainsImage?' flex-col-reverse ': ' flex-col '} lg:flex-row  items-center background-custom-grey50 one-platform-grid-two-box-container w-full rounded-3xl`}>
                {/* sometimes first box contains image and second box contains text to handle that case below conditional logic is used  */}
                {firstBoxContainsImage?
                     <div className="flex items-center justify-center lg:w-1/2 p-8 sm:p-10 lg:p-14 relative  overflow-hidden">
                        <Image src={imageSrc} width={imageWidth} height={imageHeight} alt='img' quality={100} className='relative z-index-2'/>
                        {/* <div className={`absolute  ${imageGradientColorClass} z-0  rotate-reverse`} data-aos="fade-up"></div> */}
                        <Image src={colorName[imageGradientColorName]} width={850} height={850} alt='img' quality={100} className=' absolute z-0 -top-10 left-0' data-aos="fade-up"/>
                 </div>:null
                }
                <div className={`flex flex-col items-center lg:items-start gap-2 lg:gap-4 px-6 py-8 sm:px-20 sm:py-14 lg:p-14 ${firstBoxContainsImage?'pl-8':'lg:pl-20'} background-custom-grey-50 lg:w-1/2 `}>
                    <h6 className={"common-h6-heading custom-text-grey500 font-semibold text-center lg:text-start matterfont"}>{srNo}</h6>
                    <h4 className="common-h4-heading font-semibold custom-text-black text-center lg:text-start matterfont">{headingTitle}</h4>
                    <p className={"custom-text-grey600  common-body1-text text-center lg:text-start " + manrope.className}>{para}</p>
                </div>
               {!firstBoxContainsImage?<div className="flex items-center justify-center lg:w-1/2 p-8 sm:p-10 lg:p-14 relative  overflow-hidden">
                    <Image src={imageSrc} width={imageWidth} height={imageHeight} alt='img' quality={100} className='relative z-index-2'/>
                    <Image src={colorName[imageGradientColorName]} width={850} height={850} alt='img' quality={100} className=' absolute z-0  -top-10 left-0 ' data-aos="fade-up"/>
                    {/* <div className={` absolute   ${imageGradientColorClass} z-0 `} data-aos="fade-up"></div> */}
                </div>:null}
            </div>
            <TextRenderEffectCompo/>
        </>
    )
}

export default OurPlatformSectionGridBox;