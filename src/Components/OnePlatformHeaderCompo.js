
import { Manrope } from 'next/font/google';
import SignUpBtn from '@/Components/SignUpBtn';


const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})

function OnePlatformHeaderCompo ({titleWidthClass='',paraWidthClass='',title,para,lintText="Sign up Now"})
{
    return(
        <>
        <header className="bg-black one-platform-header flex items-center justify-center">
            <div className="px-4 py-20 sm:px-10 sm:py-28 flex justify-center items-center ">
                <div className="flex flex-col gap-6 sm:gap-8 sm:items-center">
                    <div className="flex flex-col gap-4 sm:gap-5 sm:items-center ">
                        <h1 className={` common-h1-heading custom-text-white font-medium sm:text-center ${titleWidthClass} w-full  `}>{title}</h1>
                        <p className={` custom-text-grey300 font-medium common-body1-text sm:text-center ${paraWidthClass} w-full  `+manrope.className}>{para}</p>
                    </div>
                    <SignUpBtn text={lintText} linkUrl='/contact'/>
                </div>
            </div>
        </header>
        </>
    )
}
export default OnePlatformHeaderCompo;