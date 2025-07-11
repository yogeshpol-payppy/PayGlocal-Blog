import { Manrope } from "next/font/google"

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})
function SamXAdvancedTechSection({title,para,parentdivWidthClass=''})
{
    return(
        <>
            <div className={`flex flex-col gap-2 lg:gap-3 border-l-2 pl-5 custom-border-blue ${parentdivWidthClass}  w-full`}>
                <h6 className="common-h6-heading custom-text-grey800">{title}</h6>
                <p className={"common-body3-text custom-text-grey600 font-medium " + manrope.className}>{para}</p>
            </div>
        </>
    )
}

export default  SamXAdvancedTechSection