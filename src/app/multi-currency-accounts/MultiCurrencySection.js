import Image from 'next/image';
import SignUpBtn from '@/Components/SignUpBtn';
import OurPlatformSectionGridBox from '@/Components/OurPlatformSectionGridBox';

//currency-conversion section
import Globe from '@/Images/Mca/MCA.svg';
//grid section images
import GridImage1 from '@/Images/MultiCurrency/multi-currency.svg';
import GridImage2 from '@/Images/MultiCurrency/collection-payment-global.svg';
import GridImage3 from '@/Images/MultiCurrency/standard-pricing.svg';
import GridImage4 from '@/Images/MultiCurrency/track-money.svg';



import OnePlatformSectionCards from '@/Components/OnePlatformSectionCards';


function MultiCurrencySection()
{

   
   
    return(
          <>

          {/* currency-conversion-section  */}
            <section className="py-10 sm:py-20 px-4 sm:px-10 flex items-center justify-center">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center lg:max-w-6xl w-full">
                    <div className="flex flex-col gap-10 items-center lg:items-start">
                        <div className="flex flex-col gap-4 ">
                            <h2 className="common-h2-heading text-center lg:text-left">Global Fund Collection Made Easy with Multi-Currency Accounts</h2>
                            <div className="custom-body1-text custom-text-grey600 text-center lg:text-left">Set up multi currency accounts and collect funds from marketplaces, businesses and customers globally via Local & SWIFT payment</div>
                        </div>
                    </div>
                    <Image src={Globe} width={482} height={545} quality={100} alt='img' className=''/>
                </div>
            </section>


            {/* grid section  */}
             <section className="flex flex-col gap-10 sm:gap-14 items-center  px-4 py-14 sm:px-10 sm:py-20 lg:pt-32 lg:pb-20">
            <div className="flex flex-col items-center gap-2 sm:gap-4  max-w-5xl w-full">
                <h2 className="common-h2-heading  custom-text-black text-center matterfont ">Multi-use case solution for your business needs</h2>
            </div>
            <div className="flex flex-col gap-2.5">
                
                <OurPlatformSectionGridBox srNo={"01"} headingTitle={"Smooth payment collection"} para={"Easily manage multi-currency transactions, benefit from transparent pricing, instant notifications, and downloadable FIRC from the dashboard."} imageSrc={GridImage1} imageWidth={416} imageHeight={272} firstBoxContainsImage={false} imageGradientColorName='BlueGradient'/>
                <OurPlatformSectionGridBox srNo={"02"} headingTitle={"Collect payments globally"} para={"Collect payments locally in USD, GBP, EUR, and CAD. Collect global payments in 33 currencies from 180+ countries with a global currency account."} imageSrc={GridImage2} imageWidth={203} imageHeight={300} firstBoxContainsImage={true} imageGradientColorName='PurpleGradient'/>
                <OurPlatformSectionGridBox srNo={"03"} headingTitle={"Get transparent & standard pricing"} para={"No markup, hidden charges, or monthly/annual fees. Clear pricing, no surprises. Grow your business without extra costs."} imageSrc={GridImage3} imageWidth={312} imageHeight={312} firstBoxContainsImage={false} imageGradientColorName='PinkGradient'/>             
                <OurPlatformSectionGridBox srNo={"04"} headingTitle={"Track your money with ease"} para={"Enjoy complete transparency with our system. Receive notifications on your fund status at every step of the process."} imageSrc={GridImage4} imageWidth={407} imageHeight={272} firstBoxContainsImage={true} imageGradientColorName='GreenGradient'/>


            </div>
            <SignUpBtn linkUrl='/contact'/>
        </section>

        {/* more product section  */}
        <OnePlatformSectionCards smallTitle={''} title={'Products that leverage our recurring payments'} card1Title={'Global Payment Methods'} card1Para={'Offer local payment methods to your international customers. Boost customer trust and enjoy increased sales volumes.'} card1link={'/alternate-payment-methods'} card2Title={'Card Payments'} card2Para={'Our platform meets global payment acceptance standards, providing seamless transactions across all major card networks.'} card2link={'/card-processing'} weAlsoHaveBtn1={'One Platform'} weAlsoHaveBtn1Link='/international-payments-platform' weAlsoHaveBtn2={'Dynamic Checkout'} weAlsoHaveBtn2Link='/dynamic-checkout'/>

          </>
    )
}

export default MultiCurrencySection;