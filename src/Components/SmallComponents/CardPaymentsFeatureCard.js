import Image from "next/image";

function CardPaymentsFeatureCard({img,imgwidth,imgheight,title})
{
    return(
        <>
            <div className="flex flex-col gap-6  sm:max-w-96 lg:max-w-60 w-full items-center lg:items-start self-stretch">
                <Image src={img} width={imgwidth} height={imgheight} alt='img' quality={100} className='' />
                <h6 className="common-h6-heading custom-text-grey900 text-center lg:text-left">{title}</h6>
            </div>
        </>
    )
}

export default CardPaymentsFeatureCard;