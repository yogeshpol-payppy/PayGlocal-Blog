import Image from "next/image";
import Location from '@/Images/AboutUs/location-btn.svg';



function AboutUsLocationBox({title,para})
{
    return(
        <>
        <div className="flex flex-col gap-5">
            <Image src={Location} width={60} height={60} quality={100} alt="img" className=" max-w-none" />
            <div className="flex flex-col gap-3">
                <h5 className="common-h5-heading custom-text-grey900">{title}</h5>
                <div className="common-body2-text custom-text-grey600">{para}</div>
            </div>
        </div>
        </>
    )
}

export default AboutUsLocationBox;