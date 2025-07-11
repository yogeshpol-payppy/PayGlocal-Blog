import React from 'react'

import CareerInnerSection from './CareerInnerSection';
import PayglocalFooter from '@/Components/PayglocalFooter';
import CareerInnerHeader from './CareerInnerHeader';
import PayglocalNavbar from '@/Components/Navbar';

function Page ({params}) {
  return (
        <>
            <PayglocalNavbar/>
            <CareerInnerHeader jobId={params.careerId}/>
            <CareerInnerSection jobId={params.careerId}/>
            <PayglocalFooter/>
        </>
  )
}

export default Page;
