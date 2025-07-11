import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import "@/Styles/Homepage/payglocalHomepage.css";        //importing homepage css for grid dots background in our values section


import Img1 from '@/Images/AboutUs/about-us-teams-img1.jpg';
import Img2 from '@/Images/AboutUs/about-us-teams-img2.jpg';
import Img3 from '@/Images/AboutUs/about-us-teams-img3.jpg';
import Img4 from '@/Images/AboutUs/about-us-teams-img4.jpg';
import Img5 from '@/Images/AboutUs/about-us-teams-img5.jpg';


//our peaple section 
import PrachiDharani from '@/Images/AboutUs/Prachi-Dharani.png';
import RohitSukhija from '@/Images/AboutUs/Rohit-Sukhija.png';
import YogeshLokhande from '@/Images/AboutUs/Yogesh-Lokhande.png';
import SheenaKaushik  from '@/Images/AboutUs/Sheena-Kaushik.png';
import MohitAgrawal from '@/Images/AboutUs/Mohit-Agrawal.png';
import JuiLokhande from '@/Images/AboutUs/Jui-Lokhande.png';
import NikhilJain from '@/Images/AboutUs/Nikhil-Jain.png';
import Satyaveer from '@/Images/AboutUs/Satyaveer.png';
import RituVerma from '@/Images/AboutUs/Ritu-Verma.png';
import GouravKumar from '@/Images/AboutUs/Gourav-Kumar.png';
import PrasannaSuryawanshi from '@/Images/AboutUs/Prasanna-Suryawanshi.png';
import AkshayHingmire from '@/Images/AboutUs/Akshay-Hingmire.png';





//investor section
import KunalShah from '@/Images/AboutUs/Kunal-Shah.png';
import JitendraGupta from '@/Images/AboutUs/Jitendra-Gupta.png';
import AbhishantPant from '@/Images/AboutUs/Abhishant-Pant.png';
import AmrishRau from '@/Images/AboutUs/Amrish-Rau.png';
import SwetaRau from '@/Images/AboutUs/Sweta-Rau.png';
import AboutUsLeadersImgCompo from "@/Components/AboutUsLeadersImgCompo";
import SamXAdvancedTechSection from "@/Components/SmallComponents/SamXAdvancedTechSection";
import AboutUsGradientText from "@/Components/SmallComponents/AboutUsGradientText";
import AboutUsLocationBox from "@/Components/SmallComponents/AboutUsLocationBox";

// Our Offices across India section 
import LinkedIn from '@/Images/AboutUs/linkedin-btn.svg';
import Insta from '@/Images/AboutUs/insta-btn.svg';
import Facebook from '@/Images/AboutUs/facebook-btn.svg';
import Twitter from '@/Images/AboutUs/x-btn.svg';
import Youtube from '@/Images/AboutUs/youtube-btn.svg';
import Link from "next/link";




const jetBrains_Mono=JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})

function AboutUsSection()
{
    return(
        <>

        {/* human behind the magic section  */}
        <section className="py-14 sm:py-14  flex flex-col gap-10 lg:gap-14 items-center px-4  overflow-hidden">
            <div className="flex items-center max-w-5xl w-full lg:gap-14 ">
                <div className="flex flex-col gap-2 sm:gap-4 grow">
                    <h3 className="common-h3-heading font-medium text-center lg:text-left">The humans behind the magic</h3>
                    <p className="custom-text-grey600 common-body1-text text-center lg:text-left">When we aren&apos;t furiously building and shipping our next brilliant idea, we are celebrating the small moments - a birthday, an anniversary, a festival, any minor occasion that brings us together to share our joy (or order desserts guilt free).</p>
                </div>
                <div className="hidden lg:flex gap-9 grow ">
                    <AboutUsGradientText value={'2021'} title={'PayGlocal was formed'} containerClass=" pl-6 " />
                    <AboutUsGradientText value={'130+'} title={'Businesses using our services to grow'} containerClass=" pl-6 " titleClass=" min-w-28 " />
                    <AboutUsGradientText value={'70+'} title={'Employees working across India'} containerClass=" pl-6 " titleClass=" min-w-28 " />
                </div>
            </div>
            <div className="w-screen h-[240px] sm:h-auto flex gap-3 sm:gap-4 lg:gap-5 flex-nowrap overflow-visible scroll-smooth about-us-img-carousel">
                <Image src={Img1} width={524} height={414} alt="img" quality={100} className="w-auto object-cover max-w-none rounded-xl"/>
                <Image src={Img2} width={766} height={414} alt="img" quality={100} className="w-auto object-cover max-w-none rounded-xl"/>
                <Image src={Img3} width={653} height={414} alt="img" quality={100} className="w-auto object-cover max-w-none rounded-xl"/>
                <Image src={Img4} width={541} height={414} alt="img" quality={100} className="w-auto object-cover max-w-none rounded-xl"/>
                <Image src={Img5} width={510} height={414} alt="img" quality={100} className="w-auto object-cover max-w-none rounded-xl"/>
            </div>
            <div className="flex gap-3 grow  lg:hidden w-full">
                    <AboutUsGradientText value={'2021'} title={'PayGlocal was formed'} containerClass=" pl-4 lg:pl-6  max-w-60 w-full " />
                    <AboutUsGradientText value={'130+'} title={'Businesses using our services to grow'} containerClass=" pl-4 lg:pl-6  max-w-60 w-full " />
                    <AboutUsGradientText value={'70+'} title={'Employees working across India'} containerClass=" pl-4 lg:pl-6  max-w-60 w-full " />
                </div>
        </section>

        {/* our values section  */}
        <section className="px-4 py-14 sm:px-10 sm:py-20 flex justify-center items-center background-custom-grey50   payglocal-home-section7">
            <div className="flex flex-col gap-10 lg:gap-20 items-center">
                <div className="flex flex-col gap-4 items-center max-w-3xl w-full">
                    <div className={"common-all-caps custom-text-grey500 text-center "+jetBrains_Mono.className }>Our Values</div>
                    <h3 className="common-h3-heading text-center">We value Trust, Growth, and Collaboration above everything else.</h3>
                </div>

                <div className="flex flex-col lg:flex-row max-w-sm lg:max-w-5xl w-full gap-10">
                    <SamXAdvancedTechSection title={'Trust and Transparency'} para={'We prioritize building strong, open relationships with our clients, founded on mutual trust and honesty.'} parentdivWidthClass=" max-w-xs " />
                    <SamXAdvancedTechSection title={'Employee Growth'} para={'We foster a supportive environment that encourages personal and professional development, empowering our team to reach their full potential.'} parentdivWidthClass=" max-w-xs " />
                    <SamXAdvancedTechSection title={'Collaboration and Innovation'} para={"By working closely together, we drive creativity and deliver exceptional solutions that exceed our clients' expectations."} parentdivWidthClass=" max-w-xs " />

                </div>
            </div>
        </section>


        {/* our peaple section  */}
        <section className="flex justify-center items-center py-14 px-4 sm:py-20 sm:px-10">
            
            <div className="flex flex-col max-w-5xl w-full gap-10 sm:gap-20">
                
                <div className="flex flex-col gap-2 sm:gap-4 items-center">
                    <div className={"common-all-caps custom-text-grey500 text-center "+jetBrains_Mono.className }>Our people</div>
                    <h3 className="common-h3-heading font-medium  text-center">We&apos;re a team of leaders! </h3>
                </div>
                    <div className="flex flex-wrap justify-center items-center gap-16  w-full">
                        <AboutUsLeadersImgCompo imgName={PrachiDharani} name={'Prachi Dharani'} position={'Co-founder & CEO'} />
                        <AboutUsLeadersImgCompo imgName={RohitSukhija} name={'Rohit Sukhija'} position={'Co-founder & CPO'} />
                        <AboutUsLeadersImgCompo imgName={YogeshLokhande} name={'Yogesh Lokhande'} position={'Co-founder & CTO'} />
                        <AboutUsLeadersImgCompo imgName={SheenaKaushik} name={'Sheena Kaushik'} position={'Vice President - Business Development'} />
                        <AboutUsLeadersImgCompo imgName={MohitAgrawal} name={'Mohit Agrawal'} position={'Senior Director of Engineering'} />
                        <AboutUsLeadersImgCompo imgName={JuiLokhande} name={'Jui Lokhande'} position={'Director of Quality Assurance'} />
                        <AboutUsLeadersImgCompo imgName={NikhilJain} name={'Nikhil Jain'} position={'Senior Director of Risk & Operations'} />
                        <AboutUsLeadersImgCompo imgName={Satyaveer} name={'Satyaveer Singh'} position={'Director of Sales Enablement'} />
                        <AboutUsLeadersImgCompo imgName={RituVerma} name={'Ritu Verma'} position={'Head of Regulatory Compliance and Governance'} />
                        <AboutUsLeadersImgCompo imgName={GouravKumar} name={'Gourav Kumar'} position={'Director of Information Security'} />
                        <AboutUsLeadersImgCompo imgName={PrasannaSuryawanshi} name={'Prasanna Suryawanshi'} position={'Head of Banking Alliance & Strategic Partnership'} />
                        <AboutUsLeadersImgCompo imgName={AkshayHingmire} name={'Akshay Hingmire'} position={'Head of Finance'} />

                    </div>
                

            </div>

        </section>

          {/* Investors section  */}
          <section className="flex justify-center items-center py-14 px-4 sm:py-20 sm:px-10">
            
            <div className="flex flex-col max-w-5xl w-full gap-10 sm:gap-20">
                
                <div className="flex flex-col gap-2 sm:gap-4 items-center">
                    <div className={"common-all-caps custom-text-grey500 text-center "+jetBrains_Mono.className }>Investors</div>
                    <h3 className="common-h3-heading font-medium  text-center">Backed by the best</h3>
                    <div className="common-body1-text custom-text-grey600 max-w-[399px] w-full text-center">We have some of the best in the industry advising us. We couldn&apos;t be more grateful for their support!</div>
                </div>
                    <div className="flex flex-wrap justify-center items-center gap-16  w-full">
                        <AboutUsLeadersImgCompo imgName={KunalShah} name={'Kunal Shah'} position={'Cred'} />
                        <AboutUsLeadersImgCompo imgName={JitendraGupta} name={'Jitendra Gupta'} position={'Jupiter'} />
                        <AboutUsLeadersImgCompo imgName={AbhishantPant} name={'Abhishant Pant'} position={'Fintech Yatra'} />
                        <AboutUsLeadersImgCompo imgName={AmrishRau} name={'Amrish Rau'} position={'Pine Labs'} />
                        <AboutUsLeadersImgCompo imgName={SwetaRau} name={'Sweta Rau'} position={'White Ventures'} />
                    </div>
            </div>

        </section>

        {/* Our Offices across India section */}
        <section className="flex justify-center items-center px-5 sm:px-10 py-20 background-custom-grey50">
            <div className="flex flex-col items-center gap-14 sm:gap-20">
                <div className="flex-flex-col gap-4 items-center max-w-[530px] w-full ">
                    <h3 className="common-h3-heading text-center custom-text-grey900">Our Offices across India</h3>
                    <div className="common-body1-text text-center custom-text-grey600">Drop by and meet us at any of our locations—we&apos;d love to connect and explore opportunities together!</div>
                </div>
                <div className="grid lg:grid-cols-3 gap-3 lg:gap-14 max-w-6xl w-full">
                    <AboutUsLocationBox title={'Bangalore Headquarters'} para={'72, service road, LRDE layout, Doddanekkundi, Bengaluru - 560037, India.'} />
                    <AboutUsLocationBox title={'Pune Headquarters'} para={'Vibe Co-working Spaces, S.No. 23, Baner One Place, 7th floor, Pt Pan Card Club Road, Baner, Pune, Maharashtra-411045, India'} />
                    <AboutUsLocationBox title={'Gurugram Headquarters'} para={'Apeejay Business Centre, Signature tower 3, Sector 15, Part-2, Unitech, Gurugram, Haryana, 122001, India'} />
                </div>

                <div className="w-24 h-0.5 background-custom-grey200"></div>
                <div className="flex flex-col gap-5 items-center max-w-[360px] w-full ">
                    <h4 className="common-h4-heading">Follow Us</h4>
                    <div className="flex gap-5">
                        <a href="https://www.linkedin.com/company/payglocal/" target="_blank" rel="noopener noreferrer">
                            <Image src={LinkedIn} width={56} height={56} quality={100} alt="img" className=" max-w-none" />
                        </a>
                        <a href="https://www.instagram.com/payglocal.in/" target="_blank" rel="noopener noreferrer">
                            <Image src={Insta} width={56} height={56} quality={100} alt="img" className=" max-w-none" />
                        </a>
                        <a href="https://www.facebook.com/payglocal/" target="_blank" rel="noopener noreferrer">
                            <Image src={Facebook} width={56} height={56} quality={100} alt="img" className=" max-w-none" />
                        </a>
                        <a href="https://x.com/PayGlocalHQ" target="_blank" rel="noopener noreferrer">
                            <Image src={Twitter} width={56} height={56} quality={100} alt="img" className=" max-w-none" />
                        </a>
                        <a href="https://www.youtube.com/channel/UC9WNIlG_V-PDFdk4C6Vt72A" target="_blank" rel="noopener noreferrer">
                            <Image src={Youtube} width={56} height={56} quality={100} alt="img" className=" max-w-none" />
                        </a>

                    </div>


                </div>

            </div>
        </section>

        </>
    )
}

export default AboutUsSection;