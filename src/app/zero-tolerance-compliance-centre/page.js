import React from 'react'

import PayglocalFooter from '@/Components/PayglocalFooter';
import PayglocalNavbar from '@/Components/Navbar';
import ZeroToleranceComplianceCentreHeader from './ZeroToleranceComplianceCentreHeader';
import ZeroToleranceComplianceCentreSection from './ZeroToleranceComplianceCentreSection';




function Page () {
  return (
        <>
            <PayglocalNavbar />
            <ZeroToleranceComplianceCentreHeader/>
            <ZeroToleranceComplianceCentreSection/>
            <PayglocalFooter/>
        </>
  )
}

export default Page;
