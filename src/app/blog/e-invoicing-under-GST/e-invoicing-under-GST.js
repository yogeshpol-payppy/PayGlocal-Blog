'use client';
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";

const EInvoicingUnderGST = () => {
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
          content={origin + "/blogs/e-invoicing-under-GST/header.png"}
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="E-Invoicing Under GST: Everything You Need to Know"
        />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content={origin + "/blogs/e-invoicing-under-GST/header.png"}
        />
      </Head>
      <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px]  pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content gap-x-[6.5rem]">
        <Image
          src="/blogs/e-invoicing-under-GST/header.png"
          alt="e-invoicing-under-GST"
          height={88}
          width={1184}
          className="rounded-[40px] mb-[2.25rem] md:mb-[5.375rem]"
        />
        <br/>
        <div className="flex flex-col md:flex-row justify-between flex-[7 auto] w-100 gap-x-[5rem]">
          <div className="blog block md:inline md:min-w-[66.29%]">
            <div className="blog-info section-tags">
              <div className="blog-tag ">Business</div>
              <div className="blog-read-time">7 min read</div>
              <hr className="blog-info-divider" />
              <div className="blog-date">6 June 2024</div>
            </div>
            <h3 className="blog-title  common-h4-heading">
            E-Invoicing Under GST: Everything You Need to Know{" "}
            </h3>
            <hr className="blog-divider" />
            <div className="blog-content large-card-body text-[#1a1a1a]">
              <div className="blog-section">
                <p className="large-card-body text-[#1a1a1a]">
                Navigating the world of business finance can often be a labyrinth of paperwork, 
                regulations, and compliance headaches. But with the advent of e-invoicing under 
                the Goods and Services Tax (GST) in India, businesses can now streamline their 
                invoicing processes like never before. E-invoicing simplifies the creation, 
                transmission, and management of invoices, making it an essential tool for modern businesses. 
                Here&apos;s everything you need to know about GST e-invoicing, how it works, 
                and the benefits it offers.
                </p>
              </div>
              <div className="blog-section">
                <h4>What is GST e-invoice? </h4>
                <p className="large-card-body text-[#1a1a1a]">
                GST e-invoice is an electronic document that is created and transmitted in a standardised format for invoicing under GST. The e-invoice system is a part of the government&apos;s digital India initiative and is designed to streamline and simplify the invoicing process for businesses.
                </p>
              </div>
              <div className="blog-section">
                <h4>How does the GST e-invoice system work?</h4>
                <p className="large-card-body text-[#1a1a1a]">
                The GST e-Invoice system consists of an invoice registration portal that generates a unique invoice reference number (IRN) and a QR code for each invoice. This reference number is used to track the invoice and ensure that it is unique and valid. Once the invoice is created, it is transmitted to the buyer who can then see the invoice details in real time. The GST e-Invoice system integrates with the GST portal, ensuring that the invoice details are automatically uploaded to the GST portal, making it easier for businesses to file and reconcile their tax returns. Businesses looking to take advantage of the benefits of e-Invoicing and comply with GST regulations must quickly adopt an e-Invoicing solution that provides robust automation and system integration. Thus, explore using the GST e-invoice portal to ease your business invoicing process.                </p>
              </div>
              <div className="blog-section">
                <h4>Navigating the digital shift </h4>
                <p className="large-card-body text-[#1a1a1a]">
                The Goods and Services Tax (GST) regime, introduced to streamline and unify the taxation structure in India, br/ought about the need for a standardised and automated invoicing system. The GST electronic invoice system was created as a solution to simplify the cumbersome process of manual invoicing, reduce errors, and enhance overall compliance. Under this system, businesses generate invoices electronically in a format that adheres to the prescribed standards. The GST network (GSTN) authenticates these e-invoices, ensuring accuracy and compliance with GST regulations.
                </p>
              </div>
              <div className="blog-section">
                <h4>Process of getting an e invoice system</h4>
                <ol style={{ listStyleType: "number" }}>
                  <li>Ensure compliance with PEPPOL standards and incorporate e-invoicing schema into your ERP system</li>
                  <li>Whitelist the IP address of your computer system on the e-invoice portal for direct API integration or use a GST Suvidha Provider (GSP) like ClearTax.</li>
                  <li>Utilize a bulk generation tool to upload invoices in bulk and generate JSON files for IRN generation.</li>
                  <li>Enter all necessary invoice details such as billing information, GSTN, transaction value, item rate, GST rate, and tax amount into your ERP or billing software.</li>
                  <li>Upload invoice details to the Invoice Registration Portal (IRP) using the generated JSON file, app, or direct API.</li>
                  <li>IRP will validate the invoice details, check for duplications, and generate an Invoice Reference Number (IRN) along with a digitally signed invoice and QR code. </li>
                  <li>Receive intimation of e-invoice generation via email and continue printing invoices with a logo as usual.</li>
                  <li>IRP forwards authenticated data to the GST portal for tax returns and, if applicable, to the e-way bill portal for generation of e-way bills.</li>
                  <li>GSTR-1 returns are auto-filled for the relevant tax period based on the data provided, determining tax liability accordingly.{" "}</li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                    Implementing an e-invoice system streamlines invoicing processes, enhances compliance, and facilitates seamless integration with tax and regulatory systems.
                </p>
              </div>
              <div className="blog-section">
                <h4>Benefits of e-invoicing to businesses</h4>
                <ol style={{ listStyleType: "disc" }}>
                  <li><span>Reduced errors: </span>With e-invoicing, the chances of errors in invoicing are minimised, resulting in greater accuracy, and fewer disputes with clients.</li>
                  <li><span>Cost savings: </span>e-Invoicing reduces the cost of paper, printing, and postage, thus saving businesses money on logistics and bulk printing.</li>
                  <li><span>Faster payment processing: </span>Electronic invoicing is faster and more efficient, allowing businesses to receive payment faster, improve cash flow and reduce late payments.</li>
                  <li><span>Reduced compliance risks: </span>The e-invoicing system ensures that businesses comply with GST regulations by automatically updating invoices with the tax amount and providing real-time validation of invoice details.</li>
                  <li><span>Saves time: </span>e-Invoicing saves time, eliminates manual processing, and automates many processes such as invoice generation, data entry, and payment processing, making it easier for businesses to manage their finances.</li>
                </ol>
              </div>
              <div className="blog-section">
                <h4>How can e-invoicing curb tax evasion?</h4>
                <p className="large-card-body text-[#1a1a1a]">E-invoicing plays a crucial role in curbing tax evasion through several mechanisms:</p>
                <ol style={{ listStyleType: "disc" }}>
                  <li><span>Real-time Transaction Monitoring: </span>Tax authorities gain immediate access to transactions as they occur, promoting transparency and accountability.</li>
                  <li><span>Reduced Manipulation: </span>With invoices generated prior to transactions, there&apos;s limited scope for manipulation, enhancing the integrity of tax records.</li>
                  <li><span>Prevention of Fake Invoices: </span>Mandatory e-invoicing minimizes the prevalence of fraudulent GST invoices, ensuring only genuine input tax credits can be claimed.</li>
                  <li><span>Enhanced Tracking: </span>Matching input credit with output tax details enables efficient identification and tracking of fake tax credit claims, bolstering tax compliance and enforcement measures.</li>
                </ol>
              </div>
              <div className="blog-section">
                <h4>What are the mandatory fields of an e-invoice? </h4>
                <p className="large-card-body text-[#1a1a1a]">
                The following fields must be compulsorily be declared in an e-invoice:
                </p>
                <div style={{overflowX: "auto"}}>
                <table
                  style={{
                    borderCollapse: "collapse",
                    borderSpacing: "0",
                    maxWidth: "100%",
                    textAlign: "center",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  className="eInvoicingTable"
                >
                <thead>
                    <tr>
                        <th className="">Sl. no.</th>
                        <th>Name of the field</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Document Type Code</td>
                    <td>Type of document must be specified</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Supplier LegalName</td>
                    <td>Legal name of the supplier must be as per the PAN card</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Supplier GSTIN</td>
                    <td>GSTIN of the supplier raising the e-invoice</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Supplier Address</td>
                    <td>Building/Flatno., Road/Street, Locality, etc. of the supplier raising the e-invoice</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Supplier Place</td>
                    <td>Supplier&apos;slocation such as city/town/village must be mentioned</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Supplier State Code</td>
                    <td>The state must be selected from the latest list given by GSTN</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Supplier Pincode</td>
                    <td>The place(locality/district/state) of the supplier&apos;s locality</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>DocumentNumber</td>
                    <td>For unique identification of the invoice, a sequential number is required withinthe business context, time frame, operating systems and records of the supplier.No identification scheme is to be used.</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Preceding Invoice Reference and date</td>
                    <td>Detail oforiginal invoice which is being amended by a subsequent document such as adebit and credit note. It is required to keep future expansion of e-versionsof credit notes, debit notes and other documents required under GST.</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Document Date</td>
                    <td>The date when the invoice was issued. However, the format under explanatory notesrefers to ‘YYYY-MM-DD&apos;. Further clarity will be required. Document periodstart and end date must also be specified if selected.</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Recipient_Legal Name</td>
                    <td>The name of the buyer as per the PAN</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Recipient&apos;s GSTIN</td>
                    <td>The GSTIN of the buyer to be declared here</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Recipient&apos;s Address</td>
                    <td>Building/flatno., road/street, locality, etc. of the supplier raising the e-invoice</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Recipient&apos;s State Code</td>
                    <td>The place of supply state code to be selected here</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Place Of Supply State Code</td>
                    <td>The state must be selected from the latest list given by GSTN</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Pincode</td>
                    <td>The place(locality/district/state) of the buyer on whom the invoice is raised/ billedto must be declared here if any</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>Recipient Place</td>
                    <td>Recipient&apos;s location (City/Town/Village)</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>IRN-Invoice Reference Number</td>
                    <td>At the time of the registration request, this field is left empty by the supplier.Later on, a unique number will be generated by GSTN after uploading thee-invoice on the GSTN portal. An acknowledgement will be sent back to thesupplier after the successful acceptance of the e-invoice by the portal. IRNshould then be displayed on the e-invoice before use.</td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>Shipping To GSTIN</td>
                    <td>GSTIN of the buyer himself or the person to whom the particular item is beingdelivered to</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>Shipping to State, Pincode and State code</td>
                    <td>State pertaining to the place to which the goods and services invoiced were or aredelivered</td>
                </tr>
                <tr>
                    <td>21</td>
                    <td>Dispatch From_ Name, Address, Place and Pincode</td>
                    <td>Entity&apos;s details (name, and city/town/village) from where goods are dispatched</td>
                </tr>
                <tr>
                    <td>22</td>
                    <td>Is Service</td>
                    <td>Whether or not supply of service must be mentioned</td>
                </tr>
                <tr>
                    <td>23</td>
                    <td>Supply Type Code</td>
                    <td>Code will be used to identify types of supply such as business to business, business toconsumer, supply to SEZ/exports with or without payment, and deemed export.</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>Item Description</td>
                    <td>Simply put, the relevant description is generally used for the item in the trade.However, more clarity is needed on how it needs to be described for every twoor more items belonging to the same HSN code. </td>
                </tr>
                <tr>
                    <td>25</td>
                    <td>HSN Code</td>
                    <td>The applicable HSN code for particular goods/service must be entered</td>
                </tr>
                <tr>
                    <td>26</td>
                    <td>Item Price</td>
                    <td>The unit price, exclusive of GST, before subtracting item price discount, can&apos;t benegative</td>
                </tr>
                <tr>
                    <td>27</td>
                    <td>Assessable Value</td>
                    <td>The price of an item, exclusive of GST, after subtracting the item price discount.Hence, gross price (-) discount = net price item, if any cash discount isprovided at the time of sale</td>
                </tr>
                <tr>
                    <td>28</td>
                    <td>GST Rate</td>
                    <td>The GST rate represented as a percentage that is applicable to the item beinginvoiced</td>
                </tr>
                <tr>
                    <td>29</td>
                    <td>IGST Value, CGST Value and SGST Value Separately</td>
                    <td>For each individual item, IGST, CGST and SGST amounts have to be specified</td>
                </tr>
                <tr>
                    <td>30</td>
                    <td>Total Invoice Value</td>
                    <td>The total amount of the Invoice with GST. Must be rounded to a maximum of 2 decimals</td>
                </tr>
                </tbody>
                </table>
                </div>
              </div>
              <div className="blog-section">
                <h4>What is the workflow of e-invoice?</h4>
                <p className="large-card-body text-[#1a1a1a]">The workflow of e-invoice involves several steps:</p>
                <ol style={{ listStyleType: "none" }}>
                  <li><i>Step 1: Invoice Generation:</i><br/>Generate invoices as usual, ensuring they adhere to e-invoice schema with mandatory fields like invoice type, number, date, supplier and buyer details, dispatch details, and tax information. Use accounting software or offline tools for JSON generation.</li>
                  <br/>
                  <li><i>Step 2: IRN Generation:</i><br/>Generate a hash based on specific parameters like GSTIN, invoice number, and financial year to create the Invoice Reference Number (IRN) using prescribed algorithms.</li>
                  <br/>
                  <li><i>Step 3: JSON Upload:</i><br/>Upload the JSON of the final invoice directly on the Invoice Registration Portal (IRP) or through GST Suvidha Provider (GSP) or third-party apps.</li>
                  <br/>
                  <li><i>Step 4: Hash Validation:</i><br/>If the hash is uploaded, validate it against the Central Registry of the GST System to ensure uniqueness. IRP generates a QR code and digitally signs the invoice, making it available to the supplier and buyer via email.</li>
                </ol>
              </div>
              <div className="blog-section">
                <h4>How to generate e-invoice in the GST portal?</h4>
                <p className="large-card-body text-[#1a1a1a]">
                To generate e-invoices on the GST portal, follow these steps:</p>
                <ol style={{ listStyleType: "number" }}>
                  <li>Visit the e-invoice portal and click on the Registration button.</li>
                  <li>Choose e-Invoice Enablement and enter your company&apos;s GSTIN.</li>
                  <li>Complete OTP verification and provide annual turnover details for the relevant financial year.</li>
                  <li>Submit the information to register for e-invoicing.</li>
                  <li>Log in to the e-invoice portal and upload B2B invoices using your preferred mode to generate the Invoice Reference Number (IRN).</li>
                </ol>
              </div>
              <div className="blog-section">
                <h4>Who must generate e-invoice and its applicability? </h4>
                <p className="large-card-body text-[#1a1a1a]">
                E-invoicing is mandatory for businesses with a specified turnover limit set by the tax authorities. The applicability of e-invoicing varies by country, with thresholds and requirements subject to change. Typically, businesses meeting or exceeding the turnover threshold must generate e-invoices for transactions. Here&apos;s a simplified table illustrating e-invoicing applicability:                </p>
                <p className="large-card-body text-[#1a1a1a]">
                Turnover criteria for e-Invoice limit
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
                      <th>Applicable to taxpayers having an aggregate turnover of more than</th>
                      <th>Applicable Date</th>
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
                E-invoicing aims to enhance tax compliance, reduce errors, and improve efficiency in business transactions.{" "}
                </p>
              </div>
              <div className="blog-section">
                <h4>What are the modes of generating e-Invoice? </h4>
                <p className="large-card-body text-[#1a1a1a]">
                The modes of generating e-Invoices offer flexibility to taxpayers based on their preferences and requirements. Various options are available, including Web-Based, API Based, SMS Based, Mobile App, offline tool-based, and GSP based methods. Taxpayers can choose the most suitable mode for their business operations, ensuring seamless compliance with e-Invoicing regulations. Whether accessing through web platforms, utilizing APIs for integration, leveraging mobile apps for convenience, or utilizing offline tools, taxpayers have a range of options to streamline their e-Invoice generation process.</p>
              </div>
              <div className="blog-section">
                <h4>Systems before and after e-invoicing </h4>
                <p className="large-card-body text-[#1a1a1a]">
                Before the implementation of e-invoicing systems, businesses relied on manual or paper-based invoicing processes, which were often time-consuming, error-prone, and labour-intensive. This traditional approach involved printing, mailing, and manually processing invoices, leading to delays, inefficiencies, and increased risk of errors. With the introduction of e-invoicing systems, businesses transitioned to electronic invoicing methods, streamlining the invoicing process, reducing paperwork, and automating invoice generation, delivery, and payment. E-invoicing systems integrate with accounting software, enabling real-time tracking, faster payment processing, and improved accuracy, ultimately enhancing efficiency and reducing costs for businesses.
                </p>
              </div>
              <div className="blog-section">
                <h4>Time limit to generate e-invoice</h4>
                <p className="large-card-body text-[#1a1a1a]">
                The time limit to generate an e-invoice typically varies depending on the regulations set forth by tax authorities or governing bodies. In many jurisdictions, businesses are required to generate e-invoices at the time of supply or within a specified timeframe after the transaction occurs. This timeframe may range from immediate generation upon supply to within 24 hours or a few days after the transaction. Adhering to these time limits ensures timely reporting of transactions, enhances tax compliance, and facilitates seamless integration with accounting and tax systems for accurate record-keeping and reporting purposes.
                </p>
              </div>
              <div className="blog-section">
                <h4>How to register for an e-invoicing system?</h4>
                <p className="large-card-body text-[#1a1a1a]">
                Registering for an e-invoicing system typically involves several steps, depending on the requirements set by the tax authorities or governing bodies. Businesses may need to visit the designated e-invoicing portal and complete an online registration process by providing relevant details such as company information, taxpayer identification number, contact details, and any other required documentation. Once the registration is submitted, businesses may undergo verification processes to validate their identity and eligibility for e-invoicing. Upon successful registration, businesses receive access credentials or digital certificates to enable them to start generating and transmitting e-invoices electronically in compliance with regulatory requirements.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                E-invoicing has revolutionized the way businesses handle invoicing, offering enhanced compliance, efficiency, and accuracy. By adopting e-invoicing, businesses can streamline their invoicing processes, reduce errors, and improve overall financial management.

E-invoicing under GST is a game-changer for businesses, providing a streamlined, efficient, and compliant way to handle invoicing. Embrace the digital shift and discover how e-invoicing can transform your business operations.                </p>
              </div>
            </div>
          </div>
          <hr className="author-data-divider mobile-view" />
          <div className="author-data block md:inline-block w-full md:w-[23.71%] md:min-w-[281px]">
            <div className="section-tags author-data-title">Written by</div>
            <div className="authors ">
              <div className="author">
                <Image
                  src="/blogs/e-invoicing-under-GST/author.png"
                  alt="author"
                  height={80}
                  width={80}
                  className="rounded-[60%]"
                />
                <div className="author-identity">
                  <div className="author-name">Akshay Hingmire</div>
                  <div className="author-designation">Head of Finance</div>
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

export default EInvoicingUnderGST;
