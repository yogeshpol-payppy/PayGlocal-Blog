import { JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';

const jetBrains_Mono=JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})

function AboutUsLeadersImgCompo ({imgName,name,position})
{
    return(
        <>
            <div className="flex flex-col items-center max-w-64 w-full gap-6 lg:gap-7">
                <Image src={imgName} width={200} height={200} alt="img" quality={100} className="saturate-0" />
                <div className="flex flex-col gap-2 items-center">
                    <h5 className="common-h5-heading custom-text-grey900 text-center">{name}</h5>
                    <p className={"common-all-caps custom-text-grey500 text-center " + jetBrains_Mono.className}>{position}</p>
                </div>
            </div>
        </>
    )
}
export default AboutUsLeadersImgCompo;