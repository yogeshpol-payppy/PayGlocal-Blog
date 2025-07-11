import React from 'react';
import Link from 'next/link';
import PolicyTitleWithPara from '@/Components/SmallComponents/PolicyTitleWithPara';



function PrivacyPolicyForClientsSection() {





    return (
        <>
            <section className={"flex flex-col gap-10 lg:gap-12 justify-center items-center px-4 py-10 sm:px-10 sm:py-10  lg:py-20  background-custom-grey50 "}>
      {/* Introduction section */}
    <PolicyTitleWithPara title={'Introduction'} paras={[
        {text:'PayGlocal Technologies Private Limited (“PayGlocal”, “us”, “we”, or “our”) is a payments processing company incorporated under The Companies Act, 2013, in India with its registered office at 6048, Prestige Shantiniketan, ITPL Main Road, Whitefields, Bengaluru, Karnataka – 560048, India'},
        {text:'At PayGlocal, our mission is to provide a secure, highly available and robust payment processing platform to our business clients. Respecting your privacy is a central theme for us in everything we build at PayGlocal.'},
        {text:'As a merchant or business facing payments technology company, PayGlocal offers multiple services to our clients. As an example, when we serve as a payments processing platform to merchants, we collect and use personal information as authorized by our contracts with our clients. If you have questions about how these companies handle your personal information, or wish to exercise your rights, please contact them directly. For example, if you performed a payment on a merchant using a payment instrument, please contact that company for more information on how your information was handled by them. In scope of this policy, we define and explain how PayGlocal handles private and sensitive information.'},
        {text:'This policy highlights what data we collect about users of our service and how a user’s personal information is handled by us in terms of usage, storage, disclosure and removal from our servers.'},
        {text:'PayGlocal takes your privacy seriously and deals with sensitive, personally identifiable information with care. Our privacy policy ensures your information is in safe hands and is not disclosed to third parties and other entities outside of PayGlocal unless required by law.'},
        ]} />
    
    <div className={" max-w-3xl w-full "}>

        <ul className="list-disc pl-5 space-y-5">
            <li className="common-body2-text custom-text-grey900">[1] In scope of this policy, an end-customer who will be purchasing of goods /services from the merchants by making payment via different payment instrument is defined as a (“Customer”).</li>
            <li className="common-body2-text custom-text-grey900">[2] In scope of this policy, all merchants who will be utilising the services of PayGlocal for accepting payments for goods /services from their end-customers via different payment instrument is defined as a (“Merchant”).</li>
        </ul>
    </div>

   

     {/* PayGlocal Products and Services section  */}
        <PolicyTitleWithPara title={'PayGlocal Products and Services'} paras={[
        { text: 'PayGlocal operates www.payglocal.in website, payment processing web pages that collect customer’s payment and other information and payment management web portal that helps our clients login to the portal and manage their transactions processed through PayGlocal’s processing engine. All these services are collectively called as “the Service” or “Products and Services” in this policy.' },
        {text:'When users use PayGlocal’s Products and Services, we collect Personal Information for providing and improving the Service. By using the Service, you agree to the collection, storage and usage of information in accordance with this policy. This privacy policy fully governs how the data collected from the users while using this service is handled and used.'}
    ]} />

     {/* How we collect Personal Information section  */}
     <PolicyTitleWithPara title={'How we collect Personal Information'} paras={[
        { text: 'Personal Information is any information that we can use to identify, locate, or contact you. There are different types of personal information.' },
    ]} />

     {/* 1 . Payment and transaction information section  */}
     <PolicyTitleWithPara title={'1 . Payment and transaction information'} paras={[
        { text: 'This is information about the transaction that you make on merchants and marketplaces when we serve as a payment processing platform for those clients. We collect transaction information as authorized by our contracts with our clients. If you have questions about how these companies handle your personal information, or wish to exercise your rights, please contact them directly.' },
    ]} />

     {/* 2. Contact information section  */}
     <PolicyTitleWithPara title={'2. Contact information'} paras={[
        { text: 'We collect your contact information as provided by you while using our Products and Services so that we can reach out to discuss and address any concerns that you may have on our Services.' },
    ]} />

      {/* 3. Billing information section  */}
      <PolicyTitleWithPara title={'3. Billing information'} paras={[
        { text: 'We collect your billing information as provided by you while using our Products and Services so that we can send that to downstream systems that evaluate a payment or transaction risk using this information. These downstream entities are networks, issuers or payment wallet providers.' },
    ]} />

      {/* 4. Cookies section  */}
      <PolicyTitleWithPara title={'4. Cookies'} paras={[
        { text: `Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive. We use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Products and Services. For more information, please see our Cookie Policy.` }
    ]} />

    {/* 5. Browsing information section  */}
    <PolicyTitleWithPara title={'5. Browsing information'} paras={[
        { text: 'We record information relating to your use of PayGlocal Products and Services, such as the searches you undertake, the pages you view, your browser type, IP address, location, requested URL, referring URL, and timestamp information.' },
    ]} />

     {/* 6. Third Party Services section  */}
     <PolicyTitleWithPara title={'6. Third Party Services'} paras={[
        { text: 'We may use third party services such as Google Analytics that collect, monitor and analyze information in order to increase our Products and Services’ functionality. These third party service providers have their own privacy policies addressing how they use such information.' },
    ]} />

     {/* 7. Other Information section */}
     <PolicyTitleWithPara title={'7. Other Information'} paras={[
        { text: 'We collect your contact information as provided by you while using our Products and Services so that we can reach out to discuss and address any concerns that you may have on our Services.' },
    ]} />

    {/* How we use Personal Information section  */}
    <div className={"flex flex-col gap-5 max-w-3xl w-full "}>
        <h4 className="common-h4-heading">How we use Personal Information</h4>
        <p className="common-body1-text custom-text-grey900">We use personal information to:</p>
        <ul className="list-disc pl-5 space-y-5">
            <li className="common-body2-text custom-text-grey900">Operate PayGlocal&apos;s electronic payments processing product and enable your payment transactions, and for related purposes, such as authentication, dispute resolution, fraud prevention, and security.</li>
            <li className="common-body2-text custom-text-grey900">Provide you with the products, services, programs, offers, or information you request from PayGlocal, and for related purposes such as determining eligibility and customer service.</li>
            <li className="common-body2-text custom-text-grey900">Understand how you and others use our products, for analytics and modeling and to create business intelligence and insights and to understand economic trends.</li>
            <li className="common-body2-text custom-text-grey900">Generate de-personalized, de-identified, anonymized, or aggregated datasets, which are used for product development and delivery of consulting services to clients.</li>
            <li className="common-body2-text custom-text-grey900">Support our everyday business purposes, such as for account management, quality control, website administration, business continuity and disaster recovery, security and fraud prevention, corporate governance, reporting and legal compliance. Please note that we may also use and disclose information that it is not personally identifiable. For example, we may publish reports that contain aggregated or statistical data, such as reports showing general payment card usage trends. These reports do not contain any personal information.</li>
            <li className="common-body2-text custom-text-grey900">Ensure PayGlocal&apos;s systems are secure and detect an unusual activity while using our Products and Services.</li>
            <li className="common-body2-text custom-text-grey900">Aggregate information to perform statistical analyses of User behavior and characteristics in order to measure interest in our Products and Services.</li>
            <li className="common-body2-text custom-text-grey900">Your information, including Personal Information, may be transferred to and maintained on computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction. Your information is secured by the contractual terms and conditions we have with our partners in accordance with applicable clauses and laws that govern data protection.</li>
            <li className="common-body2-text custom-text-grey900">Transfer the information, including Personal Information, to India and process it there for users and customers outside of India using our services.</li>
        </ul>
        <p className="common-body1-text custom-text-grey900">Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
    </div>

     {/* How we secure Personal Information section  */}
     <PolicyTitleWithPara title={'How we secure Personal Information'} paras={[
        { text: 'Ensuring the confidentiality, integrity and availability of the data is our top priority. We use the latest encryption standards, applied cryptography and security framework for data at transit, data in use and data at rest using a zero trust architecture. Data is considered to be in one of the following states: in-transit, in-use and at rest. At each state, we have applied innovative security strategies to protect the data. For transit, in addition to TLS 1.3 which is designed to provide point-to-point security, we support End-to-End Encryption (E2EE). Using E2EE the message is encrypted at all times as it makes its way through any possible intermediary entities. to protect against cryptanalytic advances, we use RSA encryption key length 2,048 bits.' },
        { text: 'For Data at Rest, we use envelope based symmetric encryption which is performed at level 2 (application layer) .AES with a key strength of 256 bits and GCM algorithm is used to encrypt data. All the Data Encryption Keys are protected, validated and certified to meet the requirements of PCI DSS Level 1 certification.'}
    ]} />

     {/* Online Privacy section  */}
     <PolicyTitleWithPara title={'Online Privacy'} paras={[
        { text: 'When you use our services, we may collect information by automated means, using technologies such as cookies, pixel tags, browser analysis tools, server logs, and web beacons. Please refer to our Cookie Policy for more details on usage of cookies.' },
        { text: 'In some cases, the information we collect is only used in a non-identifiable way. For example, we use information we collect about all website users to optimize our websites and to understand website traffic patterns. We do not use this information to profile you.'},
        { text: 'In other cases, we may use the information in an identifiable way. For example, we may authenticate you or your device to deliver personalized content or use the information for analytics, fraud detection, and security.'}

    ]} />

       {/* Links to other sites section  */}
       <PolicyTitleWithPara title={'Links to other sites'} paras={[
        { text: "Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We advise you to review the Privacy Policy of every site you visit. We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services." },
    ]} />

        {/* International Transfers section  */}
        <PolicyTitleWithPara title={'International Transfers'} paras={[
        { text: "PayGlocal is based in India and has Affiliates and service providers around the world. Your personal information may be transferred to other countries, which may not have similar privacy or data protection laws. By using PayGlocal products, you acknowledge that your information might be shared with global entities that are governed by their respective policies." },
    ]} />

        {/* Information Security and Data Retention section  */}
        <PolicyTitleWithPara title={'Information Security and Data Retention'} paras={[
        { text: "PayGlocal is based in India and has Affiliates and service providers around the world. Your personal information may be transferred to other countries, which may not have similar privacy or data protection laws. By using PayGlocal products, you acknowledge that your information might be shared with global entities that are governed by their respective policies." },
        {text:"We use technical, organizational, and administrative safeguards to help protect your personal information from unauthorized access or loss. For example, we use encryption and other tools to protect sensitive information. We retain your personal information as needed for the purposes listed above and as permitted by law."}
    ]} />

      {/* Privacy Policies of Third Parties section  */}
      <PolicyTitleWithPara title={'Privacy Policies of Third Parties'} paras={[
        { text: "This Privacy Notice explains how PayGlocal and its Affiliates handle your personal information. Please also read the privacy notice provided by your merchant and payment instrument provider to learn how that company handles your information.Social media platforms and other websites that may be accessed through PayGlocal’s websites also have their own privacy policies. We encourage you to read the privacy notices provided by these sites before you give them your information." },
    ]} />

       {/* Job Applicants section  */}
       <PolicyTitleWithPara title={'Job Applicants'} paras={[
        { text: "If you have applied for a job at PayGlocal, the personal information in your application will be used and retained for recruiting, compliance and other customary human resources purposes." },
    ]} />


     {/* Children’s Data section  */}
     <div className={"flex flex-col gap-5 max-w-3xl w-full "}>
        <h4 className="common-h4-heading">Children&apos;s Data</h4>
        <p className="common-body1-text custom-text-grey900">PayGlocal&apos;s platforms are not directed to children, and PayGlocal does not knowingly collect information from children under the age of 18. We may collect data from children over 18 who are allowed by law to interact with PayGlocal. If you believe that we are processing a child&apos;s information inappropriately, please contact us on <a href="mailto:privacy@payglocal.in" className='custom-text-blue1'>privacy@payglocal.in</a></p>
    </div>
  
    {/* Changes to this Privacy Notice section  */}
    <PolicyTitleWithPara title={'Changes to this Privacy Notice'} paras={[
            { text: "We may update this Privacy Notice from time to time. We will post an alert online if the changes are material. If the changes will materially affect the way we use identifiable information that we have already collected, we will notify you." },
        ]} />

     {/* How to Contact the PayGlocal Privacy Office section  */}
     <div className={"flex flex-col gap-5 max-w-3xl w-full "}>
        <h4 className="common-h4-heading">How to Contact the PayGlocal Privacy Office</h4>
        <p className="common-body1-text custom-text-grey900">If you have questions or comments about our privacy practices, or if you would like help exercising your privacy rights, please contact us. You can:</p>
        <p className="common-body1-text custom-text-grey900">Email us: <a href="mailto:privacy@payglocal.in" className='custom-text-blue1'>privacy@payglocal.in</a> <br />
        (Please do not include sensitive information, such as your account number, in emails)</p>
        <p className="common-body1-text custom-text-grey900">
        Mail us a letter: <br />
        Privacy Office <br />
        PayGlocal Technologies Private Limited <br />
        72, Service Road, LRDE Layout, <br />
        Doddanekundi, Bengaluru, <br />
        Bengaluru, Karnataka – 560037, <br />
        India <br />
        <Link href="/" className='custom-text-blue1'>www.payglocal.in</Link> 
        </p>
    </div>


   
   
    
</section>
        </>
    )
}

export default PrivacyPolicyForClientsSection;
