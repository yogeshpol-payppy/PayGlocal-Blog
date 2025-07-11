// /* eslint-disable @next/next/no-img-element */
'use client';
import Image from "next/image";
import Link from "next/link";

import Head from "next/head";
import { useEffect, useState } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";


const AltId = () => {
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
                         content={origin + "/blogs/alt-id/header.png"}
                    ></meta>
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Shopify Xpress Flow" />
                    <meta
                         name="twitter:description"
                         content="Explore Alt IDs, the innovative solution for enhanced online transaction security. By leveraging Alt IDs, merchants can ensure that transactions are conducted securely and adhere to regulatory requirements, ensuring a safer online shopping experience for all"
                    />
                    <meta
                         name="twitter:image"
                         content={origin + "/blogs/alt-id/header.png"}
                    />
               </Head>
               <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px]   pt-[8rem]  pb-[3.75rem] px-[5%] mx-[auto] box-content gap-x-[6.5rem]">
                    <Image
                         src="/blogs/alt-id/header.png"
                         alt="BRC"
                         height={88}
                         width={1184}
                         className="rounded-[40px] mb-[2.25rem] md:mb-[5.375rem]"
                    />
                    <br />
                    <div className="flex flex-col md:flex-row justify-between flex-[7 auto] w-100 gap-x-[5rem] ">
                         <div className="blog block md:inline md:min-w-[66.29%]">
                              <div className="blog-info section-tags">
                                   <div className="blog-tag ">Payments</div>
                                   <div className="blog-read-time">5 min read</div>
                                   <hr className="blog-info-divider" />
                                   <div className="blog-date">13 March 2024</div>
                              </div>
                              <h3 className="blog-xpress-title common-h3-heading">
                                   Alt ID Solution for Guest Checkout Transactions
                              </h3>
                              <hr className="blog-divide-xpress common-h3-heading" />
                              <div
                                   className="blog-content large-card-body text-[#1a1a1a]"
                                   style={{ rowGap: "2rem" }}
                              >
                                   <div className="blog-section">
                                        <p className="large-card-body text-[#1a1a1a]">
                                             In the world of global e-commerce, we often store our card details with various merchants for future transactions, making life more convenient. However, this practice comes with risks, as having our card information stored in multiple places increases the chances of it being stolen or misused.
                                        </p>
                                        <p className="large-card-body text-[#1a1a1a]">
                                             To address this concern in the Indian sub-continent,  <Link
                                                  className="alt-pay-hero-cta"
                                                  style={{ color: "#4071df" }}
                                                  href="https://rbi.org.in/Scripts/NotificationUser.aspx?Id=11449&Mode=0"
                                                  target="_blank"
                                             >
                                                  the Reserve Bank of India (RBI) mandated a solution called tokenization{" "}
                                             </Link> for all Indian merchants, processors and acquirers. This process replaces actual card details with a unique code known as a &quot;token&quot;. This token is specific to a combination of a payment card, the requesting entity (like a merchant), and the tokenization service provider
                                        </p>
                                   </div>

                                   <div className="blog-section">
                                        <p className="large-card-body text-[#1a1a1a]">
                                             In September 2021, the RBI issued a <Link
                                                  className="alt-pay-hero-cta"
                                                  style={{ color: "#4071df" }}
                                                  href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12159&Mode=0"
                                                  target="_blank"
                                             >
                                                  circular{" "}
                                             </Link> instructing that only card issuers and card networks should store actual card data. Any other entities involved in the payment chain must purge this data. They can, however, retain limited information, such as the last four digits of the card number and the card issuer&apos;s name, for transaction tracking and reconciliation purposes.
                                        </p>
                                     

                                        <p className="large-card-body text-[#1a1a1a]">
                                        Despite these regulations, one issue remained for Guest Checkout transactions. These transactions occur when cardholders manually input their card details during a purchase. For these transactions, follow-on transactions such as refunds and payment captures require payment card data which, accordingly to RBI guidelines, must be purged. And a token could not solve this problem as token is only requested when a customer offers their consent to tokenize their information. Recognizing this gap, the Reserve Bank of India (RBI) urged all payment networks to develop a solution for implementing tokenization services specifically for guest checkout transactions.
                                        </p>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        Because user consent wasn&apos;t obtained for tokenizing these cards, and entities are no longer allowed to store all card details, managing post-transaction activities (like chargeback handling, refunds and settlement) for guest checkout transactions becomes tricky. Previously, such activities relied on the stored Card-on-File (CoF) data, which is now prohibited for entities other than card issuers and networks.
                                      </p>
                                       <p className="large-card-body text-[#1a1a1a]">
                                       One solution emerging to address this challenge is Alternate IDs (Alt IDs). This works by tokenizing guest checkout transactions, replacing the actual card number with a unique token provided by the payment networks. This way, sensitive card data remains secure and protected from exposure, aligning with the RBI&apos;s mandate and ensuring safer transactions for all parties involved. Indian Merchants and Payment Service Providers (PSPs) are mandated to process domestic guest checkout transaction via Alt IDs
                                       </p>
                                       <p className="large-card-body text-[#1a1a1a]">
                                       PayGlocal , through our connection with the card networks, now supports Alt IDs provisioning and transaction processing as a unified solution. All merchants integrated with PayGlocal will have access to this feature by default for India issued payment card transactions.

                                       </p>
                                   </div>

                                   <div className="blog-section">
                                        <h4 className="common-h4-heading">Transaction flow:</h4>
                                        <div style={{height:"60"}}>
                                        <Image
                                             src="/blogs/alt-id/altId-newFlow.png"
                                             alt="alt-id-flowchart"
                                             height={50}
                                             width={950}
                                            className="mb-[2.25rem] md:mb-[4.375rem]"
                                             //style={{border:"solid 2px black"}}
                                        />
                                        </div>
                                        <ol className="large-card-body text-[#1a1a1a]" style={{ listStyleType: "disc" }}>
                                             <li>The customer enters their card details on the merchant&apos;s payment page and begins the payment process.</li>
                                             <li>The merchant sends these details to PayGlocal, the Token requester.</li>
                                             <li>PayGlocal forwards the Alt ID generation request to the relevant card network.
                                             </li>
                                             <li>The card network responds by providing a card-specific Alt ID along with issuer approval and a transaction-specific cryptogram to PayGlocal.</li>
                                             <li>PayGlocal then initiates the transaction using the Alt ID for further processing.</li>
                                        </ol>
                                   </div>

                                   <div className="blog-section">
                                        <h4 className="common-h4-heading">Benefits:</h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        Alt ID offers several advantages for both merchants and end-customers, similar to a card-on-file tokenization solution:
                                        </p>
                                        <ol className="large-card-body text-[#1a1a1a]"
                                                  style={{ listStyleType: "disc" }} >
                                                  <li>Merchants can smoothly transition their customers to the Alt ID solution without requiring any changes.</li>
                                                  <li>The solution provides a secure option for cardholders who prefer not to save their cards with merchants and wish to avoid signup processes</li>
                                                  <li>By integrating with PayGlocal for the Alt ID solution, merchants can ensure compliance with RBI guidelines.</li>
                                             </ol>
                                   </div>
                              </div>
                         </div>
                         <hr className="author-data-divider mobile-view" />
                         <div className="author-data block md:inline-block w-full md:w-[23.71%] md:min-w-[281px]">
                              <div className="section-tags author-data-title">Written by</div>
                              <div className="authors ">
                              <div className="author">
                                   <Image
                                   src="/blogs/fraud/author.jpg"
                                   alt="author"
                                   height={80}
                                   width={80}
                                   className="author-image rounded-[60%]"
                                   />
                                   <div className="author-identity">
                                   <div className="author-name">Monica Singh</div>
                                   <div className="author-designation">Product Manager</div>
                                   </div>
                              </div>
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
                                   <div className="author-designation">
                                        Product Manager
                                   </div>
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

export default AltId;
