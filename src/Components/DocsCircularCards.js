import Image from "next/image";
import Link from "next/link";

function DocsCircularCards({img,imgWidth,imgHeight,link})
{
    return(
        <>
        <Link href={link}>
            <div className="flex justify-center items-center border rounded-full background-custom-white custom-border-grey200 w-28 h-28  cursor-pointer hover:shadow-lg duration-300 p-2" >
                <Image src={img} width={imgWidth} height={imgHeight} quality={100} alt='img' className='' />
            </div>
        </Link>
        </>
    )
}

export default DocsCircularCards;