import GreenCheckmark from '@/Images/Freelancer/greencheckmark.svg';
import '@/Styles/Homepage/payglocalHomepage.css';           //this component contains homepage style so i have to import the homepage style
import Image from "next/image";

function FreelancerPayGradientBoxes({price='$0',title})
{
    return(
        <>
            <div className="flex flex-col p-5 gap-2 background-custom-white lg:max-w-56 w-full  rounded-xl ">
                <div className="flex justify-between items-center w-full ">
                    <h6 className="common-h6-heading matterfont">PAY</h6>
                    <Image src={GreenCheckmark} width={24} height={24} alt="img" quality={100} className="" />
                </div>
                <h3 className="background-text-gradient-1 common-h3-heading">{price}</h3>
                <p className="common-body2-text custom-text-grey500">{title}</p>
            </div>
        </>
    )
}
export default FreelancerPayGradientBoxes;