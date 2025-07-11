'use client';
import Image from 'next/image';
import {  JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import "@/Styles/Homepage/payglocalHomepage.css";        //importing homepage css for grid dots background in our values section


//highlight section images
import FunIcon from '@/Images/Career/fun-icon.svg';             
import Growth from '@/Images/Career/growth-icon.svg';
import Star from '@/Images/Magneto/star.svg';
import CompanyIcon from '@/Images/Career/company-icon.svg';

//team photo section images
import Team from '@/Images/AboutUs/about-us-teams-img2.jpg';


//open position section images
import CareerWhatWeOfferGridBoxCompo from '@/Components/CareerWhatWeOfferGridBoxCompo';
import SamXAdvancedTechSection from '@/Components/SmallComponents/SamXAdvancedTechSection';
import RecurringPaymentsHighlightCard from '@/Components/SmallComponents/RecurringPaymentsHighlightCard';
import CareerOpenPosition from '@/Components/CareerOpenPosition';
import { openPositions } from './careersData';
import { useRef } from 'react';
import CareerHeader from './CareerHeader';




const jetBrains_Mono=JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})

function CareerSection()
{

    let positionsRef=useRef();
    function getFocused()
    {
        positionsRef.current.scrollIntoView({behavior:'smooth'});

    }
    return(
        <>
        {/* Header */}
        <CareerHeader handleClickForScroll={getFocused}/>
     
        {/* our values section  */}
        <section className="px-4 py-14 sm:px-10 sm:py-20 flex justify-center items-center background-custom-grey50   payglocal-home-section7">
            <div className="flex flex-col gap-10 lg:gap-20 items-center">
                <div className="flex flex-col gap-4 items-center max-w-3xl w-full">
                    <div className={"common-all-caps custom-text-grey500 text-center "+jetBrains_Mono.className }>Our Values</div>
                    <h3 className="common-h3-heading text-center">Our company values Trust, Growth, and Collaboration above all else.</h3>
                </div>

                <div className="flex flex-col lg:flex-row max-w-sm lg:max-w-5xl w-full gap-10">
                    <SamXAdvancedTechSection title={'Trust and Transparency'} para={'We prioritize building strong, open relationships with our clients, founded on mutual trust and honesty.'} parentdivWidthClass=" max-w-xs " />
                    <SamXAdvancedTechSection title={'Employee Growth'} para={'We foster a supportive environment that encourages personal and professional development, empowering our team to reach their full potential.'} parentdivWidthClass=" max-w-xs " />
                    <SamXAdvancedTechSection title={'Collaboration and Innovation'} para={"By working closely together, we drive creativity and deliver exceptional solutions that exceed our clients' expectations."} parentdivWidthClass=" max-w-xs " />

                </div>
            </div>
        </section>

        
        {/* Highlights  section*/}
        <section className="py-10 sm:py-20 px-4 sm:px-10 flex items-center justify-center background-custom-white ">
            <div className="flex flex-col gap-2.5">
                <div className="flex flex-col items-center background-custom-grey50 gap-10 sm:gap-20 py-14 px-5 lg:py-20 sm:px-12 rounded-3xl max-w-5xl w-full">
                    <div className="flex flex-col gap-4 items-center">
                        <p className={"common-all-caps custom-text-grey500 "+jetBrains_Mono.className}>A sneak peek into</p>
                        <h2 className="common-h2-heading custom-text-black text-center max-w-4xl">Why our teams love us, and you will love us too </h2>
                        <p className={"common-body1-text custom-text-grey600 text-center lg:max-w-2xl "}>We take pride in creating a safe, supportive, and comfortable space for all our employees, to be a part of their wins and joys, both professional & personal.</p>
                    </div>
                    <div className="flex flex-col gap-10 sm:gap-16 lg:gap-20 ">
                        
                        <div className="flex flex-col lg:flex-row  gap-10 sm:gap-16 lg:gap-20 items-center">

                            <RecurringPaymentsHighlightCard img={FunIcon} title={'A flexible work environment built on mutual respect'} para={"If you're looking for a workplace where you can be yourself, be productive, and have fun, we're it. We prioritize creating a workplace that's both enjoyable and accommodating."} />
                            <RecurringPaymentsHighlightCard img={Growth} title={'Be a part of early stage growth'} para={'Reach your full potential working closely with leadership in an evolving and adapting environment. Develop new skills and expertise, take up more responsibilities as you grow.'} />
                          

                        </div>
                        <div className="flex flex-col lg:flex-row  gap-10 sm:gap-16 lg:gap-20 items-center">
                        
                            <RecurringPaymentsHighlightCard img={Star} title={'Opportunities to do the extraordinary'} para={"Take on new and exciting challenges with PayGlocal. We're pushing the boundaries of payments and customer expectations. Join a team of creative and innovative minds solving complex problems."} />
                            <RecurringPaymentsHighlightCard img={CompanyIcon} title={'We put our people at heart of everything we do'} para={"Experienced mentors who will guide you in your career path and provide valuable feedback, helping you to grow both professionally and personally."} />
                        
                        </div>
                        
                    </div>


                    <div className="">
                        <p className={"common-body1-text custom-text-grey600 max-w-2xl w-full text-center "}>By focusing on representation, recruitment, engagement, culture, accountability, and education, we&apos;re committed to being a workplace where everyone can grow.</p>
                    </div>
                    
                </div>

            
            </div>
        </section>


        {/* what we offer section  */}
        <section className="px-4 py-14 sm:px-10 sm:py-20 flex justify-center items-center ">
            <div className="flex flex-col gap-10 text-center max-w-5xl w-full">
                <h2 className="common-h2-heading">What we offer</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    
                    <CareerWhatWeOfferGridBoxCompo number={'1'} title={'Insurance, Health & Wellness'} para={'Protect yourself and your loved ones with our insurance plan. Stay your best self physically and mentally through a range of perks - memberships, wellness programs and resources. For Employees over 35 years we also offer annual medical checkup'}  />
                    <CareerWhatWeOfferGridBoxCompo number={'2'} title={'Return to Work Policy for Women'} para={'We recognise the unique challenges that women face while taking care of their children or families. We ensure a smooth and positive experience transitioning back to work.'}  />
                    <CareerWhatWeOfferGridBoxCompo number={'3'} title={'ESOPS for employees'} para={'We believe our employees are the contributors of our growth. And we believe in sharing the benefits of the growth. Get employee stock options and other perks of being an early member.'}  />                  
                    <CareerWhatWeOfferGridBoxCompo number={'4'} title={'Flexible work arrangement'} para={'We have a hybrid work model where employees have the flexibility to work from anywhere, home or office. We create an environment that is both effective and inclusive.'}  />                  
                    <CareerWhatWeOfferGridBoxCompo number={'5'} title={'Family and parenting benefits'} para={'Family is important, that is why we provide a range of benefits to our employees - paid parental leave, flexible work arrangements, family friendly workplace etc.'}  />                  
                    <CareerWhatWeOfferGridBoxCompo number={'6'} title={'Unlimited leaves and time off'} para={'We trust our employees to be responsible for their work and judicious with their time. We offer unlimited leave and vacation policy.'}  />                  
                    <CareerWhatWeOfferGridBoxCompo number={'7'} title={'Your learning & development'} para={'Our core value of Continuous Learning aims to provide employees with opportunities for personal and professional growth. Through our Education Reimbursement Policy and development trainings, we ensure a valuable learning experience for all.'}  />                  
                    <CareerWhatWeOfferGridBoxCompo number={'8'} title={'On-site meals and snacks'} para={'You are taken care when in office with tasty meals and snacks'}  />                  
                </div>
            </div>
        </section>

        {/* Team section  */}
        <section className="px-4 pt-14 sm:px-10 sm:pt-20 flex justify-center items-center ">
            <div className="flex flex-col items-center gap-8 sm:gap-14">
                <h3 className="common-h3-heading text-center max-w-5xl">Proven veteran or budding novice, choose growth and opportunity with PayGlocal</h3>
                <Image src={Team} width={1024} height={580} quality={100} alt='img' className='rounded-xl' />
            </div>
        </section>

         {/* Open Position section  */}
         <section className="px-4 py-14 sm:px-10 sm:py-20 flex justify-center items-center " ref={positionsRef}>
            <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-14 max-w-3xl w-full">
                <h3 className="common-h3-heading text-center ">Open Positions</h3>
                <div className="flex flex-col gap-5 sm:gap-6 w-full">
                    {openPositions.map((element,index)=>{
                        return <CareerOpenPosition key={index} data={element} />
                    })

                    }
                    

                </div>

                <p className="custom-text-grey500 text-center">Visit our Zero-Tolerance Compliance Centre, where you can view our Policy. This policy reflects our unwavering commitment to maintaining a safe and respectful space for everyone.
                    <br /><br />
                    Should you notice any incident that may not align with our policy, we invite you to share your observations through the <Link href={'/zero-tolerance-compliance-centre'} className='custom-text-blue1'>Zero-Tolerance Compliance Centre.</Link>  Your input is essential to maintaining and upholding our standards.
                </p>
            </div>


        </section>


        </>
    )
}
export default CareerSection;