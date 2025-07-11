import Info from '@/Images/Pricing/info.svg';
import Image from 'next/image';


//tooltip style is added in typography css file 
function PricingTooltip({tooltipContent=' Instruments like Diners and Amex Cards, International Cards, EMI (Credit Card, Debit Card & Cardless) & Corporate (Business) Credit cards will be charged at 3% (+ applicable GST) and International Amex Cards will be charged at 3.5% (+ applicable GST).'})
{
    return(
        <>
            <div className="relative ">
                <Image src={Info} width={20} height={20} alt='img' quality={100} className='cursor-pointer tooltip-child' />
                <div className="absolute px-4 py-3 border rounded-lg shadow-lg -top-28   left-0 -translate-x-[50%] -translate-y-[50%] w-80 background-custom-white duration-200 -z-0 opacity-0 tooltip-container">{tooltipContent}</div>
            </div>
        </>
    )
}

export default PricingTooltip;