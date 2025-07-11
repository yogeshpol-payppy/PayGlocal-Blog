import React from 'react'
import PayglocalFooter from '@/Components/PayglocalFooter';
import FireSideChatSection from './FireSideChatSection';

import '@/Styles/FireSideChat/FiresideChat.css';
import PayglocalNavbar from '@/Components/Navbar';

function Page () {
  return (
        <>
            {/* <FireSideChatHeader/> */}
            <PayglocalNavbar navbarScrolledprop={true}/>
            <FireSideChatSection/>
            <PayglocalFooter/>
        </>
  )
}

export default Page;
