import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})
//valuegradient style is definedd in Homepage.css
function HomepageAccesPaymentsGradientButtons({value,title,valueGradient=' custom-text-purple1 '})  
{
    return(
        <>
            <div className="accept-payments-info-boxes background-custom-white flex-shrink-0 w-full flex flex-col items-center py-6 px-5 sm:px-6 sm:pt-7 sm:pb-8 gap-1 rounded-2xl">
                <h3 className={`custom-text-white common-h3-heading  ${valueGradient}`}>{value}</h3>
                <p className={" common-h2-text custom-grey600 text-center " + manrope.className}>{title}</p>
            </div>
        </>
    )
}
export default HomepageAccesPaymentsGradientButtons;