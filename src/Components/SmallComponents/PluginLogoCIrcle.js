import Image from "next/image";
import Link from "next/link";

function PluginInfoCircle({img,imgwidth,imgheight,link})
{
    return(
        <>
        <Link href={link}>
            <div className="flex justify-center items-center border rounded-full background-custom-white custom-border-grey200 w-40 h-40  cursor-pointer hover:shadow-lg duration-300">
                <Image src={img} width={imgwidth} height={imgheight} quality={100} alt='img' className='' />
            </div>
        </Link>
        </>
    )
}

export default PluginInfoCircle;