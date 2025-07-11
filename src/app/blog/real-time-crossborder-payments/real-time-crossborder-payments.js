'use client';
import Image from "next/image";
import YouTube from "react-youtube";
import Head from "next/head";
import { useState, useEffect } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";

const Xborder = () => {
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
          content={origin + "/blogs/crossborderPayments/header.png"}
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Unlocking Real Time Payments for Cross-border"
        />
        <meta
          name="twitter:description"
          content="Fintech leaders discuss the evolution, growth and future of real
              time payments for cross border."
        />
        <meta
          name="twitter:image"
          content={origin + "/blogs/crossborderPayments/header.png"}
        />
      </Head>
      <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px]  pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content">
        <Image
          src="/blogs/crossborderPayments/header.png"
          alt="Click click goose"
          height={88}
          width={1184}
          className="rounded-[40px] mb-[2.25rem] md:mb-[5.375rem]"
        />
        <br />
        <div className="flex flex-col md:flex-row justify-between flex-[7 auto] w-100 gap-x-[5rem]">
          <div className="blog block md:inline md:min-w-[66.29%]">
            <div className="blog-info section-tags">
              <div className="blog-tag ">Discussion</div>
              <div className="blog-read-time">5 min read</div>
              <hr className="blog-info-divider" />
              <div className="blog-date">29 September 2022</div>
            </div>
            <h3 className="blog-title  common-h4-heading">
              [Discussion] Unlocking Real Time Payments for Cross-border
            </h3>
            <h4>
              Fintech leaders discuss the evolution, growth and future of real
              time payments for cross border.
            </h4>
            <hr className="blog-divider" />
            <div className="blog-content large-card-body text-[#1a1a1a]">
              <div className="blog-section">
                <p className="large-card-body text-[#1a1a1a]">
                  Global Fintech Fest 2022 brought together the regulators,
                  banks, innovators and investors under one roof. It was an
                  amazing platform that sparked open conversations and a new
                  round of debates and ideas for Indian Fintech.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  I also had the opportunity to moderate a riveting discussion
                  on the evolution and future of real-time payments for
                  cross-border with some of the leading minds in the space.
                </p>
                <YouTube
                  className="video-story alt-pay-video my-[5rem] mx-[auto] w-full"
                  id="yt-video"
                  videoId="5qbwFmr-gAk"
                  opts={{
                    playerVars: {
                      autoplay: 0,
                      controls: 0,
                      disablekb: 1,
                      modestbranding: 1,
                      mute: 0,
                      fs: 0,
                    },
                  }}
                />
              </div>
              <div className="blog-section">
                <h4>The growth of cross-border payments in India</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Cross-border payments in India booming.{" "}
                  <a href="https://www.linkedin.com/in/narasimhanramesh/?original_referer=https%3A%2F%2Fpayglocal.in%2F">
                    Ramesh Narasimhan
                  </a>
                  , the CEO of Worldline India, attributes it to main reasons:
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>
                    Emergence of India as a market for global companies:
                  </span>
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  If you have a requirement you’re willing to pay for, India is
                  the place to go. With an educated workforce and a demographic
                  younger than 45 years of age, we’re bringing overseas business
                  to the country
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>
                    The country’s focus on exporting and global commerce:
                  </span>
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  India’s{" "}
                  <a
                    href="https://www.hindustantimes.com/business/indian-exports-set-to-cross-650bn-in-fy22-as-services-hit-record-250bn-101649902129253.html"
                    target="_blank" rel="noreferrer"
                  >
                    $670 billion exports
                  </a>{" "}
                  in 2021-22 puts us among the top 10 exporters in the world. We
                  also hit record exports of exported $250 billion worth of
                  services. Our merchandise export touched{" "}
                  <a
                    href="https://commerce.gov.in/press-releases/indias-merchandise-export-rises-16-8-to-usd-37-9-billion-in-june-2022-as-compared-to-usd-32-49-billion-in-june-2021-recording-highest-ever-exports-in-june-2022/#:~:text=DEPARTMENT%20OF%20COMMERCE,-+A%20A%20-A&text=India%27s%20merchandise%20export%20during%20first,same%20period%20of%20last%20year"
                    target="_blank" rel="noreferrer"
                  >
                    $37.9 billion
                  </a>{" "}
                  in June 2022 recording highest ever. ‍Rashmi Satpute, Country
                  Manager of Wise adds that the uptick of cross-border is not
                  just limited to exporters or merchants, rather, businesses and
                  financial services are joining the fray. Wise whose
                  infrastructure includes 67 licenses in around 44 countries, is
                  becoming the network of choice of payment infrastructure
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  ‍
                  <a href="https://www.linkedin.com/in/rashmi-satpute-56a48812/">
                    Rashmi Satpute
                  </a>
                  , Country Manager of Wise adds that the uptick of cross-border
                  is not just limited to exporters or merchants, rather,
                  businesses and financial services are joining the fray. Wise
                  whose infrastructure includes 67 licenses in around 44
                  countries, is becoming the network of choice of payment
                  infrastructure
                </p>
              </div>
              <div className="blog-section">
                <h4>Local payment methods to change the game</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  The payments component of this equation is that overseas
                  merchants offer local payment methods such as UPI, and net
                  banking, which expands the market when compared if the
                  payments were restricted to international credit or debit
                  cards.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Similarly, Indian exporters can do the same. Payment companies
                  offer end-to-end services – authorization, settlement, and
                  repatriation of funds in the currencies of their choice. We’re
                  seeing huge traction in cross-border payments in verticals
                  like education, travel and hospitality, OTT, airlines, SaaS.
                </p>
              </div>
              <div className="blog-section">
                <h4>Real time payments for cross-border</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  <a
                    href="https://www.linkedin.com/in/dr-emil-ruban-j-05714718/"
                    target="_blank" rel="noreferrer"
                  >
                    Dr. Emil Ruban
                  </a>{" "}
                  talks about the evolution of payments in the last 10 years.
                  One had to wait for 30 days to receive money in their bank
                  account, we are now talking 30 seconds and less. Ria took
                  advantage of this opportunity.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Ria was in the remittances space, but over the last five
                  years, the organization built the infrastructure to connect
                  190 countries with 103 currencies. Today, about 40 countries
                  in the world already provide real-time payments. With more and
                  more transactions moving to real-time payments, it is only a
                  matter of time before cross-border payments also move to
                  real-time as the norm.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Shinichiro Nishikawa of{" "}
                  <a
                    href="https://www.linkedin.com/company/nttdata/"
                    target="_blank" rel="noreferrer"
                  >
                    NTT Data
                  </a>{" "}
                  shares that collaborations and direct connections are the way
                  forward here. The entire Asia region is moving towards RTP, he
                  added. Singapore’s PayNow is planning to connect with NPCI.
                  Cross-border payments via card scheme is easy. Fintech
                  companies like NTT Data are also looking to add more localized
                  payment methods, especially for Asian countries.
                </p>
              </div>
              <div className="blog-section">
                <h4>Cross-border payments in India – a global perspective</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Takeshi comments that India has a growing market and a huge
                  population. Comparatively, Japan is a fraction of it, with an
                  aging population. Japan is working with Indian partners to
                  bridge the gap between the Japanese payments to financial
                  infrastructure and to the Indian one. He also talks about the
                  need for international regulation in cross-border payments and
                  creating a framework for it.
                </p>
              </div>
              <div className="blog-section">
                <h4>The way forward</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  The panel discusses the future of cross-border from both
                  product and regulatory perspectives to make it more seamless
                  transactions.
                </p>
              </div>
              <div className="blog-section">
                <h4>What customers expect from cross-border payments</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Rashmi talks about customer’s expectations from cross-border:
                </p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    Real-time: With domestic transactions being real time,
                    customers expect cross border also to head there soon.
                  </li>
                  <li>
                    Pricing: Sending a cross-border payment should be as easy as
                    sending an email and just as cheap. Wise envisions achieving
                    this through their Mission Zero.
                  </li>
                  <li>
                    Transparency: There are a lot of checks and a lot of layers
                    to cross-border payments right now. customers should know
                    what they’re paying for, how much the beneficiary will
                    receive and when etc.
                  </li>
                </ol>
              </div>
              <div className="blog-section">
                <h4>How regulatory bodies and financial institutes fit in</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  From a regulatory perspective, Rubin shares:
                </p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    The need for tracking of cross-border payments, which is
                    currently not happening
                  </li>
                  <li>
                    Proper KYC procedures, while being simple and
                    straightforward, should adhere to regulations
                  </li>
                  <li>
                    Shinichiro adds that banks are an important piece of the
                    puzzle for cross-border - to track, monitor, and control the
                    flow of money.
                  </li>
                  <li>
                    While there are several companies sharing data about credit
                    underwriting, we do not have the same kind of information or
                    even source of data for fraud in cross-border payments. A
                    centralized system could be utilized.
                  </li>
                  <li>
                    Takeshi adds that whitelisting cross-border payments could
                    be beneficial, but it also brings in data security and
                    privacy concerns for financial institutes to share
                    cross-border data.
                  </li>
                </ol>
              </div>
              <div className="blog-section">
                <h4>Conclusion</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Ramesh concludes that awareness is the key to growing
                  cross-border payments, to create confidence in the consumers.
                  A lot of companies have built nimble products to enable
                  cross-border, but a lot of consumers still look to banks or
                  traditional financial institutes for this. Compliance is, of
                  course, crucial and there is a lot of work needed to be done
                  still.
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
                  src="/blogs/crossborderPayments/author.png"
                  alt="author"
                  height={80}
                  width={80}
                  className="rounded-full"
                />
                <div className="author-identity">
                  <div className="author-name">Prachi Dharani</div>
                  <div className="author-designation">Cofounder and CEO</div>
                </div>
              </div>
            </div>
            <BlogSuggestions
              names={[
                "why-alternate-payment-methods",
                "multi-currency-account-india",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Xborder;
