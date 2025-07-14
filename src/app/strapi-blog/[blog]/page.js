import React from 'react';
import StrapiBlogSection from './StrapiBlogSection';
import PayglocalNavbar from '@/Components/Navbar';

const Page = ({params}) => {
  const blog  = params?.blog || 'g6j7ik5lh56ah0t615fg73ja';
  return (
    <>
        
        <PayglocalNavbar navbarScrolledprop={true}/>
        <StrapiBlogSection id={blog}/>
    </>
  )
}
export default Page;
