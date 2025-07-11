'use client';
import React from 'react'
import '@/Styles/Grabpay/Grabpay.css';      //This css file contains style for this coponent
import Image from 'next/image';

//alternate payment methods section images
import Grabpay from '@/Images/Grabpay/grabpay.svg';
import Giropay from '@/Images/Grabpay/giropay.svg';
import Sofort from '@/Images/Grabpay/sofort.svg';
import Klarna from '@/Images/Grabpay/klarna.svg';
import Trustly from '@/Images/Grabpay/trustly.svg';
import Eps from '@/Images/Grabpay/eps.svg';
import MyBank from '@/Images/Grabpay/mybank.svg';
import Zip from '@/Images/Grabpay/zip.svg';
import Przelewy from '@/Images/Grabpay/przelewy.svg';
import Upi from '@/Images/Grabpay/upi.svg';
import Inb from '@/Images/Grabpay/inb.svg';
import { useRouter } from 'next/navigation';


function AlternativePaymentsMethods() {

    let router=useRouter();

    function handleRoute(path)
    {
        router.push(path);
    }

    return (

        <section className="flex items-center justify-center background-custom-grey50 px-4 sm:px-10 py-10 overflow-hidden">
            <div className="flex flex-col gap-10 sm:gap-14 max-w-3xl w-full">
                <div className="flex flex-col gap-2 sm:gap-4 items-center">
                    <div className="common-body1-text custom-text-grey800">Alternate Payments methods</div>
                    <h2 className="common-h2-heading">Supported by PayGlocal</h2>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-5 sm:gap-8 grabpay-payment-methods-container">
                        <div className="flex justify-center items-center border border-circular background-custom-white custom-border-grey200 w-40 h-40 cursor-pointer hover:shadow-lg duration-300  flex-shrink-0" onClick={()=>{handleRoute('/alternate-payment-methods/grab-pay-singapore')}}>
                            <Image src={Grabpay} width={140} height={38} quality={100} alt='img' className='' />
                        </div>
                        <div className="flex justify-center items-center border border-circular background-custom-white custom-border-grey200 w-40 h-40 cursor-pointer hover:shadow-lg duration-300  flex-shrink-0" onClick={()=>{handleRoute('/alternate-payment-methods/giro-pay')}}>
                            <Image src={Giropay} width={133} height={38} quality={100} alt='img' className='' />
                        </div>
                        <div className="flex justify-center items-center border border-circular background-custom-white custom-border-grey200 w-40 h-40 cursor-pointer hover:shadow-lg duration-300  flex-shrink-0" onClick={()=>{handleRoute('/alternate-payment-methods/sofort')}}>
                            <Image src={Sofort} width={106} height={40} quality={100} alt='img' className='' />
                        </div>
                        <div className="flex justify-center items-center border border-circular background-custom-white custom-border-grey200 w-40 h-40 cursor-pointer hover:shadow-lg duration-300  flex-shrink-0" onClick={()=>{handleRoute('/alternate-payment-methods/klarna')}}>
                            <Image src={Klarna} width={94} height={52} quality={100} alt='img' className='' />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-5 sm:gap-8 grabpay-payment-methods-container">
                        <div className="flex justify-center items-center border border-circular background-custom-white custom-border-grey200 w-40 h-40 cursor-pointer hover:shadow-lg duration-300  flex-shrink-0" onClick={()=>{handleRoute('/alternate-payment-methods/trustly')}}>
                            <Image src={Trustly} width={132} height={32} quality={100} alt='img' className='' />
                        </div>
                        <div className="flex justify-center items-center border border-circular background-custom-white custom-border-grey200 w-40 h-40 cursor-pointer hover:shadow-lg duration-300  flex-shrink-0" onClick={()=>{handleRoute('/alternate-payment-methods/eps')}}>
                            <Image src={Eps} width={101} height={55} quality={100} alt='img' className='' />
                        </div>
                        <div className="flex justify-center items-center border border-circular background-custom-white custom-border-grey200 w-40 h-40 cursor-pointer hover:shadow-lg duration-300  flex-shrink-0" onClick={()=>{handleRoute('/alternate-payment-methods/my-bank')}}>
                            <Image src={MyBank} width={97} height={55} quality={100} alt='img' className='' />
                        </div>
                       
                    </div>
                    <div className="flex items-center gap-5 sm:gap-8 grabpay-payment-methods-container">
                        <div className="flex justify-center items-center border border-circular background-custom-white custom-border-grey200 w-40 h-40 cursor-pointer hover:shadow-lg duration-300  flex-shrink-0" onClick={()=>{handleRoute('/alternate-payment-methods/zip')}}>
                            <Image src={Zip} width={95} height={35} quality={100} alt='img' className='' />
                        </div>
                        <div className="flex justify-center items-center border border-circular background-custom-white custom-border-grey200 w-40 h-40 cursor-pointer hover:shadow-lg duration-300  flex-shrink-0" onClick={()=>{handleRoute('/alternate-payment-methods/przelewy')}}>
                            <Image src={Przelewy} width={118} height={40} quality={100} alt='img' className='' />
                        </div>
                        <div className="flex justify-center items-center border border-circular background-custom-white custom-border-grey200 w-40 h-40 cursor-pointer hover:shadow-lg duration-300  flex-shrink-0" onClick={()=>{handleRoute('/alternate-payment-methods/upi')}}>
                            <Image src={Upi} width={117} height={48} quality={100} alt='img' className='' />
                        </div>
                        <div className="flex justify-center items-center border border-circular background-custom-white custom-border-grey200 w-40 h-40 cursor-pointer hover:shadow-lg duration-300  flex-shrink-0" onClick={()=>{handleRoute('/alternate-payment-methods/inb')}}>
                            <Image src={Inb} width={82} height={58} quality={100} alt='img' className='' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AlternativePaymentsMethods;