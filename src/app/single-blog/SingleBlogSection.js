
import Image from 'next/image';
import React from 'react'


import { Manrope } from 'next/font/google';


//section 1 blogs section images
import WrittenBy from '@/Images/SingleBlog/written-by.png';
import FraudReport from '@/Images/SingleBlog/fraud-graph.svg';



const manrope=Manrope({
    subsets:['latin'],
    display:'swap'
})
function SingleBlogSection () {
  return (
        <>
            <section className="px-4 py-10 sm:px-10 sm:py-14 flex justify-center items-center">


                <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row gap-5 sm:gap-12 ">


                    {/* left side whitten by section */}
                    <div className="flex flex-col gap-12 sm:gap-14 lg:max-w-xs w-full">
                        <div className="flex flex-col gap-5">
                            <div className={"common-body1-text custom-text-grey600 "+manrope.className}>Written by</div>
                            <div className="flex flex-col sm:flex-row lg:flex-col gap-8  lg:gap-4">
                                <div className="flex items-center gap-4">
                                    <Image src={WrittenBy} width={72} height={72} quality={100} alt='img' className='rounded-full'/>
                                    <div className="">
                                        <p className={"common-body1-text font-bold "+manrope.className}>Rishab K</p>
                                        <p className={"common-body3-text custom-text-grey600 "+manrope.className}>Product Manager</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image src={WrittenBy} width={72} height={72} quality={100} alt='img' className='rounded-full'/>
                                    <div className="">
                                        <p className={"common-body1-text font-bold "+manrope.className}>Rishab K</p>
                                        <p className={"common-body3-text custom-text-grey600 "+manrope.className}>Product Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-custom-grey200"></div>
                        <div className="flex flex-col">
                            <h6 className="common-h6-heading">Read this next</h6>
                            <div className="flex flex-col sm:flex-row lg:flex-col gap-10">
                                <div className="flex flex-col gap-3">
                                    <p className={"common-body3-text custom-text-grey500 "+manrope.className}>Akshay Hingmire  |  14 July 2024  |  7 min read</p>
                                    <h5 className="common-h5-heading">Comprehensive Guide to Fraud Reporting and Mitigation </h5>
                                    <div className="">
                                    <   button className={"py-1 px-4 rounded-full background-custom-grey50 custom-text-blue1 "+manrope.className}>Tech</button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className={"common-body3-text custom-text-grey500 "+manrope.className}>Akshay Hingmire  |  14 July 2024  |  7 min read</p>
                                    <h5 className="common-h5-heading">Comprehensive Guide to Fraud Reporting and Mitigation </h5>
                                    <div className="">
                                    <   button className={"py-1 px-4 rounded-full background-custom-grey50 custom-text-blue1 "+manrope.className}>Tech</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* right side section  */}
                    <div className="flex flex-col gap-24">
                        <div className="flex flex-col gap-4">
                            <h4 className="common-h4-heading">Let me emphasize this:</h4>
                            <p className={"common-body1-text "+manrope.className}>Why do customers drop from the checkout page from an online website during the last leg of their process – the payment ceremony?</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="common-h4-heading">Core Problems</h4>
                            <p className={"common-body1-text "+manrope.className}>Let us try and understand the core problems here. &#x3f;As per the checkout experiences available today and research that&apos;s been done on the online checkout experience by multiple entities, the following are the 5 topmost reasons for customers dropping from the checkout page</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h4 className="common-h4-heading">Lack of global payment options </h4>
                            <p className={"common-body1-text "+manrope.className}>Let us try and understand the core problems here. <br /><br /> &#x3f;As per the checkout experiences available today and research that’s been done on the online checkout experience by multiple entities, <br /><br /> the following are the 5 topmost reasons for customers dropping from the checkout page</p>
                        </div>

                        <div className="flex flex-col gap-11">
                            <h4 className="common-h4-heading">Q. Why it&apos;s important for businesses to have Alternative Payment method options?  </h4>
                            <div className="flex flex-col gap-4">
                                <h5 className="common-h5-heading">1 - Increased Customer Trust</h5>
                                <p className="common-body1-text">Having Alt-Pay/ Local methods as a payment option will infuse trust in the customers&apos; minds as they are familiar with the user experience and reliability of the payment methods. Customer transactions on cross-border merchants will feel a local, familiar connection. </p>
                            </div>  
                            <div className="flex flex-col gap-4">
                                <h5 className="common-h5-heading">2 - Increased Sales and Conversions</h5>
                                <p className="common-body1-text">Increased trust leads to increased conversions and in turn leads to increased sales. Win-win!</p>
                            </div>  
                            <div className="flex flex-col gap-4">
                                <h5 className="common-h5-heading">3 - Increased Customer reach </h5>
                                <p className="common-body1-text">Having Alt-Pay/ Local methods as a payment option will infuse trust in the customers&apos; minds as they are familiar with the user experience and reliability of the payment methods. Customer transactions on cross-border merchants will feel a local, familiar connection. </p>
                            </div>  
                            <div className="flex flex-col gap-4">
                                <h5 className="common-h5-heading">4 - Alt-Pays are more secure </h5>
                                <p className="common-body1-text">Most Alternative Payment methods have no chargebacks, thus reducing the risk of fraud. </p>
                            </div>  
                            <Image src={FraudReport} width={610} height={348} quality={100} alt='img' className='' />
                            <div className="flex flex-col gap-4">
                                <h5 className="common-h5-heading">5 - No Cannibalization of Card Payments  </h5>
                                <p className="common-body1-text">Alt-Pays and Card payment methods complement each other!  
                                An Alt-Pay method is popular in geographies with fewer credit adoptions and vice versa. Not only have these methods brought in their loyal customer base but have also enhanced the payment experience of one another where the transactions fail on one and succeed on the other i.e., a card payment fails but the customer can pay through his/her preferred alt-pay and vice versa. </p>
                            </div>  
                        </div>
                    </div>
                    


                </div>
            </section>

           
        </>
  )
}

export default SingleBlogSection;
