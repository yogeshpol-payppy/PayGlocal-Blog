import Link from 'next/link';

import PolicyTitleWithPara from '@/Components/SmallComponents/PolicyTitleWithPara';


function TermsAndConditionsSection() {





    return (
        <section className={"flex flex-col gap-10 lg:gap-12 justify-center items-center px-4 py-10 sm:px-10 sm:py-10  lg:py-20  background-custom-grey50 " }>
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Introduction</h4>
                <p className="common-body1-text custom-text-grey900">Welcome to PayGlocal Technologies Private Limited (&quot; Company&quot; , &quot; we&quot; , &quot; our&quot; , &quot; us&quot; )!</p>
                <p className="common-body1-text custom-text-grey900">These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at <a href="/" target='_blank' className='custom-text-blue1'>www.payglocal.in</a>  (together or individually “Service” or “Website” used interchangeably) operated by PayGlocal Technologies Private Limited.</p>
                <p className="common-body1-text custom-text-grey900">Our <Link href='/privacy-policy' className='custom-text-blue1'> Privacy Policy </Link>  also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.</p>
                <p className="common-body1-text custom-text-grey900">Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound by these terms.</p>
                <p className="common-body1-text custom-text-grey900">These Terms apply to all visitors, users and others who wish to access or use Service.</p>

            </div>

            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Communications</h4>
                <p className="common-body1-text custom-text-grey900">By using our Website, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at <a href="mailto:support@payglocal.in" className='custom-text-blue1'> support@payglocal.in </a></p>
            </div>

            {/* Content section  */}
            {/* component for only title and multiple paragraphs */}
            <PolicyTitleWithPara title={'Content'} paras={[
                { text: 'Content found on or through this Website are the property of PayGlocal Technologies Private Limited or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.' }
            ]} />


            {/* Prohibited Uses section  */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Prohibited Uses</h4>
                <p className="common-body1-text custom-text-grey900">You may use our Website only for lawful purposes and in accordance with Terms. You agree not to use Service:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900">You may use our Website only for lawful purposes and in accordance with Terms. You agree not to use Service:</li>
                    <li className="common-body2-text custom-text-grey900">In any way that violates any applicable national or international law or regulation.</li>
                    <li className="common-body2-text custom-text-grey900">For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                    <li className="common-body2-text custom-text-grey900">To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail”, “chain letter,” “spam,” or any other similar solicitation.</li>
                    <li className="common-body2-text custom-text-grey900">To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
                    <li className="common-body2-text custom-text-grey900">In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
                    <li className="common-body2-text custom-text-grey900">To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability.</li>
                </ul>
            </div>

            {/* Additionally, you agree not to section  */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Additionally, you agree not to</h4>
                <p className="common-body1-text custom-text-grey900">Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other party&apos;s use of Service, including their ability to engage in real time activities through Service.</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900">Use any robot, spider, or other automatic device, process, or means to access Service for any purpose, including monitoring or copying any of the material on Service.</li>
                    <li className="common-body2-text custom-text-grey900">Use any manual process to monitor or copy any of the material on Service or for any other unauthorized purpose without our prior written consent.</li>
                    <li className="common-body2-text custom-text-grey900">Use any device, software, or routine that interferes with the proper working of Service. Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.</li>
                    <li className="common-body2-text custom-text-grey900">Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the server on which Service is stored, or any server, computer, or database connected to Service.</li>
                    <li className="common-body2-text custom-text-grey900">Attack Service via a denial-of-service attack or a distributed denial-of-service attack.</li>
                    <li className="common-body2-text custom-text-grey900">Take any action that may damage or falsify Company rating.</li>
                    <li className="common-body2-text custom-text-grey900">Otherwise attempt to interfere with the proper working of Service.</li>
                </ul>
            </div>

            {/* Analytics section  */}
            <PolicyTitleWithPara title={'Analytics'} paras={[
                { text: 'We may use third-party Service Providers to monitor and analyze the use of our Service.' }
            ]} />
            {/* No Use By Minors section  */}
            <PolicyTitleWithPara title={'No Use By Minors'} paras={[
                { text: 'Our Website is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using Service, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of Terms. If you are not at least eighteen (18) years old, you are prohibited from both the access and usage of Service.' }
            ]} />
            {/* Intellectual Property section  */}
            <PolicyTitleWithPara title={'Intellectual Property'} paras={[
                { text: 'Our Website may contain links to third party web sites or services that are not owned or controlled by PayGlocal Technologies Private Limited. PayGlocal Technologies Private Limited has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites. YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB SITES OR SERVICES.' },
                { text: "WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT." }
            ]} />

            {/* copyright policy  */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Copyright Policy</h4>
                <p className="common-body1-text custom-text-grey900">We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Service infringes on the copyright or other intellectual property rights (“Infringement”) of any person or entity.</p>
                <p>If you are a copyright owner, or authorised on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to <a href="mailto:support@payglocal.in" className="custom-text-blue1">support@payglocal.in</a> , with the subject line: “Copyright Infringement” and include in your claim a detailed description of the alleged Infringement as detailed below, under “DMCA Notice and Procedure for Copyright Infringement Claims”</p>
                <p>You may be held accountable for damages (including costs and attorneys’ fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through Service on your copyright.</p>
            </div>

             {/* Error Reporting and Feedback policy  */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Error Reporting and Feedback</h4>
                <p className="common-body1-text custom-text-grey900">You may provide us either directly at <a href="mailto:support@payglocal.in" className="custom-text-blue1">support@payglocal.in</a> or via third party sites and tools with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service (“Feedback”). You acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose.</p>
            </div>

             {/* Cookie Policy  */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Cookie Policy</h4>
                <p className="common-body1-text custom-text-grey900">For our Website usage of Cookies, please refer to our <Link href='/cookie-policy' className='custom-text-blue1'> Cookie Policy.</Link></p>
            </div>

             {/* Privacy Policy  */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Privacy Policy</h4>
                <p className="common-body1-text custom-text-grey900">For our Website usage of Cookies, please refer to our <Link href='/privacy-policy' className='custom-text-blue1'>Privacy Policy.</Link></p>
            </div>

            

            {/* Links To Other Websites section  */}
            <PolicyTitleWithPara title={'Links To Other Websites'} paras={[
                { text: 'We may use third-party Service Providers to monitor and analyze the use of our Service.' }
            ]} />
            {/* Disclaimer Of Warranty section  */}
            <PolicyTitleWithPara title={'Disclaimer Of Warranty'} paras={[
                { text: 'THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.' },
                { text: 'NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.' },
                { text: 'COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.' },
                { text: 'THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.' }
            ]} />
            {/* Limitation Of Liability section  */}
            <PolicyTitleWithPara title={'Limitation Of Liability'} paras={[
                { text: 'EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES.' }
            ]} />
            {/* Governing Law section  */}
            <PolicyTitleWithPara title={'Governing Law'} paras={[
                { text: 'These Terms shall be governed and construed in accordance with the laws of India, which governing law applies to agreement without regard to its conflict of law provisions.' }
            ]} />

            {/* Changes To Website section  */}
            <PolicyTitleWithPara title={'Changes To Website'} paras={[
                { text: 'We reserve the right to withdraw or amend our Website, and any service or material we provide via Website, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Service, or the entire Service, to users, including registered users.' }
            ]} />

            {/* Amendments To Terms section  */}
            <PolicyTitleWithPara title={'Amendments To Terms'} paras={[
                { text: 'We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.' },
                { text: 'Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.' },
                { text: 'By continuing to access or use our Website after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Service.' },

            ]} />

            {/* Acknowledgement section */}
            <PolicyTitleWithPara title={'Acknowledgement'} paras={[
                { text: 'BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.' }
            ]} />

              {/* Contact Us Policy  */}
              <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Contact Us</h4>
                <p className="common-body1-text custom-text-grey900">Please send your feedback, comments, requests for technical support by email: <a href="mailto:support@payglocal.in" className="custom-text-blue1">support@payglocal.in</a></p>
            </div>

        </section>
    )
}

export default TermsAndConditionsSection;
