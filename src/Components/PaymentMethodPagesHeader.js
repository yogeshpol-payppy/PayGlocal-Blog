import {  Manrope } from 'next/font/google';
import SignUpBtn from '@/Components/SignUpBtn';

import Image from 'next/image';

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})

function PaymentMethodPagesHeader({title,imgName,para})
{ 
    return(
        <>
        <header className="bg-black one-platform-header flex items-center justify-center">
                <div className="px-4 py-20 sm:px-10 sm:py-28 flex justify-center items-center lg:max-w-5xl w-full">

                    <div className="flex flex-col gap-6 sm:gap-8 sm:items-center">
                        <div className="flex justify-center items-center border rounded-full background-custom-white custom-border-grey200 w-36 h-36 sm:w-40 sm:h-40 flex-shrink-0 p-2">
                            <Image src={imgName} width={106} height={30} quality={100} alt='img' className='max-w-auto' />
                        </div>
                        <div className="flex flex-col sm:items-center gap-4 sm:gap-5 ">
                            <h1 className="common-h1-heading custom-text-white font-medium text-left  sm:text-center">{title}</h1>
                            <p className={"custom-text-grey300 font-medium common-body1-text text-left  sm:text-center    w-full " + manrope.className}>{para}</p>
                        </div>
                        <SignUpBtn text="Sign Up Now" linkUrl='/contact' />
                    </div>
                    
                </div>
        </header>
        </>
    )
}

export default PaymentMethodPagesHeader;


