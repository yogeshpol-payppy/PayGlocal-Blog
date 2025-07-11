import React from 'react'

import PayglocalFooter from '@/Components/PayglocalFooter';
import PayglocalNavbar from '@/Components/Navbar';
import RefundPolicyHeader from './RefundPolicyHeader';
import RefundPolicySection from './RefundPolicySection';




function Page () {
  return (
        <>
            <PayglocalNavbar />
            <RefundPolicyHeader/>
            <RefundPolicySection/>
            <PayglocalFooter/>
        </>
  )
}

export default Page;
