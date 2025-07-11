'use client';
import React, { useEffect, useState } from 'react'

//section 1 - blog images

import { jdList } from '../careersData';


function CareerInnerSection ({jobId}) {

  let jobData=jdList[jobId];

  const [email, setEmail] = useState('');

  useEffect(() => {
    // Regular expression to match an email address in the note
    const emailMatch = jobData?.note?.match(/[\w._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);

    if (emailMatch) {
      setEmail(emailMatch[0]);
    }
  }, [jobData?.note]);


  return (
        <>
            <section className="px-4 py-10 sm:px-10 sm:py-14 flex justify-center items-center background-custom-grey50">
      <div className="flex flex-col gap-10 lg:gap-12 px-5 py-10 sm:p-14 max-w-4xl w-full background-custom-white rounded-2xl -mt-48">
        
        {/* Company Overview Section */}
        <JobSection title="Company Overview" items={jobData?.payglocal} />
        
        {/* Work Section */}
       {!jobData?.workDesc&& <JobSection title="What will you be working on" items={jobData?.work} />}
        
        {/* Work Description Section */}
        <JobCategorySection title="Work" categories={jobData?.workDesc} />

         {/* responsibilities Section */}
       {!jobData?.responsibilitiesDesc&& <JobSection title="Responsibilities" items={jobData?.responsibilities} />}
        
        {/* responsibilities Description Section */}
        <JobCategorySection title="Responsibilities" categories={jobData?.responsibilitiesDesc} />

           {/* additionals Section */}
       {!jobData?.additionalsdesc&& <JobSection title="Additionals" items={jobData?.additionals} />}
        
        {/* additionals Description Section */}
        <JobCategorySection title="Additionals" categories={jobData?.additionalsdesc} />
        
        {/* Learnings Section */}
        <JobSection title="What will you Learn" items={jobData?.learnings} />
        
        {/* Qualifications Section */}
        {!jobData?.qualificationDesc&&<JobSection title="Qualifications" items={jobData?.qualifications} />}
        
        {/* Qualification Description Section */}
        <JobCategorySection title="Qualification" categories={jobData?.qualificationDesc} />
        
        {/* Preferred Section */}
        <JobSection title="Preferred" items={jobData?.preferred} />
        
        {/* Benefits Section */}
        <JobSection title="Benefits" items={jobData?.benefits} />
        
        {/* Extra Section */}
        {jobData?.note && (
          <div className="flex flex-col gap-5">
            <h5 className="common-h5-heading">Note:</h5>
            <p className="common-body1-text">
              {jobData?.note?.replace(email, '')}{' '}
              {email && <a href={`mailto:${email}`} className="custom-text-blue1">{email}</a>}
            </p>
          </div>
        )}

        {/* Apply Button */}
        <div className="flex justify-center items-center">
            <a href={`mailto:${jobData?.role==='UI/UX Designer'?'sanjana.palisetti@payglocal.in':'hr@payglocal.in'}`}>
                <button className="background-custom-blue1 py-2.5 px-6 common-btn-text custom-text-white rounded-3xl sign-up-blue-btn-drop-shadow hover:scale-110 duration-300">Apply</button>
            </a>
        </div>
        
      </div>
    </section>

        </>
    )
}

function JobSection ({ title, items }) {
    if (!items) return null;
    
    return (
      <div className="flex flex-col gap-5">
        <h5 className="common-h5-heading">{title}</h5>
        <ul className="list-disc list-inside space-y-3 pl-5">
          {items.map((item, index) => (
            <li key={index} className="comon-body1-text">{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  

function JobCategorySection ({ title, categories }) {
    if (!categories) return null;
    
    return (
      <div className="flex flex-col gap-5">
        <h5 className="common-h5-heading">{title}</h5>
        <div className="ml-2">
          {Object.entries(categories).map(([category, tasks], index) => (
            <div key={index}>
              <h6 className="common-h6-heading">{category}</h6>
              <ul className="list-disc list-inside space-y-5 my-3 pl-5">
                {tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="comon-body1-text">{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default CareerInnerSection;