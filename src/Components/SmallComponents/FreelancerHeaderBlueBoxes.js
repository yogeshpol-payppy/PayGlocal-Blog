import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})
function FreelancerHeaderBlueBoxes({price,title})
{
    return(
        <>
            <div className="flex flex-col border-l  custom-border-grey200 pl-4 lg:pl-6">
                <h3 className="common-h3-heading custom-text-blue1 ">{price}</h3>
                <p className={"common-body3-text custom-text-grey600 " + manrope.className}>{title}</p>
            </div>
        </>
    )
}
export default FreelancerHeaderBlueBoxes;