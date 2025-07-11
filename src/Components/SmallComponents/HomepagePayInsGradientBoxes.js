import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})
function HomepagePayInsGradientBoxes({price='$0',title})
{
    return(
        <>
            <div className={"flex flex-col  gap-1 justify-center items-center rounded-3xl background-custom-white px-6 pt-7 pb-8 document-charges-div w-full flex-shrink "+manrope.className}>
                <h3 className="common-h3-heading background-text-gradient-1   ">{price}</h3>
                <div className={"common-body2-text custom-text-grey600 whitespace-nowrap +" + manrope.className}>{title}</div>
            </div>
        </>
    )
}
export default HomepagePayInsGradientBoxes;