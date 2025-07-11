import Image from 'next/image';
import { JetBrains_Mono } from 'next/font/google';
import SignUpBtn from '@/Components/SignUpBtn';
import OurPlatformSectionGridBox from '@/Components/OurPlatformSectionGridBox';


//highlight section images
import Code from '@/Images/RecurringPayments/code.svg';             
import Headphone from '@/Images/Enterprise/headphone.svg';
import Calendar from '@/Images/RecurringPayments/calendar.svg';
import Paint from '@/Images/Enterprise/paint.svg';


//grid section images                                                               //importing previusly used images instead of new export
import GridImage1 from '@/Images/CardPayments/local-currencies.svg';                //image is repeated , previously it is in card payments page
import GridImage2 from '@/Images/Enterprise/maximise-revenue.svg';
import GridImage3 from '@/Images/DynamicCheckout/easy-integration.svg';
import GridImage4 from '@/Images/OnePlatform/create-new-roles.png';
import GridImage5 from '@/Images/OnePlatform/manage-payments.png';
import PurpleGradient from '@/Images/OnePlatform/purple-gradient.png';
import RecurringPaymentsHighlightCard from '@/Components/SmallComponents/RecurringPaymentsHighlightCard';
import RecurringSetupDebitStepCard from '@/Components/SmallComponents/RecurringSetupDebitStepCard';




const jetBrains_Mono=JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})


function EnterpriseSection()
{

 
    return(
        <>


        {/* Highlights  section*/}
        <section className="py-10 sm:py-20 px-4 sm:px-10 flex items-center justify-center background-custom-white ">
            <div className="flex flex-col gap-2.5">
                <div className="flex flex-col background-custom-grey50 gap-10 sm:gap-20 py-14 px-5 lg:py-20 sm:px-14 rounded-3xl max-width-1000">
                    <div className="flex flex-col gap-4 items-center">
                        <p className={"common-all-caps custom-text-grey500 "+jetBrains_Mono.className}>For Enterprises</p>
                        <h2 className="common-h2-heading custom-text-black text-center max-w-xl">We provide everything you need to scale up</h2>
                        <p className={"common-body1-text custom-text-grey600 text-center lg:max-w-sm "}>Customise, scale, and stay secure with PayGlocal. Get full flexibility and complete control.</p>
                    </div>
                    <div className="flex flex-col gap-10 sm:gap-16 lg:gap-20 ">
                        
                        <div className="flex flex-col lg:flex-row  gap-10 sm:gap-16 lg:gap-20 items-center">
                        
                            <RecurringPaymentsHighlightCard img={Code} imgwidth={100} imgheight={100} title={'API based'} para={'Pick and choose payment methods and features to get the payment stack tailor made for you.'} />
                            <RecurringPaymentsHighlightCard img={Headphone} imgwidth={100} imgheight={100} title={'Dedicated support'} para={'From dedicated account manager to 24x7 email, phone, ticket support, our payment experts are always here to support you.'} />

                           

                        </div>
                        <div className="flex flex-col lg:flex-row  gap-10 sm:gap-16 lg:gap-20 items-center">

                            <RecurringPaymentsHighlightCard img={Calendar} imgwidth={100} imgheight={100} title={'Stay secure, Stay confident'} para={'Your payments are in safe hands - end-to-end encryption, multi-factor authentication, TLS 1.3, least privilege access. We leave nothing to chance.'} />
                            <RecurringPaymentsHighlightCard img={Paint} imgwidth={100} imgheight={100} title={'Customisations on-demand'} para={"With scale comes complexity and need for bespoke solutions. Have a specific payment requirement? We're happy to build it for you."} />

                        </div>
                        
                    </div>
                    
                </div>

                <div className="flex flex-col gap-8 sm:gap-10 items-center max-width-1000 w-full">
                    <div className="flex gap-2 flex-col lg:flex-row w-full">
                        <RecurringSetupDebitStepCard title={'130+'} classname={'custom-text-purple1'} para={'Currencies supported'} />
                        <RecurringSetupDebitStepCard title={'20+'} classname={'custom-text-green1'} para={'Local payment methods'} />
                        <RecurringSetupDebitStepCard title={'10+'} classname={'custom-text-blue1'} para={'Integration options'} />
                    </div>
                    <SignUpBtn text="Let's talk" linkUrl='/contact'/>
                </div> 
            </div>
            
        </section>


       


        {/* grid Box section */}
        <section className="flex flex-col gap-10 sm:gap-14 items-center  px-4 py-14 sm:px-10 sm:pb-20 lg:pt-0 lg:pb-20">
           
            <div className="flex flex-col gap-2.5">

                <OurPlatformSectionGridBox srNo={"01"} headingTitle={"Expand to new geographies & markets"} para={"We handle your payment needs, while you focus on strategy. Accept international debit and credit cards, and enjoy features like customised payment flow and dynamic currency conversion."} imageSrc={GridImage1} imageWidth={257} imageHeight={300} firstBoxContainsImage={false} imageGradientColorName='BlueGradient'/>
                <OurPlatformSectionGridBox srNo={"02"} headingTitle={"Maximise your revenue potential"} para={"Experience high payment approval rates with minimal fraud risk using our flagship payment engine and AI/ML risk assessment system. Customise your risk rules and provide a seamless checkout experience to reduce cart abandonment."} imageSrc={GridImage2} imageWidth={335} imageHeight={300} firstBoxContainsImage={true} imageGradientColorName='GreenGradient'/>
                <OurPlatformSectionGridBox srNo={"03"} headingTitle={"Hassle-free one-time set up"} para={"Integrate once for access to all features, with the ability to enable/disable new features on demand. Set up payment checkouts, server-server payments, and more through a single integration."} imageSrc={GridImage3} imageWidth={465} imageHeight={300} firstBoxContainsImage={false} imageGradientColorName='PinkGradient'/>
                <OurPlatformSectionGridBox srNo={"04"} headingTitle={"Customizable user roles and access"} para={"Create custom roles and access for different users in your organisation to stay flexible while being secure with your payment information."} imageSrc={GridImage4} imageWidth={336} imageHeight={300} firstBoxContainsImage={true} imageGradientColorName='BlueGradient'/>                
                <div className="flex flex-col lg:flex-row background-custom-grey50 one-platform-grid-two-box-container w-full rounded-3xl">
                    <div className="flex flex-col gap-2 lg:gap-4 px-6 py-8 sm:px-20 sm:py-14 lg:p-14 lg: lg:pl-20 background-custom-grey-50 lg:w-1/2">
                        <h6 className="common-h6-heading custom-text-grey500  text-center lg:text-start matterfont" >05</h6>
                        <h4 className="common-h4-heading  custom-text-black text-center lg:text-start matterfont">One dashboard to rule it all</h4>
                        <p className={"custom-text-grey600  common-body1-text text-center lg:text-start "}>Manage all of your payments from one dashboard, including transaction status, transaction reports, and risk analysis.</p>
                    </div>
                    <div className="flex items-center justify-center lg:w-1/2 px-8 sm:p-14 relative overflow-hidden min-h-48 sm:min-h-60 lg:min-h-fit">
                        <Image src={GridImage5} width={611} height={450} alt='img' quality={100} className=' absolute -bottom-12 sm:-bottom-60 lg:-bottom-24 lg:-right-20 z-10'/>
                        <Image src={PurpleGradient} width={400} height={400} alt='img' quality={100} className=' absolute z-0 '/>

                    </div>
                </div>

            </div>
        </section>

        

        </>
    )
}
export default EnterpriseSection;