'use client';
// /* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";

const IEC = () => {
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
                              origin + "/blogs/import-export-codes/header.png"
                         }
                    ></meta>
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                         name="twitter:title"
                         content=" Understanding Import-Export Codes (IEC) for Indian Importers and Exporters"
                    />
                    <meta
                         name="twitter:description"
                         content="Unlock international markets seamlessly with the Importer Exporter Code (IEC)! Explore its pivotal role in streamlining trade, securing licenses, and accessing benefits for Indian businesses."
                    />
                    <meta
                         name="twitter:image"
                         content={
                              origin + "/blogs/import-export-codes/header.png"
                         }
                    />
               </Head>
               <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px] pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content gap-x-[6.5rem]">
                    <Image
                         src="/blogs/import-export-codes/header.png"
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
                                   <div className="blog-date">7 December 2023</div>
                              </div>
                              <h3 className="blog-title  common-h4-heading">
                              Understanding Import-Export Codes (IEC) for Indian Importers and Exporters
                              </h3>
                              <hr className="blog-divider" />
                              <div className="blog-content large-card-body text-[#1a1a1a]">
                                   <div className="blog-section">
                                        <h4>Introduction</h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        In the dynamic world of international commerce, the Import-Export Code (IEC) emerges as a crucial facilitator for Indian businesses venturing into cross-border trade. Mandated by the Directorate General of Foreign Trade (DGFT), the IEC is a unique 10-digit identifier that holds paramount importance for companies involved in both import and export activities. From tracking cross-border transactions to enabling access to export promotion schemes, the IEC is the cornerstone for those venturing into the realm of global commerce. This blog aims to illuminate the significance of IEC for Indian merchants, providing a concise overview of its role in streamlining global trade operations.
                                        </p>
                                   </div>
                                   <div className="blog-section">
                                        <h4>What is IEC?</h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        The Importer Exporter Code (IEC) serves as the linchpin for Indian businesses seeking to engage in international trade. Issued by the DGFT, this 10-digit code is a non-negotiable prerequisite for companies participating in import and export activities. It plays a pivotal role in tracking cross-border transactions and is essential for obtaining licenses such as Goods and Services Tax (GST) registration. The IEC is crucial for customs procedures, enabling exporters and importers to send and receive goods internationally. Additionally, it is essential for processing international payments related to their services. Furthermore, having an IEC grants access to benefits under DGFT&apos;s schemes.
                                         </p>
                                   </div>
                                   <div className="blog-section">
                                        <h4>Applying for IEC </h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        To obtain an IEC code for their business, merchants can apply conveniently through the DGFT website. Alongside essential information, applicants need to submit the following documents <Link
                                                  className="alt-pay-hero-cta"
                                                  style={{ color: "#4071df" }}
                                                  href="https://cleartax.in/s/import-export-code"
                                             >
                                                 (Source: ClearTax):
                                             </Link>{" "}
                                        </p>
                                        <ol className="large-card-body text-[#1a1a1a]"
                                             style={{ listStyleType: "disc" }}>
                                             <li>
                                             Copy of PAN Card for individuals, firms, or companies.
                                             </li>
                                             <li>
                                             Voter ID, Aadhaar card, or passport copy for proprietors.
                                             </li>
                                             <li>
                                             Proof of establishment, incorporation, or registration for partnerships, societies, proprietorship firms, companies, HUF, etc.
                                             </li>
                                             <li>
                                             Proof of business premise address (sale deed, lease deed, rent agreement, or utility bills like electricity, telephone, or mobile bills).
                                             </li>
                                             <li>
                                             Cancelled cheque copies of current bank accounts for individuals, companies, or firms.
                                             </li>
                                             <li>
                                             A self-addressed envelope for the IEC certificate&apos;s delivery via registered post.
                                             </li>
                                        </ol>
                                      <p>
                                      After successful completion of the application completion and payment, the IEC Certificate will be issued, almost immediately
                                      </p>

                                   </div>
                                   <div className="blog-section">
                                        <h4>Updating IEC</h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        As per <Link  className="alt-pay-hero-cta"
                                                  style={{ color: "#4071df" }}
                                                  href="https://content.dgft.gov.in/Website/dgftprod/d0dbf9c6-d0ae-4f49-a9ae-e59c240ea9fe/Trade%20Notice%2018%20-%20IEC%20de-activation%20prior%202005.pdf">Trade Notice 18 / 2021-2022</Link> issued by DGFT on 20th September 2021, all IEC holders are to ensure that details in their IEC is updated electronically every year during the April-June period. Even if the information provided has not changed, the IEC holder must confirm electronically between April and June of each year to avoid deactivation.
                                        </p>
                                   </div>

                                   <div className="blog-section">
                                        <h4>Benefits of IEC</h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        In global trade, an Importer Exporter Code (IEC) is essential for businesses venturing into international markets. Whether dealing in goods or services, having an IEC offers advantages such as subsidies and benefits from Customs, DGFT, and Export Promotion Council. It&apos;s a key requirement that ensures smooth cross-border trade operations and positions businesses for global success.
                                        </p>
                                   </div>
                                <div className="blog-section">
                                        <h4>Conclusion</h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        The Importer Exporter Code (IEC) stands as a pivotal force propelling Indian businesses into the global trade arena. The IEC not only unlocks international markets but also grants access to lucrative benefits under various schemes, catalyzing growth and expansion opportunities. In the dynamic landscape of international commerce, the IEC is not merely a prerequisite; it is a transformative tool revolutionizing trade for Indian importers and exporters, empowering them to thrive on the global stage.
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
                                             src="/blogs/swift-transfer/author.jpeg"
                                             alt="author"
                                             height={80}
                                             width={80}
                                             className="rounded-[60%]"
                                        />
                                        <div className="author-identity">
                                             <div className="author-name">Akhil Sukumaran</div>
                                             <div className="author-designation">Product Manager</div>
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

export default IEC;
