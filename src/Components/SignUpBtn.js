import { Manrope } from "next/font/google";
import Link from "next/link";



const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})

function SignUpBtn({text='Sign up Now',linkUrl='/'}) {
    return (
        <>
            <Link href={linkUrl}>
                <button className={"background-custom-blue1 py-2.5 px-6 common-btn-text custom-text-white rounded-3xl sign-up-blue-btn-drop-shadow hover:scale-110 duration-300 " + manrope.className}>{text}</button>
            </Link>
        </>
    )
}

export default SignUpBtn;