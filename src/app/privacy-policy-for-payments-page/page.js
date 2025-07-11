import React from 'react'
import  '@/Styles/SamruddhiX/SamruddhiX.css';

import PayglocalFooter from '@/Components/PayglocalFooter';
import PayglocalNavbar from '@/Components/Navbar';
import PrivacyPolicyForPaymentHeader from './PrivacyPolicyForPaymentHeader';
import PrivacyPolicyForPaymentSection from './PrivacyPolicyForPaymentSection';




function Page () {
  return (
        <>
            <PayglocalNavbar />
            <PrivacyPolicyForPaymentHeader/>
            <PrivacyPolicyForPaymentSection/>
            <PayglocalFooter/>
        </>
  )
}

export default Page;
