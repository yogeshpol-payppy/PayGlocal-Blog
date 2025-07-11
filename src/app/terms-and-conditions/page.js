import React from 'react'
import  '@/Styles/SamruddhiX/SamruddhiX.css';

import PayglocalFooter from '@/Components/PayglocalFooter';
import PayglocalNavbar from '@/Components/Navbar';
import TermsAndConditionsHeader from './TermsAndConditionsHeader';
import TermsAndConditionsSection from './TermsAndConditionsSection';




function Page () {
  return (
        <>
            <PayglocalNavbar />
            <TermsAndConditionsHeader/>
            <TermsAndConditionsSection/>
            <PayglocalFooter/>
        </>
  )
}

export default Page;
