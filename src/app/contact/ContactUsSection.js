'use client';
import React from 'react'
import LeftArrow from '@/Images/ContactUs/arrow-left.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ContactUsFormComponent from '@/Components/ContactUsFormComponent';
import PayglocalNavbar from '@/Components/Navbar';

 function ContactUsSection (){



    let router=useRouter();

    function handleBackNavigation()
    {
        router.back();
    }


  return (
    <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <section className="flex justify-center items-center px-4 py-24 sm:px-10   lg:pt-40 sm:pb-28 background-custom-grey50">
            <div className="flex flex-col gap-6 items-center lg:items-start relative background-custom-white px-5 py-8 sm:px-10 sm:py-16 lg:px-14 lg:py-20 rounded-2xl border border-custom-grey200">
                <div className="lg:absolute lg:top-0 lg:-left-40 lg:z-10 text-start w-full">
                    <button className={'px-5 py-2.5 custom-text-blue1 common-button-text lg:border rounded-full border-custom-grey200 flex  items-center gap-2 hover-custom-border-grey400 bg-transparent hover:bg-white  '} onClick={handleBackNavigation}>
                        <Image src={LeftArrow} width={18} height={18} quality={100} alt='img'  className=''/>
                        <span>Go Back</span>
                    </button>
                </div>
                <div className="flex flex-col gap-10 sm:gap-14">

                    <div className='flex flex-col gap-4 max-w-xl w-full '>
                        <h3 className="common-h3-heading custom-text-black  max-w-xl  text-center w-full ">Ready to transform your cross-border payments?</h3>
                        <p className="common-body2-text  custom-text-grey500  text-center ">Talk to our team now to understand how PayGlocal can help</p>
                    </div>
                    <ContactUsFormComponent dropdownVisible={true} source="Contact" />

                </div>
            </div>
        </section>
    </>
    )
}

export default ContactUsSection;
