import { JetBrains_Mono, Manrope } from "next/font/google"



const jetBrains_Mono=JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})
const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})
function SamXHeaderSanctionToolDetail({containerAllignment=' lg:items-start ',contentAllignment=' lg:text-left '})
{
    return(
        <>
            <div className={`flex flex-col gap-4 items-center ${containerAllignment}`}>
                <div className={"common-all-caps custom-text-blue1 " + jetBrains_Mono.className}>Sanction screening</div>
                <div className={`flex flex-col gap-1 items-center ${containerAllignment}`}>
                    <h1 className={`common-h1-heading text-center custom-text-grey900 ${contentAllignment}`}>SamruddhiX</h1>
                    <h2 className={`common-h2-heading text-center custom-text-grey900 ${contentAllignment}`}>Sanctions Screening with Privacy & Precision</h2>
                </div>
                <p className={`common-body1-text custom-text-grey600 lg:max-w-sm w-full text-center ${contentAllignment} ` + manrope.className}>Ensure your business stays compliant with global AML regulations—instantly and securely.</p>
            </div>
        </>
    )
}

export default  SamXHeaderSanctionToolDetail;