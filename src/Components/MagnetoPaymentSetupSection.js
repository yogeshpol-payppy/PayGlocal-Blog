import Image from 'next/image';
import { Manrope } from 'next/font/google';



// payment setup section images
import BlueCheckmark from '@/Images/Grabpay/blue-checkmark.svg';



const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
})

function MagnetoPaymentSetupSection()
{


 
    return(
        <>
        {/* payment setup section  */}
        <section className="py-10 sm:py-20 px-4 sm:px-10 flex items-center justify-center background-custom-white">
            <div className="flex flex-col gap-10 sm:gap-14 max-w-4xl w-full sm:items-center">
                <div className="flex flex-col gap-5 items-center">
                    <h2 className="common-h2-heading sm:text-center">Set up your entire payment processing from a single platform!</h2>
                    <p className={"custom-text-grey600 common-body1-text sm:text-center "+manrope.className}>Start accepting international payments in less than 10mins!</p>
                </div>
                <div className="flex flex-col gap-6 max-w-2xl w-full">
                    <div className="flex flex-col sm:flex-row gap-6 w-full  sm:justify-between">
                        <div className="flex items-center gap-5 max-w-80 w-full">
                            <Image src={BlueCheckmark} width={37} height={37} alt='img' quality={100} className=''/>
                            <h5 className="common-h5-heading">Payment Gateway</h5>
                        </div>
                        <div className="flex items-center gap-5 max-w-80 w-full">
                            <Image src={BlueCheckmark} width={37} height={37} alt='img' quality={100} className=''/>
                            <h5 className="common-h5-heading">Risk Management</h5>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 w-full  sm:justify-between">
                        <div className="flex items-center gap-5 max-w-80 w-full">
                            <Image src={BlueCheckmark} width={37} height={37} alt='img' quality={100} className=''/>
                            <h5 className="common-h5-heading">Fraud Protection</h5>
                        </div>
                        <div className="flex items-center gap-5 max-w-80 w-full">
                            <Image src={BlueCheckmark} width={37} height={37} alt='img' quality={100} className=''/>
                            <h5 className="common-h5-heading">Faster Settlements</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default MagnetoPaymentSetupSection;