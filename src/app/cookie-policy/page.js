import React from 'react'
import  '@/Styles/SamruddhiX/SamruddhiX.css';

import PayglocalFooter from '@/Components/PayglocalFooter';
import PayglocalNavbar from '@/Components/Navbar';
import CookiePolicyHeader from './CookiePolicyHeader';
import CookiePolicySection from './CookiePolicySection';



function Page () {
  return (
        <>
            <PayglocalNavbar />
            <CookiePolicyHeader/>
            <CookiePolicySection/>
            <PayglocalFooter/>
        </>
  )
}

export default Page;
