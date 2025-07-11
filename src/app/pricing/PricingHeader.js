import Image from 'next/image';
import SignUpBtn from '@/Components/SignUpBtn';
//images
import HeaderImg from '@/Images/Pricing/pricing-header.svg';
import PricingTooltip from '@/Components/PricingTooltip';

function PricingHeader()
{
    return(
        <>
        <header className="flex justify-center items-center background-custom-grey50 px-4 sm:px-10 pt-36 lg:pt-44 pb-20 overflow-hidden">
            
            
            <div className="flex flex-col lg:flex-row items-center gap-14 ">
               
                <div className="flex flex-col items-center lg:items-start gap-8 lg:max-w-xl w-full">
                   
                    <div className="flex flex-col items-center lg:items-start gap-4">
                        
                        <div className="flex flex-col items-center lg:items-start gap-3 w-full  ">
                            <h2 className="common-h2-heading text-center lg:text-left custom-text-grey900 ">Simple pricing,<br />Seamless payments</h2>
                            <h6 className="common-h6-heading text-center lg:text-left custom-text-grey600">Access our complete suite of payment solutions with simple, upfront fees.</h6>
                            <div className="h-12 w-[1px] background-custom-grey300"></div>
                        </div>
                        <div className="flex flex-col gap-3 items-center lg:items-start">
                            <div className="flex items-center gap-5">
                                <h1 className="common-h1-heading">2%</h1>
                                <div className="flex flex-col gap-0.5">
                                    <div className="flex items-center gap-2.5">
                                        <h6 className="common-h6-heading">Platform Fees*</h6>
                                       <PricingTooltip/>
                                    </div>
                                        <div className="common-body2-text">Applicable on all transactions </div>
                                </div>
                            </div>
                            <h6 className="common-body2-text custom-text-grey600">*plus applicable GST </h6>
                        </div>
                    </div>
                    <SignUpBtn text='Sign Up Now' linkUrl='/contact' />
                </div>

                <Image src={HeaderImg} width={553} height={553} alt='img' quality={100} className=''/>


            </div>
        </header>
        </>
    )
}

export default PricingHeader;