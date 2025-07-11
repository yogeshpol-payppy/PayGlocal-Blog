import "@/Styles/Footer/PayglocalFooter.css";
import Image from "next/image";

import { JetBrains_Mono } from "next/font/google";
import Logo from "@/Images/Footer/payglocal-logo.svg";
import Link from "next/link";

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

function AmazonFooter({ functionClick }) {
  return (
    <>
      <footer className="background-custom-grey900">
        <div className="payglocal-footer-graphic-image"></div>
        <div className="max-w-6xl w-full flex flex-col items-center gap-14 lg:gap-0 px-4 sm:px-10  lg:mx-auto ">
          <div className="flex flex-col gap-8 items-center max-w-xl w-full py-6 lg:my-14">
            <div className="flex flex-col items-center gap-2">
              <h3 className="common-h3-heading custom-text-white text-center ">
                Ready to take off?
              </h3>
              <p
                className={
                  "common-body1-text custom-text-grey500  text-center "
                }
              >
                Our sales team will get in touch with you within 24 hours.
                Promise!
              </p>
            </div>
            <button
              className="background-custom-blue1 py-2.5 px-6 common-btn-text custom-text-white rounded-3xl sign-up-blue-btn-drop-shadow hover:scale-110 duration-300"
              onClick={functionClick}
            >
              Lets Talk
            </button>
          </div>
          

          <div className="flex flex-col sm:flex-row justify-between items-center w-full py-10 lg:py-5 border-t border-gray-500">
            <div className="mb-5">
              <Image
                src={Logo}
                width={224}
                height={40}
                alt="img"
                quality={100}
                className=""
              />
            <p className={"common-body3-text custom-text-grey300 font-medium "}>
              Copyright 2024. All Rights Reserved
            </p>
            </div>
            <div className="flex flex-col gap-5  py-10 px-5 sm:p-10 lg:py-14 max-w-3xl w-full ">
                        <div className={"custom-text-grey600 font-bold "+jetBrains_Mono.className}>LEGAL</div>
                        <div className="flex gap-6 flex-wrap">
                            <Link href='/compliance' >  <button className="custom-text-grey300 ">Compliance</button>  </Link>
                            <Link href='/merchant-terms' >  <button className="custom-text-grey300 ">Merchant Terms of Use</button>  </Link>
                            <Link href='/privacy-policy' >  <button className="custom-text-grey300 ">Privacy Policy </button>  </Link>
                            <Link href='/cookie-policy' >  <button className="custom-text-grey300 ">Cookie Policy</button>  </Link>
                            <Link href='/grievance-redressal' >  <button className="custom-text-grey300 ">Grievance Redressal Policy</button>  </Link>
                            <Link href='/terms-and-conditions' >  <button className="custom-text-grey300 ">Website Terms of Use</button>  </Link>
                            <Link href='/zero-tolerance-compliance-centre' >  <button className="custom-text-grey300 ">Zero-Tolerance Compliance</button>  </Link>
                            <Link href='/refund-policy' >  <button className="custom-text-grey300 ">Refund Policy</button>  </Link>
                            <Link href='/merchant-onboarding-policy' >  <button className="custom-text-grey300 ">Merchant Onboarding Policy</button>  </Link>

                        </div>
                    </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default AmazonFooter;
