'use client';
import Image from 'next/image';

import Arrow from '@/Images/OnePlatform/blue-chevron.svg';
import { useState } from 'react';




function FAQ({FAQData})
{
    let[accordionIndex,setAccorrdionIndex]=useState(-1);

    function handleAccordionClick(index)
    {
        if(index==accordionIndex)
        {
            setAccorrdionIndex(-1);
            return;
        }
        setAccorrdionIndex(index);

    }
    return(
        <>
      
        <section className="pt-10 pb-20 px-4 sm:px-10 sm::py-20 background-custom-grey50 flex flex-col items-center gap-5 sm:gap-10">
            <h2 className="font-medium common-h2-heading custom-text-black">FAQ</h2>

            <div className="background-custom-white rounded-3xl border custom-border-grey200 max-w-4xl w-full">
                {FAQData.length>0&&FAQData.map((element,index)=>{
                    return  <div key={index} className={`payglocal-faq-container p-6 sm:p-8 custom-border-grey200 ${index!=FAQData.length-1?' border-b ':''} flex flex-col gap-2 sm:gap-3 cursor-pointer`} onClick={()=>{handleAccordionClick(index)}}>
                                <div className="flex gap-4 items-center justify-between">
                                    <h6 className="common-h6-heading custom-text-black font-medium">{element.question}</h6>
                                    <Image src={Arrow} width={32} height={32} quality={100} alt='img' className={` duration-300 ${accordionIndex==index?' rotate-180 ':''}`}/>
                                </div>
                                <p className={`common-body1-text custom-text-grey600 font-medium duration-300 ${accordionIndex==index?' overflow-auto accordion-answer-visible ':' overflow-hidden max-h-0'}`}>{element.answer}</p>
                            </div>
                })}
               
            </div>

        </section>

        </>
    )
}
export default FAQ;