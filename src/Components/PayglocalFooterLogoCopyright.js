import '@/Styles/Footer/PayglocalFooter.css';
import Image from 'next/image';
import Logo from '@/Images/Footer/payglocal-logo.svg';
import { Manrope } from 'next/font/google';

const manrope=Manrope({
    subsets:['latin'],
    display:'swap'
})
function PayglocalFooterLogoCopyright({desktopVisibility=true,mobileAndTabletVisibility=false})
{
    return(
        <>
        <div className={`flex flex-col gap-5 lg:py-20 lg:px-10 ${mobileAndTabletVisibility ? " block px-10":" hidden "} ${desktopVisibility?" lg:block ":" lg:hidden "}`}>
            <div className="mb-5"><Image src={Logo} width={224} height={40} alt='img' quality={100} className=''/></div>
            <p className={"common-body3-text custom-text-grey300 font-medium "+manrope.className}>Copyright 2024. All Rights Reserved</p>
        </div>
        </>
    )
}



export default PayglocalFooterLogoCopyright;