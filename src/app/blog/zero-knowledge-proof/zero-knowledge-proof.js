'use client';
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";


const ZeroKnowledgeProof = () => {
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
          content={origin + "/blogs/zero-knowledge-proof/header.png"}
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Click, Click, Goose! - What do your clicks say about you?"
        />
        <meta
          name="twitter:description"
          content="Through this blog, we hope to help the layman understand how
                  their user interaction can be used in a positive manner, while
                  data engineers and aspirants in the field can be inspired by
                  how the idea can be implemented in their own ways. We had fun
                  working on this project, and we hope you have fun too!"
        />
        <meta
          name="twitter:image"
          content={origin + "/blogs/zero-knowledge-proof/header.png"}
        />
      </Head>
      <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px]  pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content">
        <Image
          src="/blogs/zero-knowledge-proof/header.png"
          alt="Click click goose"
          height={88}
          width={1184}
          className="rounded-[20px] md:rounded-[40px] mb-[2.25rem] md:mb-[5.375rem]"
        />
        <br />
        <div className="flex flex-col md:flex-row justify-between flex-[7 auto] w-100 gap-x-[6.5rem]">
          <div className="blog block md:inline md:min-w-[66.29%]">
            <div className="blog-info section-tags">
              <div className="blog-tag ">Tech</div>
              <div className="blog-read-time">6 min read</div>
              <hr className="blog-info-divider" />
              <div className="blog-date">14 Sept 2023</div>
            </div>
            <h3 className="blog-title  common-h4-heading">
              Zero-Knowledge Proof: Redefining Data Privacy
            </h3>
            <hr className="blog-divider" />
            <div className="blog-content large-card-body text-[#1a1a1a]">
              <div className="blog-section">
                <p className="large-card-body text-[#1a1a1a]">
                  In an age where information flows endlessly through the veins
                  of the internet, the question of security & privacy has grown
                  from a whisper to a resounding chorus, especially in the
                  payments industry. As an attempt to tackle these problems,
                  we&apos;ve witnessed the rise of encryption methods that
                  promise a cloak of security for our data, with keys and
                  algorithms standing guard against prying eyes. From symmetric
                  to asymmetric encryption, each technique has sought to ensure
                  that only the intended recipient can decipher the message – a
                  digital version of a sealed envelope for our virtual
                  correspondence.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Yet, amidst their effectiveness, all these methods are tied by
                  a common obstacle – they deal with{" "}
                  <span>
                    <i>retrievable data</i>
                  </span>
                  . No matter the layers of protection, the underlying challenge
                  is that the data in question is retrievable in plain text
                  through decryption, which means although the data might be
                  secure, it won’t necessarily be{" "}
                  <span>
                    <i>private</i>
                  </span>
                  .
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  In other words, although data is secure over the network and
                  safe from unauthorised access and malicious intent, it will
                  still be available to the receiver- which may or may not be
                  someone we can trust. In <u>fact</u>, 98% of security breaches
                  are caused by <span>human error</span>, hacking, and malware.
                  The bottom line is- we do not have complete control over who
                  on the other end is viewing our sensitive information.
                </p>
              </div>
              <div className="blog-section">
                <h4 className="common-h6-heading">Zero Knowledge Proof- A Knight in Shining Armour</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Zero-knowledge proofs (ZKP) present a different paradigm
                  altogether. Imagine being able to prove the validity of a
                  statement without ever revealing the statement itself. It
                  sounds counterintuitive, yet it&apos;s the cornerstone of this
                  cryptographic innovation. Through complex mathematical
                  protocols, zero-knowledge proofs allow you to prove that you
                  know a certain piece of information without disclosing that
                  information itself. It&apos;s like being able to confirm you
                  possess the key to a locked door without ever revealing the
                  shape of the key or what&apos;s behind the door.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Typically in real-life ZKP Applications, two parties are
                  involved- the <span>prover</span> and the{" "}
                  <span>verifier</span>. The prover is responsible for
                  establishing a certain claim, while the verifier&apos;s role
                  is to authenticate this claim. In other words, The prover must
                  be able to showcase to the verifier the legitimacy of a
                  statement without divulging any extra details about the
                  statement.
                </p>
              </div>
              <div className="blog-section">
                <h4 className="common-h6-heading">How Does it work?</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Consider a library card as an example of a zero-knowledge
                  proof. Imagine you want to prove to the librarian that you are
                  a valid library member without revealing your actual name. You
                  could present a digital token generated by the library&apos;s
                  system, scanned from your library card. The librarian can then
                  use this code to verify your membership status without knowing
                  your personal details, ensuring your privacy while confirming
                  your access to the library&apos;s resources.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Similarly, a voter can prove that their vote was cast simply
                  by providing their National ID without revealing any extra
                  information about themselves, or who they voted for.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  In both these examples, the prover is able to provide proof of
                  eligibility without revealing any additional private
                  information.
                </p>
              </div>
              <div className="blog-section">
                <h4 className="common-h6-heading">Applying ZKP in the real world</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Zero Knowledge Proof can enable a world where you can verify
                  your age for an online service without actually disclosing
                  your birthdate, or demonstrate your eligibility for a loan
                  without revealing your financial details- and these examples
                  only scratch the surface of what zero-knowledge proofs can
                  achieve. Let&apos;s dive into the practical applications of
                  zero-knowledge proofs in the payments sector, exploring how
                  this groundbreaking concept is reshaping our interaction with
                  money across borders and digital platforms.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>Anti-Money Laundering (AML):</span> A crucial issue of
                  the payments industry is combating money laundering.
                  Zero-knowledge proofs can enable various parties- like banks,
                  merchants, traders, etc- to validate the legitimacy of
                  transactions without exposing sensitive Personal Identifiable
                  Information. This can aid in identifying suspicious patterns
                  and behaviours while keeping the actual data hidden from
                  unauthorized access.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>Risk & Fraud Management</span>: Zero-knowledge proofs
                  offer a powerful tool in risk assessment and Fraud Detection.
                  Financial institutions and Payment Gateways can assess
                  transaction risk and verify transaction legitimacy without
                  needing full access to transaction data, ensuring that the
                  information remains confidential while risk evaluations are
                  conducted.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>Know Your Customer (KYC):</span> KYC processes often
                  involve sharing a substantial amount of personal data. With
                  zero-knowledge proofs, individuals can prove their identity
                  without revealing extraneous information. This enhances
                  privacy while still enabling compliance with regulatory
                  requirements.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  As we delve deeper into the essence of private personal data,
                  we uncover the intricate balance between sharing information
                  for convenience and safeguarding the privacy of our
                  identities.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Zero-knowledge proofs emerge as a beacon of hope in this
                  arena, championing the idea that privacy and convenience can
                  coexist harmoniously in the digital age. With their unique
                  ability to verify information without exposing the underlying
                  data, Zero Knowledge Proof offers a solution that proves very
                  valuable for data exchange and opens a plethora of
                  possibilities.
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
                  src="/blogs/zero-knowledge-proof/author2.jpeg"
                  alt="author"
                  height={60}
                  width={60}
                  className="author-image rounded-[60%]"
                />
                <div className="author-identity">
                  <div className="author-name">Ansh Nigam</div>
                  <div className="author-designation">Intern</div>
                </div>
              </div>
              <div className="author">
                <Image
                  src="/blogs/click-click-goose/author1.png"
                  alt="author"
                  height={60}
                  width={60}
                  className="rounded-[60%] "
                />
                <div className="author-identity">
                  <div className="author-name">Sanjana Palissetti</div>
                  <div className="author-designation">
                    Senior Software Developer
                  </div>
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

export default ZeroKnowledgeProof;
