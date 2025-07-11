import Image from "next/image";

import Mca from "@/Images/Mca/MCA.svg";

function McaHeader({ redirectToSignup, manrope }) {
  return (
    <>
      <header className="flex justify-center items-center px-4 py-32 sm:px-10 ">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 ">
          <div className="flex flex-col gap-12 lg:items-start">
            <div className="flex flex-col gap-4 sm:gap-6 max-w-2xl w-full">
              <h2 className="common-h2-heading ">
                Accept international payments in{" "}
                <span className="common-h2-heading custom-text-blue1">
                  multiple currencies{" "}
                </span>{" "}
                easily
              </h2>
              <p className="common-body1-text custom-text-grey600 matterfont ">
                Are you an Indian business? PayGlocal&apos;s multi-currency
                account helps accept payments in 33+ currencies with the best
                rates and banking experience.
              </p>
            </div>
            <button
              onClick={redirectToSignup}
              className={
                "background-custom-blue1 py-2.5 px-6 common-btn-text custom-text-white rounded-3xl sign-up-blue-btn-drop-shadow hover:scale-110 duration-300 " +
                manrope.className
              }
            >
              Sign Up here
            </button>
          </div>
          <Image
            src={Mca}
            width={459}
            height={514}
            alt="img"
            quality={100}
            className=""
          />
        </div>
      </header>
    </>
  );
}

export default McaHeader;
