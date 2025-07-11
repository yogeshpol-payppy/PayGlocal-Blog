import React from 'react'
import  '@/Styles/SamruddhiX/SamruddhiX.css';

import PayglocalFooter from '@/Components/PayglocalFooter';
import PayglocalNavbar from '@/Components/Navbar';
import GrievanceRedressalHeader from './GrievanceRedressalHeader';
import GrievanceRedressalSection from './GrievanceRedressalSection';




function Page () {
  return (
        <>
            <PayglocalNavbar />
            <GrievanceRedressalHeader/>
            <GrievanceRedressalSection/>
            <PayglocalFooter/>
        </>
  )
}

export default Page;
