import Image from "next/image";

function PricingAdditionalPaymentTypeCard({img,title,para})
{
    return(
        <>
        <div className="flex flex-col gap-4 p-12 background-custom-grey50 rounded-xl">
            <Image src={img} width={24} height={24} alt="img" quality={100} className="" />
                <div className="flex flex-col gap-1">
                    <h6 className="common-h6-heading">{title}</h6>
                    <div className="common-body2-text custom-text-grey600">{para}</div>
                </div>
        </div>
        </>
    )
}

export default PricingAdditionalPaymentTypeCard;