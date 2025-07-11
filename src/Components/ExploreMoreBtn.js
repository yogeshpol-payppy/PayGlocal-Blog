import { Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import ExploreArrow from '@/Images/Homepage/explore-arrow.svg';

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})


function ExploreBtn({ text = 'Explore', textColor = ' custom-text-blue1 ', whiteIcon = false ,link='/'}) {
    return (
        <>
            <Link href={link}>
                <button className={"py-2.5 px-3 common-btn-text flex items-center gap-2 group " + textColor + manrope.className}>
                    <Image src={ExploreArrow} width={18} height={18} alt='img' quality={100} className={whiteIcon ? 'get-light-image group-hover:scale-125 duration-300' : ' group-hover:scale-125 duration-300'} />
                    <span>{text}</span>
                </button>
            </Link>
        </>
    )
}

export default ExploreBtn;