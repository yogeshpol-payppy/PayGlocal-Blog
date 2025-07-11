import { Manrope } from 'next/font/google';
const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})

function CareerWhatWeOfferGridBoxCompo ({number,title,para})
{
    return(
        <>
            <div className="flex flex-col gap-5 sm:gap-8 py-10 px-4 sm:pt-10 sm:pb-12 sm:px-12 lg:p-14 background-custom-grey50 rounded-2xl">
                <div className="flex border border-custom-grey200 justify-center items-center w-20 h-20 sm:w-24 sm:h-24 background-custom-white rounded-full">
                    <h3 className="common-h3-heading custom-text-blue1">{number}</h3>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="common-h4-heading text-left">{title}</h4>
                    <p className={"common-body1-text custom-text-grey600 text-left " + manrope.className}>{para}</p>
                </div>
            </div>
        </>
    )
}
export default CareerWhatWeOfferGridBoxCompo;