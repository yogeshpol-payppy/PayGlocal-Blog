'use client';
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";


const HowToOpenMCA = () => {
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
          content={origin + "/blogs/empowering-exporters-rodtep/header.png"}
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Empowering Exporters – The RoDTEP Scheme"
        />
        <meta
          name="twitter:description"
          content="Explore the RoDTEP a scheme intended to lower the cost of exported goods. Learn more on who is eligible, its benefits and advantages."
        />
        <meta
          name="twitter:image"
          content={origin + "/blogs/empowering-exporters-rodtep/header.png"}
        />
      </Head>
      <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px]  pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content gap-x-[6.5rem]">
        <Image
          src="/blogs/empowering-exporters-rodtep/header.png"
          alt="empowering-exporters-RoDTEP"
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
              <div className="blog-date">5 Sept 2023</div>
            </div>
            <h3 className="blog-title  common-h4-heading">
              Empowering Exporters – The RoDTEP Scheme{" "}
            </h3>
            <hr className="blog-divider" />
            <div className="blog-content large-card-body text-[#1a1a1a]">
              <div className="blog-section">
                <p className="large-card-body text-[#1a1a1a]">
                  RoDTEP, which stands for Remission of Duties and Taxes on
                  Exported Products Scheme, was launched in January 2021, as a
                  successor to the earlier Merchandise Export from India Scheme
                  (MEIS).
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Its primary objective is to provide exporters with a
                  comprehensive refund of various embedded duties and taxes that
                  were not being offset through existing export incentive
                  schemes. This includes the reimbursement of duties and taxes
                  at the central, state, and local levels, ultimately lowering
                  the cost of exported goods.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  This includes not just the expenses directly paid by the
                  exporter but also the accumulated indirect taxes from earlier
                  stages on the goods.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Tax intended to be compensated to the exporters in the scheme
                  are:
                </p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    Value Added Tax (VAT) and Excise duty on the fuel used for
                    the transportation expenses borne by the exporter.
                  </li>
                  <li>Electricity duty on the purchase of electricity.</li>
                  <li>Mandi Tax/ Municipal Tax/ Property Taxes.</li>
                  <li>Stamp duty on export documents etc. </li>
                </ol>
              </div>
              <div className="blog-section">
                <h4>Eligibility for RoDTEP scheme: </h4>
                <p className="large-card-body text-[#1a1a1a]">
                  All exporters of goods are eligible to benefit under the
                  scheme. Such a person should have directly exported the goods.
                  The benefits of this scheme can be claimed irrespective of the
                  turnover.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  It is applicable to all sectors apart from:
                </p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>Apparel and make-up.</li>
                  <li>
                    Steel, pharmaceuticals, organic and inorganic chemicals.
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  The scheme also covers goods that are exported through
                  e-commerce platforms via courier services.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>Note:</span> It is mandatory for the exporters to submit
                  a declaration in the shipping bills, mentioning whether they
                  intend to claim RoDTEP on the export items. This by default,
                  will be assigned to “No”, which means that no claim will be
                  made on this export.
                </p>
              </div>
              <div className="blog-section">
                <h4>Distribution of benefits of the RoDTEP Scheme</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Benefits under RoDTEP scheme are provided in the form of
                  transferable duty credit e-scrip which can be utilized for
                  payment of Basic Customs Duty.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  RoDTEP scripts are transferable to any other person having a
                  valid IEC and ICEGATE registration.
                </p>
              </div>
              <div className="blog-section">
                <h4>Advantages of RoDTEP Scheme </h4>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    Enhanced Global Competitiveness - By reducing the burden of
                    taxes and duties, exporters can offer their products at more
                    competitive prices, attracting global buyers and expanding
                    their market share.
                  </li>
                  <li>
                    WTO Compliant - RoDTEP scheme is compliant with the trade
                    norms set up by the WTO.
                  </li>
                  <li>Simplified Procedure – RoDTEP scheme is automated.</li>
                  <li>
                    Diversification of Exports - RODTEP encourages exporters to
                    diversify their product range and explore new markets. By
                    reducing the financial barriers, exporters can now venture
                    into unexplored territories and cater to a wider range of
                    demands.
                  </li>
                  <li>
                    Contributing to economic growth - A thriving export industry
                    directly supports economic expansion. Export growth
                    generates increased foreign exchange revenues, which
                    improves the nation&apos;s reserves.{" "}
                  </li>
                </ol>
              </div>
              <div className="blog-section">
                <h4>Conclusion </h4>
                <p className="large-card-body text-[#1a1a1a]">
                  The RoDTEP Scheme aligns with the Indian government&apos;s
                  overarching vision of Atmanirbhar Bharat (self-reliant India)
                  and &apos;Make in India&apos;. By reducing the financial
                  burden on exporters, the scheme not only enhances their
                  competitiveness but also plays a pivotal role in India&apos;s
                  economic growth story.
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
                  src="/blogs/empowering-exporters-rodtep/author.png"
                  alt="author"
                  height={80}
                  width={80}
                  className="rounded-[60%]"
                />
                <div className="author-identity">
                  <div className="author-name">Rishabh K</div>
                  <div className="author-designation">Product Manager</div>
                </div>
              </div>
            </div>
            <BlogSuggestions
              names={[
                "multi-currency-account-india",
                "international-payment-challenges",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToOpenMCA;
