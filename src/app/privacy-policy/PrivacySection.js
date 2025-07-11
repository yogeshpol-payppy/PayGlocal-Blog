import { Manrope } from 'next/font/google';
import Link from 'next/link';
import PolicyTitleWithPara from '@/Components/SmallComponents/PolicyTitleWithPara';

const manrope=Manrope({
    subsets:['latin'],
    display:'swap'
})
 function PrivacySection (){

  return (
        // Introduction section 
        <section className={"flex flex-col gap-10 lg:gap-12 justify-center items-center px-4 py-10 sm:px-10 sm:py-10  lg:py-20  background-custom-grey50 "+manrope.className}>
            <PolicyTitleWithPara title={'Introduction'} paras={[
                {text:'PayGlocal Technologies Private Limited (“PayGlocal,” “Us,” “We,” or “Our”) is a payments processing company incorporated under The Companies Act 2013 in India with its registered office at 6048 Prestige Shantiniketan, ITPL Main Road, Whitefield, Bengaluru, Karnataka – 560048, India.'},
                {text:'We implement security standards and best practices as per Applicable Laws (as defined hereunder) to protect Personal Data collected by Us from those who, for any purpose, directly or indirectly, use / avail / subscribe or have access to ("Users", "You" or "Your") Our website, software, platforms hosted by Us, payment infrastructure provided by Us through Our platforms/ websites or Our checkout pages ("PayGlocal Platform"). However, this policy does not apply in relation to any third party websites that may be linked to the PayGlocal Platform or any relation You may have with the Business Users using PayGlocal Platform.'},
                {text:'Safeguarding your privacy is the underlying principle for Us in everything We build at PayGlocal. Accordingly, We have implemented reasonable security practices and procedures that are commensurate with the information assets being protected and with the nature of Our business. While We try Our best to provide security that is in consonance with the industry standards as well as the Applicable Laws, however owing to the inherent vulnerabilities of the internet, We cannot ensure or warrant complete security of all information that is being transmitted to Us by You. By visiting or using PayGlocal Platform, You agree and acknowledge to be bound by this Privacy Policy and You hereby consent that We will collect, use, process and share Your Personal Information in the manner set out herein below. If You do not agree with this Privacy Policy, please do not use PayGlocal Platform or provide Us with Your Personal Data.'},
                {text:'PayGlocal treats Your privacy diligently and deals with sensitive, personally identifiable information with utmost care. Our Privacy Policy ensures Your information is in safe hands and is not disclosed to third parties and other entities outside of PayGlocal unless required to facilitate Your usage of PayGlocal Platform and / or under as per Applicable Laws.'},
                {text:'As a merchant-facing payments technology company, PayGlocal processes personal information authorized by Our contracts with Business Users to provide a secure payment processing platform. If You have questions about how these Business Users handle Your personal information or wish to exercise Your rights, please contact them directly.'},
                ]} />
            
            {/* Definitions section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " + manrope.className}>
                <h4 className="common-h4-heading">Definitions</h4>
                <p className="common-body1-text custom-text-grey900"><strong>Business User:</strong> Any entity or individual that utilizes PayGlocal Platform to accept payments for goods or services from their end-customers via different payment instruments. Business Users typically include sellers, vendors, or businesses offering goods or services for sale (also referred to as merchants).</p>
                <p className="common-body1-text custom-text-grey900">Note: We do not onboard children under the age of 18 as Business Users.</p>
                <p className="common-body1-text custom-text-grey900"><strong>End-Customer:</strong> An individual who purchases goods or services from Business Users using different payment instruments facilitated by PayGlocal&apos;s payment processing Platforms.</p>
                <p className="common-body1-text custom-text-grey900"><strong>Personal Data:</strong> Any information that relates to an identified or identifiable individual, including but not limited to name, address, email address, financial details, and any other information capable of identifying You.</p>
                <p className="common-body1-text custom-text-grey900"><strong>Referral Partner:</strong> An individual or entity that promotes and refers potential Business Users to PayGlocal.</p>
                <p className="common-body1-text custom-text-grey900"><strong>Applicable Laws:</strong> Includes the Digital Personal Data Protection Act 2023, Information Technology Act 2000, the Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules 2011, Payment and Settlement Systems Act 2007, Prevention of Money Laundering Act 2002, and any other applicable rules and regulations issued thereunder and having the force of law in India.</p>
                <p className="common-body1-text custom-text-grey900"><strong>Job Applicant:</strong> Any individual who applies for a job with PayGlocal and provides personal information as part of the application process.</p>
            </div>


            {/* Information Collection */}
            <div className="flex flex-col gap-5 max-w-3xl w-full">
                <h4 className="common-h4-heading">Information Collection</h4>
                <h5 className="common-h5-heading max-w-[490px] w-full">What We Collect</h5>
                <p className="common-body1-text custom-text-grey900 ">PayGlocal collects information to provide a secure and efficient payment processing service. This information can be categorized as follows:</p>
            </div>

            {/* Information You Provide Directly: section  */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " + manrope.className}>
                <h4 className="common-h4-heading">Information You Provide Directly:</h4>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900">Contact Information: Including but not limited to name, title, phone number(s), email address, and mailing address.</li>
                    <li className="common-body2-text custom-text-grey900">Demographic Information: Such as date of birth, country of citizenship/residence.</li>
                    <li className="common-body2-text custom-text-grey900">Profile Information: Username, password (hashed and secured), and IP address.</li>
                    <li className="common-body2-text custom-text-grey900">Financial Information: Bank account details relevant for electronic payment methods, tokenized card information, and other relevant information required for payment processing.</li>
                    <li className="common-body2-text custom-text-grey900">Transaction Information: Details of transactions including date, time, parties involved, description, amount, billing/shipping information, and payment methods used.</li>
                    <li className="common-body2-text custom-text-grey900">Feedback and Correspondence: Information provided during inquiries, customer support interactions, or social media interactions.</li>
                    <li className="common-body2-text custom-text-grey900">Marketing Preferences: Your preferences for receiving marketing communications from PayGlocal.</li>
                    <li className="common-body2-text custom-text-grey900">Job Applicant Information: Information provided by job applicants including but not limited to name, contact details, educational background, employment history, and any other information necessary for the recruitment process.</li>
                    <li className="common-body2-text custom-text-grey900">KYC Related Documents: Information including but not limited to DIN, CIN, PAN, etc. as per applicable laws.</li>
                </ul>
            </div>

            {/* Information Collected from Other Sources section  */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " + manrope.className}>
                <h4 className="common-h4-heading">Information Collected from Other Sources:</h4>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900">Identity Verification: Information from third-party verification services, credit bureaus, and publicly available sources</li>
                    <li className="common-body2-text custom-text-grey900">Referral Partners: Information collected from referral partners who may provide Us with Your Personal Data.</li>
                    <li className="common-body2-text custom-text-grey900">End-Customer Information (Business Users): Information about End-Customers collected by Our Business Users, including details related to financial transactions, account registrations, identity verification, and purchased products/services.</li>
                    <li className="common-body2-text custom-text-grey900">Publicly Available Information: Information gathered from public sources like government-restricted/sanctioned persons lists, company registries, media, and the internet.</li>
                    <li className="common-body2-text custom-text-grey900">Third-Party Verification: Information obtained from credit reference and fraud prevention agencies (subject to applicable laws).</li>
                    <li className="common-body2-text custom-text-grey900">Transaction Information: Details obtained while processing transactions.</li>
                </ul>
            </div>

             {/* Information Collected Through Automated Means section  */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " + manrope.className}>
                <h4 className="common-h4-heading">Information Collected Through Automated Means:</h4>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900">Device Information: Including operating system, device type, manufacturer, model, browser type, screen resolution, and IP address.</li>
                    <li className="common-body2-text custom-text-grey900">Website/App Activity: Information about Your actions, access times, and browsing behaviour on PayGlocal Platform.</li>
                </ul>
            </div>

             {/* Collect Personal Information section  */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " + manrope.className}>
                <h4 className="common-h4-heading">How We Collect Personal Information</h4>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900">Payment and Transaction Information: Collected during transactions to facilitate payment processing as authorized by Our contracts with You.</li>
                    <li className="common-body2-text custom-text-grey900">Contact and Billing Information: Collected to address any concerns and process payments.</li>
                    <li className="common-body2-text custom-text-grey900">Cookies: Used to collect information about Your browser and browsing behaviour. Cookies are small data files stored on Your device by Your web browser.</li>
                    <li className="common-body2-text custom-text-grey900">Third-Party Services: We may use third-party services such as google analytics to collect, monitor, and analyze information to enhance PayGlocal Platform offerings.</li>
                    <li className="common-body2-text custom-text-grey900">Browsing Information: We record information relating to Your use of PayGlocal Platform, such as the searches You undertake, the pages You view, Your browser type, IP address, location, requested URL, referring URL, and timestamp information.</li>
                </ul>
            </div>

            {/* Purpose of Use section  */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " + manrope.className}>
                <h4 className="common-h4-heading">Purpose of Use</h4>
                <p className="common-body1-text custom-text-grey900">We use personal information to:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900">Operate Payment Processing Product: Facilitate and authenticate payment transactions, provide related services such as dispute resolution, fraud prevention, and security.</li>
                    <li className="common-body2-text custom-text-grey900">Provide Products and Services: Deliver the products, services, programs, offers, or information You request and related customer service.</li>
                    <li className="common-body2-text custom-text-grey900">Analytics and Modelling: Understand how the product is used to create business intelligence and insights.</li>
                    <li className="common-body2-text custom-text-grey900">Product Development: Generate de-personalized and anonymized datasets used to enhance product development.</li>
                    <li className="common-body2-text custom-text-grey900">Business Operations: Support everyday business operations such as account management, quality control, website administration, business continuity, disaster recovery, security, fraud prevention, corporate governance, and legal compliance.</li>
                    <li className="common-body2-text custom-text-grey900">Data Security: Ensure the security of PayGlocal&apos;s systems, detect unusual activity, and protect against unauthorized access.</li>
                    <li className="common-body2-text custom-text-grey900">Statistical Analyses: Aggregate information to perform statistical analysis of User behaviour and characteristics to measure interest in Our Products and Services.</li>
                    <li className="common-body2-text custom-text-grey900">Recruitment: Evaluate job applicants and make informed hiring decisions.</li>
                    <li className="common-body2-text custom-text-grey900">International Transfers: Transfer personal information to and process it in India and other countries as necessary. Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement for international transfer.</li>
                </ul>
            </div>

            {/* Data Minimization section  */}
            {/* component for only title and multiple paragraphs */}
            <PolicyTitleWithPara title={'Data Minimization'} paras={[
                { text: 'We adhere to the principle of data minimization. This means We only collect the minimum amount of personal data necessary to achieve the purposes outlined in this Privacy Policy. We do not collect more data than is required for these purposes.' }
            ]} />

            {/* Data Sharing section  */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " + manrope.className}>
                <h4 className="common-h4-heading">Data Sharing</h4>
                <p className="common-body1-text custom-text-grey900">PayGlocal does not sell, trade, or rent Your personal information to third parties. However, We may share Your personal information with:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900">Service Providers: Third-party service providers (including financial institutions such as banks) performing business-related functions such as processing payments, fraud prevention, data storage, data analysis, IT services, cloud communication/telecommunication service, customer service, and email delivery. These providers have access to Your personal information only to perform these tasks on Our behalf and are obligated not to disclose or use it for any other purpose.</li>
                    <li className="common-body2-text custom-text-grey900">Compliance with Laws and Law Enforcement: Government or law enforcement officials or private parties as required under Applicable Laws. This includes responding to subpoenas, court orders, or other legal processes.</li>
                    <li className="common-body2-text custom-text-grey900">Protecting Rights and Interests: Necessary to investigate, prevent, or take action regarding potential violations of Our policies, suspected fraud, situations involving potential threats to the safety of any person, or as evidence in litigation.</li>
                    <li className="common-body2-text custom-text-grey900">Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of Our assets, Your personal information may be transferred as part of that transaction. We will provide notice before Your personal information is transferred and becomes subject to a different privacy policy.</li>
                    <li className="common-body2-text custom-text-grey900">With Your Consent: Any third party not covered by the categories outlined above, provided You have granted Us explicit permission or where a contractual arrangement necessitates such transfer to fulfil contractual obligations.</li>

                </ul>
            </div>

             {/* Express User Consent section  */}
            <PolicyTitleWithPara title={'Express User Consent'} paras={[
                { text: 'By using PayGlocal Platform or providing Us with Your personal information, You consent to Our collection, use, and sharing of Your personal information as described in this Privacy Policy.' },
                { text: 'By giving Your consent hereunder, You understand that We may share and/or transfer Your Personal Data to any third party in India or outside India, including but not limited to risk assessment/mitigation companies for purposes such as risk assessment, analysis, security, fraud prevention, fraud screening, and quality control. We may share Your Personal Data to Our group companies, affiliates, corporate partners or authorized personnel’s for purposes consistent with this Policy in compliance with Applicable Laws. You also agree that PayGlocal reserves the right to make Your details available to its partner banks/ financial institutions or any such other third party, as the case may be, and that You may be contacted by the partners and/or the third party for information through email, telephone, WhatsApp and/or SMS.' },
            ]} />

            {/* User Rights section  */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " + manrope.className}>
                <h4 className="common-h4-heading">User Rights</h4>
                <p className="common-body1-text custom-text-grey900">We recognize the importance of Your right to control the usage of Your Personal Data. We provide You with multiple ways to exercise Your rights, including:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900">Right to Access: Request and obtain information about the processing activities of Your Personal Data.</li>
                    <li className="common-body2-text custom-text-grey900">Right to Rectification: Correct, complete, or update Your Personal Data.</li>
                    <li className="common-body2-text custom-text-grey900">Right to Erasure: Request deletion or removal of Personal Data that is no longer necessary for the purposes for which it was collected unless retention is necessary for compliance with legal and regulatory obligations.</li>
                    <li className="common-body2-text custom-text-grey900">Right to Restriction of Processing: Request the restriction of processing Your Personal Data under certain circumstances.</li>
                    <li className="common-body2-text custom-text-grey900">Right to Data Portability: Receive a copy of Your Personal Data in a structured, commonly used, and machine-readable format and have the right to transmit that data to another controller.</li>
                    <li className="common-body2-text custom-text-grey900">Right to Object: Object to the processing of Your Personal Data based on legitimate interests and direct marketing.</li>
                    <li className="common-body2-text custom-text-grey900">Right to Withdraw Consent: Withdraw Your consent for processing Your information at any time, though this may affect Our ability to provide some or all of the PayGlocal Platform’s offerings.</li>
                    <li className="common-body2-text custom-text-grey900">Right to Lodge a Complaint: Lodge a complaint with the relevant supervisory authority if You believe Your rights have been violate.</li>
                </ul>
                <p className="common-body1-text custom-text-grey900">To exercise these rights, please contact Us at <a href="mailto:privacy@payglocal.in" className="custom-text-blue1">privacy@payglocal.in.</a></p>
            </div>

             {/* Data Security section  */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " + manrope.className}>
                <h4 className="common-h4-heading">Data Security</h4>
                <p className="common-body1-text custom-text-grey900">Ensuring the confidentiality, integrity, and availability of Your data is Our top priority. We employ advanced encryption standards, applied cryptography, and a security framework for data in transit, data in use, and data at rest using a zero-trust architecture. Measures include:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900">Data in Transit: Use of TLS 1.3 for point-to-point security and End-to-End Encryption (E2EE) with RSA encryption key length 2048 bits.</li>
                    <li className="common-body2-text custom-text-grey900">Data at Rest: Envelope-based symmetric encryption at the application layer using AES with a key strength of 256 bits and the GCM algorithm.</li>
                    {/* <li className="common-body2-text custom-text-grey900"></li> */}
                </ul>
                <p className="common-body1-text custom-text-grey900">As no data transmission over the Internet or wireless network can be guaranteed as completely secure. You are responsible for maintaining the confidentiality of Your passwords and account information.</p>

            </div>

             {/* Data Retention section  */}
             <PolicyTitleWithPara title={'Data Retention'} paras={[
                { text: 'We retain Your personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy and to comply with legal and regulatory obligations. We will retain and use Your personal information to the extent necessary to resolve disputes and enforce Our legal agreements and policies.' },
            ]} />

             {/* No Collection of Data from Children section  */}
             <PolicyTitleWithPara title={'No Collection of Data from Children'} paras={[
                { text: 'We do not knowingly collect personal data from children under the age of 18. If We become aware that We have inadvertently received personal data from a child under the age of 18, We will delete such information from Our records.' },
            ]} />

             {/* Third-Party References and Links section  */}
             <PolicyTitleWithPara title={'Third-Party References and Links'} paras={[
                { text: 'Our website may contain links to third-party websites. These third parties and their websites are governed by their terms and conditions. We do not make any representations regarding the availability and performance of third parties or their websites and are not responsible for their content, terms of use, privacy policies, or practices.' },
            ]} />

             {/* International Transfers section  */}
             <PolicyTitleWithPara title={'International Transfers'} paras={[
                { text: 'PayGlocal is based in India and has affiliates and service providers located outside of India as well. Your Personal Data may be transferred to and maintained outside of Your country, which may not have similar privacy or data protection laws. By using PayGlocal Platform, You acknowledge that Your information might be shared with global entities governed by their respective laws and policies.' },
            ]} />

            {/* Updates to the Policy section  */}
            <PolicyTitleWithPara title={'Updates to the Policy'} paras={[
                { text: 'Our Privacy Policy is subject to change from time to time. If in Our opinion, the changes are material in nature, We will post an alert on Our website. However, We suggest that You review this Privacy Policy periodically for keeping abreast with the latest changes. It is to be noted that the changes in the policy will become applicable with the immediate effect. If You do not wish to permit changes in Our use of Your Personal Information, You must notify Us promptly. Your continued use of PayGlocal Platform after any change/ amendment to this Privacy Policy shall indicate Your acknowledgement of such changes and consent to be bound by the revised Privacy Policy.' },
                {text:'The current version of privacy Policy can be accessed from the link on Our homepage or at the bottom of Our website pages.'}
            ]} />

             {/* DISPUTE RESOLUTION section  */}
             <PolicyTitleWithPara title={'DISPUTE RESOLUTION'} paras={[
                { text: 'Your use of PayGlocal Platform will be governed by and construed in accordance with the laws of India. You consent to the exclusive jurisdiction of the competent courts/tribunals located in Bengaluru, India for resolving any disputes, legal action or proceedings resulting from Your use of PayGlocal Platform and hereby waive any objections to such jurisdiction.' },
                {text:'Furthermore, You acknowledge that We are not liable for any interception of information transmitted over the internet and release Us from any claims arising from such interception or unauthorized use or access to Your information.'}
            ]} />

            {/* COMPLAINTS AND GRIEVANCE REDRESSAL section  */}
            <PolicyTitleWithPara title={'COMPLAINTS AND GRIEVANCE REDRESSAL'} paras={[
                { text: 'If You have any concerns or questions about this Privacy Policy or if You need any assistance in exercising Your privacy rights, please contact Our Data Protection Officer at the co-ordinates mentioned below. Please note, If You contact Us to provide feedback, register a complaint, or ask any question, We will record any Personal Information and other content that You provide in Your communication, so that We can effectively respond to Your query / concern / complaint.' },
            ]} />

           {/* Contact Information section  */}
           <div className={"flex flex-col gap-5 max-w-3xl w-full " + manrope.className}>
               <h4 className="common-h4-heading">Contact Information</h4>
               <div className="">
                    <p className="common-body1-text custom-text-grey900">Name: Khaviyaa Janakiraman</p>
                    <p className="common-body1-text custom-text-grey900">Email us: <a href="mailto:privacy@payglocal.in" className="custom-text-blue1">privacy@payglocal.in</a></p>
                    <p className="common-body1-text custom-text-grey900">(Please do not include sensitive information such as Your bank account number, card number, in emails)</p>
               </div>
               <div className="">
                    <p className="common-body1-text custom-text-grey900">Mail us a letter:</p>
                    <p className="common-body1-text custom-text-grey900">PayGlocal Technologies Private Limited</p>
                    <p className="common-body1-text custom-text-grey900">72, 3rd floor, Service Road, LRDE Layout,</p>
                    <p className="common-body1-text custom-text-grey900">Doddanekundi, Bengaluru,</p>
                    <p className="common-body1-text custom-text-grey900">Bengaluru, Karnataka – 560037,</p>
                    <p className="common-body1-text custom-text-grey900">India</p>
                    <Link href='/' className='custom-text-blue1'>www.payglocal.in</Link>
               </div>
                <p className="common-body1-text custom-text-grey900">For End-Customers (individuals transacting with Business Users), please refer to the privacy policy of the Business User for information regarding their privacy practices, choices, and controls, or contact the Business User directly.</p>
                

            </div>
        </section>
    )
}

export default PrivacySection;
