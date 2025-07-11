'use client';
// /* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";

const XpressPayflowShopify = () => {
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
          content={origin + "/blogs/xpress-shopify/header.png"}
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shopify Xpress Flow" />
        <meta
          name="twitter:description"
          content="Discover how PayGlocal's Xpress PayFlow on Shopify can provide a seamless, one-click checkout experience for global merchants. Boost sales and enhance customer experience effortlessly."
        />
        <meta
          name="twitter:image"
          content={origin + "/blogs/xpress-shopify/header.png"}
        />
      </Head>
      <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px] pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content gap-x-[6.5rem]">
        <Image
          src="/blogs/xpress-shopify/header.png"
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
              <div className="blog-date">27 December 2023</div>
            </div>
            <h3 className="blog-xpress-title">
              Introducing Xpress PayFlow for Shopify
            </h3>
            <hr className="blog-divide-xpress common-h3-heading" />
            <div
              className="blog-content large-card-body text-[#1a1a1a]"
              style={{ rowGap: "2rem" }}
            >
              <div className="blog-section">
                <p className="large-card-body text-[#1a1a1a]">
                  In today&apos;s dynamic e-commerce environment, where speed
                  and convenience are paramount, a smooth checkout process plays
                  a pivotal role in shaping the overall customer shopping
                  experience. Offering a seamless journey from product selection
                  to purchase completion is essential for enhancing customer
                  satisfaction, minimizing abandonment, and driving increased
                  sales for online merchants. To offer this one-click payment
                  experience, PayGlocal has collaborated with Shopify to launch
                  a seamless payment flow, tailor-designed for cross-border
                  merchants on the Shopify platform{" "}
                  <span>– Xpress PayFlow</span>
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  PayGlocal&apos;s pioneering role in offering cross-border
                  payments with high payment success rates, has helped us
                  recognize the preference of international shoppers for card
                  payments and their heightened sensitivity to a seamless
                  checkout experience. Xpress PayFlow on Shopify has been
                  developed to enable customers enter their payment details
                  directly on the merchant&apos;s Shopify website page,
                  eliminating the need for redirection to a separate page. This
                  reduces the time taken to complete a payment and also improves
                  the merchant&apos;s Shopify site performance.
                </p>
                <p>
                  <span>
                    Merchants leveraging PayGlocal&apos;s Xpress PayFlow can
                    expect to see:
                  </span>{" "}
                </p>
                <ol
                  className="large-card-body text-[#1a1a1a]"
                  style={{ listStyleType: "disc" }}
                >
                  <li>Increased sales and conversion</li>
                  <li>Lower customer abandonments</li>
                  <li>Lower customer service queries</li>
                  <li>Improved trust and credibility</li>
                  <li>Improved customer experience</li>
                </ol>
                <p className="mt-[0.5rem]">
                  <span>
                    PayGlocal&apos;s Xpress PayFlow on Shopify is publicly
                    available on the{" "}
                    <Link
                      className="alt-pay-hero-cta"
                      style={{ color: "#4071df" }}
                      href="https://apps.shopify.com/payglocal-seamless-payment"
                      target="_blank"
                    >
                      Shopify App Store.{" "}
                    </Link>
                  </span>
                  <br />
                  Shopify merchants can experience a demo by following the below
                  steps:{" "}
                </p>
                <ol
                  className="large-card-body text-[#1a1a1a]"
                  style={{ listStyleType: "decimal" }}
                >
                  <li>
                    Visit the test store:{" "}
                    <Link
                      className="alt-pay-hero-cta"
                      style={{ color: "#4071df" }}
                      href="https://seamless-store-4.myshopify.com/"
                      target="_blank"
                    >
                      Link
                    </Link>{" "}
                  </li>
                  <li>Add any item to the cart </li>
                  <li>
                    Click on <span>“Checkout”</span>
                  </li>
                  <li>Enter your contact and shipping details</li>
                  <li>
                    Enter the following test card details
                    <ol style={{ listStyleType: "lower-alpha" }}>
                      <li>
                        <span>Card number:</span> 5559820100041859
                      </li>
                      <li>
                        <span>Expiry:</span> 08/28
                      </li>
                      <li>
                        <span>CVV:</span> 877
                      </li>
                    </ol>
                  </li>
                  <li>
                    Click on <span>“Complete Payment”</span>
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a] mt-[0.2rem]">
                  Merchant selling outside of India understand the value of
                  higher conversion and payment success rate, while managing the
                  risk of cross-border transactions. PayGlocal&apos;s Xpress
                  PayFlow on Shopify can help merchants offer a revolutionizing
                  customer payment experience. With this flow, merchants can
                  boost customer satisfaction and enjoy the benefits of a
                  frictionless, single click checkout experience. For assistance
                  and further details, feel free to reach out to{" "}
                  <Link
                    className="alt-pay-hero-cta"
                    style={{ color: "#4071df" }}
                    href="https://payglocal.in/contact"
                    target="_blank"
                  >
                    PayGlocal.
                  </Link>{" "}
                  Your path to a streamlined and efficient payment experience
                  awaits.
                </p>
              </div>
              <hr className="blog-dividerBottom" />
              <div className="blog-section">
                <h4>About Shopify</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Shopify is one of the most widely used platform by merchants
                  to sell their goods to customers online. With its easy setup,
                  merchants can go live with their stores/websites within couple
                  of hours. In India, there are close to 60,000 active Shopify
                  stores, with close to 600 stores getting added each quarter.
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
                  src="/blogs/xpress-shopify/author.png"
                  alt="author"
                  height={80}
                  width={80}
                  className="rounded-[60%]"
                />
                <div className="author-identity">
                  <div className="author-name">Ninad Ajnikar</div>
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

export default XpressPayflowShopify;
