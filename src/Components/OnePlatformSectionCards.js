'use client';
import Image from 'next/image';
import { JetBrains_Mono } from 'next/font/google';

import ArrowRight from '@/Images/OnePlatform/arrow-up-right.svg';
import '@/Styles/OnePlatform/OnePlatform.css';
import Link from 'next/link';
import '@/Styles/OnePlatform/OnePlatform.css';          // this page uses component is same as one platform so importing one platform page css
import { useRouter } from 'next/navigation';


const jetBrains_Mono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})


function OnePlatformSectionCards({smallTitle,title,card1Title,card1Para,card2Title,card2Para,weAlsoHaveBtn1,weAlsoHaveBtn2,weAlsoHaveBtns=true,card1link,card2link,weAlsoHaveBtn1Link='/',weAlsoHaveBtn2Link='/'})
{
 
    let router=useRouter();
    return(
        <>
      
        <section className="py-14 px-4 sm:px-10 sm:py-20 background-custom-grey50 flex flex-col items-center gap-10 ">
                <div className="flex flex-col items-center gap-4 max-w-3xl w-full">
                    <div className={"custom-text-grey500 font-bold common-all-caps  text-center " + jetBrains_Mono.className}>{smallTitle}</div>
                    <h2 className="common-h2-heading custom-text-black font-medium text-center">{title}</h2>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-5 sm:gap-6  max-width-1000 w-full ">
                    <div className="flex flex-col grow-1 px-8 py-10 sm:p-10 background-custom-white rounded-3xl gap-2 sm:gap-3 border custom-border-grey200 relative cursor-pointer one-platform-section-card-container self-stretch" onClick={()=>{router.push(card1link)}}>
                        <h4 className="common-h4-heading custom-text-black font-medium  ">{card1Title}</h4>
                        <p className={"common-body1-text custom-text-grey600 font-medium "}>{card1Para}</p>

                        <div className="one-platform-section-card-rounded-circle border rounded-full custom-border-grey200 p-2.5  absolute top-5 right-5 flex items-center justify-center duration-300">
                            <Image src={ArrowRight} width={25} height={25} alt='img' quality={100} className='one-platform-arrow-right-img'/>
                        </div>
                    </div>
                    <div className="flex flex-col grow-1 px-8 py-10 sm:p-10 background-custom-white rounded-3xl gap-2 sm:gap-3 border custom-border-grey200 relative cursor-pointer one-platform-section-card-container self-stretch" onClick={()=>{router.push(card2link)}}>
                        <h4 className="common-h4-heading custom-text-black font-medium">{card2Title}</h4>
                        <p className={"common-body1-text custom-text-grey600 font-medium "}>{card2Para}</p>

                        <div className="one-platform-section-card-rounded-circle border rounded-full custom-border-grey200 p-2.5  absolute top-5 right-5 flex items-center justify-center duration-300">
                            <Image src={ArrowRight} width={25} height={25} alt='img' quality={100} className='one-platform-arrow-right-img'/>
                        </div>
                    </div>
                </div>
               {weAlsoHaveBtns? <div className="flex flex-col lg:flex-row gap-6 items-center ">
                    <h6 className="common-h6-heading custom-text-black font-medium">We also have</h6>
                    <Link href={weAlsoHaveBtn1Link}>
                        <button className="flex rounded-full gap-4 background-custom-white border custom-border-grey200 py-2.5 pl-7 pr-2.5 items-center we-also-have-btns">
                            <h6 className="common-h6-heading custom-text-black font-medium">{weAlsoHaveBtn1}</h6>
                            <div className="one-platform-section-card-rounded-circle border rounded-full custom-border-grey200 p-2.5 flex items-center justify-center duration-300">
                                <Image src={ArrowRight} width={25} height={25} alt='img' quality={100} className='one-platform-arrow-right-img'/>
                            </div>
                        </button>
                    </Link>
                    <Link href={weAlsoHaveBtn2Link}>
                        <button className="flex rounded-full gap-4 background-custom-white border custom-border-grey200 py-2.5 pl-7 pr-2.5 items-center we-also-have-btns">
                            <h6 className="common-h6-heading custom-text-black font-medium">{weAlsoHaveBtn2}</h6>
                            <div className="one-platform-section-card-rounded-circle border rounded-full custom-border-grey200 p-2.5 flex items-center justify-center duration-300">
                                <Image src={ArrowRight} width={25} height={25} alt='img' quality={100} className='one-platform-arrow-right-img'/>
                            </div>
                        </button>
                    </Link>
                </div>:null}

        </section>

        </>
    )
}
export default OnePlatformSectionCards;