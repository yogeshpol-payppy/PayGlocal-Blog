import {  Manrope } from 'next/font/google';
import SignUpBtn from '@/Components/SignUpBtn';

import Grabpay from '@/Images/Grabpay/grabpay.svg';
import Image from 'next/image';

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})

function GrabpayMalaysiaSignaporeHeaderCompo({title,Img=Grabpay,para})
{
    return(
        <>
        <header className="bg-black one-platform-header flex items-center justify-center">
            <div className="px-4 py-20 sm:px-10 sm:py-28 flex justify-center items-center lg:max-w-5xl w-full">

                    <div className="flex flex-col gap-6 sm:gap-8 sm:items-center">
                        <div className="flex justify-center items-center border rounded-full background-custom-white custom-border-grey200 w-36 h-36 sm:w-40 sm:h-40 flex-shrink-0 p-2">
                            <Image src={Img} width={112} height={30} quality={100} alt='img' className='w-auto sm:w-28'/>
                        </div>
                        <div className="flex flex-col sm:items-center gap-4 sm:gap-5 ">
                            <div className="flex  items-center gap-5">
                                <h1 className="common-h1-heading custom-text-white font-medium text-left  sm:text-center">{title}</h1>
                                {/* <Link href={link}>
                                    <Image src={ArrowDown}  width={56} height={56} alt='img' quality={100} className='w-10 h-10 sm:w-14 sm:h-14'/>
                                </Link> */}
                            </div>
                            <p className={"custom-text-grey300 font-medium common-body1-text text-left  sm:text-center    w-full "+manrope.className}>{para}</p>
                        </div>
                        <SignUpBtn text='Sign up Now' linkUrl='/contact'/>
                    </div>

            </div>
        </header>
        </>
    )
}

export default GrabpayMalaysiaSignaporeHeaderCompo;


