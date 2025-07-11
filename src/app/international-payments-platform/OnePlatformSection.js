import Image from 'next/image';
import SignUpBtn from '@/Components/SignUpBtn';
import OurPlatformSectionGridBox from '@/Components/OurPlatformSectionGridBox';

//grid section images
import GridImage1 from '@/Images/OnePlatform/manage-payments.png';
import GridImage2 from '@/Images/OnePlatform/generate-reports.png';
import GridImage3 from '@/Images/OnePlatform/settlement-reports.png';
import GridImage4 from '@/Images/OnePlatform/create-new-roles.png';
import GridImage5 from '@/Images/OnePlatform/two-step-authentication.png';
import GridImage6 from '@/Images/OnePlatform/transaction.png';


import PurpleGradient from '@/Images/OnePlatform/purple-gradient.png';
//FAQ Component
import FAQ from '@/Components/FAQ';

//Product Card Component
import OnePlatformSectionCards from '@/Components/OnePlatformSectionCards';



function OnePlatformSection()
{

    let FAQData=[
        {
            question:'How is PayGlocal different from other payment platforms?',
            answer:'International payments are processed differently than domestic transactions due to the processing entities and compliance regulations in the respective countries. PayGlocal’s orchestration engine is built for ensuring international transactions are treated appropriately providing better routing capabilities, offering better acceptance rates while minimizing payment risk. We also offer cross-border specific features such as payment Recurring Payments and standing instructions.'
        },
        {
            question:'What can PayGlocal offer for my e-commerce business?',
            answer:'PayGlocal is built with the vision of fostering cross-border trade and e-commerce as a segment is a major contributor to it. We have built native integrations with all major e-commerce plugins so that you can benefit from all our offerings with your existing set up. Partner with PayGlocal for all your inbound payments needs from around with world. We enable your global payment acceptance through various modes of payments in a seamless way.'
        },
        {
            question:'Is PayGlocal platform built for various sizes of businesses?',
            answer:'PayGlocal is built for flexibility, security, and scalability with a modular build that offers customization to ensure that both small and medium businesses as well as large enterprises can make the best use of the platform.'
        },
        {
            question:'What online payment modes does PayGlocal support?',
            answer:'PayGlocal supports a wide variety of global payment methods –debit and credit cards, 20+ global payment methods like Trustly, Grabpay, Sofort, Klarna, etc., and fund collection through multicurrency account. You can also set up payment links and buttons for receiving payments through these methods.'
        },
        {
            question:'Does PayGlocal help me collect payments from various countries?',
            answer:'Yes. PayGlocal supports both international and domestic payment acceptance for Indian merchants.'
        },
        {
            question:'How do I add a new payment method to my account?',
            answer:'If you want to add a new payment method or are unable to access a certain payment mode on the dashboard, write to us at merchant.support@payglocal.in'
        },
        {
            question:'Does PayGlocal work with other payment entities like banks, etc.?',
            answer:'PayGlocal actively works with licensed partners in the market to enable certain payment flows for India merchants. PayGlocal partners with these entities to enable a collection of payment flows that merchants need for their payment acceptance from their customers'
        }
    ]
    return(
        <>
        {/* grid Box section */}
        <section className="flex flex-col gap-10 sm:gap-14 items-center  px-4 py-14 sm:px-10 sm:py-20 lg:pt-32 lg:pb-20">
            <div className="flex flex-col items-center gap-2 sm:gap-4 ">
                <h2 className="common-h2-heading  custom-text-black text-center matterfont ">Payment acceptance made easy</h2>
                <p className={"common-body1-text custom-text-grey600  text-center "}>PayGlocal offers everything you need to secure and scale your payments.</p>
            </div>
            <div className="flex flex-col gap-2 5">
                
                <div className="flex flex-col lg:flex-row background-custom-grey50 one-platform-grid-two-box-container w-full rounded-3xl">
                    <div className="flex flex-col gap-2 lg:gap-4 px-6 py-8 sm:px-20 sm:py-14 lg:p-14 lg: lg:pl-20 background-custom-grey-50 lg:w-1/2">
                        <h6 className="common-h6-heading custom-text-grey500  text-center lg:text-start matterfont" >01</h6>
                        <h4 className="common-h4-heading  custom-text-black text-center lg:text-start matterfont">Manage payments from one platform</h4>
                        <p className={"custom-text-grey600  common-body1-text text-center lg:text-start "}>Accept payments with ease using through all major cards and global payment methods using payment links, buttons and automate payment collection via Recurring Payments.</p>
                    </div>
                    <div className="flex items-center justify-center lg:w-1/2 px-8 sm:p-14 relative overflow-hidden min-h-48 sm:min-h-60 lg:min-h-fit">
                        <Image src={GridImage1} width={611} height={450} alt='img' quality={100} className=' absolute -bottom-12 sm:-bottom-60 lg:-bottom-24 lg:-right-20 z-10'/>
                        <Image src={PurpleGradient} width={400} height={400} alt='img' quality={100} className=' absolute z-0 '/>

                        
                    </div>
                </div>
                <OurPlatformSectionGridBox srNo={"02"} headingTitle={"Keep your data safe and secure"} para={"Keep your customer data and payment information safe with end-to-end encryption, multifactor user authentication, and segregated data storage."} imageSrc={GridImage2} imageWidth={336} imageHeight={300} firstBoxContainsImage={true} imageGradientColorName={'GreenGradient'}/>
                <OurPlatformSectionGridBox srNo={"03"} headingTitle={"Monitor payments via reports"} para={"Get transaction details and stay in control with reports and dashboard."} imageSrc={GridImage3} imageWidth={404} imageHeight={300} firstBoxContainsImage={false} imageGradientColorName={'PinkGradient'}/>
                <OurPlatformSectionGridBox srNo={"04"} headingTitle={"Customisable user roles for secure access"} para={"Create custom roles and provide access for different users in your organization to stay flexible while being secure with your payment information."} imageSrc={GridImage4} imageWidth={336} imageHeight={300} firstBoxContainsImage={true} imageGradientColorName={'BlueGradient'}/>                
                <OurPlatformSectionGridBox srNo={"05"} headingTitle={"Keep your data safe and secure"} para={"Keep your customer data and payment information safe with end-to-end encryption, multifactor user authentication, and segregated data storage."} imageSrc={GridImage5} imageWidth={349} imageHeight={279} firstBoxContainsImage={false} imageGradientColorName={'PurpleGradient'}/>
                <OurPlatformSectionGridBox srNo={"06"} headingTitle={"Transaction Dashboard"} para={"View your aggregate payment details at one place to see a snapshot of how your business is performing."} imageSrc={GridImage6} imageWidth={366} imageHeight={279} firstBoxContainsImage={true} imageGradientColorName={'GreenGradient'}/>

            </div>
            <SignUpBtn linkUrl='/contact'/>
        </section>

        {/* product card section  */}
        <OnePlatformSectionCards smallTitle={''} title={'Products that work well with One Platform'} card1Title={'Card Payments'} card1Para={'Our platform meets global payment acceptance standards, providing seamless transactions across all major card networks '} card1link={'/card-processing'} card2Title={'Multi-Currency Accounts'} card2Para={'Accept payments in 33+ currencies with ease using our multi-currency accounts for faster and more efficient transactions.'} card2link={'/multi-currency-accounts'} weAlsoHaveBtn1={'Recurring Payments'} weAlsoHaveBtn1Link='/recurring-payments-subscriptions' weAlsoHaveBtn2={'Dynamic Checkout'} weAlsoHaveBtn2Link='/dynamic-checkout'/>
        
        {/* section 3 - FAQ */}
        <FAQ FAQData={FAQData}/>

        </>
    )
}
export default OnePlatformSection;