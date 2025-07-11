
//FAQ component
import FAQ from '@/Components/FAQ';
import AlternativePaymentsMethods from '@/Components/AlternativePaymentsMethods';
import PaymentMethodPagesSection from '@/Components/PaymentMethodPagesSection';


function INBSection()
{

    let FAQData=[
        {
            question:'What are global payment methods?',
            answer:'Global payment methods, also referred to as alternate payment methods are non-cash payments that are preferred modes of payments in different geographies.These can be bank transfers, local card schemes, mobile payments or e- wallets.'
        },
        {
            question:'Can I add global payment methods to my current set up?',
            answer:'You can access up to 40 local payment methods once you onboard and integrate with PayGlocal. Click here to sign up for a demo.If you are already onboarded with PayGlocal, you can reach out to the support team to enable alternative payment methods for your account.,'
        },
        {
            question:'How are local payment methods offered to the customers?',
            answer:'You can add the option of paying via local payment methods through your existing payment channels.PayGlocal supports global payments via checkout page, payment links and payment buttons.'
        },
        {
            question:'How can I get a payment method not listed already?',
            answer:'We have listed only some of the supported payment methods on this page for reference. To know if we support a particular payment method not listed on the page, you can write to us at merchant. support@payglocal.in, we will respond back to you promptly.'
        },
    ]
   
    return(
        <>
        {/* Grid Box section */}
        <PaymentMethodPagesSection title={'Indian Net Banking (INB)'} methodType={'Bank Transfer'} cunsumerContry={'Indian (IN)'}  paymentCurrency={'Indian Rupees (INR)'} settlementCurrency={'Indian Rupees (INR)'} chargeback='No' minimunTransactionAmount={'INR 20'} maximumTransactionAmount1={'Consumer Bank defines upper limit'} timeout={'10 minutes'} />

        {/* Alternate Payments methods section  */}
        <AlternativePaymentsMethods/>


        {/* FAQ  */}
        <FAQ FAQData={FAQData}/>
        </>
    )
}

export default INBSection;