import React from 'react';
import PayglocalFooter from '@/Components/PayglocalFooter';
import PayglocalNavbar from '@/Components/Navbar';
import StrapiBlogSection from './StrapiBlogSection';

function Page () {
  return (
        <>
            <PayglocalNavbar/>
            <StrapiBlogSection/>
            <PayglocalFooter/> 
        </>
  )
}

export default Page;
