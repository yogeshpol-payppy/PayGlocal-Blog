import React from 'react'
import  '@/Styles/SamruddhiX/SamruddhiX.css';

import PayglocalFooter from '@/Components/PayglocalFooter';
import PayglocalNavbar from '@/Components/Navbar';
import PrivacyHeader from './PrivacyHeader';
import PrivacySection from './PrivacySection';



function Page () {
  return (
        <>
            <PayglocalNavbar />
            <PrivacyHeader/>
            <PrivacySection/>
            <PayglocalFooter/>
        </>
  )
}

export default Page;
