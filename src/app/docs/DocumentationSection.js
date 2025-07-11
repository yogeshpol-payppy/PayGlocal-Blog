import Image from 'next/image';

import SignUpBtn from '@/Components/SignUpBtn';

//grid section images
import GridImage1 from '@/Images/Documentation/api-integration.gif';
import Shopify from '@/Images/DynamicCheckout/shopify.svg';
import WooComerce from '@/Images/DynamicCheckout/woo-commerce.svg';
import Wix from '@/Images/Documentation/wix-logo.svg';
import Shopaccino from '@/Images/DynamicCheckout/shopaccino.svg';
import Magneto from '@/Images/DynamicCheckout/magneto.svg';
import Opencart from '@/Images/DynamicCheckout/opencart.svg';
import GridImage3 from '@/Images/Documentation/no-code.gif';


//Product Card Component
import DocsCircularCards from '@/Components/DocsCircularCards';



function DocumentationSection()
{

    return(
        <>
        {/* grid Box section */}
        <section className="flex flex-col gap-10 sm:gap-14 items-center  px-4 py-14 sm:px-10 sm:py-20 lg:pt-32 lg:pb-20">
            <div className="flex flex-col items-center gap-2 sm:gap-4  max-w-4xl w-full">
                <h2 className="common-h2-heading  custom-text-black text-center matterfont ">Browse our integration solutions</h2>
                <p className={"common-body1-text custom-text-grey600  text-center "}>With a plethora of options, choose the integration solution that works best for you, your business, and your customers.</p>
            </div>
            <div className="flex flex-col gap-2 5">
                
                <div className="flex flex-col lg:flex-row items-center background-custom-grey50 one-platform-grid-two-box-container w-full rounded-3xl">
                    <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-4 px-6 py-8 sm:px-20 sm:py-10 lg:p-14 lg:pl-20 background-custom-grey-50 lg:w-1/2">
                        <h4 className="common-h4-heading  custom-text-black text-center lg:text-start matterfont">API Integration</h4>
                        <p className={"custom-text-grey600  common-body1-text text-center lg:text-start "}>Read. Create. Integrate. <br /> Explore a suite of APIs to tailor a solution for your product.</p>
                        <SignUpBtn text='Read Docs' linkUrl='https://developer.payglocal.in/reference/payment-initiation-guide'/>
                    </div>
                    <div className="flex items-center justify-center lg:w-1/2 px-8 sm:p-10 relative overflow-hidden min-h-48 sm:min-h-60 lg:min-h-fit">
                        <Image src={GridImage1} width={448} height={324} alt='img' quality={100} className=' mix-blend-darken'/>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center background-custom-grey50 one-platform-grid-two-box-container w-full rounded-3xl">
                        <div className="flex items-center justify-center lg:w-1/2 px-8 py-5 sm:p-10 relative overflow-hidden min-h-48 sm:min-h-60 lg:min-h-fit">
                            {/* <Image src={GridImage2} width={423} height={257} alt='img' quality={100} className=' ' /> */}
                            <div className="flex justify-center items-center gap-5 flex-wrap">
                                <DocsCircularCards img={Shopify} imgWidth={106} imgHeight={40} link={'https://developer.payglocal.in/reference/payglocal-x-shopify'} />
                                <DocsCircularCards img={WooComerce}  imgWidth={116} imgHeight={24} link={'https://developer.payglocal.in/reference/payglocal-x-woocommerce'}/>
                                <DocsCircularCards img={Shopaccino} imgWidth={140} imgHeight={24} link={'https://developer.payglocal.in/reference/lets-integrate'}/>
                                <DocsCircularCards img={Magneto} imgWidth={106} imgHeight={28} link={'https://developer.payglocal.in/reference/payglocal-x-magento-2'} />
                                <DocsCircularCards img={Opencart} imgWidth={123} imgHeight={24} link={'https://developer.payglocal.in/reference/payglocal-x-opencart'} />
                                <DocsCircularCards img={Wix} imgWidth={52} imgHeight={29} link={'https://developer.payglocal.in/reference/lets-integrate'} />

                            </div>
                        </div>
                    <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-4 px-6 py-8 sm:px-20 sm:py-10 lg:p-14 lg:pl-20 background-custom-grey-50 lg:w-1/2">
                        <h4 className="common-h4-heading  custom-text-black text-center lg:text-start matterfont">Our Plugins</h4>
                        <p className={"custom-text-grey600  common-body1-text text-center lg:text-start "}>A one-stop solution to connect your existing e-commerce system with our platform.</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center background-custom-grey50 one-platform-grid-two-box-container w-full rounded-3xl">
                    <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-4 px-6 py-8 sm:px-20 sm:py-10 lg:p-14 lg:pl-20 background-custom-grey-50 lg:w-1/2">
                        <h4 className="common-h4-heading  custom-text-black text-center lg:text-start matterfont">No Code</h4>
                        <p className={"custom-text-grey600  common-body1-text text-center lg:text-start "}>Seamlessly integrate, without writing a single line of code.</p>
                        <SignUpBtn text='Read Docs' linkUrl='https://developer.payglocal.in/reference/payment-links'/>
                    </div>
                    <div className="flex items-center justify-center lg:w-1/2 px-8 sm:p-10 relative overflow-hidden min-h-48 sm:min-h-60 lg:min-h-fit  ">
                        <Image src={GridImage3} width={450} height={325} alt='img' quality={100} className='mix-blend-darken'/>
                    </div>
                </div>

            </div>
        </section>

        

        </>
    )
}
export default DocumentationSection;