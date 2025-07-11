import Image from "next/image";

import Amazon from "@/Images/Amazon/hero-amazon-image.svg";

function AmazonHeader({ redirectToSignup, manrope }) {
  return (
    <>
      <header className="flex justify-center items-center px-4 py-20 sm:px-10 ">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 ">
          <div className="flex flex-col gap-10 lg:items-start">
            <div className="flex flex-col gap-4 sm:gap-5 pt-20">
              <h2 className="common-h2-heading max-w-2xl w-full">
                Seamlessly collect payments from{" "}
                <span className="common-h2-heading custom-text-orange italic">
                  Amazon Global
                </span>{" "}
                and other international customers
              </h2>
              <div className="flex  flex-wrap">
                <div className={"common-body1-text custom-text-grey600 "}>
                  Lower Costs{" "}
                </div>
                <div className={"common-body1-text custom-text-grey600 "}>
                  | Automated FIRA{" "}
                </div>
                <div className={"common-body1-text custom-text-grey600 "}>
                  | End-to-end tracking
                </div>
              </div>
            </div>
            <button
              onClick={redirectToSignup}
              className={
                "background-custom-blue1 py-2.5 px-6 common-btn-text custom-text-white rounded-3xl sign-up-blue-btn-drop-shadow hover:scale-110 duration-300 " +
                manrope.className
              }
            >
              Get your accounts now
            </button>
          </div>
          <Image
            src={Amazon}
            width={509}
            height={527}
            alt="img"
            quality={100}
            className=""
          />
        </div>
      </header>
    </>
  );
}

export default AmazonHeader;
