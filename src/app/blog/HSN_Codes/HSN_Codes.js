'use client';
// /* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";

const HSN_Codes = () => {
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
                         content={origin + "/blogs/HSN_Codes/header.png"}
                    ></meta>
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Shopify Xpress Flow" />
                    <meta
                         name="twitter:description"
                         content="Explore the importance of HSN (Harmonized System of Nomenclature) codes in global trade. 
                         Understand their role in standardizing product classification, simplifying tax calculation, 
                         and ensuring regulatory compliance. Learn how HSN codes streamline business operations and facilitate 
                         international commerce.
                         "
                    />
                    <meta
                         name="twitter:image"
                         content={origin + "/blogs/HSN_Codes/header.png"}
                    />
               </Head>
               <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px] pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content gap-x-[6.5rem]">
                    <Image
                         src="/blogs/HSN_Codes/header.png"
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
                                   <div className="blog-read-time">5 min read</div>
                                   <hr className="blog-info-divider" />
                                   <div className="blog-date">5 Apr 2024</div>
                              </div>
                              <h3 className="blog-xpress-title">
                              Cracking the Code: HSN Simplified
                              </h3>
                              <hr className="blog-divide-xpress common-h3-heading" />
                              <div
                                   className="blog-content large-card-body text-[#1a1a1a]"
                                   style={{ rowGap: "2rem" }}
                              >
                                   <div className="blog-section">
                                        <p className="large-card-body text-[#1a1a1a]">
                                        HSN stands for Harmonized System of Nomenclature. It&apos;s an internationally standardized system for classifying traded goods. Developed by the World Customs Organization (WCO), the HSN code acts like a universal product identification code. 
                                             <br></br>
                                          
                                        </p>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        HSN code plays a crucial role in simplifying the classification of goods and standardizing international trade procedures. This blog will help you understand what the HSN code is, its significance, and how it impacts businesses and taxation.

                                        </p>

                                   </div>

                                   <div className="blog-section">
                                        <h4>Format of HSN Code Globally</h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        HSN codes typically consist of six digits, with each level representing a more specific category.
                                        </p>
                                   

                                   </div>
                                   <div className="blog-section">
                                   <h4>Format of HSN Code in India</h4> 
                                   <p className="large-card-body text-[#1a1a1a]">HSN code in India is 8 digits the Customs and Central Excise has added 2 digits to make the product more precise.</p>
                                   <ol className="large-card-body text-[#1a1a1a]"
                                             style={{ listStyleType: "disc" }}>
                                             <li>The first 6 digits are the International Base i.e., the same logic as the global system</li>
                                             <li>The last 2 digits are the national expanded nomenclature which serves as further sub-classification of the product</li>
                                          
                                   </ol>
                                   <p className="large-card-body text-[#1a1a1a]">The extra 2 digits in the HSN Code serve as a purpose for enhanced accuracy and improved trade data.</p>
                                   </div>

                                  
                                  <div className="blog-section">
                                        <h4>Understanding the HSN Code </h4>
                                        <p className="large-card-body text-[#1a1a1a]">The HSN structure contains 21 sections, with 99 Chapters, about 1,244 headings, and 5,224 subheadings.</p>
                                        <ol className="large-card-body text-[#1a1a1a]"
                                                  style={{ listStyleType: "disc" }}>
                                                  <li>Each Section is divided into Chapters.</li>
                                                  <li>Each Chapter is divided into Headings.</li>
                                                  <li>Each Heading is divided into Subheadings.</li>
                                        </ol>
                                        <p className="large-card-body text-[#1a1a1a]">Section and Chapter titles denotes the categories of goods, while headings and subheadings describe products in detail.</p>
                                        <p className="large-card-body text-[#1a1a1a]">Example: Let’s break the HSN Code 61013010</p>
                                        <ol className="large-card-body text-[#1a1a1a]">
                                             <li>61 - Chapter &rarr; Articles of Apparel and Clothing Accessories, Knitted Or Crocheted</li>
                                             <li>01 - Heading &rarr; Men’s or boys’ overcoats, carcoats, capes, cloaks, anoraks (including ski-jackets), windcheaters, wind-jackets, and similar articles, knitted or crocheted</li>
                                             <li>30 - Subheadings &rarr; Of man-made fiber</li>
                                             <li>10 - (India Specific Tariff Item) &rarr; Of synthetic fibers</li>
                                        </ol>
                                   </div>

                                  <div className="blog-section">
                                       <h4>Importance of HSN Code</h4>
                                       <ol className="large-card-body text-[#1a1a1a]"
                                                  style={{ listStyleType: "lower-alpha" }}>
                                                  <li><span>Standardization -</span> HSN codes ensure consistent classification of goods across borders.</li>
                                                  <li><span>Calculation of taxes and duties -</span> Different goods are classified into different slabs of tax and duties and a standardized HSN code format helps identify and apply the applicable duty/ tax for each product</li>
                                                  <li><span>Trade Statistics -</span> HSN codes enable governments to track trade flows and generate statistics on imports and exports of specific goods.</li>
                                        </ol>
                                   
                                  </div>

                                  <div className="blog-section">
                                       <h4>HSN Code in your business</h4>
                                       <ol className="large-card-body text-[#1a1a1a]"
                                                  style={{ listStyleType: "lower-alpha" }}>
                                                  <li><span>Compliance :</span> Compliance with HSN code requirements helps businesses avoid delays in customs clearance and potential penalties for misclassification.</li>
                                                  <li><span>Taxation :</span> HSN codes are used to determine the GST rates applicable to goods. Therefore, businesses must accurately determine the HSN codes for their products to calculate and remit the correct amount of taxes.</li>
                                                  <li><span>Documentation :</span> HSN codes are included in various trade documents, such as invoices, shipping manifests, and customs declarations.</li>
                                        </ol>
                                    
                                  </div>

                                  <div className="blog-section">
                                       <h4>HSN in GST</h4>
                                       <p className="large-card-body text-[#1a1a1a]">The level of detail required when using HSN codes in India depends on your business&apos;s annual turnover as per notification no. 78/2020- Central Tax dated 15th October 2020 the limits are stated below:</p>
                                       <table className="large-card-body text-[#1a1a1a] w-[70%] border-[3px] text-center">
                                       <thead>
                                        <tr>
                                                  <th className="border-[2px]">Turnover</th>
                                                  <th>No. of digits of HSN to be declared</th>
                                        </tr>
                                       </thead>
                                       <tbody>
                                             <tr className="border-[2px]">
                                                  <td className="border-[2px]">
                                                  &lt; Rs. 5 Crores
                                                  </td>
                                                  <td>
                                                  4 digits
                                                  </td>
                                             </tr>

                                             <tr>
                                                  <td className="border-[2px]">
                                                  &gt; Rs. 5 Crores
                                                  </td>
                                                  <td>
                                                  6 digits
                                                  </td>
                                             </tr>
                                       </tbody>
                                       </table>

                                       <p><span>Note: </span>All 8 digits of the HSN code are mandatory for exports and imports under GST.</p>
                                    
                                  </div>

                                  <div className="blog-section">
                                       <h4>Conclusion</h4>
                                       <p className="large-card-body text-[#1a1a1a]">HSN codes promote worldwide commerce consistency, efficiency, and transparency by providing a standardized framework for identifying commodities. Businesses that understand and adhere to HSN code rules can better manage the difficulties of international commerce, guaranteeing regulatory compliance and optimizing operations.</p>
                                    
                                  </div>


                                 

                              </div>
                         </div>
                         <hr className="author-data-divider mobile-view" />
                         <div className="author-data block md:inline-block w-full md:w-[23.71%] md:min-w-[281px]">
                              <div className="section-tags author-data-title">Written by</div>
                              <div className="authors ">
                              <div className="author">
                                        <Image
                                             src="/blogs/empowering-exporters-rodtep/author.png"
                                             alt="author"
                                             height={80}
                                             width={80}
                                             className="rounded-[60%]"
                                        />
                                        <div className="author-identity">
                                             <div className="author-name">Rishabh K</div>
                                             <div className="author-designation">Product manager</div>
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

export default HSN_Codes;
