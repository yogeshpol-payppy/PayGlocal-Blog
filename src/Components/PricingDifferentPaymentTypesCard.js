import Image from "next/image";

function PricingDifferentPaymentTypesCard({title,imgs,moreTextPresent=false})
{
    return(
        <>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 lg:gap-20 px-10 lg:px-12 py-14  background-custom-grey50 rounded-xl">
            <h6 className="common-h6-heading">{title}</h6>
            <div className="flex items-center gap-6 ">
                {imgs?.map((element,index)=>{
                    return <Image key={index} src={element.src} width={element.width} height={element.height} alt="img" quality={100} className=" " />
                })}
                {moreTextPresent&&<div className="common-body2-text custom-text-grey600 whitespace-nowrap">& more</div>}
            </div>
        </div>
        </>
    )
}

export default PricingDifferentPaymentTypesCard;