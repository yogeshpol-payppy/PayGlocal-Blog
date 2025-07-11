'use client';
import { JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';
//section 1 - solutions images
import LeftArrow from '@/Images/Homepage/left-arrow.svg';
import Testimonial1 from '@/Images/Homepage/for-freelancer-card.png';
import Testimonial2 from '@/Images/Homepage/for-goods-exporter.png';
import Testimonial3 from '@/Images/Homepage/for-service-exporter.png';
import Testimonial4 from '@/Images/Homepage/testimonial4.png';
import Testimonial5 from '@/Images/Homepage/testimonial5.png';




//section 2 - accept pay-ins images
import CollectGlobalPayments from '@/Images/Homepage/collect-global-payments.png';
import CollectGlobalPaymentsMobile from '@/Images/Homepage/smart-payment-collection-mobile.png';
import ComplianceManagement from '@/Images/Homepage/compliance-management.png';
import TrackGetStatus from '@/Images/Homepage/track-get-status.png';
import SmartPaymentCollection from '@/Images/Homepage/smart-payment-collection.png';

//section 3 - accept payments images
import CheckoutIcon from '@/Images/Homepage/checkout-Icon.svg';
import ProductCard1 from '@/Images/Homepage/product-card1.png';
import AlternateMethod from '@/Images/Homepage/alternate-method-icon.svg';
import ProductCard2 from '@/Images/Homepage/product-card2.png';
import RecurringIcon from '@/Images/Homepage/recurring-Icon.svg';
import ProductCard3 from '@/Images/Homepage/product-card3.png';
import PaymentsIcon from '@/Images/Homepage/card-payments-icon.svg';
import ProductCard4 from '@/Images/Homepage/product-card4.png';


//section 4 - optimise payments images
import GreenCheckmark from '@/Images/Homepage/green-checkmark.svg';
import PaymentOptimise from '@/Images/Homepage/payment-optimise.svg';

//section 5- security
import topWhiteCorder from '@/Images/Homepage/security-video-top-white-corner.svg';
import BottomWhiteCorder from '@/Images/Homepage/security-video-bottom-white-corner.svg';
import SecurityBg from '@/Images/Homepage/security-bg.svg';
import SecurityBg2 from '@/Images/Homepage/security-bg-2.svg';


//section 6 - testimonial images
import PolicyBazaar from '@/Images/Homepage/policy-bazaar-logo.png';
import Indiatrend from '@/Images/Homepage/indiatrend.png';


//section 7 - integration resources images
import ApiDocumentation from '@/Images/Homepage/api-documentation.svg';
import CodeTag from '@/Images/Homepage/code-s-slash-fill.svg';


import { useEffect, useRef, useState } from 'react';
// import '@/Styles/Homepage/Homepage.css';
import Link from 'next/link';
import SignUpBtn from '@/Components/SignUpBtn';
import ExploreBtn from '@/Components/ExploreMoreBtn';
import ContactUsFormComponent from '@/Components/ContactUsFormComponent';
import HomepagePayInsGradientBoxes from '@/Components/SmallComponents/HomepagePayInsGradientBoxes';
import HomepageAccesPaymentsGradientButtons from '@/Components/SmallComponents/HomepageAccesPaymentsGradientButtons';
import HomepageProductCards from '@/Components/HomepageProductCards';
import HomepageOptimisePaymentsGreenCheckmarkTitle from '@/Components/SmallComponents/HomepageOptimisePaymentsGreenCheckmarkTitle';
import HomepageSecurityGreenCheckmarkTitles from '@/Components/SmallComponents/HomepageSecurityGreenCheckmarkTitles';
import HomepageIntegrationCards from '@/Components/HomepageIntegrationCards';
import HomepageTestimonialBox from '@/Components/HomepageTestimonialBox';
import HomepageReadOurBlogCompo from '@/Components/HomepageReadOurBlogCompo';
import { useRouter } from 'next/navigation';
import { blogs } from '../blog/blogs';

const jetBrains_Mono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})

function HomepageSection() {

    let [filterBtnText, setfilterBtnText] = useState("ALL");



 

    let section6TestimonialInfo=useRef();
    let ProductCardContainer=useRef();
    let TestimonialCardContainer=useRef();

    let videoTag=useRef();
    
    let router=useRouter();
    
 
    const scrollToStart = () => {
        if (TestimonialCardContainer.current) {
          TestimonialCardContainer.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      };
      
      useEffect(() => {
        scrollToStart();
      }, []);
     //to scroll section 1 Testimonial cards box on arrow click

     let scrollValue=0;
     function handleSection1TestimonialScroll(value)
     {
         if(value)
         {
            scrollValue=scrollValue-392;
            TestimonialCardContainer.current.scrollLeft=TestimonialCardContainer.current.scrollLeft+396;
         }
         else{
            scrollValue=scrollValue+392;
            TestimonialCardContainer.current.scrollLeft=TestimonialCardContainer.current.scrollLeft-396;
         }
     }
 
    //to scroll section 3 product cards box on arrow click

    function handleProductCardsScroll(value)
    {
        if(value)
        {
            ProductCardContainer.current.scrollLeft=ProductCardContainer.current.scrollLeft+400;
        }
        else{
            ProductCardContainer.current.scrollLeft=ProductCardContainer.current.scrollLeft-400;
        }
    }

     //to scroll section 6 testimonial info box on arrow click
     function handleSection6TestimonialInfoScroll(value)
     {
         if(value)
         {
             section6TestimonialInfo.current.scrollLeft=section6TestimonialInfo.current.scrollLeft-820;
         }
         else{
             section6TestimonialInfo.current.scrollLeft=section6TestimonialInfo.current.scrollLeft+820;
         }
     }

     useEffect(()=>{
        // Check if videoRef is assigned and set playback speed to 0.5x (or any other desired speed)
    if (videoTag.current) {
        videoTag.current.playbackRate = 0.2; // 0.5x speed, reduce as needed
      }
     },[])

     //solution cards filters
     const filters = ["ALL", "SOLUTION", "SCALE", "INDUSTRY"];
     //solution cards
     const testimonialContent = [
        {
          filter: "SOLUTION",
          heading: "For Freelancers",
          features: [
            "Quick Onboarding",
            "Get local accounts in 4 countries",
            "Collect payments from Freelance platforms",
            "Track your payments",
          ],
          imgSrc: Testimonial1,
          imgWidth:368,
          bgGradientClass: "background-bg-gradient-1",
        },
        {
          filter: "SOLUTION",
          heading: "For Goods Exporter",
          features: [
            "Reduce your transaction and FX charges",
            "Instant FIRA on settlement",
            "End-to-end payment tracking",
            "Marketplace Settlement",
          ],
          imgSrc: Testimonial2,
          imgWidth:334,
          bgGradientClass: "background-bg-gradient-2",
        },
        {
          filter: "SOLUTION",
          heading: "For Services Exporter",
          features: [
            "Reduce your transaction and FX charges",
            "End-to-end payment tracking",
            "Card and non-card payment collection",
            "Payment links and recurring payments",
          ],
          imgSrc: Testimonial3,
          imgWidth:334,
          bgGradientClass: "background-bg-gradient-3",
        },
        {
          filter: "SCALE",
          heading: "For Enterprise",
          features: [
            "Comprehensive payment collection suite",
            "Optimized payment success rates",
            "Advanced fraud and Risk system",
            "Localized customer experience",
          ],
          imgSrc: Testimonial4, 
          imgWidth:353,
          bgGradientClass: "background-bg-gradient-4",
        },
        {
          filter: "INDUSTRY",
          heading: "For Travel Industry",
          features: [
            "Optimized PSR for cross-border payments",
            "Enhanced messaging for seamless payment experience",
            "Advanced risk engine to avoid fraud",
            "Dynamic checkout experience",
          ],
          imgSrc: Testimonial5, 
          imgWidth:328,
          bgGradientClass: "background-bg-gradient-4",
        },
       
      ];
    return (
        <>
            {/* section 1 - solutions  */}
            <section className='background-custom-grey50 py-20 px-4 sm:px-10 lg:py-24 flex justify-center items-center overflow-hidden'>
                
                <div className="flex flex-col gap-4 sm:gap-10 justify-center -items-center w-full  lg:pl-28 ">
                    
                    <div className="flex flex-col gap-4 sm:gap-6 max-w-[2060px] w-full  ">
                        <div className={"common-body2-text custom-text-grey400 font-bold text-center lg:text-left " + jetBrains_Mono.className}>SOLUTIONS</div>
                        <h2 className="common-h2-heading custom-text-grey900 homepage-section1-subheading text-center lg:text-left">Your business, our solution—find the perfect fit</h2>
                        <div className={"common-body1-text custom-text-grey600  text-center lg:text-left " }>Each business is unique. Explore solutions that match your needs.</div>
                        <div className="flex flex-col lg:flex-row gap-5 justify-center lg:justify-between items-center">
                            <div className={"flex gap-2 sm:gap-2 overflow-scroll " + jetBrains_Mono.className}>
                                {filters.map((filter) => (
                                    <button key={filter} className={`common-all-caps py-4 px-5 border-b-2 font-bold ${filterBtnText === filter? "custom-border-blue custom-text-blue1": "custom-border-grey400 custom-text-grey400"}`} onClick={() => setfilterBtnText(filter)}>{filter}</button>
                                ))}
                            </div>

                            <div className="hidden sm:flex items-center gap-5">
                                <button className='background-custom-white p-3 rounded-3xl  border home-left-arrow-btn custom-border-grey200 hover-custom-border-grey400' onClick={()=>{handleSection1TestimonialScroll(false)}} disabled={filterBtnText!="ALL"}>
                                    <Image src={LeftArrow} width={20} height={20} quality={100} alt='arrow' />
                                </button>
                                {/* instead of importing right arrow image using left arrow image with rotate property reduces our assets load */}
                                <button className='background-custom-white p-3 rounded-3xl  border home-left-arrow-btn custom-border-grey200 hover-custom-border-grey400' onClick={()=>{handleSection1TestimonialScroll(true)}} disabled={filterBtnText!='ALL'}>
                                    <Image src={LeftArrow} width={20} height={20} quality={100} alt='arrow' className='rotate-180' />
                                </button>

                            </div>
                        </div>
                    </div>

                        {/* solutions cards  */}
                        <div className="flex gap-5 overflow-scroll section-1-testimonial-info-container  scroll-smooth py-3 w-full duration-500 scroll-snap-horizontal-parent  " ref={TestimonialCardContainer}>
                            {/* toggling the solution card based on filter buttons  */}
                            {/* <div className="lg:max-w-20 w-full flex-shrink-0 border opacity-0 scroll-m-0 " >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error unde velit quas rem veniam dolores magni voluptate, reiciendis quo ut quisquam commodi provident, minus placeat facere cum amet architecto pariatur!</div> */}
                            {testimonialContent
                                .filter((item) => filterBtnText === "ALL" || item.filter === filterBtnText)
                                .map((item, index) => (
                                    <div key={index} className={`payglocal-section1-testimonial-card w-full p-1 rounded-3xl border border-[#EAEAEA] cursor-pointer overflow-hidden flex-shrink-0 background-custom-white shadow-sm hover:shadow-md duration-300  scroll-snap-horizontal-child-lg `}  onClick={()=>{router.push('/contact')}}>
                                        <div className={`relative testimonial-card-img-div overflow-hidden ${item.bgGradientClass} duration-500 rounded-tr-3xl rounded-tl-3xl`}>
                                            <Image src={item.imgSrc} width={item.imgWidth} height={293} alt="testimonial" quality={100} className="absolute z-index1 top-7 right-0 duration-300 testimonial-card-bg-img" />
                                        </div>
                                        <div className="flex flex-col gap-5 py-6 px-7">
                                            <div>
                                                <span className={`common-all-caps background-custom-blue2 custom-text-blue1 py-1 px-2.5 rounded-3xl uppercase inline-block ${jetBrains_Mono.className}`} > {item.filter} </span>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <h5 className="common-h5-heading custom-text-black"> {item.heading} </h5>
                                                {item.features.map((feature, idx) => (
                                                    <div key={idx} className="flex gap-2 items-center">
                                                        <Image src={GreenCheckmark} width={20} height={20} alt="checkmark" quality={100} className=""
                                                        />
                                                        <p className={`common-body2-text custom-text-grey600 `} > {feature} </p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="lg:max-h-0 lg:overflow-hidden duration-300 testimonial-signup-btn-container">
                                                <SignUpBtn linkUrl='/contact'/>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                          
                        </div>
                </div>

            </section>


            {/* section 2 - accept pay-ins */}
            <section className="flex flex-col gap-14 py-20 px-4 sm:px-10  sm:pt-24 sm:pb-20 justify-center items-center">
                <div className="flex flex-col gap-4 justify-center items-center home-section2-access-pay-container">
                    <div className={"font-bold custom-text-grey400 common-all-caps " + jetBrains_Mono.className}>Accept Pay-INS</div>
                    <h2 className='common-h2-heading  text-center custom-text-black home-section2-title '>Collect Payments from your global customers using local accounts</h2>
                    <p className={"common-body1-text  text-center custom-text-grey600 home-section2-para " }>Our comprehensive multi-currency account stack helps you seamlessly collect from global customers, while helping you track payments and manage compliance.</p>
                </div>

                <div className="home-section2-grid-parent-container">
                    <div className="background-custom-grey50 flex flex-col lg:flex-row items-center gap-6 justify-between lg:items-start p-12 rounded-3xl">
                        <div className="flex flex-col gap-2 ">
                            <h5 className="common-h5-heading  custom-text-black text-center lg:text-left ">Pay <strong>ONLY</strong> when you transact</h5>
                            <p className={"common-body2-text custom-text-grey600  pay-only-transaction-para  text-center lg:text-left w-full " }>Enjoy the freedom of having no fixed costs and no surprises</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2.5 lg:gap-1 overflow-hidden">
                            <HomepagePayInsGradientBoxes title={'Documentation charges'} />
                            <HomepagePayInsGradientBoxes title={'Platform fee'} />
                            <HomepagePayInsGradientBoxes title={'Set-up fees'} />

                        </div>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2  pt-2.5 box-border home-section2-grid-container gap-2.5">

                        <div className='pt-10 sm:pt-12 pl-4 sm:pl-14 lg:pl-12 pr-4 sm:pr-14 lg:pr-12 pb-10 sm:pb-12 flex flex-col justify-center lg:justify-start  gap-4 sm:gap-10 rounded-3xl background-custom-grey50 collect-global-payments-container xl:relative overflow-hidden col-start-1 col-end-2 lg:row-start-1 lg:row-end-3'>
                            <div className="flex flex-col justify-center lg:justify-start gap-2 collect-global-payments-title-para-container ">
                                <h5 className="common-h5-heading custom-text-black  text-center lg:text-start ">Collect global payments</h5>
                                <p className={"common-body2-text custom-text-grey600  text-center lg:text-start collect-global-para " }>Collect payments locally in USD, GBP, EUR, and CAD, and globally in 33 currencies from 180+ countries via a global currency account.</p>
                            </div>
                            <Image src={CollectGlobalPayments} width={462} height={260} quality={100} alt='img' className=' xl:absolute xl:bottom-14 xl:right-16 hidden sm:block' />
                            <Image src={CollectGlobalPaymentsMobile} width={271} height={314} quality={100} alt='img' className=' xl:absolute xl:bottom-14 xl:right-16 block sm:hidden' />

                        </div>

                        <div className='pt-10 sm:pt-12 pl-4 sm:pl-14 lg:pl-12 pr-4 sm:pr-14 lg:pr-12 pb-10 sm:pb-12 flex flex-col  justify-center lg:justify-start  gap-4 sm:gap-10 rounded-3xl background-custom-grey50 compliance-management-container  xl:relative overflow-hidden'>
                            <div className="flex flex-col justify-center lg:justify-start gap-2 effortless-compliance-management-title-para-container">
                                <h5 className="common-h5-heading custom-text-black  text-center lg:text-start ">Effortless compliance management</h5>
                                <p className={"common-body2-text custom-text-grey600  collect-global-para  text-center lg:text-start " }>Receive FIRC right in your inbox after settlement, and stay compliant!</p>
                            </div>
                            <Image src={ComplianceManagement} width={238} height={247} quality={100} alt='img' className=' xl:absolute xl:bottom-4  xl:right-10' />
                        </div>

                        <div className='pt-10 sm:pt-12 pl-4 sm:pl-14 lg:pl-12 pr-4 sm:pr-14 lg:pr-12 pb-10 sm:pb-12  flex flex-col  justify-center lg:justify-start  gap-4 sm:gap-10 rounded-3xl background-custom-grey50 track-get-status-container xl:relative overflow-hidden col-start-1 col-end-2'>
                            <div className="flex flex-col justify-center lg:justify-start gap-2  track-and-get-status-container ">
                                <h5 className="common-h5-heading custom-text-black  text-center lg:text-start ">Track and get status</h5>
                                <p className={"common-body2-text custom-text-grey600  collect-global-payments-para  text-center lg:text-start " }>Stay informed with frequent notifications on your fund status every step of the way.</p>
                            </div>
                            <Image src={TrackGetStatus} width={562} height={215} quality={100} alt='img' className=' xl:absolute xl:bottom-6  xl:right-0 track-and-get-status-img' />
                        </div>

                        <div className='pt-10 pb-0 sm:pt-12 pl-4 sm:pl-14 lg:pl-12 pr-4 sm:pr-14 lg:pr-12  xl:pb-12   flex flex-col  justify-center lg:justify-start  gap-4 lg:gap-10 rounded-3xl background-custom-grey50 smart-payment-collection-container   xl:relative overflow-hidden lg:row-start-2 lg:row-end-4'>
                            <div className="flex flex-col justify-center lg:justify-start gap-2 smart-payment-collection-title-para-container ">
                                <h5 className="common-h5-heading custom-text-black  text-center lg:text-start ">Smart payment collection</h5>
                                <p className={"common-body2-text custom-text-grey600   text-center lg:text-start " }>Manage multi-currency transactions easily with transparent pricing, instant notifications, and downloadable FIRA from the dashboard.</p>
                            </div>
                            <Image src={SmartPaymentCollection} width={453} height={298} quality={100} alt='img' className='xl:absolute xl:bottom-0  xl:-right-10' />
                        </div>

                    </div>

                </div>
                <div className="text-center">
                    <SignUpBtn linkUrl='/contact'/>
                </div>
            </section>

            {/* section 3 - accept payments */}
            <section className='flex flex-col justify-center items-center gap-10 sm:gap-14 overflow-hidden py-20 px-4 sm:py-24 sm:px-10 lg:px-24 background-custom-grey50'>
                <div className="flex flex-col gap-10 max-w-[1200px] w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-48  justify-between">
                        <div className="flex flex-col gap-4 payglocal-home-section3-accept-payments-container w-full">
                            <div className={"font-bold custom-text-grey400 common-all-caps text-center lg:text-start " + jetBrains_Mono.className}>Accept Payments</div>
                            <h2 className="common-h2-heading custom-text-black  text-center lg:text-start w-full ">Industry&apos;s Best Payment Suite.</h2>
                            <p className={"common-body1-text custom-text-grey600  text-center lg:text-start w-full "}>Whether you&apos;re looking to simplify online checkout, manage subscriptions, or offer flexible payment options, our all-in-one payment stack is designed to meet every business need with precision and ease.</p>
                        </div>
                        <div className="flex gap-1 flex-wrap accept-payments-info-boxes-parent-container">
                            <HomepageAccesPaymentsGradientButtons value={'500M+'} title={'API requests per day'} valueGradient=' custom-text-purple1 ' />
                            <HomepageAccesPaymentsGradientButtons value={'120+'} title={'Global currencies'} valueGradient='custom-text-blue1'/>
                            <HomepageAccesPaymentsGradientButtons value={'30+'} title={'Payment methods'}valueGradient='custom-text-blue1' />
                            <HomepageAccesPaymentsGradientButtons value={'100%'} title={'Uptime'} valueGradient=' custom-text-purple1 '/>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4">
                        <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-5">
                            <SignUpBtn linkUrl='/contact'/>
                            <ExploreBtn text='Learn about payments' link='/international-payments-platform'/>
                        </div>
                        <div className="hidden sm:flex items-center gap-5">
                            <button className='background-custom-white p-3 rounded-3xl  border home-left-arrow-btn custom-border-grey200 hover-custom-border-grey400 ' onClick={()=>{handleProductCardsScroll(false)}} >
                                <Image src={LeftArrow} width={20} height={20} quality={100} alt='arrow' />
                            </button>
                            {/* instead of importing right arrow image using left arrow image with rotate property reduces our assets load */}
                            <button className='background-custom-white p-3 rounded-3xl  border home-left-arrow-btn custom-border-grey200 hover-custom-border-grey400 ' onClick={()=>{handleProductCardsScroll(true)}} >
                                <Image src={LeftArrow} width={20} height={20} quality={100} alt='arrow' className='rotate-180' />
                            </button>
                        </div>
                    </div>

                    {/* product cards  */}
               
                    {/* <div className=" relative payglocal-section3-product-card-parent-relative-container w-full  "> */}
                        <div className="flex gap-5 overflow-scroll  scroll-smooth  section-1-testimonial-info-container  py-3 w-auto duration-500 scroll-snap-horizontal-parent " ref={ProductCardContainer}>
                            <HomepageProductCards img={ProductCard1} imgWidth={305} imgHeight={261} imgClassname={' absolute z-index1 top-7 right-5 '} backgroundGradient={'green-gradient'} title={'Checkout'} icon={CheckoutIcon} para={'Built to optimize the customer experience and boost your Payment Success Rate. Our checkout flow turns browsers into buyers.'} link={'/dynamic-checkout'}/>
                            <HomepageProductCards img={ProductCard2} imgWidth={432}  imgHeight={200} backgroundGradient={'blue-gradient'} imgClassname={' absolute z-index1 top-12 right-0 left-5  '} title={'Alternate Methods'} icon={AlternateMethod} para={'Cater to customers worldwide with our wide range of payment options encompassing 100+ local payment methods across the globe.'} link={'/alternate-payment-methods'} /> 
                            <HomepageProductCards img={ProductCard3} imgWidth={308}  imgHeight={200} backgroundGradient={'pink-gradient'} imgClassname={' absolute z-index1 top-12 right-5 '} title={'Recurring Payments'} icon={RecurringIcon} para={'Capture recurring payments effortlessly, ensuring consistent revenue and a hassle-free experience for your customers.'} link={'/recurring-payments-subscriptions'} /> 
                            <HomepageProductCards img={ProductCard4} imgWidth={212}  imgHeight={176} backgroundGradient={'skyblue-gradient'} imgClassname={' absolute z-index1 top-12 right-20  '} title={'Card Payments'} icon={PaymentsIcon} para={'A unified yet dynamic checkout for your global customers to pay through global credit and debit cards.'} link={'/card-processing'} /> 
                        </div>
                    {/* </div> */}
    
                </div>
            </section>

            {/* section 4 - optimise payments */}
            <section className='px-4 sm:px-10 flex justify-center py-20 sm:pt-24 sm:pb-20 lg:pb-24 '>
                <div className="flex flex-col lg:flex-row items-center  gap-10 xl:gap-40">
                    <div className="optimise-payments-container flex flex-col gap-10 sm:gap-8 lg:gap-5  items-center lg:items-start">
                        <div className={"font-bold custom-text-grey400 common-all-caps text-center lg:text-start " + jetBrains_Mono.className}>Optimise Payments</div>
                        <h2 className="common-h2-heading  custom-text-black text-center lg:text-start ">Maximize approvals, drive growth</h2>
                        <p className={"common-body2-text custom-text-grey600  text-center lg:text-start " }>Convert more customers and boost revenue with localized payment options, advanced fraud detection, and dynamic routing—all engineered to enhance your Payment Success Rate and unlock new business potential.</p>
                        <div className="flex flex-row lg:flex-col gap-4 sm:gap-7 lg:gap-4 ">
                            <HomepageOptimisePaymentsGreenCheckmarkTitle title={'Localised & Seamless User Experience'} />
                            <HomepageOptimisePaymentsGreenCheckmarkTitle title={'Intelligent Orchestration Engine'} />
                            <HomepageOptimisePaymentsGreenCheckmarkTitle title={'Advanced Fraud & Risk Management'} />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-4">
                            <SignUpBtn linkUrl='/contact'/>
                            <ExploreBtn link='alternate-payment-methods'/>
                        </div>
                    </div>

                    <Image src={PaymentOptimise} width={530} height={472} alt='img' quality={100} />
                </div>

            </section>

            {/* section 5 -security */}
            <section className={' min-h-screen relative overflow-hidden flex justify-center items-center'}>
                <Image src={SecurityBg} width={400} height={900} quality={100} alt='img' className='absolute -top-0 left-0  -z-[1] w-full  h-screen object-cover border brightness-50 ' />
                <Image src={SecurityBg2} width={400} height={900} quality={100} alt='img' className='absolute -top-0 left-0  -z-0 w-full  h-screen object-cover border  ' />

                {/* <video  loop autoPlay muted className='security-section-video top-0 left-0' width={400} height={900} ref={videoTag}>
                    <source src='/videos/security-section-video.mp4' type='video/mp4'/>
                </video> */}
                <Image src={topWhiteCorder} width={700} height={50} alt='img' quality={100} className='w-full absolute left-0 -top-4 sm:-top-11 lg:-top-12 xl:-top-20 '/>
                <Image src={BottomWhiteCorder} width={700} height={50} alt='img' quality={100} className='w-full absolute left-0 -bottom-4 sm:-bottom-11 lg:-bottom-12 xl:-bottom-20 '/>

                <div className="flex justify-center items-center py-20 px-4 lg:py-32 lg:px-24 2xl:py-52">
                    <div className="flex flex-col items-center gap-4 z-[2]">
                        <div className={"font-bold custom-text-grey400 common-all-caps text-center lg:text-start " + jetBrains_Mono.className}>Security</div>
                        <h3 className="common-h3-heading custom-text-white ">Security at each step</h3>
                        <div className="flex flex-col items-center gap-10">
                            <p className="common-body1-text  custom-text-grey300 text-center max-w-2xl">We are a tech-first organization with a security-first mindset deeply ingrained in our culture. We believe in a &quot;never trust, always verify&quot; approach by maintaining an unwavering commitment to the confidentiality, integrity, and availability of our customer&apos;s data.</p>
                            <div className="flex gap-4  ">
                                <HomepageSecurityGreenCheckmarkTitles title={'End-to-End Browser Encryption'} />
                                <HomepageSecurityGreenCheckmarkTitles title={'Strong Authentication'} />
                                <HomepageSecurityGreenCheckmarkTitles title={'Data Protection In Transit, In Use & At Rest'} />
                            </div>
                            <button className={'common-button-text py-1.5 px-5  lg:py-2.5 custom-text-white rounded-3xl payglocal-home-section5-read-more-btn custom-text-white sign-up-blue-btn-drop-shadow hover:bg-[#ffffff3e] duration-300 ' } onClick={()=>{router.push('https://developer.payglocal.in/reference/lets-integrate')}}>Read More</button>
                        </div>
                    </div>
                </div>

            </section>


            {/* section 6 - testimonial*/}
            <section className='flex flex-col items-center gap-10 lg:gap-14 py-20 pl-4 pr-4 sm:py-24 sm:pl:10 lg:p-28  background-custom-grey50 overflow-hidden'>
                <div className="flex flex-col items-center gap-4  ">
                    <div className={"font-bold custom-text-grey400 common-all-caps text-center lg:text-start " + jetBrains_Mono.className}>Testimonial</div>
                    <h3 className="common-h3-heading custom-text-black  text-center lg:text-start">Trusted by the Best in Business</h3>
                </div>
                <div className="relative section-6-testimonial-info-parent-container  w-screen overflow-hidden" >
                    <div className=" flex gap-5 flex-nowrap overflow-x-auto   section-6-testimonial-info-inner-container px-4 sm:px-10 scroll-smooth py-2.5 " ref={section6TestimonialInfo}>

                        <HomepageTestimonialBox img={PolicyBazaar} imgWidth={172} imgHeight={28} para={'We are delighted to express our immense appreciation for all the work that PayGlocal has done with PolicyBazaar. Right from creating a product to timely support and enhancements, it has really come a long way enabling us to pitch our products in the international markets. The SI (Standing Instructions) on international cards is a game changer and has helped us position our product offering across the globe with much confidence. We would like to thank the PayGlocal team for their constant support, belief in the potential, and winning attitude. We continue to be a proud partner of PayGlocal.'} position={'Senior Product manager '} />
                        <HomepageTestimonialBox img={Indiatrend} imgWidth={104} imgHeight={52} para={'Our experience with PayGlocal has been exceptional, it was a smooth process to add it to our Shopify store and it has become the No.1 choice of our customers in the last year over all the other payment gateways we already had. A smooth and simple process and a high success rate has made PayGlocal one of our best decisions for our e-commerce store. To top it off, the customer service is excellent so working with them has been great!'} position={'Director'} />
                        <HomepageTestimonialBox textImg={true} textContent={'Flower Aura'} para={"Since we are using PayGlocal, we've seen a drastic reduction in international card payments complaints, dropping to nearly zero. This improvement has not only streamlined our transaction process but also enhanced customer satisfaction significantly. Moreover, the interactions have become smoother and faster, reflecting in our conversion rates which have impressively risen from 72% to 88%. PayGlocal gateway has truly been a game-changer for us, ensuring a seamless and efficient payment experience for our customers. We're immensely thankful to PayGlocal for their amazing service."} position={'Product Head'} />
                    </div>

                </div>
                <div className="hidden lg:flex items-center gap-5">
                    <button className='background-custom-white p-3 rounded-3xl  border home-left-arrow-btn custom-border-grey200 hover-custom-border-grey400 ' onClick={()=>{handleSection6TestimonialInfoScroll(true)}}>
                        <Image src={LeftArrow} width={20} height={20} quality={100} alt='arrow' />
                    </button>
                    {/* instead of importing right arrow image using left arrow image with rotate property reduces our assets load */}
                    <button className='background-custom-white p-3 rounded-3xl  border home-left-arrow-btn custom-border-grey200 hover-custom-border-grey400 ' onClick={()=>{handleSection6TestimonialInfoScroll(false)}}>
                        <Image src={LeftArrow} width={20} height={20} quality={100} alt='arrow' className='rotate-180' />
                    </button>

                </div>

            </section>

            {/* section 7 - integration resources*/}
            <section className='flex justify-center items-center py-20 px-4 sm:py-24 sm:px-10 lg:p-28 payglocal-home-section7' >
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <div className={"font-bold custom-text-grey400 common-all-caps text-center lg:text-start " + jetBrains_Mono.className}>integration resources</div>
                        <h3 className="common-h3-heading custom-text-black   text-center lg:text-start">Integrate with ease</h3>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-5 ">
                        <HomepageIntegrationCards img={ApiDocumentation} imgWidth={29} imgHeight={29} title={'API Documentation'} para={'Read. Create. Integrate.Explore a suite of APIs to tailor a solution for your product.'} exploreBtnProps={{text:'Read Docs'}} link={'https://developer.payglocal.in/reference/payment-initiation-guide'}/>
                        <HomepageIntegrationCards img={ApiDocumentation} imgWidth={29} imgHeight={29} imgClassname='get-light-image' title={'Plugins Supported'} titleColor='white' para={'We obsess over the maze of gateways and financial institutions that make up the global economic landscape so that your teams can build what you need on one platform.'} paraColor='white' exploreBtnProps={{text:'Read more', textColor:' custom-text-white ', whiteIcon:true}} link={'https://developer.payglocal.in/reference/payglocal-x-shopify'}/>
                        <HomepageIntegrationCards img={CodeTag} imgWidth={24} imgHeight={24} title={'No-Code'} titleColor='white' para={'Seamlessly integrate, without writing a single line of code.'} paraColor='white'  exploreBtnProps={{text:'Read Docs', textColor:' custom-text-white ', whiteIcon:true}} link={'https://developer.payglocal.in/reference/payment-links'}/>
                    </div>
                </div>

            </section>

            {/* section 8 - read our blogs*/}
            <section className="background-custom-grey50 px-4 py-20 lg:px-10 lg:pt-24 lg:pb-20 flex justify-center items-center">
                <div className="flex flex-col items-center lg:items-start gap-10">

                    <div className="flex flex-col gap-4 lg:gap-5 w-full">
                        <div className={"font-bold custom-text-grey400 common-all-caps text-center lg:text-start " + jetBrains_Mono.className}>Read our BLOGS</div>
                        <div className="flex justify-center lg:justify-between items-center ">
                            <h3 className="common-h3-heading custom-text-black   text-center lg:text-start">The latest from PayGlocal</h3>

                            <Link href='/blog' className='hidden lg:block'>
                                <button className={"border background-custom-white rounded-3xl custom-text-black py-2.5 px-6 font-semibold duration-200 hover:scale-105 " }>Explore more</button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10">
                   
                        {Object.values(blogs).slice(0,3).map((element,index)=>{
                            return <HomepageReadOurBlogCompo key={index} img={element.img} publishedDay={'Published '+element.date} publishedByWhome={element.name} title={element.heading}  link={element.src} para={element.preface}/>
                        })

                        }
                    </div>

                    <Link href='/' className='block  lg:hidden'>
                        <button className={"border background-custom-white rounded-3xl custom-text-black py-2.5 px-6 font-semibold " }>Explore more</button>
                    </Link>



                </div>
            </section>

            {/* secton 9 */}
            <section className="flex justify-center items-centermpx-4 py-14 sm:px-10 sm:pt-10  lg:pt-24 sm:pb-28 background-custom-grey50">
                <div className="flex flex-col lg:flex-row gap-14 px-8 py-10 sm:py-20 sm:px-14 background-custom-white rounded-3xl border custom-border-grey200">

                    <div className='flex flex-col gap-4 home-section9-contact-us-container'>
                        <div className={"font-bold custom-text-grey400 common-all-caps text-center lg:text-start " + jetBrains_Mono.className}>Contact US</div>
                        <h3 className="common-h3-heading custom-text-black  start-account-section9-heading  text-center lg:text-start ">Let&apos;s get you started with your PayGlocal account</h3>
                        <p className="common-body2-text  custom-text-grey500  text-center lg:text-start">Our sales team will get in touch with you within 24 hours. Promise!</p>
                    </div>
                    <ContactUsFormComponent dropdownVisible={true} source="Website" />

                </div>
            </section>
        </>
    )
}
export default HomepageSection;




