import Image from 'next/image';
import SignUpBtn from '@/Components/SignUpBtn';

//highlight section images
import Code from '@/Images/RecurringPayments/code.svg';
import Smile from '@/Images/RecurringPayments/smile.svg';
import Calendar from '@/Images/RecurringPayments/calendar.svg';
import Round from '@/Images/RecurringPayments/round.svg';


//easy step section images
import Bulb from '@/Images/RecurringPayments/bulb.svg';


import OnePlatformSectionCards from '@/Components/OnePlatformSectionCards';
import FAQ from '@/Components/FAQ';
import RecurringPaymentsHighlightCard from '@/Components/SmallComponents/RecurringPaymentsHighlightCard';
import RecurringSetupDebitStepCard from '@/Components/SmallComponents/RecurringSetupDebitStepCard';



function RecurringPaymentsSection()
{

    let FAQData=[
        {
            question:'What are PayGlocal Recurring Payments?',
            answer:'PayGlocal Recurring Payments can be used to set up recurring payments, standing instructions or payment subscriptions. These are used when a business needs to collect a fixed or variable payment amount from their customers periodically. Setting up Recurring Payments automates repetitive payment collection reducing overheads and human errors.'
        },
        {
            question:'What payment methods can be used for Recurring Payments?',
            answer:'PayGlocal supports Recurring Payments only on international credit and debit cards. These can be set up through our API fields on various payment flows such as checkout, payments links or payment buttons.'
        },
        {
            question:"How can I set up Recurring Payments for my customers? How do I manage and track these payments?",
            answer:'You can set up Recurring Payments via API connection with PayGlocal. You can also setup auto debits on PayGlocal dashboard after you enable this feature. Recurring Payments can be created directly based on simple rules or through the API. Customer consent is required to set up Recurring Payments. You can provide the option to your customers during the regular payment flow to accept a Recurring Payment. Tracking and managing the payments made via recurring payments is also possible through the dashboard itself.'
        },
        {
            question:'How long does it take to go live with PayGlocal Recurring Payments?',
            answer:'PayGlocal supports recurring payments through the one-time, single integration during onboarding. You can simply write to us at merchant.support@payglocal.in to enable Recurring Payments on your account.'
        },

    ]
   
    return(
        <>

        {/* Highlights  section*/}
        <section className="py-10 sm:py-20 px-4 sm:px-10 flex items-center justify-center background-custom-white ">
            <div className="flex flex-col background-custom-grey50 gap-10 sm:gap-20 py-14 px-5 lg:py-20 sm:px-14 rounded-3xl max-width-1000">
                <div className="flex flex-col gap-4 items-center">
                    <h2 className="common-h2-heading custom-text-black text-center max-w-2xl">Multi-use case solution for your business needs</h2>
                    <p className={"common-body1-text cusotm-text-grey800 text-center "}>Support use cases for delayed shipments, recurring payments and unscheduled debits for your business.</p>
                </div>
                <div className="flex flex-col gap-10 sm:gap-16 lg:gap-20 ">
                    
                    <div className="flex flex-col lg:flex-row  gap-10 sm:gap-16 lg:gap-20 items-center">
                        <RecurringPaymentsHighlightCard img={Code} imgwidth={100} imgheight={100} title={'API based'} para={'Full service API to create charges and debit as per your business need'} />
                        <RecurringPaymentsHighlightCard img={Smile} imgwidth={100} imgheight={100} title={'Seamless and flexible'} para={'An unmatched approval rate for your international card payments'} />

                    </div>
                    <div className="flex flex-col lg:flex-row  gap-10 sm:gap-16 lg:gap-20 items-center">
                    
                        <RecurringPaymentsHighlightCard img={Calendar} imgwidth={100} imgheight={100} title={'Easy Management'} para={'Manage all your subscriptions and debits at one place through our One platform'} />
                        <RecurringPaymentsHighlightCard img={Round} imgwidth={100} imgheight={100} title={'Auto Debit'} para={"Leverage PayGlocal's Auto-debit feature for continued revenue and service delivery to your customers."} />

                    
                    </div>
                    
                </div>
            </div>
        </section>

        {/* easy steps section  */}
        <section className="py-10 sm:py-20 px-4 sm:px-10 flex items-center justify-center">
            <div className="flex flex-col gap-8 sm:gap-8 items-center max-width-1000 w-full">
                <h2 className="common-h2-heading text-center">Setup and Debit in easy steps</h2>
                <div className="flex gap-2 flex-col lg:flex-row">
                    <RecurringSetupDebitStepCard title={'Create'} para={'Create Recurring Payment via API as per your business use case'} classname={' custom-text-blue1 '} />
                    <RecurringSetupDebitStepCard title={'Store'} para={'Receive and store Mandate information for future use'} classname={' custom-text-purple1 '} />
                    <RecurringSetupDebitStepCard title={'Debit'} para={'Charge your customers as per your Terms agreed with them'} classname={' custom-text-green1 '} />

                </div>
                <div className="flex flex-col sm:flex-row border custom-border-grey200 gap-7 max-w-4xl w-full py-6 px-8 rounded-xl sm:rounded-full items-center">
                    <Image src={Bulb} width={60} height={60} quality={100} alt='img' className=''/>
                    <h6 className="common-h6-heading custom-text-grey600 text-center sm:text-left">PayGlocal SI validates if a card supports subscriptions or recurring payments during registration to a ensure higher success rate</h6>
                </div>  
                <SignUpBtn text="Sign Up Now" linkUrl='/contact' />
            </div>  
        </section>
       

      


        {/* more product section  */}
        <OnePlatformSectionCards smallTitle={''} title={'Products that work well with Recurring Payments'} card1Title={'Card Payments'} card1Para={'Our platform meets global payment acceptance standards, providing seamless transactions across all major networks.'} card1link={'/card-processing'} card2Title={'Dynamic Checkout'} card2Para={'A unified yet dynamic checkout for your global customers to pay through global cards and alternative payment methods'} card2link={'/dynamic-checkout'} weAlsoHaveBtn1={'Multi-Currency Accounts'} weAlsoHaveBtn1Link='/multi-currency-accounts' weAlsoHaveBtn2={'Global Payment Methods'} weAlsoHaveBtn2Link='/alternate-payment-methods'/>
        
        {/* FAQ Section  */}
        <FAQ FAQData={FAQData}/>
        </>
    )
}

export default RecurringPaymentsSection;