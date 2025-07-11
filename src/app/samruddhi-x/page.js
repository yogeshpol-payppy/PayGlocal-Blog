import React from 'react'
import  '@/Styles/SamruddhiX/SamruddhiX.css';

import PayglocalFooter from '@/Components/PayglocalFooter';
import SamruddhiXHeader from './SamruddhiXHeader';
import SamruddhiXSection from './SamruddhiXSection';
import PayglocalNavbar from '@/Components/Navbar';



function Page () {
  return (
        <>
            <PayglocalNavbar navbarScrolledprop={true} />
            <SamruddhiXHeader/>
            <SamruddhiXSection/>
            <PayglocalFooter/>
        </>
  )
}

export default Page;
