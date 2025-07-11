

//FAQ component
import FAQ from '@/Components/FAQ';
import AlternativePaymentsMethods from '@/Components/AlternativePaymentsMethods';
import PaymentMethodPagesSection from '@/Components/PaymentMethodPagesSection';


function TrustlySection()
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
        {/* Features section */}
        <PaymentMethodPagesSection title={'Trustly'} methodType={'Bank Transfer'} isMultipleConsumerContry={true} multipleConsumerContryValue={['Austria (AT)','Denmark (DK)','Germany (DE)','Estonia (EE)','Spain (ES)','Finland (FI)','United Kingdom (GB)','Latvia (LV)','Lithuania (LT)','Netherlands (NL)','Norway (NO)','Sweden (SE)']} isMultiplePaymentCurrencies={true} multiplePaymentCurrenciesValue={['Euro (EUR)','Pound Sterling (GBP)']} settlementCurrency={'Indian Rupees (INR)'} chargeback='No' minimunTransactionAmount={'EUR 5'} maximumTransactionAmount1={'EUR 1000 (Sweden & Finland:'} MaximumTransactionAmount2='EUR 2000)' timeout={'7 days'} />

        {/* <section className="flex justify-center items-center  px-4 py-10 sm:px-10 sm:py-20 background-custom-grey50">
            <div className="p-6 sm:p-10 flex flex-col gap-5 sm:gap-10 background-custom-white rounded-3xl border border-custom-grey200 max-w-5xl w-full">
                <div className="flex flex-col gap-2 sm:gap-4 items-center">
                    <div className={"common-all-caps custom-text-grey500 text-center matterfont font-bold "+jetBrains_Mono.className}>Trustly</div>
                    <h2 className="common-h2-heading text-center">Features</h2>
                </div>
                <div className="flex flex-col gap-5 sm:gap-10">
                    <div className="border-t border-custom-grey200  pt-5 sm:pt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                        <h6 className="common-h6-heading sm:w-1/2">Method Type</h6>
                        <div className="common-body1-text matterfont font-light sm:w-1/2 ">Bank Transfer</div>
                    </div>
                    <div className="border-t border-custom-grey200  pt-5 sm:pt-10 flex flex-col sm:flex-row  gap-4 sm:gap-10">
                        <h6 className="common-h6-heading sm:w-1/2">Consumer Country</h6>
                        <div className="common-body1-text matterfont font-light sm:w-1/2 flex flex-col gap-2 ">
                            <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2 ">
                                <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                <div className="common-body1-text font-light">Austria (AT)</div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2">
                                <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                <div className="common-body1-text font-light">Denmark (DK)</div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2">
                                <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                <div className="common-body1-text font-light">Germany (DE)</div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2">
                                <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                <div className="common-body1-text font-light">Estonia (EE)</div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2">
                                <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                <div className="common-body1-text font-light">Spain (ES)</div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2">
                                <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                <div className="common-body1-text font-light">Finland (FI)</div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2">
                                <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                <div className="common-body1-text font-light">United Kingdom (GB)</div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2">
                                <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                <div className="common-body1-text font-light">Latvia (LV)</div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2">
                                <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                <div className="common-body1-text font-light">Lithuania (LT)</div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2">
                                <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                <div className="common-body1-text font-light">Netherlands (NL)</div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2">
                                <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                <div className="common-body1-text font-light">Norway (NO)</div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2">
                                <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                <div className="common-body1-text font-light">Sweden (SE)</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-custom-grey200  pt-5 sm:pt-10 flex flex-col sm:flex-row  gap-4 sm:gap-10">
                        <h6 className="common-h6-heading sm:w-1/2">Payment Currency</h6>
                        <div className="common-body1-text matterfont font-light sm:w-1/2 flex flex-col gap-2 ">
                            <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2 ">
                                <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                <div className="common-body1-text font-light">Euro (EUR)</div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2">
                                <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                <div className="common-body1-text font-light">Pound Sterling (GBP)</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-custom-grey200  pt-5 sm:pt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                        <h6 className="common-h6-heading sm:w-1/2">Settlement Currency</h6>
                        <div className="common-body1-text matterfont font-light sm:w-1/2 ">Indian Rupees (INR)</div>
                    </div>
                    <div className="border-t border-custom-grey200  pt-5 sm:pt-10 flex flex-col sm:flex-row  gap-4 sm:gap-10">
                         <h6 className="common-h6-heading sm:w-1/2">Refund Supported </h6>
                         <div className="common-body1-text matterfont font-light sm:w-1/2 flex flex-col gap-2 ">
                            <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2 ">
                                <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                <div className="common-body1-text font-light">Full refund</div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2">
                                <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                <div className="common-body1-text font-light">Partial refund</div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2">
                                <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                <div className="common-body1-text font-light">Multiple Partial refund</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-custom-grey200  pt-5 sm:pt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                        <h6 className="common-h6-heading sm:w-1/2">Chargeback</h6>
                        <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2">
                            <Image src={BlueCancel} width={37} height={37} quality={100} alt='img' className=''/>
                            <div className="common-body1-text font-light">No</div>
                        </div>
                    </div>
                        <div className="border-t border-custom-grey200  pt-5 sm:pt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                        <h6 className="common-h6-heading sm:w-1/2">Minimum Transaction Amount </h6>
                        <div className="common-body1-text matterfont font-light sm:w-1/2 ">EUR 5</div>
                    </div>
                    <div className="border-t border-custom-grey200  pt-5 sm:pt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                        <h6 className="common-h6-heading sm:w-1/2">Maximum Transaction Amount</h6>
                        <div className="common-body1-text matterfont font-light sm:w-1/2 ">EUR 1000 <br />(Sweden & Finland: EUR 2000)</div>
                    </div>
                    <div className="border-t border-custom-grey200  pt-5 sm:pt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                        <h6 className="common-h6-heading sm:w-1/2">Timeout</h6>
                        <div className="common-body1-text matterfont font-light sm:w-1/2 ">7 days</div>
                    </div>
                </div>

            </div>
        </section> */}

        {/* Alternate Payments methods section  */}
        <AlternativePaymentsMethods/>


        {/* FAQ  */}
        <FAQ FAQData={FAQData}/>
        </>
    )
}

export default TrustlySection;