'use client';
// /* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";

const RoSCTL = () => {
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
                         content={origin + "/blogs/RoSCTL/header.png"}
                    ></meta>
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Shopify Xpress Flow" />
                    <meta
                         name="twitter:description"
                         content="Unlocking competitiveness for India's apparel export industry, RoSCTL offers refunds on state and
                         central taxes. Learn how this initiative fosters growth and dynamism in the textile sector, promoting
                         global competitiveness and market expansion. Discover the benefits, restrictions, and advantages of the
                         RoSCTL scheme in shaping India's position in the global textile and apparel market.
                         "
                    />
                    <meta
                         name="twitter:image"
                         content={origin + "/blogs/RoSCTL/header.png"}
                    />
               </Head>
               <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px]  pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content gap-x-[6.5rem]">
                    <Image
                         src="/blogs/RoSCTL/header.png"
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
                                   <div className="blog-date">9 Feb 2024</div>
                              </div>
                              <h3 className="blog-xpress-title">
                              Empowering Textile Exports – The RoSCTL Scheme
                              </h3>
                              <hr className="blog-divide-xpress common-h3-heading" />
                              <div
                                   className="blog-content large-card-body text-[#1a1a1a]"
                                   style={{ rowGap: "2rem" }}
                              >
                                   <div className="blog-section">
                                        <p className="large-card-body text-[#1a1a1a]">
                                             RoSCTL, which stands for Rebate of State and Central Taxes and Levies, was launched in March 2019,
                                             with an effort to promote India&apos;s apparel export industry. The initiative seeks to bolster the
                                             competitiveness of Indian apparel and garment exporters by offering them refunds for various taxes and
                                             levies incurred during the production cycle.
                                             <br></br>
                                          
                                        </p>
                                        <p className="large-card-body text-[#1a1a1a]">
                                             The RoSCTL scheme provides exporters with a rebate on State Taxes and Levies, which includes VAT on
                                             fuel used in transportation, captive power, agricultural sector taxes, market taxes, electricity duties,
                                             stamp duties on export paperwork, embedded State Goods and Services Tax (SGST) paid on inputs like
                                             pesticides, fertilizers, etc., used in raw cotton production, purchases from unregistered suppliers, coal
                                             used for electricity generation, and inputs for the transportation sector. The rebate for Central Taxes
                                             and Levies includes central excise duty on transportation fuel, embedded Central Goods and Services
                                             Tax (CGST) paid on inputs such as pesticides, fertilizers etc. used in raw cotton production, purchases
                                             from unregistered suppliers, inputs for transportation, and embedded CGST and Compensation Cess on
                                             coal used in electricity generation.
                                        </p>

                                        <p className="large-card-body text-[#1a1a1a]">
                                             The scheme was initially launched on March 7, 2019, with approval from the Union Cabinet until March
                                             31, 2020. Subsequently, the scheme was further approved until March 31, 2024, with an extension
                                             being announced till March 31, 2026. This ensures a stable policy framework crucial for long-term trade
                                             planning, especially in the textiles sector where advance orders are common for extended delivery
                                             periods
                                        </p>

                                   </div>

                                   <div className="blog-section">
                                        <h4>Benefits of the RoSCTL Scheme</h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                             RoSCTL serves as an export incentive by providing exporters with transferable credit scrips that can be
                                             utilized for custom duty payments. These scrips can be transferred to any individual possessing a valid
                                             Import Export Code (IEC) and ICEGATE registration.Exporters opting for RoSCTL scrips must maintain
                                             shipping bills and associated export documents for a duration of three years from the scrip&apos;s issuance
                                             date.
                                        </p>
                                   

                                   </div>
                                   <div className="blog-section">
                                   <h4>Restrictions on rebate under the RoSCTL Scheme:</h4> 
                                   <p className="large-card-body text-[#1a1a1a]">Below is the list of goods not eligible for the RoSCTL Scheme:</p>
                                   <ol className="large-card-body text-[#1a1a1a]"
                                             style={{ listStyleType: "lower-alpha" }}>
                                             <li>Trans-Shipped goods</li>
                                             <li>Goods subjected to minimum support price or export duty</li>
                                             <li>Goods manufactured or exported from Special Economic Zones or Export Processing Zones</li>
                                             <li>Goods that have been taken into use after the manufacturing or reconditioning of used goods</li>
                                             <li>Goods for which duty credit claim has not been filed in a shipping bill or a bill of export in the customs automated system</li>
                                          
                                        </ol>
                                   </div>

                                  
                                  <div className="blog-section">
                                  <h4>Advantages of RoSCTL </h4>
                                     
                                       <ol className="large-card-body text-[#1a1a1a]"
                                             style={{ listStyleType: "disc" }}>
                                       <li><span>Enhanced Global Competitiveness -</span> A detailed invoice outlining the software or services being exported, along with their respective values, is a fundamental requirement for the Softex process.</li>
                                        <li><span>Increased Export Revenue -</span>The RoSCTL plan encourages exporters to boost their export volumes by providing refunds on taxes and levies. Thus, enabling exporters with a higher working capital and a leverage to explore new markets.</li>
                                       <li><span>Comprehensive Coverage -</span>The RoSCTL scheme provides comprehensive coverage for a wide range of clothing and garment items, including cotton, silk, knitwear, and woven fabrics.</li>
                                       </ol>
                                    </div>

                                  <div className="blog-section">
                                       <h4>Conclusion</h4>
                                       <p className="large-card-body text-[#1a1a1a]">
                                             In conclusion, the RoSCTL scheme emerges as a crucial policy measure aimed at bolstering the competitiveness of Indian exports, particularly in the apparel segment, which are recognized for their
                                             value addition and labor-intensive nature within the Textile Value Chain. By providing refunds for
                                             various taxes and levies incurred during production, this initiative not only supports exporters but also
                                             contributes to the overall growth and dynamism of India&apos;s textile industry. With its focus on enhancing
                                             global competitiveness and facilitating market expansion, the RoSCTL scheme signifies a significant step
                                             forward in fortifying India&apos;s position in the global textile and apparel market.
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

export default RoSCTL;
