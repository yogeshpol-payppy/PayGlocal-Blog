'use client';
// /* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";

const SWIFT = () => {
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
                         content={
                              origin + "/blogs/significance-of-brc/header2.png"
                         }
                    ></meta>
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                         name="twitter:title"
                         content="Significance of Bank Realization Certificate (BRC) for Indian Exporters"
                    />
                    <meta
                         name="twitter:description"
                         content="Explore the significance of the Bank Realization Certificate (BRC) in Indian exports.
          Learn about the electronic version, the process, required documents, and lucrative incentives for
          exporters. Stay informed for strategic trade success."
                    />
                    <meta
                         name="twitter:image"
                         content={
                              origin + "/blogs/significance-of-brc/header2.png"
                         }
                    />
               </Head>
               <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px]  pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content gap-x-[6.5rem]">
                    <Image
                         src="/blogs/significance-of-brc/header2.png"
                         alt="BRC"
                         height={88}
                         width={1184}
                         className="rounded-[40px] mb-[2.25rem] md:mb-[5.375rem]"
                    />
                    <br />
                    <div className="flex flex-col md:flex-row justify-between flex-[7 auto] w-100 gap-x-[5rem]">
                         <div className="blog block md:inline md:min-w-[66.29%]">
                              <div className="blog-info section-tags">
                                   <div className="blog-tag ">Multi Currency Accounts</div>
                                   <div className="blog-read-time">5 min read</div>
                                   <hr className="blog-info-divider" />
                                   <div className="blog-date">29 November 2023</div>
                              </div>
                              <h3 className="blog-title  common-h4-heading">
                                   Unravelling the Significance of Bank Realization Certificate (BRC) for Indian Exporters
                              </h3>
                              <hr className="blog-divider" />
                              <div className="blog-content large-card-body text-[#1a1a1a]">
                                   <div className="blog-section">
                                        <p className="large-card-body text-[#1a1a1a]">
                                             In the realm of global commerce, Indian exporters often find themselves immersed in a sea of documentation
                                             and regulatory requirements. Among these, the Bank Realization Certificate (BRC) stands out as a key
                                             document that holds immense importance in facilitating and validating international trade transactions. This
                                             article aims to provide a comprehensive understanding of BRC in the Indian context, exploring its electronic
                                             version (e-BRC), the process of obtaining it, the required documents, and the lucrative incentives that Indian
                                             exporters can avail through this indispensable certificate
                                        </p>
                                   </div>
                                   <div className="blog-section">
                                        <h4>What is a Bank Realization Certificate (BRC)?</h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                             The Bank Realization Certificate (BRC) is a critical document issued by banks in India, confirming the receipt of payment in foreign currency for exported goods or services. It serves as a crucial compliance tool, validating
                                             the repatriation of foreign exchange and ensuring adherence to India&apos;s foreign trade policies. BRC is seen as
                                             proof of payment received by an Indian exporter as well as goods shipped by him/her. This document is further
                                             used to avail various export benefits provided by trade organizations in India.
                                             In line with the digital transformation sweeping across industries and governance, the traditional paper-based
                                             BRC has evolved into its electronic counterpart, known as e-BRC. This digital adaptation brings forth advantages
                                             such as increased efficiency, reduced paperwork, and faster processing times. e-BRC has now become the
                                             preferred mode of documentation used by exporters.
                                        </p>

                                        <h4>How to obtain e-BRC?</h4>
                                        <p className="large-card-body text-[#1a1a1a]">The process of obtaining an e-BRC in India involves a combined effort between the exporter, the authorized dealer(AD) bank, and the Reserve Bank of India (RBI). The following are the key steps to obtain an e-BRC:</p>
                                        <ol
                                             className="large-card-body text-[#1a1a1a]"
                                             style={{ listStyleType: "disc" }}
                                        >
                                             <li>
                                                  <span>Submission of Export Documents:</span> Exporters initiate the process by submitting essential export
                                                  documents, including the shipping bill, invoice, packing list, and other relevant documents, to their
                                                  authorized dealer bank.
                                             </li>
                                             <li>
                                                 <span>Verification by Authorized Dealer Bank:</span> The authorized dealer bank verifies the submitted documents
                                                  to ensure compliance with foreign exchange regulations.
                                             </li>
                                             <li>
                                                  <span>Electronic Submission:</span> Once verified, the bank electronically submits the necessary details to the
                                                  Export Data Processing and Monitoring System (EDPMS) of the RBI where the documents submitted
                                                  are knocked off against the active shipping bills of the merchant.
                                             </li>
                                             <li>
                                                  <span>RBI Processing:</span> The RBI processes the information and issues the e-BRC to both the exporter and the
                                                  authorized dealer bank. The merchant can access this document against their relevant credentials on
                                                  the <Link
                                                  className="alt-pay-hero-cta"
                                                  style={{ color: "#4071df" }}
                                                  href="https://www.dgft.gov.in/CP/"
                                             >
                                                 Directorate General of Foreign Trade (DGFT)
                                             </Link>{" "}  website.

                                             </li>
                                        </ol>
                                   </div>
                                   <div className="blog-section">
                                        <h4>Documents required for e-BRC</h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                             Exporters in India must furnish several documents to facilitate the issuance of e-BRC, including the shipping bill,
                                             invoice, packing list, bill of lading or airway bill, and the <Link
                                                  className="alt-pay-hero-cta"
                                                  style={{ color: "#4071df" }}
                                                  href="https://payglocal.in/blog/firc"
                                             >
                                                  Foreign Inward Remittance Certificate (FIRC)
                                             </Link>{" "}   from the bank confirming the receipt of payment in foreign
                                             currency.

                                        </p>
                                   </div>
                                   <div className="blog-section">
                                        <h4>Incentives through BRC in India: </h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                            <bold>One of the primary advantages of holding a Bank Realization Certificate in India is the eligibility to avail various
                                             export incentives. These incentives are designed to promote and support Indian exports. Some key incentives
                                             include:</bold> 
                                        </p>
                                        <ol className="large-card-body text-[#1a1a1a]"
                                             style={{ listStyleType: "disc" }}>
                                             <li>
                                                  <span> Duty Drawback:</span> BRC is a prerequisite for claiming duty drawback, a refund of customs duties paid on imported inputs used in the production of exported goods.
                                             </li>
                                             <li>
                                                  <span> Export Promotion Capital Goods (EPCG) Scheme:</span> Under the EPCG scheme, exporters can import capital goods at concessional rates or duty-free, provided they fulfill certain export obligations. BRC serves as evidence of export realization for this scheme.
                                             </li>
                                             <li>
                                                  <span>Merchandise Exports from India Scheme (MEIS):</span> MEIS provides duty credit scrips to exporters, which can be utilized to offset various duties. BRC is essential for claiming benefits under MEIS.
                                             </li>
                                             <li>
                                                  <span> Advance Authorization Scheme:</span> Exporters can procure inputs without payment of duty for manufacturing export products under the Advance Authorization Scheme. BRC is required to validate export realization for this scheme.
                                             </li>
                                        </ol>

                                   </div>
                                   <div className="blog-section">
                                        <h4>Looking ahead – a revamped e-BRC process</h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                             To further improve trade facilitation for exporters, DGFT is planning to implement an enhanced e-BRC system.
                                             In this process, the banks can directly transmit Inward remittance Messages (IRMs) to DGFT post which
                                             exporters can self-certify their e-BRCs by using relevant documents. This is expected to reduce transaction time
                                             and costs while also reducing the load on banks. This renewed system is expected to be piloted from 15th
                                             November 2023, and should over time become the default process for all e-BRCs
                                        </p>
                                   </div>
                                   <div className="blog-section">
                                        <h4>Conclusion</h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                             In the Indian context, the Bank Realization Certificate (BRC) is not merely a compliance document but a
                                             gateway to a myriad of incentives designed to propel and reward the efforts of exporters. The transition to eBRC streamlines the process, making it more accessible and efficient. For Indian exporters, understanding and
                                             harnessing the benefits of BRC is not just a matter of compliance but a strategic move to unlock the full
                                             potential of their international trade endeavours. In a global marketplace where competitiveness is paramount,
                                             the BRC stands as a testament to the robustness of India&apos;s export ecosystem.

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
                                             src="/blogs/firc/author.jpeg"
                                             alt="author"
                                             height={80}
                                             width={80}
                                             className="rounded-[60%]"
                                        />
                                        <div className="author-identity">
                                             <div className="author-name">Parvathi Nair</div>
                                             <div className="author-designation">
                                                  Founder&apos;s Office
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <BlogSuggestions
                                   names={[
                                        "international-payment-challenges",
                                        "multi-currency-account-india",
                                   ]}
                              />
                         </div>
                    </div>
               </div>
          </>
     );
};

export default SWIFT;
