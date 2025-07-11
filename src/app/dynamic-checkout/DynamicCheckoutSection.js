import { JetBrains_Mono } from 'next/font/google';
import SignUpBtn from '@/Components/SignUpBtn';
import OurPlatformSectionGridBox from '@/Components/OurPlatformSectionGridBox';

//grid section image
import GridImage1 from '@/Images/DynamicCheckout/detailed-customisation.svg';
import GridImage2 from '@/Images/DynamicCheckout/seamless-flow.svg';
import GridImage3 from '@/Images/DynamicCheckout/easy-integration.svg';
import GridImage4 from '@/Images/DynamicCheckout/next-level-protection.svg';
import OnePlatformSectionCards from '@/Components/OnePlatformSectionCards';

//FAQ component
import FAQ from '@/Components/FAQ';

//integration sections images
import Shopify from '@/Images/DynamicCheckout/shopify.svg';
import WooComerce from '@/Images/DynamicCheckout/woo-commerce.svg';
import Shopaccino from '@/Images/DynamicCheckout/shopaccino.svg';
import Magneto from '@/Images/DynamicCheckout/magneto.svg';
import Opencart from '@/Images/DynamicCheckout/opencart.svg';
import PluginInfoCircle from '@/Components/SmallComponents/PluginLogoCIrcle';




const jetBrains_Mono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})

function DynamicCheckoutSection()
{

    let FAQData=[
        {
            question:'How is PayGlocal different from other payment platforms?',
            answer:'International payments are processed differently than domestic transactions due to the processing entities and compliance regulations in the respective countries. PayGlocal’s orchestration engine is built for ensuring international transactions are treated appropriately providing better routing capabilities, offering better acceptance rates while minimizing payment risk. We also offer cross-border specific features such as Recurring Payments and standing instructions.'
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
            question:'What currencies does PayGlocal support?',
            answer:'PayGlocal supports all the top global currencies for transaction processing. Our platform accepts payments 130+ transacting currencies in various countries for Indian merchants.'
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
            answer:'PayGlocal is an authorised online payment aggregator and has received a license from RBI under Guidelines on Regulation of Payment Aggregators and Payment Gateways dated March 17, 2020. PayGlocal also partners with other banks, payment aggregators to enable services via partnership model where either parties can play a role of regulated entity and the other becomes a technology service provider. '
        }
    ]
   
    return(
        <>
        {/* Grid Box section */}
        <section className="flex flex-col gap-10 sm:gap-14 items-center  px-4 py-14 sm:px-10 sm:py-20 lg:pt-32 lg:pb-20">
            <div className="flex flex-col items-center gap-2 sm:gap-4 max-w-3xl w-full">
                <h2 className="common-h2-heading  custom-text-black text-center matterfont ">Checkout for businesses with big ambitions</h2>
                <p className={"common-body1-text custom-text-grey600  text-center "}>With our customizable, fast and secure checkout, make your worldwide customers continue to experience the level of trust and comfort they expect from you.</p>
            </div>
            <div className="flex flex-col gap-2 5">
                
                <OurPlatformSectionGridBox srNo={"01"} headingTitle={"Manage payments from one platform"} para={"Ensure the payment ceremony is not disconnected from the experience your customers see on your e-shop."} imageSrc={GridImage1} imageWidth={362} imageHeight={300} firstBoxContainsImage={false} imageGradientColorName='PinkGradient' />
                <OurPlatformSectionGridBox srNo={"02"} headingTitle={"Seamless Flow and Multiple Options"} para={"Choose the payment flow that suits your needs and ensure seamless final leg of sale for your customers."} imageSrc={GridImage2} imageWidth={295} imageHeight={300} firstBoxContainsImage={true} imageGradientColorName='GreenGradient'/>
                <OurPlatformSectionGridBox srNo={"03"} headingTitle={"Easy Integration"} para={"With a plethora of options, choose the checkout integration that works best for you, your business and your customers."} imageSrc={GridImage3} imageWidth={465} imageHeight={300} firstBoxContainsImage={false} imageGradientColorName='PurpleGradient'/>
                <OurPlatformSectionGridBox srNo={"04"} headingTitle={"Next-level protection"} para={"Built with security at its heart so that the customer and payment information stays secure as it travels across the internet."} imageSrc={GridImage4} imageWidth={334} imageHeight={300} firstBoxContainsImage={true} imageGradientColorName='BlueGradient'/>                


            </div>
            <SignUpBtn linkUrl='/contact'/>
        </section>

        {/* Integration & plugin section  */}
        <section className="flex items-center justify-center background-custom-grey50 px-4 sm:px-10 pt-20 pb-10  sm:py-20">
            <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-10 lg:gap-24 max-w-6xl w-full">
                <div className="flex justify-center items-center gap-5 flex-wrap">
                    <PluginInfoCircle  img={Shopify} imgwidth={106} imgheight={40}  link={'/integration/shopify'}/>
                    <PluginInfoCircle  img={WooComerce} imgwidth={116} imgheight={24}  link={'/integration/woocommerce'}/>
                    <PluginInfoCircle  img={Shopaccino} imgwidth={140} imgheight={24}  link={'/integration/shopaccino'}/>
                    <PluginInfoCircle  img={Magneto} imgwidth={106} imgheight={28} link={'/integration/magneto'}/>
                    <PluginInfoCircle  img={Opencart} imgwidth={123} imgheight={24} link={'/integration/opencart'} />
                </div>
                <div className="flex flex-col items-center lg:items-start gap-10">
                    <div className="flex flex-col gap-4 lg:max-w-lg ">
                        <div className={"common-all-caps custom-text-grey500 font-bold  text-center lg:text-left "+jetBrains_Mono.className}>Click & Connect</div>
                        <h2 className="common-h2-heading font-medium custom-text-black text-center lg:text-left ">Integrations & Plugins</h2>
                        <p className={"custom-text-grey600 font-medium common-body1-text  text-center lg:text-left "}>We obsess over the maze of gateways and financial institutions that make up the global economic landscape so that your teams can build what you need on one platform.</p>
                    </div>
                    <SignUpBtn text='Learn more' linkUrl='/docs'/>
                </div>
            </div>
        </section>


        {/* more product section  */}
        <OnePlatformSectionCards smallTitle={''} title={'Products that leverage our one platform'} card1Title={'Card Payments'} card1link={'/card-processing'} card1Para={'Our platform meets global payment acceptance standards, providing seamless transactions across all major card networks.'} card2Title={'One Platform'} card2link={'/international-payments-platform'} card2Para={'Do more with less. Set up, view, manage and settle your payments from a single place.'} weAlsoHaveBtn1={'Global Payment Methods'} weAlsoHaveBtn1Link={'/alternate-payment-methods'} weAlsoHaveBtn2={'Recurring Payments'} weAlsoHaveBtn2Link={'/recurring-payments-subscriptions'}/>
        
        {/* FAQ  */}
        <FAQ FAQData={FAQData}/>
        </>
    )
}

export default DynamicCheckoutSection;