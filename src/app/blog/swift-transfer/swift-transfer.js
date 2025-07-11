'use client';
// /* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";


const SWIFT = () => {
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
            origin + "/blogs/swift-international-money-transfer/header.png"
          }
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="International Money Transfer Methods: A Comprehensive Guide for Indian Businesses"
        />
        <meta
          name="twitter:description"
          content="Discover the best money transfer methods for international transfers, pros and cons of which. Find more secure and efficient ways to send and receive money globally."
        />
        <meta
          name="twitter:image"
          content={
            origin + "/blogs/swift-international-money-transfer/header.png"
          }
        />
      </Head>
      <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px]  pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content gap-x-[6.5rem]">
        <Image
          src="/blogs/swift-transfer/header.png"
          alt="swift"
          height={88}
          width={1184}
          className="rounded-[40px] mb-[2.25rem] md:mb-[5.375rem]"
        />
        <br />
        <div className="flex flex-col md:flex-row justify-between flex-[7 auto] w-100 gap-x-[5rem]">
          <div className="blog block md:inline md:min-w-[66.29%]">
            <div className="blog-info section-tags">
              <div className="blog-tag ">Multi Currency Accounts</div>
              <div className="blog-read-time">5 min read</div>
              <hr className="blog-info-divider" />
              <div className="blog-date">17 November 2023</div>
            </div>
            <h3 className="blog-title  common-h4-heading">
              SWIFT: The network powering international money transfer
            </h3>
            <hr className="blog-divider" />
            <div className="blog-content large-card-body text-[#1a1a1a]">
              <div className="blog-section">
                <p className="large-card-body text-[#1a1a1a]">
                  SWIFT, short for Society for Worldwide Interbank Financial
                  Telecommunication, stands at the heart of international
                  financial transactions, powering the global movement of money
                  and securities. Established in 1973 in Belgium, SWIFT operates
                  as a cooperative society, offering a vast messaging network
                  that enables over 11,000 financial institutions in 200
                  countries to exchange vital information securely.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  SWIFT doesn&apos;t directly handle funds but provides a
                  standardized platform for financial entities to communicate
                  payment instructions swiftly and accurately. This standardized
                  approach ensures that international payments are processed
                  quickly and precisely, making it an indispensable tool for
                  businesses dealing with significant financial volumes and
                  requiring timely transactions. In November 2022, the
                  institutions affiliated with SWIFT transmitted an average of
                  44.8 million messages daily across the network.
                </p>
              </div>
              <h3>How does SWIFT work?</h3>
              <div className="blog-section">
                <h4>SWIFT Code / BIC </h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Financial institutions participating in the SWIFT banking
                  system are assigned a distinctive identifier known as a SWIFT
                  code or SWIFT ID, sometimes referred to as a BIC code (Bank
                  Identifier Code) or ISO 9362 code. This unique code comprises
                  8 to 11 characters, each serving a specific purpose:
                </p>
                <ol
                  className="large-card-body text-[#1a1a1a]"
                  style={{ listStyleType: "disc" }}
                >
                  <li>
                    The first four characters identify the bank itself (e.g.,
                    ABCD for ABCD Bank Limited).
                  </li>
                  <li>
                    The following two characters represent the country where the
                    bank is located (e.g., IN for India).
                  </li>
                  <li>
                    The subsequent two characters indicate the head office
                    location (e.g., BB for Bangalore).
                  </li>
                  <li>
                    Optionally, the next three characters signify the individual
                    branch, which can sometimes be replaced by &quot;XXX.&quot;
                    (e.g. BNG)
                  </li>
                </ol>
              </div>
              <div className="blog-section">
                <h4>Information required for a SWIFT transfer</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Consider this scenario: A customer in the US wishes to send
                  money to a friend in Bangalore, India. They visit a local bank
                  branch and provide the following details:
                </p>
                <ol
                  className="large-card-body text-[#1a1a1a]"
                  style={{ listStyleType: "disc" }}
                >
                  <li>Recipient&apos;s full name</li>
                  <li>Recipient bank&apos;s full name and branch address</li>
                  <li>Recipient&apos;s bank&apos;s SWIFT or BIC code</li>
                  <li>
                    Recipient&apos;s account number, amount and currency to be
                    transferred
                  </li>
                  <li>Payment reference, if required</li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  With all the necessary details provided, the customer
                  initiates the SWIFT payment process to transfer funds securely
                  to their friend in Bangalore, India. The bank follows a series
                  of steps to ensure a smooth international transaction:
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>Verification of Customer Details: </span>
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  The customer&apos;s bank&apos;s representative verifies the
                  customer&apos;s identity and the provided information,
                  ensuring accuracy before proceeding with the transaction.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>Initiating the SWIFT Payment Instruction:</span>
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Using the details provided, customer&apos;s bank creates a
                  SWIFT payment instruction message. This message includes
                  information such as the recipient&apos;s full name, the full
                  name and branch address of the destination bank , the SWIFT
                  code (BIC) of the recipient&apos;s bank, the recipient&apos;s
                  account number, the specified amount in the desired currency,
                  and any necessary payment reference.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>Authentication and Encryption: </span>
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  The payment instruction message is authenticated and encrypted
                  to ensure the confidentiality and integrity of the data during
                  transmission. This security measure is crucial to protect
                  sensitive financial information.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>Routing the SWIFT Message: </span>
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  The authenticated and encrypted SWIFT message is sent through
                  the secure SWIFT network. The message is routed to destination
                  bank using the specified SWIFT code (BIC) for further
                  processing.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>Processing at the destination Limited: </span>
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Upon receiving the SWIFT message, destination bank validates
                  the transaction details. They verify the recipient&apos;s
                  account number, match the payment reference if provided, and
                  confirm the authenticity of the transfer. If all details
                  align, destination bank proceeds with crediting the funds to
                  the recipient&apos;s account.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>Payment Confirmation: </span>
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Once the funds are successfully credited to the
                  recipient&apos;s account, destination bank sends a
                  confirmation message back through the SWIFT network to the
                  customer&apos;s bank. This confirmation serves as proof that
                  the transaction has been completed, providing assurance to the
                  customer and their bank.
                </p>
              </div>
              <div className="blog-section">
                <h4>Role of Intermediary Banks </h4>
                <p className="large-card-body text-[#1a1a1a]">
                  The above process flow assumes that both banks involved in the
                  transaction are part of the SWIFT network. However, In cases
                  where the sender&apos;s and recipient&apos;s banks lack a
                  direct commercial connection, an intermediary bank steps in.
                  Chosen based on existing relationships, this intermediary acts
                  as a bridge between the two banks, relaying the payment
                  message. While adding a layer to the process, the intermediary
                  bank facilitates the transfer. However, it may lead to
                  slightly longer processing times and additional fees. Despite
                  this, the SWIFT network guarantees secure communication and
                  precise fund transfers, enabling seamless global transactions
                </p>
              </div>
              <div className="blog-section">
                <h3>How much does SWIFT cost?</h3>
                <p className="large-card-body text-[#1a1a1a]">
                  SWIFT transfers are a reliable means of sending money
                  internationally, but it&apos;s essential to be aware of the
                  associated costs. The fees for a SWIFT transfer can vary based
                  on multiple factors, including the type of transfer, the banks
                  involved, and the destination country. It&apos;s crucial to
                  understand these fees to ensure a seamless and cost-effective
                  transaction. Below, we&apos;ll break down the different costs
                  you may encounter during a SWIFT transfer:
                </p>
                <ol
                  className="large-card-body text-[#1a1a1a]"
                  style={{ listStyleType: "disc" }}
                >
                  <li>
                    <span>Outgoing Wire Transfer Fee: </span>This fee is charged
                    by the sender&apos;s bank to initiate the SWIFT transfer.
                    It&apos;s essential to note that this fee varies depending
                    on the amount being sent and the destination country.
                  </li>
                  <li>
                    <span>Incoming Payment Fee: </span>The recipient&apos;s bank
                    charges this fee to process the incoming SWIFT transfer.
                    Like the outgoing fee, it can vary based on the amount
                    received and the country of origin.
                  </li>
                  <li>
                    <span>Foreign Exchange Fee: </span>When the sender&apos;s
                    and recipient&apos;s currencies differ, a foreign exchange
                    fee may apply to convert the payment into the correct
                    currency. This fee is influenced by the exchange rate and
                    the bank&apos;s policy.
                  </li>
                  <li>
                    <span>SWIFT Tracing Fee: </span>If a transfer is delayed or
                    issues arise, a bank may charge a tracing fee to investigate
                    the problem. Not all banks impose these fees, and their
                    structures and policies may differ, making it crucial to
                    request a fee breakdown before confirming your SWIFT
                    payment.
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  Banks and financial entities are required to pay a single
                  initial fee to SWIFT to avail its services, in addition to
                  yearly fees influenced by message volume, types, and length.
                  Hence, the fees charged by banks for executing SWIFT will vary
                  based on its fee structure and policies. More often than not,
                  this fee is charged to the customer meaning either the sender
                  or receiver of the money may be tasked with covering the SWIFT
                  fees. The sender has the flexibility to opt for who bears this
                  fee. Banks employ specific codes to monitor the fee payment
                  responsibilities, such as:{" "}
                </p>
                <ol
                  className="large-card-body text-[#1a1a1a]"
                  style={{ listStyleType: "disc" }}
                >
                  <li>
                    <span>&quot;OUR&quot; </span>signifies that the sender
                    covers all fees linked to the transfer.
                  </li>
                  <li>
                    <span>&quot;BEN&quot; </span>signifies that the recipient
                    bears all fees associated with the transfer.
                  </li>
                  <li>
                    <span>&quot;SHA&quot; </span>signifies that the fees are
                    split between the sender and the recipient.
                  </li>
                </ol>
              </div>
              <div className="blog-section">
                <h3>Timelines</h3>
                <p className="large-card-body text-[#1a1a1a]">
                  SWIFT payments, despite their name, are slower than expected,
                  often taking several days for the money to reach the
                  recipient. Delays can occur due to factors such as the number
                  of intermediary banks involved, anti-fraud checks,
                  international money laundering protocols, and time zone
                  differences between the sending and receiving banks.
                  Generally, SWIFT payments take between 3 and 5 days to be
                  processed.
                </p>
              </div>
              <div className="blog-section">
                <h3>Conclusion</h3>
                <p className="large-card-body text-[#1a1a1a]">
                  SWIFT has transformed global payments with its secure and
                  standardized messaging network, enabling seamless transactions
                  between financial institutions worldwide. Despite its
                  efficiency, businesses often struggle with high costs,
                  intricate fee structures, and processing delays when dealing
                  with cross-border payments.{" "}
                  <Link
                    className="alt-pay-hero-cta"
                    style={{ color: "#4071df" }}
                    href="/multi-currency-accounts"
                  >
                    Click here
                  </Link>{" "}
                  to explore how PayGlocal’s multi-currency account helps foster
                  global commerce by overcoming these challenges.
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
                  src="/blogs/swift-transfer/author.jpeg"
                  alt="author"
                  height={80}
                  width={80}
                  className="rounded-[60%]"
                />
                <div className="author-identity">
                  <div className="author-name">Akhil Sukumaran</div>
                  <div className="author-designation">Product Manager</div>
                </div>
              </div>
            </div>
            <BlogSuggestions
              names={[
                "international-payment-challenges",
                "multi-currency-account-india",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SWIFT;
