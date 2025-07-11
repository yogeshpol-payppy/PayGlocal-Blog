import Image from "next/image";

function RecurringPaymentsHighlightCard({img,imgwidth=100,imgheight=100,title,para})
{
    return(
        <>
            <div className="flex flex-col gap-4 lg:gap-6  w-full items-center lg:items-start self-stretch">
                <Image src={img} width={imgwidth} height={imgheight} alt='img' quality={100} className='' />
                <h4 className="common-h4-heading text-center lg:text-left">{title}</h4>
                <h6 className="common-h6-heading custom-text-grey600 text-center lg:text-left">{para}</h6>
            </div>
        </>
    )
}

export default RecurringPaymentsHighlightCard;