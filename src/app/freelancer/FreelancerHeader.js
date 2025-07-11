// import SignUpBtn from "@/Components/SignUpBtn";
import Image from "next/image";

import Freelancer from "@/Images/Freelancer/freelancer-image.svg";
import FreelancerHeaderBlueBoxes from "@/Components/SmallComponents/FreelancerHeaderBlueBoxes";

function FreelancerHeader({ redirectToSignup, manrope }) {
  return (
    <>
      <header className="flex justify-center items-center px-4 py-20 sm:px-10 ">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 ">
          <div className="flex flex-col gap-12 items-center lg:items-start">
            <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-6 max-w-2xl w-full pt-20 ">
              <h2 className="common-h2-heading text-center lg:text-left">
                <span className="freelancer-text-gradient common-h2-heading">
                  Freelancers
                </span>
                , accept international payments with PayGlocal
              </h2>
              <p className="common-body1-text custom-text-grey600 matterfont text-center lg:text-left">
                Reduce your payment costs upto 50%*
              </p>
            </div>
            <button
              onClick={redirectToSignup}
              className={
                "background-custom-blue1 py-2.5 px-6 common-btn-text custom-text-white rounded-3xl sign-up-blue-btn-drop-shadow hover:scale-110 duration-300 " +
                manrope.className
              }
            >
              Get Started
            </button>
            <div className="flex gap-9  w-full justify-center lg:justify-start">
              <FreelancerHeaderBlueBoxes price={"33+"} title={"Currencies"} />
              <FreelancerHeaderBlueBoxes
                price={"5+"}
                title={"Freelancer platforms"}
              />
              <FreelancerHeaderBlueBoxes price={"180+"} title={"Countries"} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image
              src={Freelancer}
              width={509}
              height={527}
              alt="img"
              quality={100}
              className=""
            />
            <div className="text-[9px] custom-text-grey600 text-center max-w-xs w-full">
              *The logos used herein are only for illustrative purposes and do
              not imply endorsement or marketing of these marketplaces.
            </div>
            <div className="text-[9px] custom-text-grey600 text-center max-w-xs w-full">
              *Reduction of payment costs by 50% may be applicable as per the
              terms and conditions agreed with PayGlocal.
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default FreelancerHeader;
