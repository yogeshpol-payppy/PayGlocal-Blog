'use client';
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";


const MasteringExportsLUT = () => {
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
                         content={origin + "/blogs/mastering-exports-LUT/header.png"}
                    ></meta>
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Shopify Xpress Flow" />
                    <meta
                         name="twitter:description"
                         content="Navigating the complexities of international trade can be challenging, but understanding and utilizing a Letter of Undertaking (LUT) under the GST regime can significantly ease the process for Indian exporters. This comprehensive guide explores the benefits and everything you need to know about LUT."
                    />
                    <meta
                         name="twitter:image"
                         content={origin + "/blogs/mastering-exports-LUT/header.png"}
                    />
               </Head>
               <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px] pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content gap-x-[6.5rem]">
                    <Image
                         src="/blogs/mastering-exports-LUT/header.png"
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
                                   <div className="blog-read-time">4 min read</div>
                                   <hr className="blog-info-divider" />
                                   <div className="blog-date">23 May 2024</div>
                              </div>
                              <h3 className="blog-xpress-title">
                              Mastering Exports: A Complete Guide to Letters of Undertaking (LUT) for Indian Exporters
                              </h3>
                              <hr className="blog-divide-xpress common-h3-heading" />
                              <div
                                   className="blog-content large-card-body text-[#1a1a1a]"
                                   style={{ rowGap: "2rem" }}
                              >
                                   <div className="blog-section">
                                        <p className="large-card-body text-[#1a1a1a]">
                                        Are you an exporter looking to streamline your operations and manage your working capital more
                                        effectively? If so, understanding and utilizing a Letter of Undertaking (LUT) can significantly benefit your
                                        business. Why deal with the hassle and financial burden of IGST when there&apos;s a smarter way to handle
                                        your taxes? Let&apos;s dive into what a Letter of Undertaking is, how it can save you time and money, and
                                        why it&apos;s a game-changer for exporters under the GST regime. Whether you&apos;re new to the export scene
                                        or looking to optimize current processes, this guide is tailored to help you navigate the complexities of
                                        LUT with ease.
                                             <br></br>

                                        </p>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        In export trade, one of the key documents that is required before selling internationally is Letter of
                                        Undertaking (LUT). All registered exporters who are currently exporting or intend to start their export
                                        journey are required to submit Letter of Undertaking on the GST portal. This enables them to export
                                        their products without the payment of IGST (Integrated Goods and Services Tax)
                                        </p>

                                   </div>

                                   <div className="blog-section">
                                        <h4>What is a Letter of Undertaking (LUT)?</h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        Under the GST regime, all exports are subject to IGST, which can later be reclaimed via a refund
                                        against the tax paid. An LUT (Letter of Undertaking) spares exporters the effort of pursuing a refund
                                        and eliminates the blocking of funds by way of tax payments.
                                        </p>
                                        


                                   </div>
                                   <div className="blog-section">
                                   <h4>Eligibility criteria for a Letter of Undertaking (LUT)</h4> 
                                   <p className="large-card-body text-[#1a1a1a]">Under CGST Rules, 2017, any registered person can furnish LUT in form GST RFD 11 and export
                                    goods or services without payment of integrated tax. Applicant must meet the following criteria to be
                                    eligible for availing the benefits of a Letter of Undertaking (LUT) -</p>
                                   <ol className="large-card-body text-[#1a1a1a]" style={{ listStyleType: "disc" }}>
                                        <li>The exporter should be a registered taxpayer under the Goods and Services Tax (GST) regime.</li>
                                        <li>You must be engaged in the export of goods or services. The LUT — facility is primarily available for exporters to facilitate the export of goods or services without paying IGST.</li>
                                        <li>The exporter should have no pending tax liabilities or arrears. It is important to ensure compliance with all tax obligations before applying for an LUT under GST.</li>
                                        <li>Business owners must have a satisfactory compliance track record, which includes timely filing of GST returns and adherence to other tax-related requirements.</li>
                                   </ol>
                                   </div>


                                  <div className="blog-section">
                                        <h4>Documents required to file Letter of Undertaking (LUT) under GST</h4>
                                        <p className="large-card-body text-[#1a1a1a]">Some of the key documents required are - </p>
                                        <ol className="large-card-body text-[#1a1a1a]" style={{ listStyleType: "disc" }}>
                                                  <li>PAN card of export business</li>
                                                  <li>IEC certificate</li>
                                                  <li>GST registration certificate</li>
                                                  <li>Two witnesses with their address proof and PAN</li>
                                                  <li>Cancelled cheque of the exporter&apos;s current account</li>
                                                  <li>GST RFD 11 form</li>
                                                  <li>KYC of the authorized person</li>
                                                  <li>Authorized letter</li>
                                        </ol>

                                   </div>

                                  <div className="blog-section">
                                       <h4>How to apply for Letter of Undertaking (LUT)?</h4>
                                       <p className="large-card-body text-[#1a1a1a]">Here are step-by-step instructions on how to apply for an LUT - </p>
                                       <ol className="large-card-body text-[#1a1a1a]" style={{ listStyleType: "none" }}>
                                            <li><span>Step 1 - </span>Log in to the GST Portal</li>
                                            <li><span>Step 2 - </span>Navigate to the &apos;Services&apos; tab and click &apos;User Services&apos;. From there, you can select &apos;Furnish Letter of Undertaking(LUT)&apos;</li>
                                            <li><span>Step 3 - </span>Choose the financial year for which you are applying for the LUT from the &apos;LUT Applied for Financial Year&apos; drop-down menu</li>
                                            <li><span>Step 4 - </span>Fill in all required fields on the Letter of Undertaking Form/GST RFD-11 displayed on your screen. Fulfil the self-declaration by ticking the box next to each option</li>
                                            <li><span>Step 5 - </span>Enter the place of filing and click on the &apos;Save&apos; button. Later, click on &apos;Preview&apos; to ensure the form is correct before submitting it</li>
                                            <li><span>Step 6 - </span>To complete the process, you can sign and file the form using either a Digital Signature Certificate (DSE) or an Electronic Verification Code (EVC)</li>
                                        </ol>
                                        <p className="large-card-body text-[#1a1a1a]">After submission, a confirmation message will display. The GST Portal will send an ARN (Application
                                        Reference Number) to the registered email and mobile of the taxpayer through email and SMS. You
                                        can click on the DOWNLOAD button to download the acknowledgement.
                                        </p>
                                        <p className="large-card-body text-[#1a1a1a]">This process is subject to change, and it is important for merchants to follow the latest instructions
                                        provided on the GST Portal.
                                        </p>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        Always refer to the <a href="https://www.gst.gov.in/" target="_blank" rel="noreferrer">official GST Portal</a> for the most current procedures and updates.
                                        </p>
                                  </div>

                                  <div className="blog-section">
                                       <h4>Key things to remember</h4>
                                       <ol className="large-card-body text-[#1a1a1a]"
                                            style={{ listStyleType: "disc" }}>
                                            <li>Letter of Undertaking (LUT) remains valid for current financial year from the date of its
                                            submission. Example- If LUT was furnished in FY23-24, then the date of expiry of the validity
                                            of such LUT is 31st March 2024. Therefore, you need to file fresh LUT for FY24-25.</li>
                                            <li>If you fail to renew your Letter of Undertaking (LUT) before the expiry date, you will no longer
                                            be able to export the services without paying IGST.
                                            </li>
                                        </ol>
                                        <p className="large-card-body text-[#1a1a1a]">Letter of Undertaking (LUT) is an important document required in international trade, and all eligible
                                        exporters can optimize working capital and improve their cash-flows by exporting under Letter of
                                        Undertaking (LUT).
                                        </p>
                                        <p className="large-card-body text-[#1a1a1a]">Navigating the requirements and benefits of a Letter of Undertaking can open up a world of opportunities
                                        for your export business. By understanding and effectively utilizing LUT, you can enhance your
                                        operational efficiency and focus on growing your global footprint without the burden of unnecessary tax
                                        payments. Remember, staying ahead in the fast-paced world of international trade requires not just
                                        compliance but also strategic financial management.
                                        </p>
                                        <p className="large-card-body text-[#1a1a1a]">Have you applied for your LUT yet? Embrace this provision today to simplify your export activities and
                                        propel your business to new heights. At PayGlocal, we support businesses with seamless solutions that
                                        simplify cross-border transactions, ensuring that your business doesn&apos;t just comply with global
                                        standards but thrives on them.
                                        </p>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        Want to know more? <a href="https://payglocal.in/solutions/exporters" target="_blank" rel="noreferrer">Get in touch</a> with us today.
                                        </p>

                                  </div>
                              </div>
                         </div>
                         <hr className="author-data-divider mobile-view" />
                         <div className="author-data block md:inline-block w-full md:w-[23.71%] md:min-w-[281px]">
                              <div className="section-tags author-data-title">Written by</div>
                              <div className="authors ">
                              <div className="author">
                                        <Image
                                             src="/blogs/mastering-exports-LUT/author(1).png"
                                             alt="author"
                                             height={50}
                                             width={80}
                                             className="rounded-[60%]"
                                        />
                                        <div className="author-identity">
                                             <div className="author-name">Akshay Hingmire</div>
                                             <div className="author-designation">Head of Finance</div>
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

export default MasteringExportsLUT;