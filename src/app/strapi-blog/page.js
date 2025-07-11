import React from 'react';
import StrapiBlogSection from './StrapiBlogSection';
import PayglocalNavbar from '@/Components/Navbar';

const Page = () => {

  return (
    <>
        
        <PayglocalNavbar navbarScrolledprop={true}/>
        <StrapiBlogSection />
    </>
  )
}
export default Page;
