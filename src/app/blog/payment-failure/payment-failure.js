'use client';
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";

const Paymentfailure = () => {
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
          content={origin + "/blogs/paymentFailure/header.png"}
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Payment Failure: Why it Happens and How to Avoid It"
        />
        <meta
          name="twitter:description"
          content="Why does this happen? Banks and other entities decline real
                  and genuine transactions at the slightest hint of risk or
                  fraud. This can however lead to the loss of legitimate
                  business for merchants."
        />
        <meta
          name="twitter:image"
          content={origin + "/blogs/paymentFailure/header.png"}
        />
      </Head>
      <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px] pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content">
        <Image
          src="/blogs/paymentFailure/header.png"
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
              <div className="blog-read-time">3 min read</div>
              <hr className="blog-info-divider" />
              <div className="blog-date">3 October 2022</div>
            </div>
            <h3 className="blog-title  common-h4-heading">
              Payment Failure: Why it Happens and How to Avoid It
            </h3>
            <hr className="blog-divider" />
            <div className="blog-content large-card-body text-[#1a1a1a]">
              <div className="blog-section">
                <p className="large-card-body text-[#1a1a1a]">
                  Genuine or valid transactions can fail or be incorrectly
                  declined due to suspicion of fraud. This is called a false
                  decline. In 2019, valid transactions worth{" "}
                  <a href="https://www.foxbusiness.com/money/merchants-lost-20-billion-card-declines">
                    $20 billion were rejected
                  </a>{" "}
                  through credit cards alone.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Why does this happen? Banks and other entities decline real
                  and genuine transactions at the slightest hint of risk or
                  fraud. This can however lead to the loss of legitimate
                  business for merchants.
                </p>
              </div>
              <div className="blog-section">
                <h4>Why genuine transactions fail</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  There are several reasons for false declines, we&apos;ve
                  broadly categorized them into three major buckets.
                </p>
                <ol
                  className="large-card-body text-[#1a1a1a]"
                  style={{ listStyleType: "decimal" }}
                >
                  <li>
                    <span>Issuing bank:</span> The issuing banks may decline
                    transactions due fraud filters being triggered on their
                    side.
                  </li>
                  <li>
                    <span>Unusual transactions:</span> Purchases that don&apos;t
                    match a customer&apos;s usual spending habits can be flagged
                    as fraudulent. It could be because of unusual amounts or
                    locations.
                  </li>
                  <li>
                    <span>Payment gateway issues:</span> The payment gateway
                    doesn&apos;t support the method of payment or fraud filters
                    in the payment gateway were triggered.
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  The declines can be soft declines or hard declines and
                  managing them well leads to a significantly higher success
                  rate saving precious customers and sales for the merchants.
                </p>
              </div>
              <div className="blog-section">
                <h4>Managing payment failures</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  International payment standards and infrastructure hasn’t
                  evolved enough to meet the growing needs of global sales and
                  transactions. Adding into the mix different local banking
                  standards, payment methods, currency conversion, and payment
                  chain gets longer and more complicated.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  So, without proper payment processes and strategies in place,
                  your payment acceptance rate and by extension, revenue take a
                  hit. It is critical that businesses accepting payments from
                  around the world take this seriously. One transaction decline
                  not only leads to loss of that sale but in most cases, loss of
                  that customer itself due to bad experience faced by them.
                </p>
              </div>
              <div className="blog-section">
                <h4>How to increase your payment acceptance rates</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Businesses can build trust with some positive signals:
                </p>
                <ol
                  className="large-card-body text-[#1a1a1a]"
                  style={{ listStyleType: "decimal" }}
                >
                  <li>
                    <span>Transactions persona:</span> The more an issuer sees a
                    transaction details closer to a domestic transaction, the
                    most trust they have on that transaction.
                  </li>
                  <li>
                    <span>Usage of appropriate protocols:</span> Usage of right
                    back-end processing details such as PSD2 / SCA in Europe and
                    3DS 2.1.0 or 3DS 2.2.0 or direct Authorization leads to
                    higher approvals rates in different markets as per local
                    setup in that country.
                  </li>
                  <li>
                    <span>Complete payment requests:</span> By collecting the
                    right information for the payment method being used and
                    passing on to the issuers.
                  </li>
                </ol>
                <p>
                  Businesses rarely have the infrastructure or the means to make
                  the above happen. The solution is to work with payment
                  service/infrastructure providers that understand how to
                  process global transactions the way they should be processed
                  in different geographies. These entities have a high volume of
                  transactions since they work with several businesses and
                  understand how each transaction must be treated for getting
                  that approval that matters to the merchants.
                </p>
              </div>
              <div className="blog-section">
                <h4>
                  Increase your international payment success rates with
                  PayGlocal
                </h4>
                <p className="large-card-body text-[#1a1a1a]">
                  PayGlocal is a payment service provider that delivers one of
                  the highest acceptance rates for cross-border payments. This
                  is made possible because PayGlocal stack works in an optimal
                  way to handle declines and retry these transactions with the
                  right protocols for best approval rates.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  We&apos;ve established that banks decline transactions if they
                  look risky. By changing the persona of a transaction to make
                  it look more like a domestic transaction, PayGlocal increases
                  the approval rates from the banks without burdening the
                  customers. Our internal risk assessment engine runs data from
                  several touchpoints to assess every transaction, thus
                  processing authentic transactions and blocking fraudulent
                  ones.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <a href="https://payglocal.in/#Form-Fill">Talk to us</a> today
                  to increase your payment approval rates.
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
                  src="/blogs/paymentFailure/author.jpeg"
                  alt="author"
                  height={80}
                  width={80}
                  className="rounded-full"
                />
                <div className="author-identity">
                  <div className="author-name">Mounika Kavuri</div>
                  <div className="author-designation">Marketing Manager</div>
                </div>
              </div>
            </div>
            <BlogSuggestions
              names={[
                "international-money-transfer",
                "multi-currency-account-india",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Paymentfailure;
