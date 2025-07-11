import { Manrope } from "next/font/google"
import Image from "next/image"

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})
function SamXProtectingBuisnessInfo({imgName,title,para})
{
    return(
        <>
            <div className="flex flex-col gap-3">
                <Image src={imgName} width={28} height={28} alt="img" quality={100} className="" />
                <h6 className="common-h6-heading">{title}</h6>
                <p className={"common-body3-text custom-text-grey600 " + manrope.className}>{para}</p>
            </div>
        </>
    )
}

export default  SamXProtectingBuisnessInfo