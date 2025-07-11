import SignUpBtn from '@/Components/SignUpBtn';
import OurPlatformSectionGridBox from '@/Components/OurPlatformSectionGridBox';

//highlight section images
import Graph from '@/Images/CardPayments/graph.svg';
import Comment from '@/Images/CardPayments/comment.svg';
import Doller from '@/Images/CardPayments/doller.svg';

//grid box section images
import GridImage1 from '@/Images/CardPayments/payment-orchestration.svg';
import GridImage2 from '@/Images/CardPayments/local-currencies.svg';
import GridImage3 from '@/Images/CardPayments/security-as-its-core.svg';
import GridImage4 from '@/Images/CardPayments/embadded-risk-engine.svg';
import OnePlatformSectionCards from '@/Components/OnePlatformSectionCards';
import FAQ from '@/Components/FAQ';
import CardPaymentsFeatureCard from '@/Components/SmallComponents/CardPaymentsFeatureCard';




function CardPaymentsSection()
{

    let FAQData=[
        {
            question:'Which cards does PayGlocal accept for online debit and credit card payment processing?',
            answer:'PayGlocal supports all major international and domestic credit and debit cards such as Visa, MasterCard and RuPay. If you are looking for a specific card brand or card type, write to us at merchant.support@payglocal.in.'
        },
        {
            question:'How long do online debit card, credit card and global payments take to process?',
            answer:'Card payments are authorized almost immediately unless suspected of fraud. PayGlocal works with its partners to ensure the settlement of funds is done for merchants as per agreed timelines for various payment methods.'
        },
        {
            question:"Is PayGlocal's platform built for businesses of various sizes?",
            answer:'PayGlocal is built for flexibility, security, and scalability with a modular build that offers customization to ensure that both small and medium businesses as well as large enterprises can make the best use of the platform.'
        },
        {
            question:'Do I need to be PCI-DSS compliant to use card payment acceptance through PayGlocal?',
            answer:'All merchants that process or transmit cardholder data from their own platform must be PCI-DSS compliant. If you are not PCI-DSS compliant, the processing of card details and payment can be managed through PayGlocal hosted payment page product as PayGlocal is PCI-DSS compliant. Hence, a merchant does not have to be PCI-DSS compliant to accept card payments through PayGlocal platform.'
        },
        {
            question:'Do I have the option to refund card payment transactions?',
            answer:'Yes. PayGlocal offers refunds, both partial and full, through APIs and our merchant portal. PayGlocal also offers full transaction lifecycle management through our platform to merchants to manage their payments from one single login.'
        },
    ]
   
    return(
        <>

        {/* Highlights  */}
        <section className="py-10 sm:py-20 px-4 sm:px-10 flex items-center justify-center">
            <div className="flex flex-col background-custom-grey50 gap-10 sm:gap-20 py-14 px-5 lg:py-20 sm:px-14 rounded-3xl">
                <h2 className="common-h2-heading custom-text-black text-center ">Here&apos;s what you&apos;ll get</h2>
                <div className="flex flex-col lg:flex-row gap-12 items-center sm:gap-16 lg:gap-20">
                    <CardPaymentsFeatureCard img={Graph} imgwidth={100} imgheight={100} title={'An unmatched approval rate for your international card payments'} />
                    <CardPaymentsFeatureCard img={Comment} imgwidth={100} imgheight={100} title={'Seamless processing with enhanced messaging to international issuers'} />
                    <CardPaymentsFeatureCard img={Doller} imgwidth={100} imgheight={100} title={'Competitive pricing to reduce your cost burden'} />

                </div>
            </div>
        </section>
        {/* Grid Box section */}
        <section className="flex flex-col gap-10 sm:gap-14 items-center  px-4 py-14 sm:px-10 sm:py-20 lg:pt-32 lg:pb-20">
            <div className="flex flex-col items-center gap-2 sm:gap-4  max-w-5xl w-full">
                <h2 className="common-h2-heading  custom-text-black text-center matterfont ">Let your customers experience frictionless, safe and secure payments</h2>
                <p className={"common-body1-text custom-text-grey600  text-center max-w-3xl "}>With our customizable, fast and secure checkout, make your worldwide customers continue to experience the level of trust and comfort they expect from you.</p>
            </div>
            <div className="flex flex-col gap-2 5">
                
                <OurPlatformSectionGridBox srNo={"01"} headingTitle={"Payment Orchestration"} para={"Our patent pending orchestration engine enhances transaction messages, applies appropriate protocols and routes them appropriately for ensuring unmatched approvals."} imageSrc={GridImage1} imageWidth={420} imageHeight={218} firstBoxContainsImage={false} imageGradientColorName='BlueGradient'/>
                <OurPlatformSectionGridBox srNo={"02"} headingTitle={"Local Currencies"} para={"With PayGlocal, you offer your customers the flexibility to pay in their local and familiar currency."} imageSrc={GridImage2} imageWidth={257} imageHeight={300} firstBoxContainsImage={true} imageGradientColorName='PinkGradient'/>
                <OurPlatformSectionGridBox srNo={"03"} headingTitle={"Security at its core"} para={"With end-to-end encryption, customer and payment information stays secure across the lifecycle of a transaction."} imageSrc={GridImage3} imageWidth={387} imageHeight={240} firstBoxContainsImage={false} imageGradientColorName='PurpleGradient'/>
                <OurPlatformSectionGridBox srNo={"04"} headingTitle={"Embedded Risk Engine"} para={"Every transaction goes through our Risk engine to ensure it carries the right data for worldwide issuers."} imageSrc={GridImage4} imageWidth={359} imageHeight={300} firstBoxContainsImage={true} imageGradientColorName='GreenGradient'/>                


            </div>
            <SignUpBtn linkUrl='/contact'/>
        </section>

      


        {/* more product section  */}
        <OnePlatformSectionCards smallTitle={''} title={'Products that work well with Card payments'} card1Title={'Global Payment Methods'} card1Para={'offer local payment methods to your international customers. Boost customer trust and increase sales volumes'} card2Title={'Recurring Payments'} card1link={'/alternate-payment-methods'} card2link={'/recurring-payments-subscriptions'} card2Para={'for all your mandate management needs and leveraging PayGlocal Auto Debit functionality'} weAlsoHaveBtn1={'Multi-Currency Accounts'} weAlsoHaveBtn1Link='/multi-currency-accounts'  weAlsoHaveBtn2={'Dynamic Checkout' } weAlsoHaveBtn2Link='/dynamic-checkout'/>
        <FAQ FAQData={FAQData}/>
        </>
    )
}

export default CardPaymentsSection;