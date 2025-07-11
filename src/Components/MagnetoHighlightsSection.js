import Image from 'next/image';
import { Manrope } from 'next/font/google';


//highlight section images
import Globe from '@/Images/Exporters/globe.svg';             
import Star from '@/Images/Magneto/star.svg';
import Graph from '@/Images/CardPayments/graph.svg';
import Headphone from '@/Images/Enterprise/headphone.svg';


const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})

function MagnetoHighlightsSection()
{


 
    return(
        <>

        {/* Highlights  section*/}
        <section className="py-10 sm:py-20 px-4 sm:px-10 flex items-center justify-center background-custom-white ">
            <div className="flex flex-col gap-2.5">
                <div className="flex flex-col background-custom-grey50 gap-10 sm:gap-20 py-14 px-5 lg:py-20 sm:px-14 rounded-3xl max-width-1000">
                    <div className="flex flex-col gap-4 items-center">
                        <h2 className="common-h2-heading custom-text-black text-center max-w-4xl">Why PayGlocal?</h2>
                        <p className={"common-body1-text custom-text-grey600 text-center lg:max-w-2xl "+manrope.className}>Expand your business reach to multiple geographies with support for multiple currencies. Drive more sales with low drop-offs and abandonment. Experience high payment success rates and low fraud.</p>
                    </div>
                    <div className="flex flex-col gap-10 sm:gap-16 lg:gap-20 ">
                        
                        <div className="flex flex-col lg:flex-row  gap-10 sm:gap-16 lg:gap-20 items-center">
                        
                            <div className="flex flex-col gap-4 lg:gap-6    w-full items-center lg:items-start self-stretch ">
                                <Image src={Star} width={100} height={100} alt='img' quality={100} className=''/>
                                <h4 className="common-h4-heading text-center lg:text-left">One Stop Solution</h4>
                                <h6 className="common-h6-heading custom-text-grey600 text-center lg:text-left">Choose one payment solution that handles all payments, including international processing and 20+ global methods, UPI & netbanking.</h6>
                            </div>
                            <div className="flex flex-col gap-4 lg:gap-6  w-full items-center lg:items-start self-stretch">
                                <Image src={Globe} width={100} height={100} alt='img' quality={100} className=''/>
                                <h4 className="common-h4-heading text-center lg:text-left">Global reach</h4>
                                <h6 className="common-h6-heading custom-text-grey600 text-center lg:text-left">Expand your business reach to multiple geographies & multiple currency support.</h6>
                            </div>
                          

                        </div>
                        <div className="flex flex-col lg:flex-row  gap-10 sm:gap-16 lg:gap-20 items-center">
                        
                            <div className="flex flex-col gap-4 lg:gap-6  w-full items-center lg:items-start self-stretch">
                                <Image src={Graph} width={100} height={100} alt='img' quality={100} className=''/>
                                <h4 className="common-h4-heading text-center lg:text-left">Highest Approval rates</h4>
                                <h6 className="common-h6-heading custom-text-grey600 text-center lg:text-left">Get high payment success rates with a state-of-art AI-ML-based risk assessment.</h6>
                            </div>
                            <div className="flex flex-col gap-4 lg:gap-6   w-full items-center lg:items-start self-stretch">
                                <Image src={Headphone} width={100} height={100} alt='img' quality={100} className=''/>
                                <h4 className="common-h4-heading text-center lg:text-left">Dedicated support</h4>
                                <h6 className="common-h6-heading custom-text-grey600 text-center lg:text-left">Along with dedicated key account manager, you will get immediate support for all your queries.</h6>
                            </div>
                        
                        </div>
                        
                    </div>
                    
                </div>

            
            </div>
        </section>

        </>
    )
}
export default MagnetoHighlightsSection;