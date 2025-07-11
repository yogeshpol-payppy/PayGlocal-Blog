'use client';
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";


const GstOnExportOfServices = () => {
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
            origin + "/blogs/gst-on-export-of-services-impact/banner.png"
          }
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Impact of GST on Export of Services in India"
        />
        <meta
          name="twitter:description"
          content="No GST is levied on the export of any services. The treatment is considered as zero-rated supply in India offering competitiveness."
        />
        <meta
          name="twitter:image"
          content={
            origin + "/blogs/gst-on-export-of-services-impact/banner.png"
          }
        />
      </Head>

      <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px] pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content gap-x-[6.5rem]">
        <Image
          src="/blogs/gst-on-export-of-services-impact/banner.png"
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
              <div className="blog-read-time">8 min read</div>
              <hr className="blog-info-divider" />
              <div className="blog-date">1 October 2024</div>
            </div>
            <h3 className="blog-xpress-title">
              Impact of GST on Export of Services in India
            </h3>
            <hr className="blog-divide-xpress common-h3-heading" />
            <div
              className="blog-content large-card-body text-[#1a1a1a]"
              style={{ rowGap: "2rem" }}
            >
              <div className="blog-section">
                <p className="large-card-body text-[#1a1a1a]">
                  The Goods and Services Tax, known as GST is an indirect tax in
                  India. It replaced several indirect taxes, including excise
                  duty and VAT. The GST Act was passed on March 29, 2017, and
                  took effect on July 1, 2017. Under GST on export of services,
                  businesses must meet specific criteria to get their services
                  qualified as an export. While these services are
                  zero-rated—meaning no GST is charged—this framework not only
                  bolsters our appeal on the global stage but also facilitates
                  refunds on input taxes.
                </p>
              </div>
              <div className="blog-section">
                <p>
                  To qualify under GST on export of services, several criteria
                  must be met, as follows:{" "}
                </p>
                <ol style={{ listStyleType: "disc" }}>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>Supplier Location: </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      The service provider must operate from India. This is a
                      foundational requirement as only services originating from
                      India can benefit from GST&apos;s zero-rated supply
                      provisions. This rule excludes offshore service providers
                      from claiming export benefits under India&apos;s GST framework.
                    </p>
                  </li>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>Recipient Location: </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      The recipient must be located outside India. The essence
                      of export under GST is cross-border service delivery, and
                      the recipient&apos;s location is critical to determine
                      whether the supply qualifies for zero-rating. If the
                      recipient is based in India, the supply would not qualify
                      as an export, even if payment is received in foreign
                      currency.
                    </p>
                  </li>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>Place of Supply: </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      The place of supply must be outside India. This rule
                      ensures that services consumed abroad, such as consultancy
                      or software exports, are treated as exports. The place of
                      supply rules under Section 13 of the IGST Act play a vital
                      role in determining the eligibility of services for export
                      status, particularly in cases involving intangibles like
                      digital or professional services.
                    </p>
                  </li>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>Payment Method: </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      Exporters must receive payment in convertible foreign
                      exchange or Indian rupees where allowed by the Reserve
                      Bank of India (RBI). This regulation ensures that the
                      transactions contribute to India&apos;s foreign exchange
                      reserves. The flexibility of accepting Indian rupees in
                      specific circumstances, as approved by the RBI, broadens
                      the scope for businesses dealing in exports.
                    </p>
                  </li>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>Distinct Persons Rule: </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      The supplier and the recipient must not be distinct
                      persons or part of the same legal entity, i.e., they
                      cannot be branches or offices of the same company. This
                      rule prevents companies from claiming export benefits on
                      transactions between their own branches located in
                      different countries, ensuring that benefits of GST on the
                      export of services are applicable to genuine third-party
                      international transactions.{" "}
                    </p>
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  These conditions collectively ensure that the supply of
                  services meets the definition of exports. Thus, it exempts
                  transactions from GST on the export of services, allowing
                  businesses to claim refunds on input taxes.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Now that we know various criteria that must be met to be
                  qualified for GST export services, let&apos;s understand the
                  terms; Zero-Rated Supply and Interstate Supply:
                </p>
              </div>

              <div className="blog-section">
                <h5>Zero-Rated Supply and Interstate Supply </h5>
                <p className="large-card-body text-[#1a1a1a]">
                  GST legislation treats the export of services and goods as
                  zero-rated supplies. This classification means no GST is
                  levied on exported goods or services, providing significant
                  relief to exporters. Additionally, under Section 7(5) of the
                  IGST Act, exports are treated as interstate supplies, further
                  clarifying their treatment under the tax regime.
                </p>
                <h5>Options for Claiming Refund for Zero-Rated Supplies </h5>
                <p className="large-card-body text-[#1a1a1a]">
                  For businesses exporting services, GST provides two key
                  options for claiming refunds on zero-rated supplies:
                </p>
                <ol style={{ listStyleType: "disc" }}>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>LUT/Bond Supply: </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      Services can be exported under a Letter of Undertaking
                      (LUT) or bond without the payment of integrated tax
                      (IGST).{" "}
                    </p>
                  </li>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>Refund of Input Tax Credit (ITC): </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      Exporters can claim a refund for the unutilized input tax
                      credit, providing relief on the taxes paid for procuring
                      goods or services used in the export process.
                    </p>
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  Alternatively, some exporters may choose to:{" "}
                </p>
                <ol style={{ listStyleType: "disc" }}>
                  <li>
                    Pay IGST on their supplies and then claim a refund of the
                    tax paid.
                  </li>
                  <li>
                    Submit the necessary documentation and file GSTR 1 & GSTR 3B
                    to complete the refund process.{" "}
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  The government has streamlined the refund procedures, making
                  them faster and more efficient, benefiting businesses of all
                  sizes.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>
                    <strong>Also Read: </strong>
                  </span>{" "}
                  <a
                    href="https://payglocal.in/blog/lut-certificate-download-furnish"
                    target="_blank" rel="noreferrer"
                  >
                    LUT Certificate: How to Download and Furnish on GST Portal
                  </a>
                </p>
              </div>
              <div className="blog-section">
                <p className="large-card-body text-[#1a1a1a]">
                  Determining the place of supply for services is crucial in the
                  GST framework, particularly for exports:
                </p>
                <h5>Place of Supply Rules under Section 13 of IGST Act </h5>
                <p className="large-card-body text-[#1a1a1a]">
                  Under GST, the place of supply rules are crucial for
                  determining whether a service qualifies as an export and how
                  it should be taxed. These rules vary based on the nature of
                  the service, as outlined in Section 13 of the IGST Act.
                </p>
                <ol style={{ listStyleType: "disc" }}>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>General Rule (Section 13(2)): </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      For most services, the place of supply is where the
                      recipient is located. This is the default rule, meaning
                      that if the service recipient is outside India, the
                      service qualifies as an export. This rule typically
                      applies to services like consultancy, software
                      development, and financial services, which are consumed at
                      the recipient&apos;s location rather than where they are
                      provided.
                    </p>
                  </li>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>
                          Goods-Related Services (Section 13(3)(a)):{" "}
                        </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      When services are directly related to goods—such as
                      repair, maintenance, or any work performed on physical
                      items—the place of supply depends on the location of the
                      goods at the time the service is performed. For example,
                      if the goods are located in India when the service is
                      rendered, it is not considered an export, even if the
                      recipient is abroad.{" "}
                    </p>
                  </li>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>
                          Individual-Related Services (Section 13(3)(b)):{" "}
                        </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      Services provided to individuals, such as personal care,
                      medical services, or training, are determined based on
                      where the individual is physically present when receiving
                      the service. This rule applies to situations where the
                      service is tied to the person rather than a business or
                      object. If the individual is outside India at the time of
                      service, the transaction qualifies as an export.
                    </p>
                  </li>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>
                          Immovable Property Services (Section 13(4)):{" "}
                        </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      Services related to immovable property, such as
                      construction, real estate consultancy, or property
                      management, are taxed based on the location of the
                      property. Even if the recipient of the service is located
                      outside India, if the property is in India, the place of
                      supply is considered within India, making it ineligible
                      for export benefits.
                    </p>
                  </li>

                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>
                          Event-Related Services (Section 13(5)):{" "}
                        </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      For services tied to events, such as cultural, artistic,
                      educational, or sporting events, the place of supply is
                      determined by where the event is physically held. This
                      means that if the event is conducted outside India, the
                      service qualifies as an export. This rule ensures that the
                      location of the event takes precedence over the location
                      of the recipient when determining the place of supply.
                    </p>
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  In certain cases, services are taxed based on the supplier&apos;s
                  location under Section 13(8), providing more clarity for
                  businesses when determining tax liabilities.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>
                    <strong>Also Read: </strong>
                  </span>
                  <a
                    href="https://payglocal.in/blog/mastering-exports-LUT"
                    target="_blank" rel="noreferrer"
                  >
                    Mastering Exports: A Complete Guide to Letters of
                    Undertaking (LUT) for Indian Exporters
                  </a>
                </p>
              </div>

              <div className="blog-section">
                <p className="large-card-body text-[#1a1a1a]">
                  We have understood various place of supply rules imposed under
                  Indian Law as GST on export of services. Now, let us look into
                  the mandatory regulations exporters must abide by:
                </p>
                <h5>Regulatory and Compliance Requirements</h5>
                <p className="large-card-body text-[#1a1a1a]">
                  To export services under GST, businesses must comply with
                  certain regulatory requirements:{" "}
                </p>
                <ol style={{ listStyleType: "disc" }}>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>Document Submission </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      Exporters must provide critical documents such as the
                      shipping bill, export invoices, and GST RFD 01 to claim
                      tax refunds. These documents act as proof of export and
                      ensure that the goods or services have been delivered to
                      an overseas client, making them eligible for zero-rated
                      treatment under GST.
                    </p>
                  </li>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>Furnishing Letter of Undertaking (LUT) </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      To avoid paying IGST on exported goods or services,
                      exporters are required to submit an LUT on the GST portal.
                      This declaration ensures compliance and allows the
                      exporter to carry out the transaction without upfront IGST
                      payments, streamlining the cash flow and reducing
                      financial burden.
                    </p>
                  </li>

                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>
                          Compliance with FEMA and Foreign Trade Policy{" "}
                        </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      Exporters must follow the guidelines set by the Foreign
                      Exchange Management Act (FEMA) and India&apos;s Foreign
                      Trade Policy. This includes ensuring that all payments for
                      exports are received in convertible foreign exchange (or
                      Indian rupees where allowed). Adherence to these
                      regulations is crucial for both smooth trade operations
                      and maintaining eligibility for tax exemptions and
                      refunds.
                    </p>
                  </li>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>Refund Filing Deadlines </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      Filing for refunds within the stipulated time frame is
                      critical to avoid rejection of claims. Exporters must be
                      vigilant about these deadlines, as late submissions could
                      lead to the loss of tax benefits or delayed processing,
                      affecting cash flow.
                    </p>
                  </li>

                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>
                          Bank Realization Certificates and Accountant&apos;s
                          Certification{" "}
                        </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      For refund claims exceeding Rs. 2 lakh on a quarterly
                      basis, exporters need to submit a{" "}
                      <a
                        href="https://payglocal.in/blog/brc-details-download-print"
                        target="_blank" rel="noreferrer"
                      >
                        Bank Realization Certificate
                      </a>{" "}
                      (BRC) along with an accountant&apos;s certification. The
                      BRC serves as proof that payment for the export has been
                      realized in foreign exchange, which is necessary to
                      validate refund eligibility.
                    </p>
                  </li>
                </ol>

                <p className="large-card-body text-[#1a1a1a]">
                  <span>
                    <strong>NOTE: </strong>
                  </span>
                  The GST Compliance Rating is a score introduced to evaluate
                  how well the registered taxpayers adhere to GST provisions,
                  rated on a scale from 1 to 10, with 10 being the highest. It
                  assesses compliance history, filing accuracy, and timely
                  payments, promoting transparency and accountability. This
                  system helps both taxpayers and tax authorities identify
                  compliant entities and potential risks.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>
                    <strong>Also Read: </strong>
                  </span>
                  <a
                    href="https://payglocal.in/blog/e-invoicing-under-GST"
                    target="_blank" rel="noreferrer"
                  >
                    E-Invoicing Under GST: Everything You Need to Know.
                  </a>
                </p>
              </div>

              <div className="blog-section">
                <p className="large-card-body text-[#1a1a1a]">
                  While compliance helps businesses maximize GST benefits and
                  avoid penalties, did you know some services qualify as deemed
                  exports? Let&apos;s explore this:
                </p>
                <h5>Deemed Exports </h5>
                <p className="large-card-body text-[#1a1a1a]">
                  Certain supplies are treated as deemed exports, where the
                  recipient, although located in India, is considered an
                  exporter for the purpose of GST. These include:
                </p>
                <ol style={{ listStyleType: "disc" }}>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>Supplies Against Advance Authorization </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      Supplies to registered persons under an Advance
                      Authorization scheme are treated as deemed exports. This
                      means that the supplies are considered exports even though
                      they are delivered within India, offering the same tax
                      benefits as international exports.
                    </p>
                  </li>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>
                          Supplies to Export-Oriented Units (EOUs) or Technology
                          Parks{" "}
                        </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      Products or services supplied to Export-Oriented Units
                      (EOUs) or units in Technology Parks also qualify as deemed
                      exports. These units focus on export promotion, and the
                      supplies are treated as exports to boost international
                      trade competitiveness.
                    </p>
                  </li>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>
                          Supplies Against Export Promotion Capital Goods
                          Authorization (EPCG){" "}
                        </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      Under the EPCG scheme, businesses supplying capital goods
                      to exporters can treat these supplies as deemed exports.
                      This scheme supports the modernization of India&apos;s
                      export sector by allowing the import of capital goods at
                      zero duty, provided the exporter fulfills the export
                      obligations.
                    </p>
                  </li>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>
                          Gold Supply by Banks or PSUs under Advance
                          Authorization{" "}
                        </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      Banks or Public Sector Undertakings (PSUs) can supply gold
                      under an Advance Authorization, which is treated as a
                      deemed export. This supply mechanism supports exporters of
                      gold-related products by giving them access to necessary
                      raw materials under favorable tax conditions.
                    </p>
                  </li>
                </ol>
              </div>

              <div className="blog-section">
                <p className="large-card-body text-[#1a1a1a]">
                  Now that you have understood what are deemed exports, let us
                  look into some common misconceptions about GST on the export
                  of services:
                </p>
                <h5>
                  Common Misconceptions about Export of Services under GST{" "}
                </h5>
                <p className="large-card-body text-[#1a1a1a]">
                  Here&apos;s a list of misconceptions surrounding the export of
                  services under GST:{" "}
                </p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>Payment in Foreign Currency: </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      Simply providing a service to a foreign national and
                      receiving payment in foreign exchange does not
                      automatically qualify as an export.
                    </p>
                  </li>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>Place of Supply Misunderstandings: </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      The place of supply must be outside India for the
                      transaction to be considered an export.
                    </p>
                  </li>
                  <li>
                    <p className="large-card-body text-[#1a1a1a]">
                      <span>
                        <strong>Distinct Person&apos;s Clause: </strong>
                      </span>
                    </p>
                    <p className="large-card-body text-[#1a1a1a]">
                      The supplier and recipient must be independent entities,
                      ensuring that the export is genuine and not an internal
                      transaction between branches of the same company.
                    </p>
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>
                    <strong>Also Read: </strong>
                  </span>
                  <a
                    href="https://payglocal.in/blog/international-payment-challenges"
                    target="_blank" rel="noreferrer"
                  >
                    International Payments - The Challenges and Solutions of
                    Cross border Payments.
                  </a>
                </p>
              </div>

              <div className="blog-section">
                <h5>Conclusion </h5>
                <p className="large-card-body text-[#1a1a1a]">
                  In today&apos;s fiercely competitive global market,
                  understanding GST on the export of services is essential for
                  businesses. India&apos;s GST framework enables exporters to
                  benefit from zero-rated supplies and tax exemptions. These
                  advantages make services more appealing internationally.
                  Refund claims on input taxes and simplified compliance boost
                  efficiency. Businesses can confidently secure cost savings
                  while thriving in global trade.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  What if you can cut down on transaction fees? Step up and plan
                  your international payments! Join{" "}
                  <a href="https://payglocal.in/" target="_blank" rel="noreferrer">
                    PayGlocal
                  </a>{" "}
                  today and unleash the best tools for your seamless global
                  trade. Watch your costs shrink while your payment success
                  rates soar. Don&apos;t miss out—take the leap and uplift your
                  business to new horizons!
                </p>
              </div>

              <div className="blog-section">
                <h4>Frequently Asked Questions </h4>
                <ol style={{ listStyleType: "number" }}>
                  <li>
                    <h5 className="mb-3">
                      What does GST mean? When was GST introduced in India?{" "}
                    </h5>
                    <p className="large-card-body text-[#1a1a1a]">
                      GST stands for Goods and Services Tax. The GST Act was
                      passed on March 29, 2017, and implemented on July 1, 2017.
                    </p>
                  </li>
                  <li>
                    <h5 className="mb-3">
                      What is a GST number, and how do I check it? How many
                      types of GST are there?
                    </h5>
                    <p className="large-card-body text-[#1a1a1a]">
                      The GST number (GSTIN) is a 15-digit PAN-based
                      identification for registered persons. Check it on the GST
                      portal at{" "}
                      <a href="http://www.gst.gov.in" target="_blank" rel="noreferrer">
                        www.gst.gov.in
                      </a>{" "}
                      using the &apos;Search Taxpayer&apos; option. There are three types:
                      CGST, SGST/UTGST, and IGST.
                    </p>
                  </li>
                  <li>
                    <h5 className="mb-3">
                      What is the GST rate in India? How is GST calculated? How
                      many GST slabs are there in India?{" "}
                    </h5>
                    <p className="large-card-body text-[#1a1a1a]">
                      GST rates vary by transaction type, with CGST and SGST
                      rates for intrastate and IGST for interstate transactions.
                      GST is calculated by multiplying the applicable rate by
                      the assessable value of the supply. The main GST slabs are
                      0%, 5%, 12%, 18%, and 28%, with a few lesser rates like 3%
                      and 0.25%.
                    </p>
                  </li>
                  <li>
                    <h5 className="mb-3">
                      What governs the GST act and rules?{" "}
                    </h5>
                    <p className="large-card-body text-[#1a1a1a]">
                      GST is governed by four main acts: CGST, IGST, SGST, and
                      UTGST, along with additional rules for smooth
                      implementation.
                    </p>
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">Resources: </p>
                <ol style={{ listStyleType: "disc" }}>
                  <li>
                    <a
                      href="https://cleartax.in/s/gst-law-goods-and-services-tax"
                      target="_blank" rel="noreferrer"
                    >
                      Goods and Services Tax: What is GST in India? Indirect Tax
                      Law Explained
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://taxinformation.cbic.gov.in/content/html/tax_repository/gst/acts/2017_IGST_Act/active/chaptervii/section16_v1.00.html"
                      target="_blank" rel="noreferrer"
                    >
                      Section 16. Zero rated supply.
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.zoho.com/in/books/academy/taxes-and-compliance/gst-compliance-rating.html#:~:text=The%20GST%20compliance%20rating%20is,used%2C%20taxes%20paid%2C%20etc"
                      target="_blank" rel="noreferrer"
                    >
                      GST Compliance Rating.
                    </a>
                  </li>
                  <li>
                    <a href="http://www.gst.gov.in" target="_blank" rel="noreferrer">
                      GST-India.
                    </a>
                  </li>
                </ol>
              </div>
              <div className="blog-section">
                <h6>
                  <span className="text-[red]">DISCLAIMER: </span>
                  The information provided in this blog post is intended for
                  general informational purposes only and should not be
                  construed as any advice or recommendation in any manner and is
                  not reflective of any sponsorship of affiliation. While we
                  strive to ensure the accuracy and reliability of the content,
                  it may not reflect the latest developments or interpretations.
                  Users are advised to exercise their own discretion and
                  judgment before making any decisions or taking any actions
                  based on the information provided.
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
                  {/* <div className="author-designation">Founder&apos;s Office</div> */}
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

export default GstOnExportOfServices;
