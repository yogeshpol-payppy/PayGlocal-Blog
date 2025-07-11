import Image from 'next/image';
import { JetBrains_Mono, Manrope } from 'next/font/google';
import SignUpBtn from '@/Components/SignUpBtn';
import OurPlatformSectionGridBox from '@/Components/OurPlatformSectionGridBox';

//grid section images
import GridImage1 from '@/Images/GlobalPaymentMethods/graph-up.svg';
import GridImage2 from '@/Images/GlobalPaymentMethods/global-reach.svg';
import GridImage3 from '@/Images/GlobalPaymentMethods/fraud-payment.svg';


//webinar section image
import Webinar from '@/Images/GlobalPaymentMethods/webinar-header.svg';

import OnePlatformSectionCards from '@/Components/OnePlatformSectionCards';
import AlternativePaymentsMethods from '@/Components/AlternativePaymentsMethods';


const jetBrains_Mono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})
const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})

function GlobalPaymentMethodsSection()
{

  
   
    return(
        <>

        {/* video section  */}
        <section className="py-10 sm:py-20 px-4 sm:px-10 flex items-center justify-center">
            <iframe className='youtube-video rounded-2xl aspect-video w-full h-auto max-width-1000 border border-custom-grey200' width="1000" height="600" src="https://www.youtube.com/embed/G6Wfd2CzAzU?si=DSS9eVBV0rarWBjc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>

        {/* Grid Box section */}    
        <section className="flex flex-col gap-10 sm:gap-14 items-center  px-4 py-14 sm:px-10 sm:py-20 lg:pt-32 lg:pb-20">
            <div className="flex flex-col items-center gap-2 sm:gap-4 max-w-5xl w-full">
                <h2 className="common-h2-heading  custom-text-black text-center matterfont max-w-3xl ">Complement card payments with local payment methods.</h2>
                <p className={"common-body1-text custom-text-grey600  text-center max-w-3xl "+manrope.className}>77% of all online purchases in 2021 were made using a local payment method. Offering local payment methods of your global customers is now a necessity.</p>
            </div>
            <div className="flex flex-col gap-2.5">
                
                <OurPlatformSectionGridBox srNo={"01"} headingTitle={"Increase trust, conversions and sales"} para={"Infuse trust in the customers' minds with their familiar local payment methods. Get more conversions and higher sales."} imageSrc={GridImage1} imageWidth={372} imageHeight={300} firstBoxContainsImage={false} imageGradientColorName='GreenGradient'/>
                <OurPlatformSectionGridBox srNo={"02"} headingTitle={"Global reach like never before"} para={"Reach non-credit customers or markets with low credit card adoption through alternate payments. Win-win for you and your customers."} imageSrc={GridImage2} imageWidth={324} imageHeight={300} firstBoxContainsImage={true} imageGradientColorName='PurpleGradient'/>
                <OurPlatformSectionGridBox srNo={"03"} headingTitle={"Say goodbye to fraud payments"} para={"Most of the alternative payment methods have no charge-backs. Lower risk of fraud with local payment methods."} imageSrc={GridImage3} imageWidth={334} imageHeight={300} firstBoxContainsImage={false} imageGradientColorName='BlueGradient'/>             


            </div>
            <SignUpBtn linkUrl='/contact'/>
        </section>

        {/* webinar-card-section  */}
        <section className="py-10 sm:pb-20 px-4 sm:px-10 flex items-center justify-center">
            <div className="flex flex-col max-width-1000 w-full">
                <div className="">
                    <Image src={Webinar} width={1000} height={380} quality={100} alt='img' className=''/>
                </div>
                <div className="flex flex-col lg:flex-row gap-14 px-6 py-8 sm:p-10 lg:p-14 w-full">
                    <div className="flex flex-col gap-10 lg:w-1/2">
                        <div className="flex flex-col gap-6">
                            <div className={"flex gap-4 items-center "}>
                                <div className={"custom-text-grey500 common-all-caps "+jetBrains_Mono.className}>Webinar</div>
                                <div className={"custom-text-grey500 common-all-caps "+jetBrains_Mono.className }>|</div>
                                <div className={"custom-text-grey500 common-all-caps "+jetBrains_Mono.className }>23 Sept 2022</div>

                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="common-h4-heading custom-text-black">Fireside chat - Expanding Globally with Local Payment Methods</h4>
                                <p className="common-body1-text custom-text-grey800">India is among the top ten exporters in the world with exports worth $670 billion 2021-22 and a record-high export of services worth $250 billion.</p>
                            </div>
                        </div>
                        <SignUpBtn text='Learn more' linkUrl='/webinar'/>
                    </div>
                    <div className="flex flex-col gap-6 px-5 py-6 sm:py-10 sm:px-8 background-custom-grey50 rounded-3xl lg:w-1/2">
                        <h5 className="common-h5-heading">In this webinar we will discuss:</h5>
                        <ul className='list-disc pl-5 leading-7'>
                                <li className='custom-text-grey600'>Indian opportunity in cross border growth</li>
                                <li className='custom-text-grey600'>Consumer expectations and preferences internationally</li>
                                <li className='custom-text-grey600'> Approaching local markets with local payments</li>
                                <li className='custom-text-grey600'>How to unlock growth with local payment methods</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
       
       <AlternativePaymentsMethods/>
        

      


        {/* more product section  */}
        <OnePlatformSectionCards smallTitle={''} title={'Products that work well with Global Payment Methods'} card1Title={'Multi-Currency Accounts'} card1Para={'Accept payments in 33+ currencies with ease using our multi-currency accounts for faster and more efficient transactions'} card1link={'/multi-currency-accounts'} card2Title={'Card Payments'} card2Para={'Our platform meets global payment acceptance standards, providing seamless transactions across all major card networks.'} card2link={'/card-processing'} weAlsoHaveBtn1={'Recurring Payments'} weAlsoHaveBtn1Link='/recurring-payments-subscriptions' weAlsoHaveBtn2={'One Platform'} weAlsoHaveBtn2Link='/international-payments-platform'/>

        </>
    )
}

export default GlobalPaymentMethodsSection;