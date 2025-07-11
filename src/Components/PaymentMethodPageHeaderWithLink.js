import {  Manrope } from 'next/font/google';
const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})

function PaymentMethodPageHeaderWithLink({title,subtitle,para1,link,para2}) {
    return (
        <>
            <header className={"bg-black  flex items-center justify-center px-4 pb-20 sm:px-10 sm:pb-28 pt-36 sm:pt-56 " + manrope.className}>

                <div className=" flex flex-col items-center max-w-xl lg:max-w-4xl w-full gap-4 lg:gap-8">
                    <h1 className="common-h1-heading custom-text-white text-center">{title}</h1>
                    <p className="common-body1-text custom-text-grey400 max-w-lg w-full text-center">{subtitle}</p>
                    <p className="common-body2-text custom-text-white text-center max-w-xl w-full ">{para1} <a href={'mailto:'+link}  className='custom-text-white underline font-bold' >{link}</a> <br />{para2} </p>
                    
                </div>

            </header>
        </>
    )
}

export default PaymentMethodPageHeaderWithLink;


