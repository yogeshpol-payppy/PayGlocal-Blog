'use client';
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";

const Fraud = () => {
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
          content={origin + "/blogs/fraud/header.png"}
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="The True Cost of Fraud | Why Businesses Need Fraud Prevention"
        />
        <meta
          name="twitter:description"
          content="The cost of fraud goes beyond the lost transaction value itself.
              Businesses have to spend on chargebacks, merchandise replacements,
              and so on. This is why businesses invest in risk assessment
              systems and fraud protection."
        />
        <meta
          name="twitter:image"
          content={origin + "/blogs/fraud/header.png"}
        />
      </Head>
      <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px]  pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content gap-x-[6.5rem]">
        <Image
          src="/blogs/fraud/header.png"
          alt="Click click goose"
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
              <div className="blog-date">4 October 2023</div>
            </div>
            <h3 className="blog-title  common-h4-heading">
              The True Cost of Fraud | Why Businesses Need Fraud Prevention
            </h3>
            <h4>
              The cost of fraud goes beyond the lost transaction value itself.
              Businesses have to spend on chargebacks, merchandise replacements,
              and so on. This is why businesses invest in risk assessment
              systems and fraud protection.
            </h4>
            <hr className="blog-divider" />
            <div className="blog-content large-card-body text-[#1a1a1a]">
              <div className="blog-section">
                <p className="large-card-body text-[#1a1a1a]">
                  Losses due to payment fraud has tripled from $9.84 billion in
                  2011 to $32.39 in 2020. It is set to exceed a total of $200
                  billion from 2020 to 2024, reports{" "}
                  <a
                    href="https://www.juniperresearch.com/press/online-payment-fraud-losses-to-exceed-200-billion"
                    target="_blank" rel="noreferrer"
                  >
                    Juniper Research
                  </a>
                  .
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  The risk is higher for small businesses. Small and medium
                  businesses saw{" "}
                  <a
                    href="https://informationsecuritybuzz.com/businesses-incur-greater-losses-year-on-year-due-to-payment-fraud/"
                    target="_blank" rel="noreferrer"
                  >
                    total losses
                  </a>{" "}
                  due to fraud increase from 14% in 2019 to 38% in 2020.
                  Enterprises, on the other hand, recorded a 4% decrease from
                  2019 to 2020.
                </p>
              </div>
              <div className="blog-section">
                <h4>True cost of a fraud</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  The true cost of fraud goes beyond the fraud amount itself. In
                  2016,{" "}
                  <a
                    href="https://www.fraud.com/post/the-actual-cost-of-fraud"
                    target="_blank" rel="noreferrer"
                  >
                    US merchants reported
                  </a>{" "}
                  a total loss of $2.40 for every dollar of fraud. Businesses
                  have to spend on chargebacks, merchandise replacements and so
                  on.
                </p>
              </div>
              <div className="blog-section">
                <h4>Lost goods or merchandise</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  As per one of the recent reports, the global percentage of
                  revenue lost to fraud is about 3.6%. The risk of transaction
                  being fraudulent increases even more for a high value
                  transaction.
                </p>
              </div>
              <div className="blog-section">
                <h4>Manual review</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Manual review is a time-consuming process. As the business
                  grows, so does the scale of transactions, the review team also
                  has to grow. Moreover, businesses end up sending too many
                  orders for manual reviews too.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Consequently, most of the transactions that are reviewed
                  manually get approved eventually.
                </p>
              </div>
              <div className="blog-section">
                <h4>Chargeback fees</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  A merchant is charged a fee that can range from $15 to $100 by
                  the processor for each chargeback. If the number of
                  chargebacks received exceeds a certain threshold, the merchant
                  is placed in excessive chargeback program that can incur
                  additional monthly fee.
                </p>
              </div>
              <div className="blog-section">
                <h4>Order declined due to stringent rules </h4>
                <p className="large-card-body text-[#1a1a1a]">According to a global survey published by the Merchant RiskCouncil, an average online store has a 2.6% rate of declines because of suspected fraud.
                </p>
                <p className="large-card-body text-[#1a1a1a]">According to a global survey published by the Merchant Risk Council, an average online store has a 2.6% rate of declines because of suspected fraud.
                </p>
              </div>
              <div className="blog-section">
                <h4>Cost of in-house fraud prevention system </h4>
                <p className="large-card-body text-[#1a1a1a]">Designing an in-house fraud prevention tool needs a lot of expertise to get accurate results. This expertise is unrelated to your business and incurs additional cost.
                </p>
              </div>
              <div className="blog-section">
                <h4>Cost of shipping </h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Orders with higher shipping expense is more likely to result
                  in a fraud. Once a chargeback is reported on this transaction,
                  shipping cost with which the merchandise is sent to the
                  customer is also lost.
                </p>
              </div>
              <div className="blog-section">
                <h4>Cost of employee </h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Representments, investigations and audits of fraudulent
                  activity require expertise. Hence the cost spent on the
                  in-house risk team is also a consideration.
                </p>
              </div>
              <div className="blog-section">
                <h4>Processing fee for the transaction</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Processing fee of a fraudulent transaction is also borne by
                  the merchant. It is also observed that processor might charge
                  a higher processing fee if the merchant is considered to be a
                  high-risk merchant.
                </p>
              </div>
              <div className="blog-section">
                <h4>Conclusion</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  As covered above, fraud leads to a huge loss of revenue even
                  if some of these customers were genuine. The first step to
                  decreasing the losses is to be aware of the problem and take
                  steps to mitigate it. This calls for businesses to invest in a
                  good risk assessment system and chargeback protection.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <Link className="hero-cta" href="/contact">
                    Talk to us today
                  </Link>{" "}
                  for AI/ML powered risk assessment engine.
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
                  src="/blogs/fraud/author.jpg"
                  alt="author"
                  height={80}
                  width={80}
                  className="rounded-[60%]"
                />
                <div className="author-identity">
                  <div className="author-name">Monica Singh</div>
                  <div className="author-designation">Product Manager</div>
                </div>
              </div>
            </div>
            <BlogSuggestions
              names={["click-click-goose", "single-sign-on-integration"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fraud;
