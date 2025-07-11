import Image from 'next/image';

// images 
import PolicyPreview from '@/Images/RefundPolicy/policy-review.png';


 function RefundPolicySection (){





  return (
        <section className={"flex flex-col gap-10 lg:gap-12 justify-center items-center px-4 py-10 sm:px-10 sm:py-10  lg:py-20  background-custom-white "}>
            {/* Introduction section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Introduction</h4>
                <p className="common-body1-text custom-text-grey900">This policy is created by PayGlocal Technologies Private Limited (hereinafter referred to as the <strong>&quot;Company&quot;</strong> or <strong>PayGlocal</strong> or <strong>“We”</strong>) to clearly document guidelines & practices followed by the Company for refund in the course of its Payment Aggregator <strong>(“PA”)</strong> and Payment Aggregator – Cross Border (“PA-CB”) businesses. The Reserve Bank of India <strong>(“RBI”)</strong> by means of Guidelines on Regulation of Payment Aggregators and Payment Gateways <strong>(“PA Guidelines”) </strong> and Regulations on Payment Aggregator – Cross Border <strong>(“PA-CB Regulations”)</strong> regulates PA and PA-CB intermediaries in the payment ecosystem.</p>
            </div>

            {/* Objective section */}
              <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Objective</h4>
                <ol className="list-decimal pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Customer requesting for refund of a transaction to the merchant.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">In case merchant faces any technical issue while processing the refund at their end, PayGlocal to assist in processing the refund from PayGlocal platform. PayGlocal to ensure that that refunds are process to the source account.</li>
                </ol>
            </div>

             {/* Process section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Process</h4>
                <ol className="list-decimal pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">As per the standard process, customer raises a refund request with the merchant for the transaction.
                        <ul className="list-disc list-style-alphabate pl-5 space-y-5">
                            <li className="common-body2-text custom-text-grey900 font-semibold">Merchant evaluates the refund request.</li>
                            <li className="common-body2-text custom-text-grey900 font-semibold">Merchant will refund the transaction from his platform successfully</li>
                            <li className="common-body2-text custom-text-grey900 font-semibold">Refunds are offered via API and PayGlocal command centre using merchant login</li>
                            <li className="common-body2-text custom-text-grey900 font-semibold"> Refunds can only be follow-on refunds when using API or portal. No stand-alone refund is supported through these channels.</li>
                            <li className="common-body2-text custom-text-grey900 font-semibold">All refunds using API and PayGlocal command centre always refund to the original source of the payment</li>
                            <li className="common-body2-text custom-text-grey900 font-semibold">Merchant faces technical issue while refunding the transaction from their end.</li>
                        </ul>
                    </li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">In case if the merchant faces a technical issue merchant will reach out to PayGlocal to process the refund.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Merchant would be requested to shares the transaction details/unique transaction identifier for PayGlocal to process the refund on merchant&apos;s behalf</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">As as exception, PayGlocal offers refunding service to merchants on their request and ensures that refunds are always processed to the source account as per the existing regulatory guidelines</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Note : Once the refund is processed from PayGlocal the same will reflect on to customers account within 3 to 5 working days.</li>

                </ol>
            </div>

            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <Image src={PolicyPreview} width={800} height={400} alt='img' quality={100} className='w-full h-auto' />
            </div>
            
             {/* Policy Review section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Policy Review</h4>
                <p className="common-body1-text custom-text-grey900">The Policy shall be reviewed as and when required (at least annually), or when significant regulatory changes occur to ensure its continuing suitability, adequacy, and effectiveness for incorporating any updates / regulatory changes. The changes must be approved by the Bboard of the Company.</p>
            </div>
            

        </section>
    )
}

export default RefundPolicySection;
