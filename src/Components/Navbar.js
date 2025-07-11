'use client';
import Image from 'next/image';
import { Manrope } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '@/Images/Footer/payglocal-logo.svg';
import BlueLogo from '@/Images/Navbar/blue-logo.svg';
import TogglerIcon from '@/Images/Navbar/toggler-icon.svg';
import Close from '@/Images/Navbar/close.svg';
import Arrow from '@/Images/Navbar/arrow.svg';





import '@/Styles/Navbar/PayglocalNavbar.css';
import { useRouter } from 'next/navigation';


const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})

function PayglocalNavbar ({navbarScrolledprop=false})
{

    let[navbarLinkCatagory,setNavbarLinkCatagory]=useState('');
    let[navbarScrolled,setNavbarScrolled]=useState(false);

    let[navbarTogglerClicked,setNavbarClicked]=useState(false);

    let router=useRouter();


    useEffect(()=>{

        function handlePageScroll()
        {
            if (typeof window !== "undefined") 
            {
                setNavbarScrolled(window.scrollY>=12);
            }
        }
        document.addEventListener('scroll',handlePageScroll);

        return ()=> {
            document.removeEventListener('scroll',handlePageScroll);
        }
    },[])


    //handling navigation link click for catagory
    function handleNavigationLinkCatagory(value){
        if(navbarLinkCatagory===value)
        {   
            setNavbarLinkCatagory('');
            return;
        }
        setNavbarLinkCatagory(value);
    }


    function handleNavigateToHome()
    {
        router.push('/');
    }
    return(
        <>
        <nav className={`p-4 sm:px-10 flex justify-between fixed z-20 w-full duration-300 ${navbarScrolled  ? ' navbar-white-background lg:py-3':' bg-transparent lg:py-5 '} `}> 
                <Image src={navbarScrolled || navbarScrolledprop?BlueLogo:Logo} width={179} height={24} alt='img' quality={100} className='block lg:hidden w-32 sm:w-44 cursor-pointer' onClick={handleNavigateToHome}/>
             {/* <div className="flex items-center gap-4"> */}
        
                <div className={`flex py-6  lg:p-0 flex-col lg:flex-row items-center gap-4 duration-300 navbar-responsive-content ${navbarTogglerClicked?' navbar-responsive-content-visible ':' navbar-responsive-content-hidden ' }`}>
                    <div className="flex justify-between w-full lg:w-auto px-5 lg:px-0">
                        <Image src={navbarScrolled || navbarScrolledprop || typeof window!=='undefined'&&window.screen.availWidth<1024?BlueLogo:Logo} width={157} height={28} alt='img' quality={100} className=' w-32 sm:w-44 cursor-pointer' onClick={handleNavigateToHome}/>
                        <Image src={Close} width={28} height={28} alt='img' quality={100} className='block lg:hidden' onClick={()=>{setNavbarClicked(false)}}/>
                        
                    </div>
                    <div className="flex flex-col lg:flex-row gap-1 w-full lg:w-auto ">    
                        <div className="relative  payglocal-navbar-parent-link-container  ">
                            <div className={`py-3 px-5 flex justify-between items-center ${navbarLinkCatagory=='Products'&&typeof window!=='undefined'&&window.screen.availWidth<1024?' background-custom-grey100 ':' '}`} onClick={()=>{handleNavigationLinkCatagory('Products')}}>
                                <div className={` ${navbarScrolled || navbarScrolledprop?"" : ' custom-text-white '}  cursor-pointer payglocal-navbar-parent-link common-button-text matterfont all-absolute-nav-links `+manrope.className} >Products</div>
                                <Image src={Arrow} width={24} height={24} alt='img' quality={100} className={`block lg:hidden duration-300 ${navbarLinkCatagory=='Products'?' rotate-180 ':''}`}/>

                            </div>
                            <div className={`${navbarLinkCatagory==='Products'?' visibleflex ':' hiddenflex '} lg:p-3 flex-col  rounded-xl absolute top-12 -left-1 payglocal-navbar-link-container lg:shadow-md duration-300 background-custom-white overflow-hidden `}>
                                <Link href='/dynamic-checkout' className='hover:bg-[#F0F3F5] rounded-lg py-3 px-9  lg:px-3 lg:py-2 hover:text-[#4071DF] common-button-text matterfont all-absolute-nav-links' >Dynamic Checkout</Link>
                                <Link href='/card-processing' className='hover:bg-[#F0F3F5] rounded-lg py-3 px-9  lg:px-3 lg:py-2  hover:text-[#4071DF] common-button-text matterfont all-absolute-nav-links' >Card Payments</Link>
                                <Link href='/alternate-payment-methods' className='hover:bg-[#F0F3F5] rounded-lg py-3 px-9  lg:px-3 lg:py-2  hover:text-[#4071DF] common-button-text matterfont all-absolute-nav-links whitespace-nowrap ' >Global Payment Methods</Link>
                                <Link href='/recurring-payments-subscriptions' className='hover:bg-[#F0F3F5] rounded-lg py-3 px-9  lg:px-3 lg:py-2 hover:text-[#4071DF] common-button-text matterfont all-absolute-nav-links ' >Recurring Payments</Link>
                                <Link href='/multi-currency-accounts ' className='hover:bg-[#F0F3F5] rounded-lg py-3 px-9  lg:px-3 lg:py-2 hover:text-[#4071DF] common-button-text matterfont all-absolute-nav-links whitespace-nowrap ' >Multi Currency Account</Link>
                                <Link href='/international-payments-platform ' className='hover:bg-[#F0F3F5] rounded-lg py-3 px-9  lg:px-3 lg:py-2 hover:text-[#4071DF] common-button-text matterfont all-absolute-nav-links ' >One Platform</Link>
                                <Link href='/samruddhi-x ' className='hover:bg-[#F0F3F5] rounded-lg py-3 px-9  lg:px-3 lg:py-2 hover:text-[#4071DF] common-button-text matterfont all-absolute-nav-links ' >Sanction Screening</Link>

                            </div>
                        </div>
                        <div className="relative  payglocal-navbar-parent-link-container " >
                            <div className={`py-3 px-5 flex justify-between items-center ${navbarLinkCatagory=='Solutions'&&typeof window!=='undefined'&&window.screen.availWidth<1024?' background-custom-grey100 ':' '}`} onClick={()=>{handleNavigationLinkCatagory('Solutions')}}>
                                <div className={` ${navbarScrolled || navbarScrolledprop?"" : ' custom-text-white '}  cursor-pointer payglocal-navbar-parent-link common-button-text matterfont all-absolute-nav-links `+manrope.className} >Solutions</div>
                                <Image src={Arrow} width={24} height={24} alt='img' quality={100} className={`block lg:hidden duration-300 ${navbarLinkCatagory=='Solutions'?' rotate-180 ':''}`}/>
                            </div>
                            <div className={`${navbarLinkCatagory==='Solutions'?' visibleflex ':' hiddenflex '} lg:p-3 flex-col  rounded-xl absolute top-12 -left-1 payglocal-navbar-link-container lg:shadow-md duration-300 background-custom-white overflow-hidden `}>
                                <Link href='/why-payglocal ' className='hover:bg-[#F0F3F5] rounded-lg py-3 px-9  lg:px-3 lg:py-2 hover:text-[#4071DF] common-button-text matterfont all-absolute-nav-links whitespace-nowrap' >Why Choose Payglocal?</Link>
                                <Link href='/solutions/enterprise ' className='hover:bg-[#F0F3F5] rounded-lg py-3 px-9  lg:px-3 lg:py-2 hover:text-[#4071DF] common-button-text matterfont all-absolute-nav-links' >Enterprises</Link>
                                <Link href='/solutions/exporters ' className='hover:bg-[#F0F3F5] rounded-lg py-3 px-9  lg:px-3 lg:py-2 hover:text-[#4071DF] common-button-text matterfont all-absolute-nav-links' >Exporters</Link>
                            </div>
                        </div>
                        <div className="relative  payglocal-navbar-parent-link-container " >
                            <div className={`py-3 px-5 flex justify-between items-center ${navbarLinkCatagory=='Company'&&typeof window!=='undefined'&&window.screen.availWidth<1024?' background-custom-grey100 ':' '}`} onClick={()=>{handleNavigationLinkCatagory('Company')}}>
                                <div className={` ${navbarScrolled || navbarScrolledprop?"" : ' custom-text-white '}  cursor-pointer payglocal-navbar-parent-link common-button-text matterfont all-absolute-nav-links `+manrope.className} >Company</div>
                                <Image src={Arrow} width={24} height={24} alt='img' quality={100} className={`block lg:hidden duration-300 ${navbarLinkCatagory=='Company'?' rotate-180 ':''}`}/>
                            </div>
                            <div className={`${navbarLinkCatagory==='Company'?' visibleflex ':' hiddenflex '} lg:p-3 flex-col   rounded-xl absolute top-12 -left-1 payglocal-navbar-link-container lg:shadow-md duration-300 background-custom-white overflow-hidden `}>
                                <Link href='/about ' className='hover:bg-[#F0F3F5] rounded-lg py-3 px-9  lg:px-3 lg:py-2 hover:text-[#4071DF] common-button-text matterfont all-absolute-nav-links whitespace-nowrap' >About Us</Link>
                                <Link href='/blog ' className='hover:bg-[#F0F3F5] rounded-lg py-3 px-9  lg:px-3 lg:py-2 hover:text-[#4071DF] common-button-text matterfont all-absolute-nav-links ' >Blog</Link>
                                <Link href='/careers ' className='hover:bg-[#F0F3F5] rounded-lg py-3 px-9  lg:px-3 lg:py-2 hover:text-[#4071DF] common-button-text matterfont all-absolute-nav-links ' >Careers</Link>
                                <Link href='/contact ' className='hover:bg-[#F0F3F5] rounded-lg py-3 px-9  lg:px-3 lg:py-2 hover:text-[#4071DF] common-button-text matterfont all-absolute-nav-links whitespace-nowrap' >Contact Us</Link>
                                <Link href='/webinar ' className='hover:bg-[#F0F3F5] rounded-lg py-3 px-9  lg:px-3 lg:py-2 hover:text-[#4071DF] common-button-text matterfont all-absolute-nav-links ' >Webinar</Link>

                            </div>
                        </div>
                        <div className="relative py-3 px-5 payglocal-navbar-parent-link-container ">
                            <Link href={'/docs'}>
                                <div className={` ${navbarScrolled || navbarScrolledprop?"" : ' custom-text-white '} cursor-pointer payglocal-navbar-parent-link common-button-text hover:opacity-70 `+manrope.className} >Documentation</div>
                            </Link>
                        </div>
                        <div className="relative py-3 px-5 payglocal-navbar-parent-link-container ">
                            <Link href={'/pricing'}>
                                <div className={` ${navbarScrolled || navbarScrolledprop?"" : ' custom-text-white '} cursor-pointer payglocal-navbar-parent-link common-button-text hover:opacity-70 `+manrope.className} >Pricing</div>
                            </Link>
                        </div>

                    </div>

                </div>


                <div className="flex gap-5 sm:gap-6">
                    <Link href='/contact' >
                        <button className={`${navbarScrolled || navbarScrolledprop?' background-custom-blue1 ':' navbar-signup-btn '} rounded-full  py-2.5 px-6 custom-text-white duration-300 common-body1-text font-bold common-button-text sign-up-blue-btn-drop-shadow `+manrope.className}>Sign up Now</button>
                    </Link>
                    <Image src={TogglerIcon} width={28} height={28} alt='img' quality={100} className={`block lg:hidden ${navbarScrolled || navbarScrolledprop ?'':' get-light-image '}`} onClick={()=>{setNavbarClicked(true)}}/>
                </div>

            {/* </div>          */}
         </nav>
        </>
    )
}
export default PayglocalNavbar;

// <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
//             <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                 <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
//                     {/* <Image src={Logo} width={257} height={28} alt='img' quality={100} className=''/> */}
//                 </Link>
//                 <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
//                     <span className="sr-only">Open main menu</span>
//                     <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                         <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidthh="2" d="M1 1h15M1 7h15M1 13h15"/>
//                     </svg>
//                 </button>
//                 <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
//                 <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                     <li>
//                     <Link href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Link>
//                     </li>
//                     <li>
//                         <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
//             </svg></button>

//                         <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
//                             <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
//                             <li>
//                                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
//                             </li>
//                             <li aria-labelledby="dropdownNavbarLink">
//                                 <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                 <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidthh="2" d="m1 1 4 4 4-4"/>
//             </svg></button>
//                                 <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//                                     <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
//                                     <li>
//                                         <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Overview</Link>
//                                     </li>
//                                     <li>
//                                         <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My downloads</Link>
//                                     </li>
//                                     <li>
//                                         <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Billing</Link>
//                                     </li>
//                                     <li>
//                                         <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Rewards</Link>
//                                     </li>
//                                     </ul>
//                                 </div>
//                             </li>
//                             <li>
//                                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
//                             </li>
//                             </ul>
//                             <div className="py-1">
//                             <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
//                             </div>
//                         </div>
//                     </li>
//                     <li>
//                     <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
//                     </li>
//                     <li>
//                     <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</Link>
//                     </li>
//                     <li>
//                     <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
//                     </li>
//                 </ul>
//                 </div>
//             </div>
//             </nav>