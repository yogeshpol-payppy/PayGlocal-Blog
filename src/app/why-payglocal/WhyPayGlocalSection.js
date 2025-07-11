'use client';
import Image from 'next/image';
import { JetBrains_Mono } from 'next/font/google';
import OurPlatformSectionGridBox from '@/Components/OurPlatformSectionGridBox';

//grid section images
import GridImage1 from '@/Images/WhyPayglocal/focused-platform-image.svg';
import GridImage2 from '@/Images/WhyPayglocal/receive-image.svg';
import GridImage3 from '@/Images/WhyPayglocal/client-first-image.svg';
import GridImage4 from '@/Images/WhyPayglocal/secure-image.svg';


import ArrowRight from '@/Images/OnePlatform/arrow-up-right.svg';
import { useRouter } from 'next/navigation';



const jetBrains_Mono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})


function WhyPayglocalSection()
{
    let router=useRouter();
    
    return(
          <>

            {/* grid section  */}
             <section className="flex flex-col gap-10 sm:gap-14 items-center  px-4 py-14 sm:px-10 sm:py-20 lg:pt-32 lg:pb-20">
            <div className="flex flex-col gap-2.5">
                
                <OurPlatformSectionGridBox srNo={"01"} headingTitle={"A focused platform for global payments"} para={"PayGlocal streamlines global payments with advanced technology for high approval rates, fraud reduction, customized flows, recurring Payments, and dynamic currency conversion."} imageSrc={GridImage1} imageWidth={326} imageHeight={277} firstBoxContainsImage={false} imageGradientColorName='PinkGradient'/>
                <OurPlatformSectionGridBox srNo={"02"} headingTitle={"Receive payments in any mode with our all-in-one platform"} para={"Our platform offers 130+ currencies, 20+ payment methods, 10+ integration options and accepts major debit and credit cards."} imageSrc={GridImage2} imageWidth={415} imageHeight={223} firstBoxContainsImage={true} imageGradientColorName='GreenGradient'/>
                <OurPlatformSectionGridBox srNo={"03"} headingTitle={"Client first approach"} para={"We provide tailored payment solutions with a customizable payment flow and round-the-clock support via phone, email and a dedicated account manager."} imageSrc={GridImage3} imageWidth={308} imageHeight={300} firstBoxContainsImage={false} imageGradientColorName='PurpleGradient'/>             
                <OurPlatformSectionGridBox srNo={"04"} headingTitle={"Secure payments with zero trust architecture"} para={"We provide secure payments through zero-trust architecture with end-to-end encryption, multi-factor authentication, and custom data control."} imageSrc={GridImage4} imageWidth={334} imageHeight={300} firstBoxContainsImage={true} imageGradientColorName='BlueGradient'/>
            </div>
        </section>

        {/* more product section  */}
            <section className="py-14 px-4 sm:px-10 sm:py-20 background-custom-grey50 flex flex-col items-center gap-10 ">
                    <div className="flex flex-col items-center gap-4 max-w-3xl w-full">
                        <div className={"custom-text-grey500 font-bold common-all-caps  text-center " + jetBrains_Mono.className}>Custom Solutions</div>
                        <h2 className="common-h2-heading custom-text-black font-medium text-center">See how PayGlocal can benefit your specific business.</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-5 sm:gap-6  max-width-1000 w-full ">

                            <div className="flex flex-col grow-1 px-8 py-10 sm:p-10 background-custom-white rounded-3xl gap-2 sm:gap-3 border custom-border-grey200 relative cursor-pointer one-platform-section-card-container self-stretch w-full" onClick={()=>{router.push('/solutions/enterprise')}}>
                                <h4 className="common-h4-heading custom-text-black font-medium  lg:max-w-56 w-full ">PayGlocal for Enterprise</h4>
                                <div className="one-platform-section-card-rounded-circle border rounded-full custom-border-grey200 p-2.5  absolute top-5 right-5 flex items-center justify-center duration-300">
                                    <Image src={ArrowRight} width={25} height={25} alt='img' quality={100} className='one-platform-arrow-right-img'/>
                                </div>
                            </div>


                            <div className="flex flex-col grow-1 px-8 py-10 sm:p-10 background-custom-white rounded-3xl gap-2 sm:gap-3 border custom-border-grey200 relative cursor-pointer one-platform-section-card-container self-stretch w-full" onClick={()=>{router.push('/solutions/exporters')}}>
                                <h4 className="common-h4-heading custom-text-black font-medium lg:max-w-56 w-full">PayGlocal for Exporters</h4>

                                <div className="one-platform-section-card-rounded-circle border rounded-full custom-border-grey200 p-2.5  absolute top-5 right-5 flex items-center justify-center duration-300">
                                    <Image src={ArrowRight} width={25} height={25} alt='img' quality={100} className='one-platform-arrow-right-img'/>
                                </div>
                            </div>

                    </div>

            </section>
          </>
    )
}

export default WhyPayglocalSection;