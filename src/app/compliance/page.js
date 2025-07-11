import React from 'react'
import  '@/Styles/SamruddhiX/SamruddhiX.css';

import PayglocalFooter from '@/Components/PayglocalFooter';
import PayglocalNavbar from '@/Components/Navbar';
import ComplianceHeader from './ComplianceHeader';
import ComplianceSection from './ComplianceSection';



function Page () {
  return (
        <>
            <PayglocalNavbar />
            <ComplianceHeader/>
            <ComplianceSection/>
            <PayglocalFooter/>
        </>
  )
}

export default Page;
