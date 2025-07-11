import React from 'react'
import  '@/Styles/SamruddhiX/SamruddhiX.css';

import PayglocalFooter from '@/Components/PayglocalFooter';
import PayglocalNavbar from '@/Components/Navbar';
import MerchantTermsHeader from './MerchantTermsHeader';
import MerchantTermsSection from './MerchantTermsSection';



function Page () {
  return (
        <>
            <PayglocalNavbar />
            <MerchantTermsHeader/>
            <MerchantTermsSection/>
            <PayglocalFooter/>
        </>
  )
}

export default Page;
