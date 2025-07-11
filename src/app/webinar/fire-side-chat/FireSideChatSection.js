'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { JetBrains_Mono } from 'next/font/google';

//section 1 - blog images
import Webinar from '@/Images/Webinar/Webinar.svg';
import WrittenBy from '@/Images/SingleBlog/written-by.png';
import Facebook from '@/Images/Webinar/facebook.svg';
import LinkedIn from '@/Images/Webinar/linkedIn.svg';
import Twitter from '@/Images/Webinar/twitter.svg';

//modal images
import Close from '@/Images/Amazon/close.svg';
import SanitizingInputs from '@/SanitizingInputs/SanitizingInput';


const jetBrains_Mono=JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})

function FireSideChatSection () {

         //for storing the input values
         let[firstName,setFirstName]=useState('');
         let[email,setEmail]=useState('');
         let[companyName,setCompanyName]=useState('');
         let[jobTitle,setJobTitle]=useState('');


         //for showing input field error massege if some submitting the form when inputs are empty
        let[firstNameNotValid,setFirstNameNotValid]=useState(false);
        let[emailNotValid,setEmailNotValid]=useState(false);
        let[companyNameNotValid,setCompanyNameNotValid]=useState(false);
        let[jobTitleNotValid,setJobTitleNotValid]=useState(false);

        //for modal 
       let[modalOpen,setModalOpen]=useState(false);

        //this will verify the have inputed the modal form of not
        let[isSessionActive,setIsSessionActive]=useState(false);

        //this will ensure the session is active or not (if the session storage contains the pgWebinarSessionActive )
        useEffect(()=>{
            let session=sessionStorage.getItem('pgWebinarSessionActive');

            if(session=='true')
            {
                setIsSessionActive(true);
            }
        },[])

           //to handle saniizing inptus manually
        function handleFirstName(e)
        {
            let removedSpecialCharacters=e.target.value.replace(/[^a-zA-Z0-9 ]/g, "");  //if some try to use any special character this will replace to the empty string
    
            setFirstName(removedSpecialCharacters);     //finally assign the value
        }
    
    
        function handleEmail(e)
        {
            setEmail(e.target.value);
        }

        function handleCompanyName(e)
        {
            setCompanyName(e.target.value);
        }

        function handleJobTitle(e)
        {
            let removedSpecialCharacters=e.target.value.replace(/[^a-zA-Z0-9 ]/g, "");  //if some try to use any special character this will replace to the empty string

            setJobTitle(removedSpecialCharacters);
        }

        //when user click register

        function handleSubmit()
        {
            // Sanitizing input before storing it in state
            let sanitizedName=SanitizingInputs(firstName);
            let sanitizedEmail = SanitizingInputs(email); 
            let sanitizedCompanyName = SanitizingInputs(companyName); 
            let sanitizedJobTitle = SanitizingInputs(jobTitle); 

            if(sanitizedName==='' || sanitizedEmail==='' || sanitizedCompanyName==='' || sanitizedJobTitle==='' )
            {
                setFirstNameNotValid(true);          
                setEmailNotValid(true);     
                setCompanyNameNotValid(true);
                setJobTitleNotValid(true);     
                return; 
            }

            sessionStorage.setItem('pgWebinarSessionActive','true');
            setIsSessionActive(true);
        }
           //when user close modal
        function handleModalClose()
        {
            setEmail('');
            setFirstName('');
            setCompanyName('');
            setJobTitle('');

            setFirstNameNotValid(false);          
            setEmailNotValid(false);     
            setCompanyNameNotValid(false);
            setJobTitle(false);             
            setModalOpen(false);
        }


        function handleLearnMore()
        {
            setModalOpen(true);
        }


  return (
        <>
            <section className="px-4 pb-10 sm:px-10 sm:pb-14 pt-36 flex justify-center items-center background-custom-grey50">
                
                <div className="flex flex-col  lg:gap-14  max-w-5xl w-full background-custom-white  rounded-2xl ">
                    
                    <Image src={Webinar} width={1000} height={422} alt='img' quality={100} className='rounded-2xl'/>
                    
                    <div className="flex flex-col lg:flex-row px-6 py-8 sm:p-12 gap-10">
                        
                        <div className="flex flex-col gap-6 lg:max-w-[423px] w-full">
                                <p className={"common-all-caps custom-text-grey500 "+jetBrains_Mono.className}>Webinar  |  23 Sept 2022</p>
                                <h4 className="common-h4-heading">Fireside chat - Expanding Globally with Local Payment Methods</h4>
                                <div className="">
                                    <button className={"background-custom-blue1 py-2.5 px-6 common-btn-text custom-text-white rounded-3xl sign-up-blue-btn-drop-shadow hover:scale-110 duration-300 " } onClick={handleLearnMore}>View Webinar</button>
                                </div>
                                <p className={"common-body1-text custom-text-grey800 "}>India is among the top ten exporters in the world with exports worth $670 billion 2021-22 and a record-high export of services worth $250 billion.
                                <br /><br />
                                The exponential growth of digital payments and supporting (payments) infrastructure gives the Indian exporter a prime opportunity to expand into newer geographies and markets. However, unlocking this growth needs more than just meeting demand. Local payment methods can hold the key.</p>
                        </div>

                        <div className="flex flex-col gap-6 p-6 lg:p-8 grow background-custom-grey50 rounded-xl lg:max-w-[428px] w-full">
                           <div className="flex flex-col gap-5">
                                <p className={"common-body1-text custom-text-grey600 "}>Speakers</p>
                                <div className="flex items-center gap-4">
                                    <Image src={WrittenBy} width={72} height={72} quality={100} alt='img' className='rounded-full'/>
                                    <div className="">
                                        <p className={"common-body1-text font-bold "}>Rishab K</p>
                                        <p className={"common-body3-text custom-text-grey600 "}>Product Manager</p>
                                    </div>
                                </div>
                           </div>
                          <div className="border border-custom-grey200"></div>
                          <div className="flex flex-col gap-6  grow background-custom-grey50 rounded-xl w-full ">
                              <h5 className="common-h5-heading">In this webinar we will discuss:</h5>
                              <ul className="list-inside list-disc space-y-2 ml-2.5">
                                  <li className={"common-body1-text custom-text-grey600 " }>Indian opportunity in cross border growth</li>
                                  <li className={"common-body1-text custom-text-grey600 " }>Consumer expectations and preferences internationally</li>
                                  <li className={"common-body1-text custom-text-grey600 " }>Approaching local markets with local payments</li>
                                  <li className={"common-body1-text custom-text-grey600 " }>How to unlock growth with local payment methods</li>

                              </ul>
                          </div>
                           <div className="border border-custom-grey200"></div>
                           <div className="flex items-center gap-5">
                                <p className={"common-body1-text custom-text-grey600 "}>Share on</p>
                                <a href={'https://www.facebook.com/payglocal/'} target='blank'>
                                    <div className="flex justify-center items-center w-10 h-10 rounded-full background-custom-white border">
                                        <Image src={Facebook} width={17} height={17} quality={100} alt='img' className='rounded-full'/>
                                    </div>
                                </a>
                                <a href={'https://www.linkedin.com/company/payglocal/posts/?feedView=all'} target='blank'>
                                    <div className="flex justify-center items-center w-10 h-10 rounded-full background-custom-white border">
                                        <Image src={LinkedIn} width={17} height={17} quality={100} alt='img' className='rounded-full'/>
                                    </div>
                                </a>
                                <a href={'https://x.com/PayGlocalHQ'} target='blank'>
                                    <div className="flex justify-center items-center w-10 h-10 rounded-full background-custom-white border">
                                        <Image src={Twitter} width={17} height={17} quality={100} alt='img' className='rounded-full'/>
                                    </div>
                                </a>

                           </div>
                            
                        </div>


                    </div>
                   

                  
                    
                </div>
            </section>


            {/* modal  */}
            <div className={`flex justify-center items-center fire-side-chat-modal-outer-container w-screen h-screen fixed left-0 top-0 duration-500 ${modalOpen?' z-20 opacity-100 ':'-z-10 opacity-0'}`}>
               {isSessionActive? <div className="flex items-start w-[70vw] h-[70vh]">
                    <video controls loop autoPlay className='aspect-video w-full h-full rounded-lg lg:rounded-3xl'>
                        <source src='https://d1td23xe6whm3j.cloudfront.net/Expanding+Globally+with+Local+Payment+Methods.mp4' type='video/mp4'/>
                    </video>
                    <Image src={Close} width={32} height={32} alt="img" quality={100} className="cursor-pointer" onClick={handleModalClose}/>
                </div>:
                <div className="flex flex-col gap-8 px-4 py-8 sm:px-10  rounded-3xl background-custom-white fire-side-chat-modal-inner-container">
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-end w-full ">
                            <Image src={Close} width={32} height={32} alt="img" quality={100} className="cursor-pointer" onClick={handleModalClose}/>
                        </div>
                        <h3 className="common-h3-heading text-center">Register for webinar</h3>
                    </div>
                    <div className="flex flex-col gap-7 lg:max-w-[493px] w-full">
                        <div className="flex gap-5 flex-col sm:flex-row items-center w-full">
                            <div className="flex flex-col gap-2 grow w-full sm:w-auto">
                                <label htmlFor="fullname" className={"custom-text-black common-body2-text  " }>Full Name<span className='text-red-500'>*</span></label>
                                <input type="text" name="fullname" value={firstName}  className={'common-body2-text p-3 custom-text-grey500 outline-none rounded-xl border w-full' } placeholder='Your Full Name here'  required onChange={handleFirstName}/>
                                {firstNameNotValid?<span className='text-red-600 common-body3-text'>Please enter your name</span>:null}
                            </div>
                            <div className="flex flex-col gap-2 grow w-full sm:w-auto">
                                <label htmlFor="email" className={"custom-text-black common-body2-text  " }>Work Email Address<span className='text-red-500'>*</span></label>
                                <input type="text" name="email" value={email}  className={'common-body2-text p-3 custom-text-grey500 outline-none rounded-xl border w-full' } placeholder='Your work email address here'  required onChange={handleEmail}/>
                                {emailNotValid?<span className='text-red-600 common-body3-text'>Please enter your oork email address</span>:null}
                            </div>
                        </div>
                        <div className="flex gap-5 flex-col sm:flex-row items-center w-full">
                            <div className="flex flex-col gap-2 grow w-full sm:w-auto">
                                <label htmlFor="company" className={"custom-text-black common-body2-text  " }>Company Name<span className='text-red-500'>*</span></label>
                                <input type="text" name="company" value={companyName}  className={'common-body2-text p-3 custom-text-grey500 outline-none rounded-xl border w-full' } placeholder='Your company name here'  required onChange={handleCompanyName}/>
                                {companyNameNotValid?<span className='text-red-600 common-body3-text'>Please enter company name</span>:null}
                            </div>
                            <div className="flex flex-col gap-2 grow w-full sm:w-auto">
                                <label htmlFor="job" className={"custom-text-black common-body2-text  " }>Job Title<span className='text-red-500'>*</span></label>
                                <input type="text" name="job" value={jobTitle}  className={'common-body2-text p-3 custom-text-grey500 outline-none rounded-xl border w-full' } placeholder='Your job title here'  required onChange={handleJobTitle}/>
                                {jobTitleNotValid?<span className='text-red-600 common-body3-text'>Please enter job title</span>:null}
                            </div>
                        </div>

                            <p className="common-body3-text custom-text-grey500">PayGlocal needs the contact information you provide to us to contact you about our product and services. You may unsubscribe from these communications anytime.</p>
                            <button className={"background-custom-blue1 py-2.5 px-6 block common-btn-text custom-text-white rounded-3xl sign-up-blue-btn-drop-shadow hover:scale-110 duration-300 " } onClick={handleSubmit}>Register Now</button>
                            
                    </div>
                </div> }
            </div>
        </>
    )
}

export default FireSideChatSection;
