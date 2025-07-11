'use client';
import "@/Styles/Homepage/payglocalHomepage.css";        //importing homepage css for grid dots background in our values section


import Risk from '@/Images/SamruddhiX/compliance-icon.svg';
import Efficiency from '@/Images/SamruddhiX/efficiency icon.svg';
import Privacy from '@/Images/SamruddhiX/privacy-icon.svg';
import Global from '@/Images/SamruddhiX/global-icon.svg';
import Compliance from '@/Images/SamruddhiX/compliance-icon.svg';
import FAQ from "@/Components/FAQ";
import SamXProtectingBuisnessInfo from "@/Components/SmallComponents/SamXProtectingBuisnessInfo";
import SamXAdvancedTechSection from "@/Components/SmallComponents/SamXAdvancedTechSection";
import { useEffect, useRef, useState } from "react";



function SamruddhiXSection()
{
    const iframeRef = useRef(null);  // Reference for the iframe
    const [videoStarted, setVideoStarted] = useState(false); // State to track if video has started

    useEffect(() => {
        // Create an intersection observer to track the iframe
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !videoStarted) {
                        // Video is in view and hasn't started
                        setVideoStarted(true);
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of the iframe is visible
            }
        );

        // Start observing the iframe
        if (iframeRef.current) {
            observer.observe(iframeRef.current);
        }

        // Cleanup the observer on component unmount
        return () => {
            if (iframeRef.current) {
                observer.unobserve(iframeRef.current);
            }
        };
    }, [videoStarted]); // Only run once when the video starts


    let FAQData=[
        {
            question:"How is data privacy ensured for my data?",
            answer:"We use Zero-Knowledge Proof (ZKP) protocols to ensure that your data is transmitted securely through hashing, allowing the algorithm to operate on hashed data without revealing the actual information."
        },
        {
            question:"How many tries do I have to use this API?",
            answer:"You are allowed 3 attempts without signing in. After signing in, you will receive 10 attempts. For extended access or a demo, please feel free to contact us."
        },
        {
            question:'What is a National ID?',
            answer:"A National ID is a form of identification provided by the government to verify a person's identity and citizenship. This is typically a passport but may vary depending on the country, with other forms of identification also in use."
        },
    ]


  
    return(
        <>

        {/* section 1 - protecting your buisness section  */}
        <section className=" flex justify-center items-center px-4 sm:px-10 py-20 lg:px-14 lg:py-28 overflow-hidden">
            <div className="flex flex-col  gap-14  max-w-5xl w-full">
                <div className="flex flex-col gap-4 max-w-[930px] w-full">
                    <h2 className="common-h2-heading font-medium ">It&apos;s More Than Just Checking a List—It&apos;s Protecting Your Business.</h2>
                    <p className="common-body1-text max-w-xl w-full ">In today&apos;s complex global market, compliance is only the beginning. True protection comes from understanding who you&apos;re doing business with and the potential risks they pose. A robust sanction screening strategy is essential for navigating the complexities of the global market.
                    <br /><br />
                    With SamruddhiX, you gain more than just a compliance tool—you get a comprehensive, privacy-first ZKP solution that empowers your business to:</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 ">
                    <SamXProtectingBuisnessInfo imgName={Risk} title={'Effectively Manage Risk'} para={'Conduct thorough list screenings to identify and mitigate potential risks before they impact your business.'} />
                    <SamXProtectingBuisnessInfo imgName={Efficiency} title={'Enhance Operational Efficiency'} para={'Streamline your screening processes with real-time, automated checks that reduce false positives and unnecessary alerts.'} />
                    <SamXProtectingBuisnessInfo imgName={Privacy} title={'A Privacy-First Approach'} para={'Verify names and invoices without exposing sensitive information, thanks to our zero-knowledge-proof technology.'} />
                    <SamXProtectingBuisnessInfo imgName={Global} title={'Confidently Navigate Global Markets'} para={'Access continuously updated sanction intelligence to stay informed and compliant, no matter where you operate.'} />
                    <SamXProtectingBuisnessInfo imgName={Compliance} title={'Strengthen Compliance and Customer Trust'} para={'Maintain strong relationships with your customers while ensuring full adherence to global regulatory standards.'} />
                </div>
            </div>
        </section>

        {/* advanced tech section  */}
        <section className="px-4 py-14 sm:px-10 sm:py-24 flex justify-center items-center background-custom-white   payglocal-home-section7 border border-custom-grey200">
            <div className="flex flex-col gap-10 lg:gap-14 items-center">

                    <h2 className="common-h2-heading text-center max-w-[754px] w-full">Powered by Advanced Tech</h2>


                <div className="grid grid-cols-1 lg:grid-cols-2 lg:flex-row max-w-sm lg:max-w-3xl w-full gap-10 lg:gap-14 ">
                    <SamXAdvancedTechSection title={'Zero-Knowledge Proofs'} para={'Privacy-first cryptographic protocols ensure secure, undisclosed matching.'} />
                    <SamXAdvancedTechSection title={'AML-AI API'} para={'Intelligent scoring of transactions and entities, with transparent, audit-ready decisions.'} />
                    <SamXAdvancedTechSection title={'Data Governance'} para={'Automated updates and structured data management ensure accurate and reliable screenings.'} />
                    <SamXAdvancedTechSection title={'Zero-Trust Architecture'} para={'Identity-based access and encryption safeguard data at every stage.'} />

                </div>
            </div>
        </section>

        <div className="pt-10 background-custom-grey50">
            <FAQ FAQData={FAQData} />
        </div>

        {/* youtube video section  */}
        <section>
           <iframe
                    ref={iframeRef}
                    className="w-screen h-auto aspect-video"
                    width="560"
                    height="697"
                    src={
                        videoStarted
                            ? "https://www.youtube.com/embed/VEP2Or3De-8?autoplay=1&mute=1"
                            : "https://www.youtube.com/embed/VEP2Or3De-8?mute=1"
                    }
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
        </section>
      


      
        </>
    )
}

export default SamruddhiXSection;