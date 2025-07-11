// /* eslint-disable @next/next/no-img-element */
'use client';
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";

const AchPayments = () => {
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
                         content={origin + "/blogs/ach-payments/h1.png"}
                    ></meta>
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Shopify Xpress Flow" />
                    <meta
                         name="twitter:description"
                         content="Discover how PayGlocal's Xpress PayFlow on Shopify can provide a seamless, one-click checkout experience for global merchants. Boost sales and enhance customer experience effortlessly."
                    />
                    <meta
                         name="twitter:image"
                         content={origin + "/blogs/ach-payments/h1.png"}
                    />
               </Head>
               <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px]  pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content gap-x-[6.5rem]">
                    <Image
                         src="/blogs/ach-payments/h1.png"
                         alt="BRC"
                         height={88}
                         width={1184}
                         className="rounded-[40px] mb-[2.25rem] md:mb-[5.375rem]"
                    />
                    <br />
                    <div className="flex flex-col md:flex-row justify-between flex-[7 auto] w-100 gap-x-[5rem]">
                         <div className="blog block md:inline md:min-w-[66.29%]">
                              <div className="blog-info section-tags">
                                   <div className="blog-tag ">Payments</div>
                                   <div className="blog-read-time">5 min read</div>
                                   <hr className="blog-info-divider" />
                                   <div className="blog-date">10 Jan 2024</div>
                              </div>
                              <h3 className="blog-xpress-title common-h3-heading">
                                   Understanding ACH Payments
                              </h3>
                              <hr className="blog-divide-xpress common-h3-heading" />
                              <div
                                   className="blog-content large-card-body text-[#1a1a1a]"
                                   style={{ rowGap: "2rem" }}
                              >
                                   <div className="blog-section">
                                        <p className="large-card-body text-[#1a1a1a]">
                                             Automated Clearing House (ACH) payments involve the electronic transfer of funds between bank accounts, facilitated by the ACH network, a secure and reliable system governed by the National Automated Clearing House Association (NACHA). It is one of the methods through which funds are transferred in United States of America.<br></br>
                                          
                                        </p>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        As ACH transactions are computerized, money transfers can happen more quickly. Businesses involved in payroll processing, vendor payments, and regular transactions would especially benefit from this speed.
                                        </p>
                                   </div>

                                   <div className="blog-section">
                                        <h4 className="common-h4-heading">ACH Debits</h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                             ACH debit, or Automated Clearing House debit, refers to a type of electronic funds transfer in which funds are electronically withdrawn from a bank account to make a payment.
                                        </p>
                                        <h6 className="common-h6-heading">Parties involved in ACH Debit:</h6>
                                        <ol className="large-card-body text-[#1a1a1a]"
                                             style={{ listStyleType: "disc" }}>
                                             <li>Originator</li>
                                             <li>Originating Depository Financial Institution (ODFI)</li>
                                             <li>ACH Operator
                                                  <ol style={{ listStyleType: "circle" }}><li>Federal Reserves</li>
                                                       <li>Clearing House</li></ol>
                                             </li>
                                             <li>Receiving Depository Financial Institution (RDFI)</li>
                                             <li>Receiver</li>
                                        </ol>
                                    
                                        <p className="large-card-body text-[#1a1a1a]">
                                        Consider the case of an electricity bill payment. Once a customer authorises a payment on a utility bill website, the utility biller will be the originator of ACH payment and the funds will be sent to Biller&apos;s bank, the ODFI. The ODFI collates and sends the file to ACH Operator. The ACH operator then sends it to RDFI because it is receiving the payment from the ACH Operator. The RDFI sends the funds to receiver.
                                        </p>

                                   </div>

                                   <div className="blog-section">
                                        <h4 className="common-h4-heading">ACH Credit</h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        ACH credit refers to the electronic transfer of funds into a recipient&apos;s bank account. Commonly used for payroll, vendor payments, and direct deposits, ACH credits streamline financial transactions by eliminating paper checks.
                                        </p>
                                        <h6 className="common-h6-heading">Parties involved in ACH Debit:</h6>
                                        <ol className="large-card-body text-[#1a1a1a]"
                                             style={{ listStyleType: "disc" }}>
                                             <li>Originator</li>
                                             <li>Originating Depository Financial Institution (ODFI)</li>
                                             <li>ACH Operator
                                                  <ol style={{ listStyleType: "circle" }}><li>Federal Reserves</li>
                                                       <li>Clearing House</li></ol>
                                             </li>
                                             <li>Receiving Depository Financial Institution (RDFI)</li>
                                             <li>Receiver</li>
                                        </ol>
                                  </div>
                                  <div className="blog-section">
                                  <h4 className="common-h4-heading">How does an ACH payment happen?</h4>
                                           <Image
                                             src="/blogs/ach-payments/OBJECTS.png"
                                             alt="ACH-Payments"
                                             height={88}
                                             width={1184}
                                             
                                             className="rounded-[40px] mb-[2.25rem] md:mb-[5.375rem]"
                                        />
                                  </div>

                                  <div className="blog-section">
                                        <h4 className="common-h4-heading">Statistics of ACH Payments</h4>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        ACH payments by volume in 2022: USD 76.7 Trillion
                                        </p>
                                   <ol className="large-card-body text-[#1a1a1a]"
                                             style={{ listStyleType: "disc" }} >
                                        <li>Credits: USD 50.22 Trillion</li>
                                        <li>Debits: USD 26.5 Trillion</li>
                                   </ol>
                                        <p className="large-card-body text-[#1a1a1a]">
                                             Key Metrics:
                                             </p>
                                         <ol className="large-card-body text-[#1a1a1a]"
                                             style={{ listStyleType: "disc" }}>
                                        <li>Business to Business payments: USD 52.53 Trillion</li>
                                        <li>Person to Person payments: USD 448.53 Billion</li>
                                        <li>Consumer Bill payments and other debits: USD 9.49 Trillion</li>
                                        <li>Direct Deposits: USD 13.67 Trillion</li>

                                         </ol>
                                       
                                  </div>

                                  <div className="blog-section">
                                       <h4 className="common-h4-heading">Timelines of ACH</h4>
                                       <p className="large-card-body text-[#1a1a1a]">
                                       Same-day ACH guarantees the settlement on the same day, however, it may come with a higher price. Payments made using standard ACH are settled in one to three business days.
                                        </p>
                                  </div>

                                  <div className="blog-section">
                                       <h4 className="common-h4-heading">Advantages of ACH</h4>
                                       <ol className="large-card-body text-[#1a1a1a]"
                                             style={{ listStyleType: "disc" }}>
                                        <li>Cost-effectiveness</li>
                                        <li>Enhanced Security</li>
                                        <li>Convenience and accessibility</li></ol>
                                    
                                   
                                  </div>
                                  <div className="blog-section">
                                  <p className="large-card-body text-[#1a1a1a]">
                                        The ACH Network, has consistently enhanced its capabilities and transaction types, boosting processing speeds, and extending operating hours. It operates 23¼ hours each business day, settling payments four times daily when the Federal Reserve&apos;s settlement service is open. ACH is a popular system for batch processing electronic payments, providing cost-effective and flexible solutions for businesses and individuals.     </p>
                                        <p className="large-card-body text-[#1a1a1a]">
                                        However, ACH Networks have a delayed processing time because of the batch processing as compared to real-time settlement networks like Fedwire which is preferred for transactions which requires real-time settlements but comes with a cost more than ACH.    </p>  
                                        <p className="large-card-body text-[#1a1a1a]">
                                        ACH payments are primarily carried out from one US bank account to another US bank account. PayGlocal supports ACH payment collection for Indian merchants by provisioning a multi-currency account in the name of the merchant to collect payments locally from their customers.     </p>
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

export default AchPayments;
