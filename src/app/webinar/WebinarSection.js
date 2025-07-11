
import Image from 'next/image';
import React from 'react'
import { JetBrains_Mono } from 'next/font/google';

//section 1 - blog images
import Webinar from '@/Images/Webinar/Webinar.svg';
import Link from 'next/link';




const jetBrains_Mono=JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})

function WebinarSection () {
  return (
        <>
            <section className="px-4 py-10 sm:px-10 sm:py-14 flex justify-center items-center background-custom-grey50">
                
                <div className="flex flex-col  lg:gap-14  max-w-[1000px] w-full background-custom-white  rounded-2xl -mt-48">
                    
                    <Image src={Webinar} width={1000} height={422} alt='img' quality={100} className='rounded-t-2xl'/>
                    
                    <div className="flex flex-col lg:flex-row px-6 py-8 sm:p-10 lg:p-14 gap-8">
                        
                        <div className="flex flex-col gap-10 grow">
                            <div className="flex flex-col gap-6">
                                <p className={"common-all-caps custom-text-grey500 "+jetBrains_Mono.className}>Webinar  |  23 Sept 2022</p>
                                <div className="flex flex-col gap-4">
                                    <h4 className="common-h4-heading">Fireside chat - Expanding Globally with Local Payment Methods</h4>
                                    <p className="common-body1-text custom-text-grey800">India is among the top ten exporters in the world with exports worth $670 billion 2021-22 and a record-high export of services worth $250 billion.</p>
                                </div>
                            </div>
                            <div className="">
                                <Link href={'/webinar/fire-side-chat'}>
                                    <button className={"background-custom-blue1 py-2.5 px-6 common-btn-text custom-text-white rounded-3xl sign-up-blue-btn-drop-shadow hover:scale-110 duration-300 " }>Learn More</button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 py-6 px-5 sm:py-10 sm:px-8 grow background-custom-grey50 rounded-xl lg:max-w-[428px] w-full">
                            <h5 className="common-h5-heading">In this webinar we will discuss:</h5>
                            <ul className="list-inside list-disc space-y-2 ml-2.5">
                                <li className={"common-body1-text custom-text-grey600 "}>Indian opportunity in cross border growth</li>
                                <li className={"common-body1-text custom-text-grey600 "}>Consumer expectations and preferences internationally</li>
                                <li className={"common-body1-text custom-text-grey600 "}>Approaching local markets with local payments</li>
                                <li className={"common-body1-text custom-text-grey600 "}>How to unlock growth with local payment methods</li>

                            </ul>
                        </div>


                    </div>
                   

                  
                    
                </div>
            </section>


        </>
    )
}

export default WebinarSection;
