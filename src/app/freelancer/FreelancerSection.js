"use client";
import Image from "next/image";

import { Manrope } from "next/font/google";
import "@/Styles/Homepage/payglocalHomepage.css"; //section 2 - is from homepage so i have to import the homepage style
import "@/Styles/Amazon/Amazon.css"; //section 2 - is from homepage so i have to import the homepage style

//navbar images
import Logo from "@/Images/Amazon/payglocal-Logo.svg";

//section 2 - accept pay-ins images
import CollectGlobalPayments from "@/Images/Homepage/collect-global-payments.png";
import CollectGlobalPaymentsMobile from "@/Images/Homepage/smart-payment-collection-mobile.png";

import TrackGetStatus from "@/Images/Homepage/track-get-status.png";
import SmartPaymentCollection from "@/Images/Homepage/smart-payment-collection.png";

import { useEffect, useRef, useState } from "react";
import FAQ from "@/Components/FAQ";

//modal images
import ContactUsFormComponent from "@/Components/ContactUsFormComponent";
import FreelancerPayGradientBoxes from "@/Components/SmallComponents/FreelancerPayGradientBoxes";
import { useRouter } from "next/navigation";
import FreelancerHeader from "./FreelancerHeader";
import FreelancerFooter from "./FreelancerFooter";
import { getBase64EncodedCampaignDetails, handleCampaignRedirect } from "@/lib/utils";

const manrope = Manrope({
    subsets: ["latin"],
    display: "swap",
  });

function FreelancerSection() {
  const [influencerId, setInfluencerId] = useState();

  let formSection = useRef();

  let router = useRouter();
  const [campaignDetails, setCampaignDetails] = useState(null);

  // //when someone click on navbar talk to our team button this function will scroll to the bottom form section
  function handleContactToTeamBtn() {
    formSection.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    if (window?.location?.pathname.includes("/inf/")) {
      const id = window?.location?.pathname.split("/")[2];
      setInfluencerId(id);
    }
  }, []);

  useEffect(() => {
    const encodedDetails = getBase64EncodedCampaignDetails();
    setCampaignDetails(encodedDetails);
  }, []);

  const redirectToSignup = () => {
    handleCampaignRedirect(campaignDetails, influencerId);
  };

  let FAQData = [
    {
      question:
        "What is the difference between PayGlocal's multi-currency account and traditional bank accounts?",
      answer:
        "PayGlocal's multi-currency account enables you to accept payments like a local entity in the markets of interest. This allows for faster settlements and less conversion costs when compared to traditional bank accounts.",
    },
    {
      question: "Is this a global account or a local account?",
      answer:
        "PayGlocal’s multi-currency account set up gives you access to a global SWIFT account to process 33+ currencies as well as local currency accounts in four major geographies (United States, Canada, United Kingdom and European Union).",
    },
    {
      question: "What are the currencies supported for me to collect payments?",
      answer:
        "PayGlocal supports 33+ currencies through the global SWIFT account and 4 major currencies (USD, EUR, CAD and GBP) through local accounts for payment collection by Indian merchants.",
    },
    {
      question:
        "What is the timeline in which I will receive the payment to my Indian Bank account?",
      answer:
        "Once the payment is made into your multi-currency account and the supporting documents have been submitted by you with-in the stipulated time, it takes two to three working days for you to access funds in your Indian bank account.",
    },
    {
      question: "Does PayGlocal provide FIRC?",
      answer:
        "Yes, PayGlocal provides eFIRA/FIRC as generated by the partner banks once the amount is settled.",
    },
    {
      question: "How long can I hold the money in the multi-currency account?",
      answer:
        "PayGlocal’s multi-currency account product is not used to hold money. Once your multi-currency account receives money, you must submit supporting documents to get the settlement with-in two working days. If the documents are not submitted, the money goes back to the sender automatically.",
    },
    {
      question: "How do I track the transaction status?",
      answer:
        "You can check the status of your funds on the PayGlocal dashboard. You are also notified via email once the funds are transferred to your multi-currency account and settled into your Indian bank account to provide complete visibility into the process.",
    },
    {
      question: "What are payment rails and how does it matter?",
      answer:
        "Payment rails are the infrastructure that supports different payment transfers. If the wrong payment rails are used during fund transfers, the payment is automatically reverted to the customer. Always use the guided account details for sharing with your fund senders to ensure they are received in the safest and fastest mode possible.",
    },
    {
      question:
        "Are cash and cheque payments supported through multi-currency account?",
      answer:
        "No, multi-currency accounts can only support online bank transfers it doesn't support cash, cheque payments.",
    },
  ];

  return (
    <>
      <FreelancerHeader redirectToSignup={redirectToSignup} manrope={manrope} />
      {/* fixed navbar */}
      <nav className="flex justify-between items-center background-custom-white w-full fixed px-4 sm:px-10 py-5 z-10 top-0 left-0">
        <Image
          src={Logo}
          width={224}
          height={40}
          alt="img"
          quality={100}
          className="market-payglocal-logo cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        />
        <button
          className={
            "background-custom-blue1 py-2.5 px-6 common-btn-text custom-text-white rounded-3xl sign-up-blue-btn-drop-shadow hover:scale-110 duration-300 "
          }
          onClick={handleContactToTeamBtn}
        >
          Talk to our team
        </button>
      </nav>

      {/* section 2 - feature grid section */}
      <section className="flex flex-col gap-14 py-20 px-4 sm:px-10  justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center home-section2-access-pay-container">
          <h2 className="common-h2-heading  text-center custom-text-black max-w-4xl w-full ">
            PayGlocal empowers freelancers with extensive features
          </h2>
        </div>

        <div className="home-section2-grid-parent-container">
          <div className="grid grid-cols-1 xl:grid-cols-2  pt-2.5 box-border home-section2-grid-container gap-2.5">
            <div className="pt-10 sm:pt-12 pl-4 sm:pl-14 lg:pl-12 pr-4 sm:pr-14 lg:pr-12 pb-10 sm:pb-12 flex flex-col  justify-center lg:justify-start  gap-4 sm:gap-10 rounded-3xl background-custom-grey50 compliance-management-container  xl:relative overflow-hidden ">
              <div className="flex flex-col justify-center lg:justify-start gap-2 effortless-compliance-management-title-para-container">
                <h5 className="common-h5-heading custom-text-black  text-center lg:text-start ">
                  Get transparent pricing
                </h5>
                <p
                  className={
                    "common-body2-text custom-text-grey600  collect-global-para  text-center lg:text-start "
                  }
                >
                  Enjoy clear pricing and standard rates without any markup or
                  hidden charges.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-1">
                <FreelancerPayGradientBoxes
                  price="$15"
                  title={"for transactions up to $2000 USD"}
                />
                <FreelancerPayGradientBoxes
                  price="$25"
                  title={"for transactions between $2000 and $10000."}
                />
              </div>
            </div>

            <div className="pt-10 sm:pt-12 pl-4 sm:pl-14 lg:pl-12 pr-4 sm:pr-14 lg:pr-12 pb-10 sm:pb-12 flex flex-col justify-center lg:justify-start  gap-4 sm:gap-10 rounded-3xl background-custom-grey50 collect-global-payments-container xl:relative overflow-hidden xl:col-start-2 xl:col-end-3 lg:row-start-1 lg:row-end-3">
              <div className="flex flex-col justify-center lg:justify-start gap-2 collect-global-payments-title-para-container ">
                <h5 className="common-h5-heading custom-text-black  text-center lg:text-start ">
                  Accept global currencies
                </h5>
                <p
                  className={
                    "common-body2-text custom-text-grey600  text-center lg:text-start collect-global-para "
                  }
                >
                  Collect payments locally in USD, GBP, EUR, and CAD, and
                  globally in 33 currencies from 180+ countries via a global
                  currency account.
                </p>
              </div>
              <Image
                src={CollectGlobalPayments}
                width={462}
                height={260}
                quality={100}
                alt="img"
                className=" xl:absolute xl:bottom-14 xl:right-16 hidden sm:block"
              />
              <Image
                src={CollectGlobalPaymentsMobile}
                width={271}
                height={314}
                quality={100}
                alt="img"
                className=" xl:absolute xl:bottom-14 xl:right-16 block sm:hidden"
              />
            </div>

            <div className="pt-10 pb-0 sm:pt-12 pl-4 sm:pl-14 lg:pl-12 pr-4 sm:pr-14 lg:pr-12  xl:pb-12   flex flex-col  justify-center lg:justify-start  gap-4 lg:gap-10 rounded-3xl background-custom-grey50 smart-payment-collection-container   xl:relative overflow-hidden  lg:row-start-2 lg:row-end-4">
              <div className="flex flex-col justify-center lg:justify-start gap-2 smart-payment-collection-title-para-container ">
                <h5 className="common-h5-heading custom-text-black  text-center lg:text-start ">
                  Smart payment collection
                </h5>
                <p
                  className={
                    "common-body2-text custom-text-grey600   text-center lg:text-start "
                  }
                >
                  Manage multi-currency transactions easily with transparent
                  pricing, instant notifications, and downloadable FIRA from the
                  dashboard.
                </p>
              </div>
              <Image
                src={SmartPaymentCollection}
                width={453}
                height={298}
                quality={100}
                alt="img"
                className="xl:absolute xl:bottom-0  xl:-right-10"
              />
            </div>

            <div className="pt-10 sm:pt-12 pl-4 sm:pl-14 lg:pl-12 pr-4 sm:pr-14 lg:pr-12 pb-10 sm:pb-12  flex flex-col  justify-center lg:justify-start  gap-4 sm:gap-10 rounded-3xl background-custom-grey50 track-get-status-container xl:relative overflow-hidden xl:col-start-2 xl:col-end-3">
              <div className="flex flex-col justify-center lg:justify-start gap-2  track-and-get-status-container ">
                <h5 className="common-h5-heading custom-text-black  text-center lg:text-start ">
                  Track and get status
                </h5>
                <p
                  className={
                    "common-body2-text custom-text-grey600  collect-global-payments-para  text-center lg:text-start "
                  }
                >
                  Stay informed with frequent notifications on your fund status
                  every step of the way.
                </p>
              </div>
              <Image
                src={TrackGetStatus}
                width={562}
                height={215}
                quality={100}
                alt="img"
                className=" xl:absolute xl:bottom-6  xl:right-0 track-and-get-status-img"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
        <button
              onClick={redirectToSignup}
              className={
                "background-custom-blue1 py-2.5 px-6 common-btn-text custom-text-white rounded-3xl sign-up-blue-btn-drop-shadow hover:scale-110 duration-300 " +
                manrope.className
              }
            >
              Get Started
            </button>
        </div>
      </section>

      {/* section - 1 form section */}
      <section
        className="flex flex-col gap-14 py-20 px-4 sm:px-10  justify-center items-center background-custom-grey50"
        ref={formSection}
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center lg:items-start  max-w-5xl w-full">
          <div className="flex flex-col gap-4 sm:max-w-[472px]">
            <div className="flex flex-col gap-2 5">
              <h3 className="common-h3-heading text-center lg:text-left">
                Start. Grow. Thrive.
              </h3>
              <h5 className="common-h5-heading custom-text-blue1 text-center lg:text-left">
                Your freelance business deserves it all!
              </h5>
            </div>
            <p
              className={
                "custom-text-grey600 common-body1-text lg:max-w-64 text-center lg:text-left "
              }
            >
              Help us with your details and we will connect with you ASAP!
            </p>
          </div>

          <ContactUsFormComponent
            modalPresent={true}
            modalTitle="Start. Grow. Thrive."
            modalSubtitle="Your freelance business deserves it all!"
            talkToOurTeamBtnView={true}
            formWidthClass={"sm:max-w-[472px]"}
            source="Freelancer Landing"
            influencerId={influencerId}
            campaignDetails={campaignDetails}
          />
        </div>
      </section>

      {/* FAQ  */}
      <FAQ FAQData={FAQData} />
      <FreelancerFooter />
    </>
  );
}

export default FreelancerSection;
