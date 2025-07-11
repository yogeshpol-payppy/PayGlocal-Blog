'use client';
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";

const EInvoicing = () => {
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
          content={origin + "/blogs/e-invoicing/header-black.png"}
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="E-Invoicing: A Comprehensive Guide for Businesses in India "
        />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content={origin + "/blogs/e-invoicing/header-black.png"}
        />
      </Head>
      <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px]  pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content gap-x-[6.5rem]">
        <Image
          src="/blogs/e-invoicing/header-black.png"
          alt="e-invoicing"
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
              <div className="blog-date">15 Oct 2023</div>
            </div>
            <h3 className="blog-title  common-h4-heading">
              E-Invoicing: A Comprehensive Guide for Businesses in India{" "}
            </h3>
            <hr className="blog-divider" />
            <div className="blog-content large-card-body text-[#1a1a1a]">
              <div className="blog-section">
                <h4>What is e-Invoicing? </h4>
                <p className="large-card-body text-[#1a1a1a]">
                  E-Invoicing refers to electronic invoicing, as defined by the
                  GST (Goods and Service Tax) law.{" "}
                  <span>
                    All GST-registered businesses are required to generate an
                    e-invoice for Business-to-Business (B2B) transactions
                  </span>
                  . It does not mean that the invoice has to be generated on the
                  GST portal. Rather it means that the already generated invoice
                  has to be submitted to a common e-invoice portal. This enables
                  standardization and consistency in the system and automates
                  multi-purpose reporting with a one-time input of invoice
                  details to a central portal.
                </p>
              </div>
              <div className="blog-section">
                <h4>How does E-Invoicing work? </h4>
                <p className="large-card-body text-[#1a1a1a]">
                  All invoice information gets transferred from the e-invoice
                  portal to both the GST portal and the e-way bill portal in
                  real-time. Therefore, it eliminates the need for manual data
                  entry while filing GSTR-1 returns and generation of part-A of
                  the e-way bills, as the information is passed directly by the
                  IRP to the GST portal.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Under the electronic invoicing system, an identification
                  number will be issued against every invoice by the Invoice
                  Registration Portal (IRP), managed by the GST Network (GSTN).
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Before e-invoicing could apply, businesses generated invoices,
                  and the details of these invoices were manually uploaded in
                  the GSTR-1 return or using ERP.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Under the e-invoicing system, the data will seamlessly flow
                  for GSTR-1 preparation and for the e-way bill generation too.
                  The e-invoice data also gets sent to the e-way bill system,
                  where Part A of the e-way bill gets generated, and if
                  transporter details are provided, then Part B gets generated
                  as well.
                </p>
              </div>
              <div className="blog-section">
                <h4>Who should comply with e-invoicing? </h4>
                <p className="large-card-body text-[#1a1a1a]">
                  The Central Board of Indirect Taxes and Customs (CBIC) has
                  defined a turnover limit for businesses to comply with
                  e-invoicing which they have revised over a period of time from
                  Rs 500 crore+ in October 2020 to the latest Rs 5 crore+ from
                  August 2023.{" "}
                </p>
                <table
                  style={{
                    maxWidth: "30rem",
                    textAlign: "center",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  className="eInvoicingTable"
                >
                  <thead>
                    <tr>
                      <th>Phase</th>
                      <th>Turnover more than</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>I</td>
                      <td>Rs 500 crore</td>
                      <td>01.10.2020</td>
                    </tr>
                    <tr>
                      <td>II</td>
                      <td>Rs 100 crore</td>
                      <td>01.01.2021</td>
                    </tr>
                    <tr>
                      <td>III</td>
                      <td>Rs 50 crore</td>
                      <td>01.04.2021</td>
                    </tr>
                    <tr>
                      <td>IV</td>
                      <td>Rs 20 crore</td>
                      <td>01.04.2022</td>
                    </tr>
                    <tr>
                      <td>V</td>
                      <td>Rs 10 crore</td>
                      <td>01.10.2022</td>
                    </tr>
                    <tr>
                      <td>VI</td>
                      <td>Rs 5 crore</td>
                      <td>01.08.2023</td>
                    </tr>
                  </tbody>
                </table>
                <p className="large-card-body text-[#1a1a1a]">
                  Applicability of turnover is dependent on entity’s turnover of
                  any previous financial year starting FY 2017-18 onwards.{" "}
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  It is mandatory for B2B transactions.{" "}
                </p>
              </div>
              <div className="blog-section">
                <h4>Who need not comply with e-invoicing?</h4>
                <ul style={{ listStyleType: "disc" }}>
                  <li>Banks</li>
                  <li>Insurance Companies</li>
                  <li>Financial Institutions</li>
                  <li>Government departments</li>
                  <li>Local Authorities</li>
                  <li>Goods Transport Agencies (GTA) </li>
                  <li>SEZ units</li>
                  <li>Any Business-to-Consumers (B2C) sales </li>
                  <li>
                    Persons registered under the Rule 14 of CGST Rules (OIDAR){" "}
                  </li>
                </ul>
              </div>
              <div className="blog-section">
                <h4>Benefits of e-invoicing for businesses: </h4>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    Reduces Data handling errors - As the filling of GSTR-1
                    happens automatically there is no requirement of manually
                    entering the data again.
                  </li>
                  <li>
                    Enables standardized format for invoices - With e-invoicing
                    all the invoices come with a specific format which helps in
                    the necessary checks and controls to be implemented also,
                    reduces effort in filling in different portals separately in
                    different formats.{" "}
                  </li>
                  <li>
                    Improves formal credit access - e-invoices are mandatory
                    primarily for B2B transactions which are typically of high
                    value and are also filled directly with the GSTN thus,
                    giving comfort to lenders like banks, NBFCs, and invoicing
                    discounting platforms to provide the required line of credit
                    giving businesses a formal credit access.{" "}
                  </li>
                  <li>
                    Auto-filled GSTR 1 - As the request is sent to the IRP
                    portal which is managed by GSTN the details are
                    automatically reflected in the GSTR-1{" "}
                  </li>
                  <li>
                    Digital sharing of invoices - Businesses can share the
                    e-invoice or QR with any party over any channel digitally
                    and it will be deemed valid. Anyone can verify the
                    correctness of an e-invoice by uploading the signed JSON
                    into the e-invoice system, by selecting the option ‘Verify
                    Signed Invoice’ under the ‘Search’ option. One can also
                    download the QR Code Verify app and verify the QR code
                    printed on the invoice.{" "}
                  </li>
                  <li>Interoperability between businesses. </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  E-invoicing has become a significant part of India&apos;s
                  efforts to modernize its tax and business processes. While
                  these changes may require businesses to adapt, they also offer
                  substantial benefits in terms of efficiency, accuracy, and
                  transparency.
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

export default EInvoicing;
