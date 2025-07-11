'use client';
import '@/Styles/Footer/PayglocalFooter.css';
import Image from 'next/image';
import PayglocalFooterLogoCopyright from './PayglocalFooterLogoCopyright';
import { JetBrains_Mono, Manrope } from 'next/font/google';
import Arrow from '@/Images/Footer/Chevron.svg';
import Link from 'next/link';
import { useState } from 'react';
import SignUpBtn from './SignUpBtn';

const jetBrains_Mono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})
const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})
function PayglocalFooter({ReadyToTakeOffBtnPresent=true})
{
    let[LinkContainerIndex,setLinkContainerIndex]=useState(-1);

    function handleLinkClick(index)
    {
        if(index==LinkContainerIndex)
        {
            setLinkContainerIndex(-1);
            return;
        }
        setLinkContainerIndex(index);
    }
    return(
        <>
        <footer className="background-custom-grey900 pb-5">
            <div className='payglocal-footer-graphic-image' ></div>
          {ReadyToTakeOffBtnPresent&&  <div className="flex flex-col gap-8 items-center  py-16  justify-center border-b border-dashed custom-border-grey600 w-full">
                    <div className="flex flex-col items-center gap-2">
                        <h3 className="common-h3-heading custom-text-white text-center ">Ready to take off?</h3>
                        <p className={"common-body1-text custom-text-grey500  text-center "}>Our sales team will get in touch with you within 24 hours. Promise!</p>
                    </div>
                    <SignUpBtn text='Sign Up Now' linkUrl='/contact'/>
            </div>}
            <div className="footer-payglocal-logo-and-links-parent-container w-full flex flex-col lg:flex-row gap-7 lg:gap-0 py-20 px-10 lg:px-0 lg:py-0 mb-20 lg:mx-auto lg:my-0 ">
                <PayglocalFooterLogoCopyright/>
                <div className="payglocal-footer-link-container  lg:px-10 flex flex-col gap-5 border-b lg:pt-20 lg:border-b-0 lg:border-l lg:border-dashed  custom-border-grey600 pb-3 lg:pb-0">
                    <div className="flex justify-between items-center cursor-pointer " onClick={()=>{handleLinkClick(0)}}>
                        <div className={"font-bold custom-text-grey500 common-all-caps  payglocal-footer-link-titles " + jetBrains_Mono.className}>Products</div>
                        <Image src={Arrow} width={24} height={24} alt='img' quality={100} className={`block lg:hidden duration-500  ${LinkContainerIndex==0? " rotate-180 ":''} `}/>
                    </div>
                    <div className={`flex flex-col gap-3 duration-500 ${LinkContainerIndex==0?' footer-links-visible  footer-links-hidden ':' footer-links-hidden '}`}>
                        <Link href='/dynamic-checkout' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Dynamic Checkout</Link>
                        <Link href='/card-processing' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Card Payments</Link>
                        <Link href='/alternate-payment-methods' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Global Payment Methods</Link>
                        <Link href='/recurring-payments-subscriptions' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Recurring Payments</Link>
                        <Link href='/multi-currency-accounts' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Multi Currency Accounts</Link>
                        <Link href='/international-payments-platform' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>One Platform</Link>
                        <Link href='/samruddhi-x' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Sanction Screening</Link>
                    </div>
                </div>

                <div className="payglocal-footer-link-container  lg:px-10 flex flex-col gap-5 border-b lg:pt-20 lg:border-b-0 lg:border-l lg:border-dashed  custom-border-grey600 pb-3 lg:pb-0">
                    <div className="flex justify-between items-center cursor-pointer " onClick={()=>{handleLinkClick(1)}}>
                        <div className={"font-bold custom-text-grey500 common-all-caps  payglocal-footer-link-titles " + jetBrains_Mono.className}>Solutions</div>
                        <Image src={Arrow} width={24} height={24} alt='img' quality={100} className={`block lg:hidden duration-500  ${LinkContainerIndex==1? " rotate-180 ":''} `}/>
                    </div>
                    <div className={`flex flex-col gap-3 duration-500 ${LinkContainerIndex==1?' footer-links-visible  footer-links-hidden ':' footer-links-hidden '}`}>
                        <Link href='/why-payglocal' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Why Choose PayGlocal</Link>
                        <Link href='/solutions/enterprise' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>For Enterprise</Link>
                        <Link href='/solutions/exporters' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>For Exporters</Link>
                    </div>
                </div>


                <div className="payglocal-footer-link-container  lg:px-10 flex flex-col gap-5 border-b lg:pt-20 lg:border-b-0 lg:border-l lg:border-dashed  custom-border-grey600 pb-3 lg:pb-0">
                    <div className="flex justify-between items-center cursor-pointer " onClick={()=>{handleLinkClick(2)}}>
                        <div className={"font-bold custom-text-grey500 common-all-caps  payglocal-footer-link-titles " + jetBrains_Mono.className}>Company</div>
                        <Image src={Arrow} width={24} height={24} alt='img' quality={100} className={`block lg:hidden duration-500  ${LinkContainerIndex==2? " rotate-180 ":'' } `}/>
                    </div>
                    <div className={`flex flex-col gap-3 duration-500 ${LinkContainerIndex==2?' footer-links-visible  footer-links-hidden ':' footer-links-hidden '}`}>
                        <Link href='/about' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>About us</Link>
                        <Link href='/contact' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Contact us</Link>
                        <Link href='/careers' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Careers</Link>
                        <Link href='/blog' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Blog</Link>
                        <Link href='/webinar' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Webinar</Link>
                        <Link href='/' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Corporate Information</Link>
                    </div>
                </div>


                <div className="payglocal-footer-link-container  lg:px-10 flex flex-col gap-5 border-b lg:pt-20 lg:border-b-0 lg:border-l lg:border-dashed  custom-border-grey600 pb-3 lg:pb-0">
                    <div className="flex justify-between items-center cursor-pointer " onClick={()=>{handleLinkClick(3)}}>
                        <div className={"font-bold custom-text-grey500 common-all-caps  payglocal-footer-link-titles " + jetBrains_Mono.className}>Documentation</div>
                        <Image src={Arrow} width={24} height={24} alt='img' quality={100} className={`block lg:hidden duration-500  ${LinkContainerIndex==3? " rotate-180 ":''} `}/>
                    </div>
                    <div className={`flex flex-col gap-3 duration-500 ${LinkContainerIndex==3?' footer-links-visible  footer-links-hidden ':' footer-links-hidden '}`}>
                        <Link href='https://developer.payglocal.in/reference/payment-initiation-guide' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>API Integrations</Link>
                        <Link href='https://developer.payglocal.in/reference/payglocal-x-shopify' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Our Plugins</Link>
                        <Link href='https://developer.payglocal.in/reference/payment-links' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>No-code</Link>
                    </div>
                </div>

                <div className="payglocal-footer-link-container  lg:px-10 flex flex-col gap-5 border-b lg:pt-20 lg:border-b-0 lg:border-l lg:border-dashed  custom-border-grey600 pb-3 lg:pb-0">
                    <div className="flex justify-between items-center cursor-pointer " onClick={()=>{handleLinkClick(4)}}>
                        <div className={"font-bold custom-text-grey500 common-all-caps  payglocal-footer-link-titles " + jetBrains_Mono.className}>LEGAL</div>
                        <Image src={Arrow} width={24} height={24} alt='img' quality={100} className={`block lg:hidden duration-500  ${LinkContainerIndex==4? " rotate-180 ":''} `}/>
                    </div>
                    <div className={`flex flex-col gap-3 duration-500 ${LinkContainerIndex==4?' footer-links-visible  footer-links-hidden ':' footer-links-hidden '}`}>
                        <Link href='/compliance' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Compliance</Link>
                        <Link href='/merchant-terms' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Merchant Terms of Use</Link>
                        <Link href='/privacy-policy' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Privacy Policy </Link>
                        <Link href='/cookie-policy' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Cookie Policy</Link>
                        <Link href='/grievance-redressal' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Grievance Redressal Policy</Link>
                        <Link href='/terms-and-conditions' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Website Terms of Use</Link>
                        <Link href='/zero-tolerance-compliance-centre' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Zero-Tolerance Compliance</Link>
                        <Link href='/refund-policy' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Refund Policy</Link>
                        <Link href='/merchant-onboarding-policy' className={"custom-text-white common-body2-text font-medium hover:underline "+manrope.className}>Merchant Onboarding Policy</Link>
                        
                        
                    </div>
                </div>
            </div>
            <div className="custom-border-grey600 border border-dashed mt-10"></div>
            <div className="common-body3-text custom-text-grey600 font-medium lg:text-center my-14 lg:my-10 max-w-screen-md w-full mx-auto px-10 lg:px-0">All third-party logos and trademarks displayed on this website are for illustrative purposes only. Their appearance does not imply any endorsement, sponsorship or affiliation  between PayGlocal and the trademark owner / company / brand . All such trademarks are the property of their respective owners.</div>

            <PayglocalFooterLogoCopyright desktopVisibility={false} mobileAndTabletVisibility={true}/>
        </footer>
        </>
    )
}



export default PayglocalFooter