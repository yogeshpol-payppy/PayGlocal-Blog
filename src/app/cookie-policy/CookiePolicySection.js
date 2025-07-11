import Link from 'next/link';

import PolicyTitleWithPara from '@/Components/SmallComponents/PolicyTitleWithPara';

 function CookiePolicySection (){





  return (
        <section className={"flex flex-col gap-10 lg:gap-12 justify-center items-center px-4 py-10 sm:px-10 sm:py-10  lg:py-20  background-custom-grey50 "}>

            {/* Introduction section  */}
              <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Introduction</h4>
                <p className="common-body1-text custom-text-grey900">PayGlocal Technologies Private Limited (“PayGlocal”, “us”, “we”, or “our”) is a payments processing company incorporated under the Companies Act, 2013, in India. This policy applies to our official Website, www.payglocal.in (“Website”).</p>
                <p className="common-body1-text custom-text-grey900">This policy explains how we use cookies on our Website and this policy may be amended from time to time.</p>
                <p className="common-body1-text custom-text-grey900">By using our Website, you explicitly agree and consent that we can place cookies on your device and the data collected thereunder would be stored/managed by us and/or may be shared with the third-party processor. It is possible that some services may not function optimally if your browser or device does not accept these cookies. Do note that in cases where we have a presence on a site owned by a third party, such as a page or handle on a social media site, that third party&apos;s privacy policy and terms of use, rather than this Policy, will govern your usage, unless specifically stated otherwise.</p>

                <ul className="list-disc pl-5 space-y-5">
                        <li className="common-body2-text custom-text-grey900">In scope of this policy, an end-customer who will be purchasing of goods /services from the merchants by making payment via different payment instrument is defined as a (“Customer”).</li>
                        <li className="common-body2-text custom-text-grey900">In scope of this policy, all merchants who will be utilising the services of PayGlocal for accepting payments for goods /services from their end-customers via different payment instrument is defined as a (“Merchant”).</li>
                </ul>
            </div>


            {/* What are cookies section  */}
             <PolicyTitleWithPara title={'What are cookies?'}
            paras={[
                {text:"Cookies are small text files placed on your device (such as desktop / laptop / tablet / smartphone) whenever you use that device to visit a website via a browser for the first time or if you are a returning visitor."},
                {text:"Cookies also assist in better marketing so you see information that is relevant to you."},
                {text:"The Cookies we place on your computer cannot be used to retrieve any other data from your hard drive, to pass viruses to your computer, or capture your email address. Each Cookie is unique to your web browser and device."}
            ]} />

            {/* Types of cookies section  */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Types of cookies</h4>
                <p className="common-body1-text custom-text-grey900">On most websites, cookies can be categorised as below:</p>
                
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900">Strictly Necessary Cookies</li>
                </ul>
                <p className="common-body1-text custom-text-grey900">These cookies are essential, as they enable you to move around a website and use its features, such as accessing secure areas, if applicable. Without these cookies, services you&apos;ve asked for can&apos;t be provided. These cookies don&apos;t gather information about you that is used for marketing or remembering where you&apos;ve been on the Internet. <br />
                    <strong>PayGlocal uses these cookies on our Website.</strong>
                </p>

                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900">Performance Cookies</li>
                </ul>
                <p className="common-body1-text custom-text-grey900">These cookies allow a website to remember choices you make (such as your user name, language or the region you&apos;re in) provide enhanced features and content for you. Without these cookies, a website cannot remember choices you&apos;ve previously made or personalise your browsing experience. <br />
                <strong>PayGlocal uses these cookies on our Website.</strong>
                </p>

                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900">Analytical Cookies</li>
                </ul>
                <p className='common-body1-text custom-text-grey900'>These cookies collect information about how you use a website, for example which pages you go to most often and if you get error messages from certain pages. These cookies do not gather any information which can identify you. All the information collected by such cookies is anonymous and only used to improve how a website works.</p>
                <p className="common-body1-text custom-text-grey900">These cookies are not used to target you with online marketing. Without these cookies we can&apos;t learn how our Website is performing and make relevant improvements that could better your browsing experience. <br />
                <strong>PayGlocal uses these cookies on our Website.</strong>
                </p>

                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900">Marketing Cookies</li>
                </ul>
                <p className='common-body1-text custom-text-grey900'>These cookies are used to customise marketing to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign. They remember that you have visited a website and this information may be shared with other organisations such as advertisers. Although these cookies can track your visits to other websites, they don&apos;t usually know who you are. Without these cookies, online advertisements you encounter will be less relevant to you and your interests. <br />
                <strong>PayGlocal uses these cookies on our Website.</strong>
                </p>
            
            </div>

            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Usage of Data</h4>
                <p className="common-body1-text custom-text-grey900">The data collected by us via the cookies on our Website is managed, stored and retained in compliance with the applicable laws with an objective as mentioned above. We may use third party services to monitor and analyse the data in order to increase our products and services&apos; functionality. These third party service providers have their own privacy policies addressing how they use such information. For more information, please see our <Link href='/privacy-policy-for-payments-page' className='custom-text-blue1 '>Privacy Policy</Link></p>
            </div>

            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">What about other tracking technologies, like web beacons?</h4>
                <p className="common-body1-text custom-text-grey900">Cookies are not the only way to recognize or track visitors to a website. Other similar technologies like web beacons (sometimes called “tracking pixels” or “clear gifs”) are also used by many websites for tracking purposes. These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited a website. PayGlocal does not use these technologies on our Website.</p>
            </div>

            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">How can you control cookies?</h4>
                <p className="common-body1-text custom-text-grey900">You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our Website though your access to some functionality and areas of our Website may be restricted. To learn how to manage your cookies, please follow the instructions from your specific browser.</p>
                <p className="common-body1-text custom-text-grey900">If you are visiting this site using a mobile device such as a smartphone or tablet, please refer to the manufacturer&apos;s instructions on how to manage cookies.</p>
                <p className="common-body1-text custom-text-grey900">In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a href="https://optout.aboutads.info/" target="_blank" className='custom-text-blue1' rel="noreferrer" > https://optout.aboutads.info/ </a> or <a href="https://www.youronlinechoices.com." target="_blank" className='custom-text-blue1' rel="noreferrer" >https://www.youronlinechoices.com.</a></p>

            </div>
        </section>
    )
}

export default CookiePolicySection;
