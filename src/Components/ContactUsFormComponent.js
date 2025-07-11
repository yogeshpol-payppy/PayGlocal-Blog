'use client';
import Image from "next/image";

import '@/Styles/Homepage/payglocalHomepage.css';           //section 2 - is from homepage so i have to import the homepage style
import '@/Styles/Amazon/Amazon.css';           //section 2 - is from homepage so i have to import the homepage style


import { Manrope } from "next/font/google";
import ContactUsAPi from "@/Apis/ContactUsApi";
import { useEffect, useState } from "react";
import Link from "next/link";

//modal images
import Close from '@/Images/Amazon/close.svg';
import GreenThumsUp from '@/Images/ContactUs/greenThumpsUp.svg';


import SanitizingInputs from "@/SanitizingInputs/SanitizingInput";
import { extractUtmParams, handleCampaignRedirect } from "@/lib/utils";

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})
function ContactUsFormComponent({talkToOurTeamBtnView=false,websiteUrlPresent=false,modalPresent=false,formWidthClass='',modalTitle='Easy. Fast. Smooth.',modalSubtitle='Everything your global business deserves!',dropdownVisible=false, source, influencerId, campaignDetails})
{

     //for storing the input values
     let[firstName,setFirstName]=useState('');
     let[email,setEmail]=useState('');
     let[phone,setPhone]=useState('');
     let[websiteUrl,setWebsiteUrl]=useState('');
     let[productLookingFor,setproductLookingFor]=useState('');
     let[catagoryBuisness,setCatagoryBuisness]=useState('');
     let[catagoryBuisnessInput,setCatagoryBuisnessInput]=useState('');



 
     //for showing input field error massege if some submitting the form when inputs are empty
     let[firstNameNotValid,setFirstNameNotValid]=useState(false);
     let[emailNotValid,setEmailNotValid]=useState(false);
     let[phoneNotValid,setPhoneNotValid]=useState(false);
     let[websiteNotValid,setWebsiteNotValid]=useState(false);
     let[productLookingForNotValid,setProductLookingForNotValid]=useState(false);
     let[catagoryBuisnessNotValid,setcatagoryBuisnessNotValid]=useState(false);
     let[catagoryBuisnessInputNotValid,setCatagoryBuisnessInputNotValid]=useState(false);

    
     let[formInputFieldActive,setFormFieldActive]=useState(false);
 
      //for modal open
      let[modalOpen,setModalOpen]=useState(false);


      let[formSubmittedSuccessfully,setFormSubmittedSuccessfully]=useState(false);


      //to open modal after 20 sec of page load
    
    useEffect(() => {
        const interval = setInterval(() => {
            const isModalOpen = firstName.length === 0 && email.length === 0 && phone.length === 0;
            
            if (!isModalOpen) {
                clearInterval(interval);                    //if the form field is active then it clear the interval and start again when any of provided dependency gets changed
            }
            setModalOpen(!formInputFieldActive);      //after 20 modal will open but if form input is active then it won't
        }, 20000);
    
        return () => {
            clearInterval(interval); // this is Cleanup function on component unmount 
        };
    }, [firstName, email, phone, modalOpen]);
    
 
     //to handle saniizing inptus manually
     function handleFirstName(e,formInput=false)
     {
         let removedSpecialCharacters=e.target.value.replace(/[^a-zA-Z0-9 ]/g, "");  //if some try to use any special character this will replace to the empty string
 
         setFirstName(removedSpecialCharacters);     //finally assign the value
         if(formInput)
         {
            setFormFieldActive(removedSpecialCharacters.length>0)   
            //if the input value is belongs from the form input not modal input this will set to form field active true
            //if form field is active then modal should not open 
         }
     }
 
 
     function handleEmail(e,formInput=false)
     {
        setEmail(e.target.value);
         if(formInput)
            {
               setFormFieldActive(e.target.value.length>0)
            }
     }
     function handlePhone(e,formInput=false)
     {
         let length=e.target.value.length;
         if(length>0&&e.target.value.charAt(length-1)==" " || length==11)              //this logic dont allow user to input a space
         {
             return;
         }
         let removedSpecialCharacters=e.target.value.replace(/[^0-9 ]/g, "");  //if some try to use any special character this will replace to the empty string
 
         setPhone(removedSpecialCharacters);
         if(formInput)
            {
               setFormFieldActive(removedSpecialCharacters.length>0)
            }
     }
     function handleWebsiteUrl(e)
     {
         setWebsiteUrl(e.target.value);
     }


     function handleCatagoryBuisnessInput(e)
     {
       let value=SanitizingInputs(e.target.value);     //this function will sanitize the inputs by library
       setCatagoryBuisnessInput(value);
     }
    function handleSubmit()
    {
        let sanitizedFirstName=SanitizingInputs(firstName);     //this function will sanitize the inputs by library 
        let sanitizedEmail=SanitizingInputs(email);             //this function will sanitize the inputs by library 
        let sanitizedPhone=SanitizingInputs(phone);             //this function will sanitize the inputs by library 
        let sanitizedWebsiteUrl=SanitizingInputs(websiteUrl);             //this function will sanitize the inputs by library 
        let sanitizedproductLookingFor=SanitizingInputs(productLookingFor);     //this function will sanitize the inputs by library
        let sanitizedCatagoryBuisness=SanitizingInputs(catagoryBuisness);     //this function will sanitize the inputs by library
        let sanitizedCatagoryBuisnessInputs=SanitizingInputs(catagoryBuisnessInput);     //this function will sanitize the inputs by library

       
       // this will assign the state to true if the sanitized value is empty, otherwise set it to false
        setFirstNameNotValid(sanitizedFirstName==='');          
        // setEmailNotValid(sanitizedEmail==='');          
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailNotValid(!emailRegex.test(sanitizedEmail) && !!sanitizedEmail?.length);         //validate with regx
        setPhoneNotValid(sanitizedPhone==='' || sanitizedPhone.length<10);  
        setWebsiteNotValid(sanitizedWebsiteUrl==='');
        setProductLookingForNotValid(sanitizedproductLookingFor==='');
        setcatagoryBuisnessNotValid(sanitizedCatagoryBuisness==='');
        setCatagoryBuisnessInputNotValid(sanitizedCatagoryBuisnessInputs.length<5);

        if(sanitizedFirstName==='' || sanitizedEmail==='' || (!emailRegex.test(sanitizedEmail) && !!sanitizedEmail?.length) || sanitizedPhone==='' || sanitizedPhone.length<10 || (websiteUrlPresent&&sanitizedWebsiteUrl==='') ||( sanitizedproductLookingFor===''&&dropdownVisible) || (sanitizedCatagoryBuisness===''&&dropdownVisible) || (sanitizedCatagoryBuisnessInputs.length<5&&sanitizedCatagoryBuisness==='Other'&&dropdownVisible))
        {
            return;
        }

        const utmParams = extractUtmParams(window?.location?.search);
        const { utm_id, utm_campaign, utm_medium, utm_source } =
          utmParams || {};

        let formObj={
            firstname: sanitizedFirstName,
            email: sanitizedEmail,
            phone: sanitizedPhone,
            payglocal_source: source,
            ad_activity_date: new Date()?.getTime(),
            campaign_name: utm_campaign || "",
            ad_source: utm_source || "",
            medium: utm_medium || "",
            campaign_id: utm_id || "",
            influencer_id: influencerId || "",
        }
        
        //some forms want website url some not to handle this 
        //if the websiteUrlPresent is true in the props then website property gets added to formObj and send it to the api 
        if(websiteUrlPresent)
        {
            formObj.website=sanitizedWebsiteUrl;
        }

        //this will be true only if the dropdown fields are present
        if(dropdownVisible)
        {
            formObj.product_interested=sanitizedproductLookingFor;
            formObj.business_type=sanitizedCatagoryBuisness;
            if(sanitizedCatagoryBuisness==='Other')
            {
                formObj.business_type_other=sanitizedCatagoryBuisnessInputs;
            }
        }
        ContactUsAPi({formObj})
        .then(() => {
            //beacause of the mode no-cors there is no response visible
            setFormSubmittedSuccessfully(true); //after form submited successfully
            handleApiSuccess();
        //    return response;
        })
        .catch(error => {
            console.error("Error:", error);
            alert('Submission failed, please try again');
        });
    }


     //when api success or modal close to make state empty
     function handleApiSuccess(modalClose=false)
     {
         setEmail('');
         setFirstName('');
         setPhone('');
         setWebsiteUrl('');
         setCatagoryBuisness('');
         setCatagoryBuisnessInput('');
         setproductLookingFor('');
 
         setFirstNameNotValid(false);          
         setEmailNotValid(false);                  
         setPhoneNotValid(false);
         setWebsiteNotValid(false);
         setCatagoryBuisnessInputNotValid(false);
         setProductLookingForNotValid(false);
         setcatagoryBuisnessNotValid(false);
         if(modalClose)
         {
            setModalOpen(false);
            setFormSubmittedSuccessfully(false);
         }
     }

     //when user close modal
    // function handleModalClose()
    // {
    //     setEmail('');
    //     setFirstName('');
    //     setPhone('');
    //     setWebsiteUrl('');

    //     setFirstNameNotValid(false);          
    //     setEmailNotValid(false);                  
    //     setPhoneNotValid(false);
    //     setWebsiteNotValid(false);
    //     setModalOpen(false);
    // }





    return(
        <>

            {/* section - 1 form section */}
          { !formSubmittedSuccessfully? <div className={` max-w-xl flex flex-col gap-8 ${formWidthClass} `+manrope.className}>
                <div className="flex flex-col gap-5 ">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullname" className={"custom-text-black common-body2-text  " }>Full Name<span className='text-red-500'>*</span></label>
                        <input type="text" name="fullname" value={firstName} id="fullname" className={'common-body2-text p-3 custom-text-grey500 outline-none rounded-xl border w-full' } placeholder='Your Full Name here' required onChange={(e) => { handleFirstName(e, true) }} />
                        {firstNameNotValid ? <span className='text-red-600 common-body3-text'>Please enter your name</span> : null}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <div className="flex flex-col gap-2 sm:w-1/2">
                            <label htmlFor="email" className={"custom-text-black common-body2-text  " }>Work Email Address<span className='text-red-500'>*</span></label>
                            <input type="text" name="email" value={email} id="email" className={'common-body2-text p-3 custom-text-grey500 outline-none rounded-xl border w-full' } placeholder='Your work email address here' required onChange={(e) => { handleEmail(e, true) }} />
                            {emailNotValid ? <span className='text-red-600 common-body3-text'>Kindly provide a valid email</span> : null}
                        </div>
                        <div className="flex flex-col gap-2 sm:w-1/2">
                            <label htmlFor="phone" className={"custom-text-black common-body2-text  " }>Work Phone<span className='text-red-500'>*</span></label>
                            <input type="tel" name="phone" value={phone} id="phone" className={'common-body2-text p-3 custom-text-grey500 outline-none rounded-xl border w-full' } placeholder='Your work phone number here' required onChange={(e) => { handlePhone(e, true) }} />
                            {phoneNotValid ? <span className='text-red-600 common-body3-text'>Please enter your phone number</span> : null}
                        </div>
                    </div>
                        {/* some forms contains website url feild some are not to handle that conditional rendering is used   */}
                    {websiteUrlPresent ? <div className="flex flex-col gap-2">
                        <label htmlFor="websiteurl" className={"custom-text-black common-body2-text  " }>Amazon store link or Website URL<span className='text-red-500'>*</span></label>
                        <input type="text" name="websiteurl" value={websiteUrl} id="fullname" className={'common-body2-text p-3 custom-text-grey500 outline-none rounded-xl border w-full' } placeholder='Your store link or website URL here' required onChange={handleWebsiteUrl} />
                        {websiteNotValid ? <span className='text-red-600 common-body3-text'>Please enter a valid website url</span> : null}
                    </div> : null}

                    {/* only contact us page contains dropdown fields to handle that conditional rendering is used   */}
                    {dropdownVisible&&<div className="flex flex-col gap-2 ">
                        <label htmlFor="productLookingFor" className={"custom-text-black common-body2-text  " }>What product are you looking for?</label>
                        <select name="productLookingFor" id="productLookingFor" value={productLookingFor} onChange={(e)=>{setproductLookingFor(e.target.value);}} className="common-body2-text   p-3  custom-text-grey500 outline-none rounded-xl border w-full">
                            <option value="" disabled className="custom-text-grey700">Select your business category</option>
                            <option value="Multi-currency account">Multi-currency account</option>
                            <option value="Payment Gateway">International Payment Gateway</option>
                            <option value="Domestic Payment Gateway">Domestic Payment Gateway</option>
                            <option value="Other">Other</option>
                        </select>
                        {productLookingForNotValid ? <span className='text-red-600 common-body3-text'>Please select a valid Product</span> : null}

                    </div> }

                    {/* only contact us page contains dropdown fields to handle that conditional rendering is used   */}
                    {dropdownVisible&&<div className="flex flex-col gap-2 ">
                        <label htmlFor="catagoryBuisness" className={"custom-text-black common-body2-text  " }>What category does your business fall under?</label>
                        <select name="catagoryBuisness" id="catagoryBuisness" value={catagoryBuisness} onChange={(e)=>{setCatagoryBuisness(e.target.value);}} className="common-body2-text   p-3  custom-text-grey500 outline-none rounded-xl border w-full ">
                            <option value="" disabled>Select your business category</option>
                            <option value="IT, Software or other digital services">IT, Software or other digital services</option>
                            <option value="E-commerce">E-commerce</option>
                            <option value="Freelancing">Freelancing</option>
                            <option value="Offline goods export">Offline goods export</option>
                            <option value="Tours and Travel">Tours and Travel</option>
                            <option value="Education">Education</option>
                            <option value="Other">Other</option>
                        </select>
                        {catagoryBuisnessNotValid ? <span className='text-red-600 common-body3-text'>Please select a valid business category</span> : null}
                    </div> }

                    {catagoryBuisness==='Other' ? <div className="flex flex-col gap-2">
                        <input type="text"  value={catagoryBuisnessInput} id="fullname" className={'common-body2-text p-3 custom-text-grey500 outline-none rounded-xl border w-full' } placeholder='Specify your business category' required onChange={handleCatagoryBuisnessInput} />
                        {catagoryBuisnessInputNotValid || (catagoryBuisnessInput.length>0&&catagoryBuisnessInput.length<5) ? <span className='text-red-600 common-body3-text'>Please enter between 5 and 100 characters</span> : null}
                    </div> : null}

                </div>
                {talkToOurTeamBtnView ? <>
                    <div className="flex flex-col sm:flex-row gap-5 items-center">
                        <div className="w-full sm:w-auto">
                            <button className={"common-button-text background-custom-blue1  px-6 py-2.5 custom-text-white rounded-full whitespace-nowrap w-full sm:w-auto " } onClick={handleSubmit}>Talk to our team</button>
                        </div>
                        <p className="common-body2-text custom-text-grey500 ">By submitting this form, I acknowledge that I have read, understood and accordingly agree to the <Link href='/privacy-policy-for-clients' className='custom-text-blue1'>Privacy Statement</Link></p>
                    </div>

                    <div className={"common-body2-text " }>Ready to get your accounts now? <button className="custom-text-blue1 common-body2-text font-bold" onClick={() => handleCampaignRedirect(campaignDetails, influencerId)}>Sign up here</button></div>
                </>
                    : <div className="flex flex-col gap-6">
                        <button className={"common-button-text background-custom-blue1 sm:w-full px-6 py-2.5 custom-text-white rounded-3xl " } onClick={handleSubmit}>Send</button>
                        <p className="common-body2-text custom-text-grey500 ">By submitting this form, I acknowledge that I have read, understood and accordingly agree to the <Link href='/privacy-policy-for-clients' className='custom-text-blue1'>Privacy Statement</Link></p>
                    </div>}

            </div>
            :
            <div className={`max-w-xl flex flex-col gap-10 p-14 background-custom-white custom-border-grey200 shadow-md rounded-xl ${formWidthClass}`}>
                <Image src={GreenThumsUp} width={100} height={100} alt="img" quality={100} className="cursor-pointer" onClick={()=>{handleApiSuccess(true)}}/>
                <div className="flex flex-col gap-3">
                    <h4 className="common-h4-heading">Thank you for reaching out to us!</h4>
                    <div className="common-body1-text custom-text-grey800">We appreciate your interest and our team will get back to you shortly.</div>
                </div>
            </div>}


             {/* modal */}
           { modalPresent? <div className={`w-screen h-screen amazon-modal-parent-container fixed top-0 left-0  flex items-center justify-center duration-300 ${modalOpen?" z-20 opacity-100 ": " -z-10 opacity-0" } `+manrope.className}>
           {/* <section className="flex flex-col gap-14 py-10 px-4 sm:px-10  justify-center items-center background-custom-white rounded-3xl amazon-modal-main-container"  > */}
                <div className="flex flex-col gap-6 items-center py-8 px-4 sm:px-10  lg:items-start  lg:max-w-xl w-full rounded-3xl background-custom-white amazon-modal-main-container">
                    <div className="flex flex-col gap-4 items-center w-full">
                        <div className="flex justify-end w-full ">
                            <Image src={Close} width={32} height={32} alt="img" quality={100} className="cursor-pointer" onClick={()=>{handleApiSuccess(true)}}/>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <h3 className="common-h3-heading text-center">{modalTitle}</h3>
                            <h5 className="common-h5-heading custom-text-blue1 text-center ">{modalSubtitle}</h5>
                        </div>
                        <p className={"custom-text-grey600 common-body1-text lg:max-w-64 text-center "+manrope.className}>Help us with your details and we will connect with you ASAP!</p>
                    </div>

                  {!formSubmittedSuccessfully?  <div className=' flex flex-col gap-8  sm:max-w-[472px] w-full'>
                        <div className="flex flex-col gap-5 ">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="fullname" className={"custom-text-black common-body2-text  " }>Full Name<span className='text-red-500'>*</span></label>
                                <input type="text" name="fullname" value={firstName} id="fullname" className={'common-body2-text p-3 custom-text-grey500 outline-none rounded-xl border w-full' } placeholder='Your Full Name here'  required onChange={handleFirstName}/>
                                {firstNameNotValid?<span className='text-red-600 common-body3-text'>Please enter your name</span>:null}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-5">
                                <div className="flex flex-col gap-2 sm:w-1/2">
                                    <label htmlFor="email" className={"custom-text-black common-body2-text  " }>Work Email Address<span className='text-red-500'>*</span></label>
                                    <input type="text" name="email" value={email} id="email" className={'common-body2-text p-3 custom-text-grey500 outline-none rounded-xl border w-full' } placeholder='Your work email address here'  required onChange={handleEmail}/>
                                    {emailNotValid?<span className='text-red-600 common-body3-text'>Kindly provide a valid email</span>:null}
                                </div>
                                <div className="flex flex-col gap-2 sm:w-1/2">
                                    <label htmlFor="phone" className={"custom-text-black common-body2-text  " }>Work Phone<span className='text-red-500'>*</span></label>
                                    <input type="tel" name="phone" value={phone} id="phone" className={'common-body2-text p-3 custom-text-grey500 outline-none rounded-xl border w-full' } placeholder='Your work phone number here' required onChange={handlePhone}/>
                                    {phoneNotValid?<span className='text-red-600 common-body3-text'>Please enter your phone number</span>:null}
                                </div>
                            </div>


                        </div>
                        <div className="flex flex-col sm:flex-row gap-5 items-center">
                            <div className="">
                                <button className={"common-button-text background-custom-blue1  px-6 py-2.5 custom-text-white rounded-full whitespace-nowrap " } onClick={handleSubmit}>Talk to our team</button>
                            </div>
                            <p className="common-body2-text custom-text-grey500 ">By submitting this form, I acknowledge that I have read, understood and accordingly agree to the <Link href='/privacy-policy-for-clients' className='custom-text-blue1'>Privacy Statement</Link></p>
                        </div>

                        <div className={"common-body2-text "}>Ready to get your accounts now? <button className="custom-text-blue1 common-body2-text font-bold" onClick={() => handleCampaignRedirect(campaignDetails, influencerId)}>Sign up here</button></div>
                    </div>:
                    <div className={`max-w-xl flex flex-col gap-10 p-14 background-custom-white custom-border-grey200 shadow-md rounded-xl ${formWidthClass}`}>
                        <Image src={GreenThumsUp} width={100} height={100} alt="img" quality={100} className="cursor-pointer" onClick={()=>{handleApiSuccess(true)}}/>
                        <div className="flex flex-col gap-3">
                            <h4 className="common-h4-heading">Thank you for reaching out to us!</h4>
                            <div className="common-body1-text custom-text-grey800">We appreciate your interest and our team will get back to you shortly.</div>
                        </div>
                    </div>
                    }
                </div>
           {/* </section> */}

           </div>:null}
            
        </>
    )
}

export default  ContactUsFormComponent;