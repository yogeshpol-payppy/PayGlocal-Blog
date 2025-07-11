'use client';
import Image from "next/image";



//modal images
import Close from '@/Images/Amazon/close.svg';


function SamXModal({modalOpen,setModalOpen})
{


        //when user close modal
        function handleModalClose()
        {
            setModalOpen(false);
        }
    return(
        <>
        
   
         {/* modal  */}
       <div className={`flex justify-center items-center bg-[#00000072] w-screen h-screen fixed left-0 top-0 duration-500 ${modalOpen?' z-20 opacity-100 ':'-z-10 opacity-0'}`}>
                <div className="flex flex-col gap-4 w-[85vw] sm:w-[75vw] lg:w-[40vw]  pt-10 pb-7 px-3 background-custom-white rounded-xl">
                    <div className="flex items-center justify-between px-3 w-full ">
                        <h5 className="common-h5-heading custom-text-blue1">Terms And Conditions</h5>
                        <Image src={Close} width={32} height={32} alt="img" quality={100} className="cursor-pointer" onClick={handleModalClose}/>
                    </div>

                    <div className="background-custom-grey50 px-4 py-5 max-h-[70vh] h-full overflow-scroll rounded-xl">
                        <ol className="list-decimal px-3 rounded-lg space-y-5">
                            <li className="custom-text-grey900 common-body2-text">All the terms and disclaimers (collectively “Terms”) mentioned herein shall apply to your usage of PayGlocal&apos;s proprietary sanction screening platform &apos;SamruddhiX&apos;.</li>
                            <li className="custom-text-grey900 common-body2-text">You understand that these Terms shall be applicable in addition to any other terms / policies / acknowledgments / conditions applicable to you for using PayGlocal&apos;s website.</li>
                            <li className="custom-text-grey900 common-body2-text">By using SamruddhiX, you explicitly acknowledge and represent that you have the right / permission / authority and appropriate consent to conduct sanction screening in relation to any person or entity (“subject”) whose name and / or identification number you have captured to generate the sanction screening search results.</li>
                            <li className="custom-text-grey900 common-body2-text">You understand and acknowledge that PayGlocal does not store any subject related data from your usage of SamruddhiX, including any screening results.</li>
                            <li className="custom-text-grey900 common-body2-text">You acknowledge and understand that any search results generated from your usage of SamruddhiX shall not be construed as any recommendation or suggestion on the part of PayGlocal. The discretion lies solely with you in relation to assigning any interpretation to search results and / or to take any decision relying on such results. PayGlocal hereby explicitly and unequivocally disclaims any responsibility or liability in relation to any decision undertaken by you on the basis of search results generated from your usage of SamruddhiX.</li>
                            <li className="custom-text-grey900 common-body2-text">You understand and acknowledge that PayGlocal&apos;s search result database is procured from various primary and secondary data sources such as third-party data providers, sanction websites, public announcements and other publicly available information. PayGlocal only accumulates the available data from the aforementioned sources. PayGlocal hereby explicitly disclaims any warranty in relation to accuracy and / or completeness of any search results or information data generated from your usage of SamruddhiX.</li>
                            <li className="custom-text-grey900 common-body2-text">You hereby undertake to use SamruddhiX only for the legitimate purposes.</li>
                            <li className="custom-text-grey900 common-body2-text">You hereby undertake to indemnify PayGlocal for any losses, cost, claims (including third party claims), penalty or any damages suffered by PayGlocal resulting, directly or indirectly, from your usage of SamrudhhiX including but not limited to breach of these Terms.</li>
                            <li className="custom-text-grey900 common-body2-text">You hereby acknowledge that by using SamruddhiX, you invariably agree to abide by these Terms. In case you do not wish to agree or abide by these Terms, then please refrain from using SamruddhiX for any purposes.</li>
                            <li className="custom-text-grey900 common-body2-text">You hereby acknowledge that your usage of SamrudhhiX is at your own discretion and Payglocal shall not be liable to you or any third party for any damages suffered by you or any such third party resulting from your usage of SamruddhiX.</li>

                        </ol>
                    </div>


                </div>
           
            </div>
        </>
    )
}

export default SamXModal;

















