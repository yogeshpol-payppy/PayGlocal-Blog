'use client';
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";


const UnderstandingAppFraud = () => {
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
            origin + "/blogs/understanding-app-fraud-in-the-uk/banner.png"
          }
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="understanding-app-fraud-in-the-uk"
        />
        <meta
          name="twitter:description"
          content="Read more about APP fraud and the changing regulatory landscape in the UK, this blog highlights the nuances and applicability of regulation."
        />
        <meta
          name="twitter:image"
          content={
            origin + "/blogs/understanding-app-fraud-in-the-uk/banner.png"
          }
        />
      </Head>

      <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px]  pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content gap-x-[6.5rem]">
        <Image
          src="/blogs/understanding-app-fraud-in-the-uk/banner.png"
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
              <div className="blog-date">11 October 2024</div>
            </div>
            <h3 className="blog-xpress-title">
              Understanding APP Fraud in the UK: A Growing Concern
            </h3>
            <hr className="blog-divide-xpress common-h3-heading" />
            <div
              className="blog-content large-card-body text-[#1a1a1a]"
              style={{ rowGap: "2rem" }}
            >
              <div className="blog-section">
                <p className="large-card-body text-[#1a1a1a]">
                  In recent years, the financial landscape in the UK has evolved significantly, bringing with it new forms of financial crime. One of the most pressing concerns is Authorized Push Payment (APP) fraud, a scam that has garnered increasing attention from both consumers and regulatory bodies. In this blog, we will delve into what APP fraud entails, the diCerent types of scams, recent regulatory changes, the implications for businesses, and measures that can be taken to mitigate risk.
                </p>
                <h5>What is APP Fraud?</h5>
                <p>APP fraud occurs when a fraudster convinces a victim to authorize a payment to a fraudulent account, often using manipulative tactics that create a sense of urgency or trust. Unlike traditional forms of fraud, where the victim&apos;s account information is stolen, APP fraud relies on tricking the victim into willingly making the payment.</p>
              </div>
              <div className="blog-section">
                <p>Latest figures by UK finance shows £459.7 Million was lost to APP scams in 2023. There are two primary types of APP scams:</p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    <p><span><strong>Malicious Payee:</strong></span>
                      This involves deceiving someone into purchasing goods or services that either do not exist or will never be delivered. A common scenario might involve a victim being lured by a seemingly legitimate online advertisement for a product, only to find out later that the seller was a fraudster.
                    </p>
                  </li>
                  <li>
                    <p><span><strong>Malicious Redirection:</strong></span>
                      In this scenario, the fraudster impersonates bank staC or legitimate entities to persuade the victim to transfer funds into the fraudster&apos;s account. For example, a victim might receive a call from someone claiming to be from their bank, who then instructs them to make a payment to resolve an alleged issue with their account.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="blog-section">
                <h5>Recent Changes: New Reimbursement Responsibilities</h5>
                <p>As of October 7, 2024, significant changes will be enacted concerning APP fraud in the UK. Under the new regulations, all payments made via the Faster Payment Service (FPS) and the Clearing House Automated Payment System (CHAPS) will have specific reimbursement responsibilities.</p>
                <ol style={{ listStyleType: "disc" }}>
                  <li>All participating Payment service providers (PSPs) will be incentivised to take action, with both sending and receiving firms splitting the costs of reimbursement 50:50.</li>
                  <li>Customers will be more protected under consistent minimum standards, with most APP fraud victims being reimbursed within five business days and additional protections oCered for vulnerable customers.</li>
                </ol>
                <p>This marks a pivotal shift in the landscape of payment processing, as it places greater responsibility on merchants to ensure the legitimacy of transactions. Payments made in GBP through FPS or CHAPS will fall under this regulation, which only applies to transactions occurring on or after the specified date.
                </p>
              </div>
              <div className="blog-section">
                <h5>Who is Affected?</h5>
                <p>The new regulation is inclusive in nature and will extend its coverage to various customer categories including:
                </p>
                <ol style={{ listStyleType: "disc" }}>
                  <li>
                    <p><span><strong>Individuals:</strong></span>
                      Customers making payments for personal use, not for trade or business.
                    </p>
                  </li>
                  <li>
                    <p><span><strong>Micro-enterprises:</strong></span>
                      Businesses with fewer than 10 employees and an annual turnover or balance sheet total not exceeding £2 million.
                    </p>
                  </li>
                  <li>
                    <p><span><strong>Charities:</strong></span>
                      Organizations with an annual income of less than £1 million.
                    </p>
                  </li>
                </ol>
                <p>However, it is to be noted that PSPs can deem a claim as out of scope whenthe
                  following criteria apply:
                </p>
                <ol style={{ listStyleType: "disc" }}>
                  <li>The customer has acted fraudulently or dishonestly (also referred to as ‘first- party-fraud).</li>
                  <li>The customer has acted with gross negligence, that is, outside the consumer standard of caution.</li>
                  <li>
                    <p><span><strong>Trade disputes</strong></span> (or civil disputes – language used by PSR);</p>
                    <ol style={{ listStyleType: "disc" }}>
                      <li>Civil dispute is a situation when a customer has paid a legitimate
                        supplier for goods or services but has not received them, they are defective in some way, or the customer is otherwise dissatisfied with the supplier. Such disputes do not meet a definition of an APPfraud as the customer has not been deceived.</li>
                      <li>However,when there is indication that a supplier of goods or services is not legitimate, and an account was set up to deceive consumers then such a claim is in scope of APP fraud regulation.</li>
                      <li>A sending PSP should be able to determine whether a claim is a civil dispute through communication with the customer and the receiving PSP. Where the receiving PSP has evidence that the claim is a civil dispute, the receiving PSP should provide any relevant information to the sending PSP within the given time frame.
                      </li>
                    </ol>
                  </li>
                  <li><p><span><strong>International payments – </strong></span>all types of cross-border transfers.</p></li>
                  <li><p><span><strong> Payments </strong></span>which take place across other payment systems (i.e. not FPS or
                    CHAPS).</p></li>
                  <li>
                    <p><span><strong>Other payments - </strong></span>
                      where payments are sent or received by credit unions, municipal banks and national savings banks</p>
                  </li>
                  <li>
                    <p>
                      <span><strong>Unlawful purposes -</strong></span>
                      payments made for such purposes are out of scope.
                    </p>
                  </li>
                  <li>Payments made to an account the consumer controls, or payments that are
                    not authorised by the consumer (&apos;unauthorised payments&apos;)
                  </li>

                </ol>
              </div>
              <div className="blog-section">
                <h5>Timeline for Claims and Evidence</h5>
                <p>Customer should raise the claim in no later than 13 months of learning or suspecting APP fraud. The claim must be resolved within 5 days of reporting by the customer. However, the sending PSP and receiving PSP has the right to extend the dispute resolution period (as referred to as “Stop the clock”) up to a maximum of 35 business days.
                </p>
                <h5>Mitigating Fraud: Best Practices for Merchants</h5>
                <p>Given that impersonation is often at the heart of APP fraud, businesses must adopt several mandatory practices to protect themselves and their customers:</p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li><p><span><strong> Secure Handling of Account Details:</strong></span>
                    Merchants should implement robust security measures to ensure that account details and credentials are not exposed to unauthorized individuals.
                  </p></li>
                  <li><p><span><strong> Document Customer Communication:</strong></span>
                    It’s essential to maintain comprehensive records of all communications with customers regarding transactions. This documentation can serve as crucial evidence in disputing fraudulent claims.
                  </p></li>
                  <li><p><span><strong> Timely Delivery and Proof of Goods/Services:</strong></span>
                    Merchants should ensure that goods or services are delivered promptly and that proof of delivery is documented. This not only aids in resolving disputes but also builds customer trust.
                  </p></li>
                </ol>
              </div>
              <div className="blog-section">
                <h5>PayGlocal’s Commitment to Fraud Prevention</h5>
                <p>At PayGlocal, we recognize the importance of safeguarding customer against any potential APP fraud. We are committing significant resources to develop and maintain a robust anti-fraud framework. Here are some key measures we are implementing:</p>
                <ol style={{ listStyleType: "disc" }}>
                  <li><p><span><strong> Enhanced Merchant Onboarding:</strong></span>
                    Our merchant onboarding process includes rigorous checks to ensure that only legitimate businesses are permitted into the system.
                  </p></li>
                  <li><p><span><strong> Transaction Monitoring:</strong></span>
                    We have established a dedicated transaction monitoring setup to flag any suspicious activity promptly.
                  </p></li>
                  <li><p><span><strong> State-of-the-Art Security:</strong></span>
                    We utilize cutting-edge security technologies to protect merchant data from unauthorized access. This includes multi-factor authentication for our merchant portal, significantly reducing the risk of impersonation.
                  </p></li>
                  <li><p><span><strong> Confirmation of Payee:</strong></span>
                    In collaboration with our partner banks, we have implemented the &apos;Confirmation of Payee&apos; feature. This process allows customers to verify that the recipient of a payment is who they claim to be, reducing the likelihood of misdirected payments.
                  </p></li>
                </ol>

              </div>
              <div className="blog-section">
                <h5>Conclusion</h5>
                <p>APP fraud presents a significant challenge for consumers and businesses alike in the UK. As the landscape continues to evolve, staying informed about the latest regulations and implementing robust fraud prevention measures will be crucial. By fostering a culture of security and vigilance, merchants can not only protect themselves but also contribute to a safer financial environment for everyone. The responsibility is shifting, and proactive engagement in safeguarding transactions will be vital in the coming years.</p>
              </div>

              <div className="blog-section">
                <h6>
                  <span className="text-[red]">DISCLAIMER: </span>
                  The information provided in this blog post is intended for general informational purposes only and should not be construed as any advice or recommendation in any manner and is not reflective of any sponsorship of affiliation. While we strive to ensure the accuracy and reliability of the content, it may not reflect the latest developments or interpretations. Users are advised to exercise their own discretion and judgment before making any decisions or taking any actions based on the information provided.
                </h6>
              </div>
            </div>
          </div>
          <hr className="author-data-divider mobile-view" />
          <div className="author-data block md:inline-block w-full md:w-[23.71%] md:min-w-[281px]">
            <div className="section-tags author-data-title">Written by</div>
            <div className="authors ">
              <div className="author">
                <Image
                  src="/blogs/how-to-get-clients-for-web-development-strategies/payglocal-blue.svg"
                  alt="author"
                  height={50}
                  width={80}
                  className="rounded-[60%]"
                />
                <div className="author-identity">
                  <div className="author-name">PayGlocal Team</div>
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

export default UnderstandingAppFraud;
