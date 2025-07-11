'use client';
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";


const AltPays = () => {
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
          content={origin + "/blogs/altpay/header.png"}
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="What are Global Payment Methods & Why They Matter"
        />
        <meta
          name="twitter:description"
          content="The rise of online payments has also increased the consumer’s
              expectations of payment experience and flexibility. Global payment
              methods is one such flexibility."
        />
        <meta
          name="twitter:image"
          content={origin + "/blogs/altpay/header.png"}
        />
      </Head>
      <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px]  pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content">
        <Image
          src="/blogs/altpay/header.png"
          alt="global Payments"
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
              <div className="blog-date">8 September 2022</div>
            </div>
            <h3 className="blog-title  common-h4-heading">
              What are Global Payment Methods & Why They Matter
            </h3>
            <h4>
              The rise of online payments has also increased the consumer’s
              expectations of payment experience and flexibility. Global payment
              methods is one such flexibility. Across the globe, companies are
              meeting their customers closer to their comfort by offering
              payment methods other than cards or cash. Here’s everything you
              need to know about local payment methods.
            </h4>
            <hr className="blog-divider" />
            <div className="blog-content large-card-body text-[#1a1a1a]">
              <div className="blog-section">
                <p className="large-card-body text-[#1a1a1a]">
                  Online payments have never been easier.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  And yet, evolving technology has increased user expectations
                  just as much. Card decline? Switch the site. Payment failure?
                  Leave a bad rating. We’ve all been there. Can you believe{" "}
                  <span>56% of shoppers</span> are permanently put off from a
                  site if they don&apos;t find payment methods of choice?
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Online businesses keep upgrading to keep their customers
                  satisfied. Global payment is one such advancement.
                </p>
              </div>
              <div className="blog-section">
                <h4>What are Global Payment Methods?</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Let’s look at UPI, which has almost become the country’s
                  default payment method. The volume of transactions{" "}
                  <span>grew exponentially</span> from just INR 0.02 billion in
                  FY17 to 60 billion the fiscal year until December 2022
                  recording 7.82 billion transactions worth 12.82 trillion in
                  December alone.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  UPI is a success story for local payment methods.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Payment methods like PayPal are familiar worldwide, while some
                  others like AliPay, Klarna, WeChat Pay dominate some specific
                  geographies. UPI in India, Giropay in Germany, GrabPay in
                  Southeast Asian regions like Singapore and Malaysia are some
                  more examples.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>Cognitive analysis</span> is an easy way for companies
                  to personalize and customize experiences by accessing that
                  &apos;treasure trove of data&apos;. Cognitive Analysis has
                  also found its way to the payment industry, where we are able
                  to solve a different line of problems.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  So, what exactly are global or local payment methods?
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Payment options other than cash and major international or
                  domestic cards are collectively called global payment methods.
                </p>
                <Image
                  src="/blogs/altpay/methods.png"
                  alt="methods"
                  height={480}
                  width={480}
                  className="blog-section"
                />
              </div>
              <div className="blog-section">
                <h4>Types of Global Payment Methods</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Global Payment Methods are majorly categorized into these 5
                  broad categories:
                </p>
                <ul
                  className="large-card-body text-[#1a1a1a]"
                  style={{ listStyleType: "disc" }}
                >
                  <li>Bank transfer</li>
                  <li>Wallets </li>
                  <li>Buy Now Pay Later</li>
                  <li>Local Cards</li>
                  <li>Cash based methods</li>
                </ul>
              </div>
              <div className="blog-section">
                <h4>Boost your sales with Global Payment methods</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>77% of all</span> online purchases in 2021 were made
                  using a local payment method. Offering local payment methods
                  of your global customers is now a necessity. Its benefits far
                  outweigh the setup time and costs. Global payment methods can
                  increase your business reach, boost customer experience and
                  drive more sales. Here’s how:
                </p>
              </div>
              <div className="blog-section">
                <h4>Higher reach</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Payment methods have evolved to cater to customer convenience.
                  Case in point, the rise of digital wallets even in geographies
                  with high card penetration.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Local payment methods are especially popular in geographies
                  where card adoption is low which will help the merchant to
                  cater to the customers who use local payment methods as an
                  option to pay instead of using major card schemes.
                </p>
              </div>
              <div className="blog-section">
                <h4>Increased customer trust</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Users are familiar with local payment methods. For customers
                  transacting with a cross border merchant, this familiarity can
                  help feel more comfortable and connected. Local payment
                  methods are also considered more trustworthy are reliable by
                  users leading to better payment experience
                </p>
              </div>
              <div className="blog-section">
                <h4>Lower fraud</h4>
                <Image
                  src="/blogs/click-click-goose/rocket.png"
                  alt="developer"
                  height={480}
                  width={480}
                />
                <p className="large-card-body text-[#1a1a1a]">
                  Most of the local payment methods have no chargebacks because
                  of the nature of payment where it needs multi-layered customer
                  authentication which enhances the trust, thus reducing the
                  risk of frauds.
                </p>
              </div>
              <div className="blog-section">
                <h4>Set up global payments for your business</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Now that you know what global payments are and the potential
                  edge they can give your business, get global payments{" "}
                  <Link href="/alternate-payment-methods">set up today</Link>.
                  Connect with our team for help.
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
                  src="/blogs/altpay/author.png"
                  alt="author"
                  height={80}
                  width={80}
                  className="rounded-full"
                />
                <div className="author-identity">
                  <div className="author-name">Rishabh K</div>
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

export default AltPays;
