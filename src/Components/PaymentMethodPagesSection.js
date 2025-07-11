import {  JetBrains_Mono, Manrope } from 'next/font/google';

import Image from 'next/image';

//Features section image
import BlueCheckmark from '@/Images/Grabpay/blue-checkmark.svg';
import BlueCancel from '@/Images/Grabpay/blue-cancel.svg';

const jetBrains_Mono=JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})
const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})

function PaymentMethodPagesSection({title,methodType,cunsumerContry,isMultipleConsumerContry=false,multipleConsumerContryValue=[],paymentCurrency,isMultiplePaymentCurrencies=false,multiplePaymentCurrenciesValue=[],payIn30DaysTitle=false,settlementCurrency,chargeback='No',minimunTransactionAmount,maximumTransactionAmount1,MaximumTransactionAmount2='',timeout})
{ 
    return(
        <>
     <section className="flex justify-center items-center  px-4 py-10 sm:px-10 sm:py-20 background-custom-grey50">
            <div className="p-6 sm:p-10 flex flex-col gap-5 sm:gap-10 background-custom-white rounded-3xl border border-custom-grey200 max-w-5xl w-full">
                <div className="flex flex-col gap-2 sm:gap-4 items-center">
                    <div className={"common-all-caps custom-text-grey500 text-center matterfont font-bold "+jetBrains_Mono.className}>{title}</div>
                    <h2 className="common-h2-heading text-center">Features</h2>
                </div>
                <div className="flex flex-col gap-5 sm:gap-10">
                    <div className="border-t border-custom-grey200  pt-5 sm:pt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                        <h6 className={"common-h6-text font-bold sm:w-1/2 "+manrope.className}>Method Type</h6>
                        <div className="common-body1-text matterfont font-light sm:w-1/2 ">{methodType}</div>
                    </div>
                    <div className="border-t border-custom-grey200  pt-5 sm:pt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                        <h6 className={"common-h6-text font-bold sm:w-1/2 "+manrope.className}>Consumer Country</h6>
                       {isMultipleConsumerContry? //sofort , klarna , trustly have multiple consumer contries
                        <div className="common-body1-text matterfont font-light sm:w-1/2 flex flex-col gap-2 ">
                       {     multipleConsumerContryValue.length>0&&multipleConsumerContryValue.map((element)=>{
                                return<div key={element} className="flex items-center gap-2 sm:gap-5 sm:w-1/2 ">
                                        <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                        <div className="common-body1-text font-light">{element}</div>
                                    </div>
                           })}
                        </div>
                       : <div className="common-body1-text matterfont font-light sm:w-1/2 ">{cunsumerContry}</div>}
                    </div>
                    <div className="border-t border-custom-grey200  pt-5 sm:pt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                        <h6 className={"common-h6-text font-bold sm:w-1/2 "+manrope.className}>{payIn30DaysTitle?'Pay in 30 days':'Payment Currency'}</h6>
                        {isMultiplePaymentCurrencies? //sofort , klarna , trustly have multiple consumer contries
                        <div className="common-body1-text matterfont font-light sm:w-1/2 flex flex-col gap-2 ">
                       {     multiplePaymentCurrenciesValue.length>0&&multiplePaymentCurrenciesValue.map((element,index)=>{
                                return<div key={index} className="flex items-center gap-2 sm:gap-5 sm:w-1/2 ">
                                        <Image src={BlueCheckmark} width={37} height={37} quality={100} alt='img' className=''/>
                                        <div className="common-body1-text font-light">{element}</div>
                                    </div>
                           })}
                        </div>
                        :<div className="common-body1-text matterfont font-light sm:w-1/2 ">{paymentCurrency}</div>}
                    </div>
                    <div className="border-t border-custom-grey200  pt-5 sm:pt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                        <h6 className={"common-h6-text font-bold sm:w-1/2 "+manrope.className}>Settlement Currency</h6>
                        <div className="common-body1-text matterfont font-light sm:w-1/2 ">{settlementCurrency}</div>
                    </div>
                    <div className="border-t border-custom-grey200  pt-5 sm:pt-10 flex flex-col sm:flex-row  gap-4 sm:gap-10">
                         <h6 className={"common-h6-text font-bold sm:w-1/2 "+manrope.className}>Refund Supported </h6>
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
                        <h6 className={"common-h6-text font-bold sm:w-1/2 "+manrope.className}>Chargeback</h6>
                        <div className="flex items-center gap-2 sm:gap-5 sm:w-1/2">
                            <Image src={chargeback.toLowerCase()=='yes'?BlueCheckmark:BlueCancel} width={37} height={37} quality={100} alt='img' className=''/>
                            <div className="common-body1-text font-light">{chargeback}</div>
                        </div>
                    </div>
                        <div className="border-t border-custom-grey200  pt-5 sm:pt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                        <h6 className={"common-h6-text font-bold sm:w-1/2 "+manrope.className}>Minimum Transaction Amount </h6>
                        <div className="common-body1-text matterfont font-light sm:w-1/2 ">{minimunTransactionAmount}</div>
                    </div>
                    <div className="border-t border-custom-grey200  pt-5 sm:pt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                        <h6 className={"common-h6-text font-bold sm:w-1/2 "+manrope.className}>Maximum Transaction Amount</h6>
                        {/* <div className="flex flex-col"></div> */}
                        <div className="common-body1-text matterfont font-light sm:w-1/2 ">{maximumTransactionAmount1} {MaximumTransactionAmount2.length>0&& <br />} {MaximumTransactionAmount2}</div>
                       

                    </div>
                    <div className="border-t border-custom-grey200  pt-5 sm:pt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                        <h6 className={"common-h6-text font-bold sm:w-1/2 "+manrope.className}>Timeout</h6>
                        <div className="common-body1-text matterfont font-light sm:w-1/2 ">{timeout}</div>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}

export default PaymentMethodPagesSection;


