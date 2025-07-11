import React from 'react'
import { jdList } from '../careersData';

function CareerInnerHeader ({jobId}) {
  // console.log('params :',params);
  let jobData=jdList[jobId];
  return (
        <>
        <header className='bg-black px-4 sm:px-10 pb-56 pt-36 flex justify-center items-center'>
            <div className="flex flex-col gap-5 max-w-3xl w-full">
                <h2 className="common-h2-heading custom-text-white text-center">{jobData?.role || ''}</h2>  
                <h5 className="common-h5-heading custom-text-white text-center">{jobData?.location || ''}</h5>  
                <p className="common-body1-text custom-text-grey300 text-center">{jobData?.summary || ''}</p>
            </div>
        </header>
        </>
  )
}

export default CareerInnerHeader;
