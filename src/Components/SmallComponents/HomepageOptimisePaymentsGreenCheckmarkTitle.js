import { Manrope } from "next/font/google";
import Image from "next/image";

import GreenCheckmark from '@/Images/Homepage/green-checkmark.svg';


const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})
//valuegradient style is definedd in Homepage.css
function HomepageOptimisePaymentsGreenCheckmarkTitle({title})  
{


    return(
        <>
            <div className="flex flex-col lg:flex-row items-center gap-2 optimise-payments-three-paras ">
                <Image src={GreenCheckmark} width={25} height={25} alt='img' quality={100} />
                <p className={"common-body2-text custom-text-grey600  text-center lg:text-start " + manrope.className}>{title}</p>
            </div>
        </>
    )
}
export default HomepageOptimisePaymentsGreenCheckmarkTitle;