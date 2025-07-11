import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})
function AboutUsGradientText({value,title,containerClass='',titleClass=' '})
{
    return(
        <>
            <div className={`flex flex-col border-l  custom-border-grey200 ${containerClass}`}>
                <h3 className="common-h3-heading background-text-gradient-1 ">{value}</h3>
                <p className={`common-body3-text custom-text-grey600 ${titleClass}` + manrope.className}>{title}</p>
            </div>
        </>
    )
}
export default AboutUsGradientText;