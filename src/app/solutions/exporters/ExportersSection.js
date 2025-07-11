'use client';
import Image from 'next/image';
import { JetBrains_Mono } from 'next/font/google';


//manage payments section
import CollectPayments from "@/Images/Exporters/collect-payments.svg";
import ScheduleSubscription from "@/Images/Exporters/schedule-subscription.svg";
import ManagePayments from '@/Images/OnePlatform/manage-payments.png';


//highlight section images
import Globe from '@/Images/Exporters/globe.svg';             
import CompetitivePricing from '@/Images/Exporters/competitive-pricing.svg';
import EasySetup from '@/Images/Exporters/easy-setup.svg';
import Headphone from '@/Images/Enterprise/headphone.svg';

import BlueGradient from '@/Images/OnePlatform/blue-gradient.png';
import PurpleGradient from '@/Images/OnePlatform/purple-gradient.png';
import PinkGradient from '@/Images/OnePlatform/pink-gradient.png';
import GreenGradient from '@/Images/OnePlatform/green-gradient.png';


//grid section images                                                               //importing previusly used images instead of new export
import GridImage1 from '@/Images/CardPayments/local-currencies.svg';               
import GridImage2 from '@/Images/Exporters/accept-image.svg';
import ExploreBtn from '@/Components/ExploreMoreBtn';
import { useState } from 'react';

import RecurringPaymentsHighlightCard from '@/Components/SmallComponents/RecurringPaymentsHighlightCard';
import TextRenderEffectCompo from '@/app/TextRenderEffectCompo';




const jetBrains_Mono=JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})

function ExportersSection()
{
    let [filterBtnIndex, setFilterBtnIndex] = useState(0);

 
    return(
        <>

        {/* grid Box section */}
        <section className="flex flex-col gap-10 sm:gap-14 items-center  px-4 py-14 sm:px-10 sm:pb-20 lg:pt-32 lg:pb-20">
            <h2 className="common-h2-heading text-center max-w-4xl">Accepting international payments has never been easier</h2>
                <div className="flex flex-col gap-2.5">
               
                    <div className="flex flex-col lg:flex-row background-custom-grey50 one-platform-grid-two-box-container w-full rounded-3xl">
                        <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-4 px-6 py-8 sm:px-20 sm:py-14 lg:p-14 lg: lg:pl-20 background-custom-grey-50 lg:w-1/2">
                            <h4 className="common-h4-heading  custom-text-black text-center lg:text-start matterfont">Collect foreign funds through a mutli-currency account</h4>
                            <p className={"custom-text-grey600  common-body1-text text-center lg:text-start "}>Global payments like a local entity. Multi-currency account setup, hassle-free, quick settlement, lower conversion costs.</p>
                            <ExploreBtn text='Know more' link='/multi-currency-accounts'/>
                        </div>
                        <div className="flex items-center justify-center lg:w-1/2 px-6 py-8 sm:p-10 lg:p-14 relative overflow-hidden min-h-48 sm:min-h-60 lg:min-h-fit">
                            <Image src={GridImage1} width={257} height={300} alt='img' quality={100} className='relative z-10'/>
                            <Image src={BlueGradient} width={400} height={400} alt='img' quality={100} className='absolute green-gradient ' data-aos="fade-up"/>
                            
                            {/* <div className='green-gradient'></div> */}
                        </div>
                    </div>

                    <div className="flex flex-col-reverse lg:flex-row background-custom-grey50 one-platform-grid-two-box-container w-full rounded-3xl">
                        <div className="flex items-center justify-center lg:w-1/2 px-6 py-8 sm:p-12 lg:p-10 relative overflow-hidden min-h-48 sm:min-h-60 lg:min-h-fit">
                            <Image src={GridImage2} width={257} height={300} alt='img' quality={100} className='relative z-10'/>
                            <Image src={PurpleGradient} width={400} height={400} alt='img' quality={100} className='absolute green-gradient ' data-aos="fade-up"/>
                        </div>
                        <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-4 px-6 py-8 sm:px-20 sm:py-14 lg:p-14 lg: lg:pl-20 background-custom-grey-50 lg:w-1/2">
                            <h4 className="common-h4-heading  custom-text-black text-center lg:text-start matterfont">Accept payments through local payment methods</h4>
                            <p className={"custom-text-grey600  common-body1-text text-center lg:text-start "}>Offer locally prominent payment methods of your target markets for better experience. Familiar methods, increased trust, lesser friction.</p>
                            <ExploreBtn text='Know more' link='/alternate-payment-methods'/>
                        </div>
                    </div>
                </div>
            </section>

            {/* manage global payments section  */}
            <section className="py-10 sm:py-20 px-4 sm:px-10 lg:px-0 flex items-center justify-center background-custom-grey50 ">
                <div className="flex flex-col gap-10 sm:gap-6 items-center">
                    <div className="flex flex-col gap-4 sm:gap-6 items-center">
                        <div className="flex flex-col gap-4 items-center">
                            <p className={"common-all-caps custom-text-grey400 "+jetBrains_Mono.className}>For Exporters</p>
                            <h2 className="common-h2-heading custom-text-black text-center max-w-4xl">Easily manage global payments.</h2>
                        </div>
                        <div className={"flex gap-2 sm:gap-2 overflow-scroll " + jetBrains_Mono.className}>
                            <button className={`common-all-caps py-4 px-5 border-b-2 font-bold ${filterBtnIndex == 0 ? 'custom-border-blue custom-text-blue1' : 'custom-border-grey400 custom-text-grey400'}`} onClick={() => { setFilterBtnIndex(0) }}> Accept</button>
                            <button className={`common-all-caps py-4 px-5 border-b-2 font-bold ${filterBtnIndex == 1 ? 'custom-border-blue custom-text-blue1' : 'custom-border-grey400 custom-text-grey400'}`} onClick={() => { setFilterBtnIndex(1) }}> Collect</button>
                            <button className={`common-all-caps py-4 px-5 border-b-2 font-bold ${filterBtnIndex == 2 ? 'custom-border-blue custom-text-blue1' : 'custom-border-grey400 custom-text-grey400'}`} onClick={() => { setFilterBtnIndex(2) }}> Automate</button>
                            <button className={`common-all-caps py-4 px-5 border-b-2 font-bold ${filterBtnIndex == 3 ? 'custom-border-blue custom-text-blue1' : 'custom-border-grey400 custom-text-grey400'}`} onClick={() => { setFilterBtnIndex(3) }}> Manage</button>
                        </div>
                    </div>
                    <div className={`border rounded-3xl duration-500  ${filterBtnIndex==0?" block z-0 opacity-100 ":" hidden -z-10 opacity-0 "}`}>
                        <div className="flex flex-col lg:flex-row background-custom-white one-platform-grid-two-box-container w-full rounded-3xl">
                            <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-4 px-6 py-8 sm:px-20 sm:py-14 lg:p-14 lg: lg:pl-20 background-custom-grey-50 lg:w-1/2">
                                <h4 className="common-h4-heading  custom-text-black text-center lg:text-start matterfont">Accept payments through local payment methods</h4>
                                <p className={"custom-text-grey600  common-body1-text text-center lg:text-start "}>Offer your customers their choice of currency and payment methods. We bring 130+ currencies & 20+ local payment methods for major International & domestic cards</p>

                            </div>
                            <div className="flex items-center justify-center lg:w-1/2 px-6 py-8 sm:p-10 lg:p-14 relative overflow-hidden min-h-48 sm:min-h-60 lg:min-h-fit">
                                <Image src={GridImage2} width={257} height={300} alt='img' quality={100} className='relative z-10'/>
                                <Image src={BlueGradient} width={400} height={400} alt='img' quality={100} className='absolute green-gradient ' data-aos="fade-up"/>
                                
                            </div>
                        </div>
                    </div>
                    <div className={`border rounded-3xl duration-500  ${filterBtnIndex==1?" block z-0 opacity-100 ":"hidden -z-10 opacity-0 "}`}>
                        <div className="flex flex-col lg:flex-row background-custom-white one-platform-grid-two-box-container w-full rounded-3xl">
                                <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-4 px-6 py-8 sm:px-20 sm:py-14 lg:p-14 lg: lg:pl-20 background-custom-grey-50 lg:w-1/2">
                                    <h4 className="common-h4-heading  custom-text-black text-center lg:text-start matterfont">Collect payments through choice of channels</h4>
                                    <p className={"custom-text-grey600  common-body1-text text-center lg:text-start "}>Customize your payment collection methods to suit your requirements, including API payments, payment gateway, payment links, and payment buttons.</p>

                                </div>
                            <div className="flex items-center justify-center lg:w-1/2 px-6 py-8 sm:p-10 lg:p-14 relative overflow-hidden min-h-48 sm:min-h-60 lg:min-h-fit">
                                <Image src={CollectPayments} width={360} height={300} alt='img' quality={100} className='relative z-10'/>
                                <Image src={PinkGradient} width={400} height={400} alt='img' quality={100} className='absolute green-gradient ' data-aos="fade-up"/>
                            </div>
                        </div>
                    </div>
                    <div className={`border rounded-3xl duration-500  ${filterBtnIndex==2?" block z-0 opacity-100 ":" hidden -z-10 opacity-0 "}`}>
                        <div className="flex flex-col lg:flex-row background-custom-white one-platform-grid-two-box-container w-full rounded-3xl">
                                <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-4 px-6 py-8 sm:px-20 sm:py-14 lg:p-14 lg: lg:pl-20 background-custom-grey-50 lg:w-1/2">
                                    <h4 className="common-h4-heading  custom-text-black text-center lg:text-start matterfont">Automate your payments with standing instructions</h4>
                                    <p className={"custom-text-grey600  common-body1-text text-center lg:text-start "}>Configure payment amounts and frequencies on demand with complete flexibility, including fixed or variable options.</p>

                                </div>
                            <div className="flex items-center justify-center lg:w-1/2 px-6 py-8 sm:p-10 lg:p-14 relative overflow-hidden min-h-48 sm:min-h-60 lg:min-h-fit">
                                <Image src={ScheduleSubscription} width={405} height={253} alt='img' quality={100} className='relative z-10'/>
                                <Image src={GreenGradient} width={400} height={400} alt='img' quality={100} className='absolute green-gradient ' data-aos="fade-up"/>
                            </div>
                        </div>
                    </div>
                    <div className={`border rounded-3xl duration-500  ${filterBtnIndex==3?" block z-0 opacity-100":"hidden -z-10 opacity-0"}`}>
                    <div className="flex flex-col lg:flex-row background-custom-white one-platform-grid-two-box-container w-full rounded-3xl overflow-hidden">
                            <div className="flex flex-col gap-2 lg:gap-4 px-6 py-8 sm:px-20 sm:py-14 lg:p-14 lg: lg:pl-20 background-custom-grey-50 lg:w-1/2">
                                <h4 className="common-h4-heading  custom-text-black text-center lg:text-start matterfont">Track and manage all your payments through a single dashboard</h4>
                                <p className={"custom-text-grey600  common-body1-text text-center lg:text-start "}>Check transaction status, daily settlement reports, and perform risk analysis on your payments.</p>
                            </div>
                            <div className="flex items-center justify-center lg:w-1/2 px-8 sm:p-14 relative overflow-hidden min-h-48 sm:min-h-60 lg:min-h-fit">
                                <Image src={ManagePayments} width={611} height={450} alt='img' quality={100} className=' absolute -bottom-12 sm:-bottom-60 lg:-bottom-24 lg:-right-20 z-10'/>
                                <Image src={PurpleGradient} width={400} height={400} alt='img' quality={100} className='absolute green-gradient ' data-aos="fade-up"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        {/* Highlights  section*/}
        <section className="py-10 sm:py-20 px-4 sm:px-10 flex items-center justify-center background-custom-white ">
            <div className="flex flex-col gap-2.5">
                <div className="flex flex-col background-custom-grey50 gap-10 sm:gap-20 py-14 px-5 lg:py-20 sm:px-14 rounded-3xl max-width-1000">
                    <div className="flex flex-col gap-4 items-center">
                        <p className={"common-all-caps custom-text-grey500 "+jetBrains_Mono.className}>For Exporters</p>
                        <h2 className="common-h2-heading custom-text-black text-center max-w-4xl">Why partner with PayGlocal</h2>
                        <p className={"common-body1-text custom-text-grey600 text-center lg:max-w-2xl "}>We&apos;ve built PayGlocal with the vision to foster global commerce. And you are at the forefront of growth beyond borders. That&apos;s why we want to back you.</p>
                    </div>
                    <div className="flex flex-col gap-10 sm:gap-16 lg:gap-20 ">
                        
                        <div className="flex flex-col lg:flex-row  gap-10 sm:gap-16 lg:gap-20 items-center">
                        
                            <RecurringPaymentsHighlightCard img={Globe} imgwidth={100} imgheight={100} title={'Payments platform for cross border'} para={'PayGlocal is built for securely processing international payments with high approval rates while minimizing fraud.'} />
                            <RecurringPaymentsHighlightCard img={EasySetup} imgwidth={100} imgheight={100} title={'Easy set up and integration'} para={'Access all payment methods and features through a single, one-time integration.'} />

                        </div>
                        <div className="flex flex-col lg:flex-row  gap-10 sm:gap-16 lg:gap-20 items-center">
                            <RecurringPaymentsHighlightCard img={CompetitivePricing} imgwidth={100} imgheight={100} title={'Competitive pricing'} para={'Pay for what you process, and pay as you go with PayGlocal. Get all you need at competitve pricing.'} />
                            <RecurringPaymentsHighlightCard img={Headphone} imgwidth={100} imgheight={100} title={'Dedicated support'} para={'From dedicated account manager to 24x7 email, phone, ticket support, our payment experts are always here to support you.'} />
                        </div>
                        
                    </div>
                    
                </div>

            
            </div>
        </section>


            <TextRenderEffectCompo/>
       


      

        

        </>
    )
}
export default ExportersSection;