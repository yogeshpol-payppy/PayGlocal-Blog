import PayglocalNavbar from '@/Components/Navbar';
import React from 'react'

function WebinarHeader () {
  return (
        <>
        <PayglocalNavbar/>
        <header className='bg-black px-4 sm:px-10 pb-56 pt-36 flex justify-center items-center'>
            <div className="flex flex-col gap-5 max-w-3xl w-full">
                <h2 className="common-h2-heading custom-text-white text-center">Featured Webiner</h2>  
            </div>
        </header>
        </>
  )
}

export default WebinarHeader;
