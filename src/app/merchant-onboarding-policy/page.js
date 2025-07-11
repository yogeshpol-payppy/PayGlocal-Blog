import React from 'react'

import PayglocalFooter from '@/Components/PayglocalFooter';
import PayglocalNavbar from '@/Components/Navbar';
import MerchantOnboardingPolicyHeader from './MerchantOnboardingPolicyHeader';
import MerchantOnboardingPolicySection from './MerchantOnboardingPolicySection';




function Page () {
  return (
        <>
            <PayglocalNavbar />
            <MerchantOnboardingPolicyHeader/>
            <MerchantOnboardingPolicySection/>
            <PayglocalFooter/>
        </>
  )
}

export default Page;
