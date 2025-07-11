

//FAQ component
import FAQ from '@/Components/FAQ';
import AlternativePaymentsMethods from '@/Components/AlternativePaymentsMethods';
import PaymentMethodPagesSection from '@/Components/PaymentMethodPagesSection';


function GiropaySection()
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
        {/* Feature section */}
        <PaymentMethodPagesSection title={'Giropay'} methodType={'Bank Transfer'} cunsumerContry={'Germany (DE)'} paymentCurrency={'Euro (EUR)'} settlementCurrency={'Indian Rupees (INR)'} chargeback='No' minimunTransactionAmount={'EUR 5'} maximumTransactionAmount1={'EUR 9500'} timeout={'60 minutes'} />

        {/* Alternate Payments methods section  */}
        <AlternativePaymentsMethods/>


        {/* FAQ  */}
        <FAQ FAQData={FAQData}/>
        </>
    )
}

export default GiropaySection;