'use client';
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";

const LUTCertificate = () => {
     const [origin, setOrigin] = useState("https://payglocal.in");
     useEffect(() => {
          setOrigin(window?.location?.origin);
     }, []);
     return (
          <>
               <Head>
                    <meta
                         name="image"
                         property="og:image"
                         content={origin + "/blogs/lut-certificate-download-furnish/header3.png"}
                    ></meta>
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="LUT Certificate Download and Furnish" />
                    <meta
                         name="twitter:description"
                         content="Learn the steps to download and furnish a LUT certificate on the GST portal, ensuring GST obligations are fulfilled."
                    />
                    <meta
                         name="twitter:image"
                         content={origin + "/blogs/lut-certificate-download-furnish/header3.png"}
                    />
               </Head>
               <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px]  pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content gap-x-[6.5rem]">
                    <Image
                         src="/blogs/lut-certificate-download-furnish/header3.png"
                         alt="BRC"
                         height={88}
                         width={1184}
                         className="rounded-[40px] mb-[2.25rem] md:mb-[5.375rem]"
                    />
                    <br />
                    <div className="flex flex-col md:flex-row justify-between flex-[7 auto] w-100 gap-x-[5rem]">
                         <div className="blog block md:inline md:min-w-[66.29%]">
                              <div className="blog-info section-tags">
                                   <div className="blog-tag ">Business</div>
                                   <div className="blog-read-time">8 min read</div>
                                   <hr className="blog-info-divider" />
                                   <div className="blog-date">14 August 2024</div>
                              </div>
                              <h3 className="blog-xpress-title">
                              LUT Certificate: How to Download and Furnish on GST Portal
                              </h3>
                              <hr className="blog-divide-xpress common-h3-heading" />
                              <div
                                   className="blog-content large-card-body text-[#1a1a1a]"
                                   style={{ rowGap: "2rem" }}
                              >
                                   <div className="blog-section">
                                        <p className="large-card-body text-[#1a1a1a]">
                                        Are you struggling with cash flow due to upfront IGST payments on exports? Without an LUT certificate, your export business might face financial strain, as your funds get tied up while waiting for tax refunds, leaving less capital for operational expenses and growth investments. 
                                             <br></br>

                                        </p>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        For exporters, especially small and medium-sized enterprises, the delay in receiving IGST refunds can disrupt cash flow management, making it harder to maintain liquidity and potentially hindering growth. This financial burden can be particularly challenging for businesses with tight budgets, as it restricts their ability to reinvest in their operations and meet other financial commitments promptly. 
                                        </p>

                                        <p className="large-card-body text-[#1a1a1a]">
                                        As exporters, you will need to file a Letter of Undertaking (LUT) to export goods and services without paying Integrated Goods and Services Tax (IGST). Understanding the LUT requirements under GST is therefore crucial to ensure compliance and smooth business operations.  
                                        </p>

                                   </div>

                                   <div className="blog-section">
                                        <h4>LUT Certificate Requirements Under GST</h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        The LUT is a declaration made by exporters that they will fulfill all the requirements under GST while exporting without paying IGST. This is mandatory for exporting goods and services without paying IGST, as outlined in Rule 96A of the CGST Rules, 2017.
                                        </p>
                                        <h5>Who should get their LUT Certificates furnished?</h5>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        If you&apos;re a registered exporter wanting to supply goods or services to Special Economic Zones (SEZs) or foreign clients without paying Integrated Goods and Services Tax (IGST), you&apos;ll need to furnish a Letter of Undertaking (LUT). However, you must not have been prosecuted for tax evasion of Rs 2.5 Crore or more under the Central Goods and Services Tax (CGST) Act or IGST Act.  
                                        </p>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        Examples of transactions that can utilize a LUT include zero-rated supplies to SEZs, exporting goods outside India, and providing services to international clients, all without the upfront IGST payment. Therefore, all registered taxpayers who have a zero-rated supply of goods or services have to furnish LUT in Form GST RFD-11 on the GST Portal before affecting such supply. 
                                        </p>
                                   </div>
                                   <div className="blog-section">
                                   <h4>What was the Scenario Before GST? </h4> 
                                   <p className="large-card-body text-[#1a1a1a]">
                                   Before the implementation of the Goods and Services Tax (GST), the tax system in India was highly fragmented and complicated for exporters. They had to navigate multiple indirect taxes such as Central Excise Duty, Service Tax, and State Value Added Tax (VAT), each with different compliance requirements and authorities. This led to a cascading effect where taxes were levied on top of other taxes, significantly increasing the cost of goods.  
                                   </p>
                                   <p className="large-card-body text-[#1a1a1a]">
                                   Additionally, inter-state transactions were cumbersome due to various state-specific taxes and numerous checkpoints, causing delays and higher costs for exporters. The lack of uniformity in tax rates and regulations across states made the process unpredictable and inefficient. 
                                   </p>
                                   <p className="large-card-body text-[#1a1a1a]">
                                   Also Read: <a href="https://payglocal.in/blog/e-invoicing-under-GST" target="_blank" rel="noreferrer">E-Invoicing Under GST: Everything You Need to Know</a>
                                   </p>
                                   </div>
                                  <div className="blog-section">
                                        <h4>Steps to Furnish LUT on the GST Portal </h4>
                                        <p className="large-card-body text-[#1a1a1a]">Follow the steps given below to furnish your LUT online through the GST Portal: </p>
                                        <ol className="large-card-body text-[#1a1a1a]" style={{ listStyleType: "none" }}>
                                            <li><span>Step 1: </span>Access the GST Portal at <a href="https://www.gst.gov.in" target="_blank" rel="noreferrer">www.gst.gov.in</a><Image alt="Step-image" width={846} height={532} src="/blogs/lut-certificate-download-furnish/gst-page.png"/></li>
                                            <li><span>Step 2: </span>Enter your valid credentials and Register yourself.<Image alt="Step-image" width={846} height={532} src="/blogs/lut-certificate-download-furnish/gst-page-register.png"/>Once registered, you can login with your validated credentials.</li>
                                            <li><span>Step 3: </span>Navigate to the LUT Section by going to <span className="bold">Services &gt; User Services &gt; Furnish Letter of Undertaking (LUT)</span>.<Image alt="Step-image" width={846} height={532} src="/blogs/lut-certificate-download-furnish/gst-page-step3.png"/></li>
                                            <li><span>Step 4: </span>Select the financial year for LUT from the dropdown menu.<Image alt="Step-image" width={846} height={532} src="/blogs/lut-certificate-download-furnish/gst-page-step4.png"/></li>
                                            <li><span>Step 5: </span>If you have previously furnished the LUT manually, upload it in PDF or JPEG format. Ensure that the <span className="bold">file size is not larger than 2 MB.</span></li>
                                            <li><span>Step 6: </span>Fill in the LUT Form (GST RFD-11) with all necessary details. Ensure that you check the boxes to provide the self-declaration before proceeding to the next step.<Image alt="Step-image" width={846} height={532} src="/blogs/lut-certificate-download-furnish/gst-page-step6.png"/></li>
                                            <li><span>Step 7: </span>In this step, provide the details of two independent witnesses who you had declared on the running Bond or as Bank guarantee.<Image alt="Step-image" width={846} height={532} src="/blogs/lut-certificate-download-furnish/gst-page-step7.png"/></li>
                                            <li><span>Step 8: </span>Specify your place of filing and click on &apos;SAVE&apos; and &apos;PREVIEW&apos; to crosscheck your details before the final submission.<Image alt="Step-image" width={846} height={532} src="/blogs/lut-certificate-download-furnish/gst-page-step8.png"/></li>
                                            <li><span>Step 9: </span>
                                                Submit the form under DSC or EVC after getting it signed by the primary or any authorized signatory (such as a working partner, Managing Director, Company Secretary, or proprietor) accordingly.
                                                <ol style={{listStyleType: 'disc'}}>
                                                    <li>
                                                        <span>Submit with Digital Signature Certificate (DSC): </span>Sign the application using the registered Digital Signature Certificate. Click &apos;SIGN AND FILE WITH DSC&apos;, then &apos;PROCEED&apos;. The system generates an Application Reference Number (ARN). 
                                                    </li>
                                                    <li>
                                                        <span>Submit with Electronic Verification Code (EVC): </span>Click &apos;SIGN AND FILE WITH EVC&apos;, enter the OTP sent to the registered mobile and email, then click &apos;PROCEED&apos;. The system generates an ARN.
                                                    </li>
                                                </ol>
                                                <Image alt="Step-image" width={846} height={532} src="/blogs/lut-certificate-download-furnish/gst-page-step9.png"/></li>
                                            <li><span>Step 10: </span>Once you are done submitting the form, you can download the acknowledgement.</li>
                                        </ol>
                                   </div>

                                   <div className="blog-section">
                                        <h4>Steps to Download a LUT Certificate </h4>
                                        <p className="large-card-body text-[#1a1a1a]">Once you have submitted the Letter of Undertaking, follow the instructions given below to download your LUT Certificate:</p>
                                        <ol className="large-card-body text-[#1a1a1a]" style={{ listStyleType: "none" }}>
                                            <li><span>Step 1: </span>Visit the <a href="https://www.gst.gov.in" target="_blank" rel="noreferrer">GST Portal&apos;s</a> website and login with your credentials.<Image alt="Step-image" width={846} height={532} src="/blogs/lut-certificate-download-furnish/gst-page-login.png"/></li>
                                            <li><span>Step 2: </span>In the next step, Go to <span className="bold">&apos;Services &gt; User Services &gt; View My Submitted LUTs&apos;</span> from the menu.<Image alt="Step-image" width={846} height={532} src="/blogs/lut-certificate-download-furnish/gst-page-login-step2.png"/></li>
                                            <li><span>Step 3: </span>Download the LUT Certificate for your records.</li>
                                        </ol>
                                   </div>

                                  <div className="blog-section">
                                       <h4>Why Submitting an LUT is Important?</h4>
                                       <p className="large-card-body text-[#1a1a1a]">Submitting a Letter of Undertaking (LUT) is crucial for exporters for several reasons:</p>
                                       <ol className="large-card-body text-[#1a1a1a]" style={{ listStyleType: "numeric" }}>
                                            <li><span>Compliance with GST Requirements: </span>It allows exporters to declare their adherence to GST regulations, ensuring lawful business operations.</li>
                                            <li><span>Avoid IGST Payment:  </span>Enables exporters to supply goods and services without the immediate financial burden of paying Integrated Goods and Services Tax (IGST).</li>
                                            <li><span>Improved Cash Flow: </span>Prevents funds from being tied up in tax payments, allowing businesses to maintain liquidity and reinvest in operations.</li>
                                            <li><span>Simplified Refund Process: </span>Eliminates the need to pay IGST upfront and later claim refunds, saving time and reducing administrative workload.</li>
                                        </ol>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        By understanding and leveraging the benefits of LUT, businesses can optimize their export processes and enhance financial efficiency.
                                        </p>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        <span>Also Read:</span> <a href="https://payglocal.in/blog/mastering-exports-LUT" target="_blank" rel="noreferrer"> Mastering Exports: A Complete Guide to Letters of Undertaking (LUT) for Indian Exporters </a>
                                        </p>
                                  </div>

                                  <div className="blog-section">
                                       <h4>Conclusion</h4>
                                       <p className="large-card-body text-[#1a1a1a]">
                                        Navigating the process of downloading and furnishing a LUT certificate on the GST portal is essential for exporters to avoid the financial strain of upfront IGST payments. By following the outlined steps, you can ensure compliance with GST regulations and maintain a smooth cash flow for your business.
                                        </p>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        To further streamline your international payment processes, consider partnering with PayGlocal. With features like <a href="https://payglocal.in/dynamic-checkout" target="_blank" rel="noreferrer">dynamic checkouts</a> and <a href="https://payglocal.in/multi-currency-accounts" target="_blank" rel="noreferrer">multi-currency accounts</a>, and access to over 130+ currencies and 20+ local payment methods, PayGlocal simplifies global payments and enhances your customer experience. Ready to take your export operations to the next level? <a href="https://payglocal.in/contact" target="_blank" rel="noreferrer">Get in touch with us!</a>
                                        </p>
                                  </div>
                                  <div className="blog-section">
                                       <h4>FAQs</h4>
                                       <ol className="large-card-body text-[#1a1a1a]" style={{ listStyleType: "numeric" }}>
                                            <li>
                                                <span>What is to be filled in a Letter of Undertaking (LUT)?</span>
                                                <ol style={{listStyleType: 'disc'}}>
                                                    <li>
                                                        GSTIN and Name (Legal Name) of the Taxpayer 
                                                    </li>
                                                    <li>
                                                        The financial year for which LUT is being filed                                                    
                                                    </li>
                                                    <li>
                                                        Select all the points of self-declaration                                                     
                                                    </li>
                                                    <li>
                                                        Personal details of two witnesses                                                    
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                <span>Is it mandatory to record the manually approved LUT in online records?</span>
                                                <p>It is not mandatory, but if you want to record the manually approved LUT to be available in online records then you can furnish it with online application.</p>
                                            </li>
                                            <li>
                                                <span>Can  the LUT application be saved during the process of filing? </span>
                                                <p>Taxpayers have the facility to save the application at any stage for 15 days. Saved application can be retrieved from <span className="bold italic">Dashboard &gt; Services &gt; User Services &gt; My Saved Applications.</span></p>
                                            </li>
                                            <li>
                                                <span>Can an LUT be filed after the due date?</span>
                                                <p>You will not be able able to file or avail the benefits associated with it, such as exemption from paying IGST on exports and claiming a refund on zero-rated supplies within India after the due date.</p>
                                            </li>
                                        </ol>
                                  </div>
                                  <div className="blog-section">
                                       <h6><span className="text-[red]">DISCLAIMER:</span>The information provided in this blog post is intended for general informational purposes only and should not be construed as professional or legal advice in any manner. While we strive to ensure the accuracy and reliability of the content, it may not reflect the most current legal developments or interpretations. Users are advised to exercise their own discretion and judgment and consult with a qualified professional before making any decisions or taking any actions based on the information provided.</h6>   
                                  </div>
                              </div>
                         </div>
                         <hr className="author-data-divider mobile-view" />
                         <div className="author-data block md:inline-block w-full md:w-[23.71%] md:min-w-[281px]">
                              <div className="section-tags author-data-title">Written by</div>
                              <div className="authors ">
                              <div className="author">
                                        <Image
                                             src="/blogs/lut-certificate-download-furnish/payglocal-blue.svg"
                                             alt="author"
                                             height={50}
                                             width={80}
                                             className="rounded-[60%]"
                                        />
                                        <div className="author-identity">
                                             <div className="author-name">PayGlocal Team</div>
                                             {/* <div className="author-designation">Founder&apos;s Office</div> */}
                                        </div>
                                   </div>
                              </div>
                              <BlogSuggestions
                                   names={[
                                        "significance-of-brc",
                                        "international-payment-challenges",
                                   ]}
                              />
                         </div>
                    </div>
               </div>
          </>
     );
};

export default LUTCertificate;