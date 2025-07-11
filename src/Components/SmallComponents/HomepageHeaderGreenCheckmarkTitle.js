import Image from "next/image";

import CheckMark from '@/Images/Homepage/checkmark.svg';
import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})
function HomepageHeaderGreenCheckmarkTitle({title})
{
    return(
        <>
            <div className={"flex items-center gap-2.5 w-full max-w-xs "+manrope.className}>
                <Image src={CheckMark} width={20} height={20} alt='img' quality={100} className='' />
                <p className="common-body1-text custom-text-white font-medium">{title}</p>
            </div>
        </>
    )
}
export default HomepageHeaderGreenCheckmarkTitle;