import React from 'react'
import BlogHeader from './BlogHeader';
import BlogSection from './BlogSection';
import PayglocalFooter from '@/Components/PayglocalFooter';
import PayglocalNavbar from '@/Components/Navbar';

function Page () {
  return (
        <>
            <PayglocalNavbar/>
            <BlogHeader/>
            <BlogSection/>
            <PayglocalFooter/>
        </>
  )
}

export default Page;
