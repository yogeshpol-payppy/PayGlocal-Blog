import Image from "next/image";
import File from '@/Images/CorporateInformation/file-text.svg';


function CorporateInformationSection()
{
    return(
        <>
        <section className={"flex flex-col items-center gap-14 px-10 py-32 "}>
            <h3 className="common-h3-heading">Corporate Information</h3>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex flex-col items-center gap-3.5 border custom-border-grey200 rounded-xl cursor-pointer duration-200 hover:scale-105 p-8">
                    <Image src={File} width={40} height={40} alt="img" quality={100} />
                    <div className="common-body2-text text-center">Annual Return-2024-PTPL.pdf</div>
                </div>
                <div className="flex flex-col items-center gap-3.5 border custom-border-grey200 rounded-xl cursor-pointer duration-200 hover:scale-105 p-8">
                    <Image src={File} width={40} height={40} alt="img" quality={100} />
                    <div className="common-body2-text text-center">Annual Return-2024-PTPL.pdf</div>
                </div>
                <div className="flex flex-col items-center gap-3.5 border custom-border-grey200 rounded-xl cursor-pointer duration-200 hover:scale-105 p-8">
                    <Image src={File} width={40} height={40} alt="img" quality={100} />
                    <div className="common-body2-text text-center">Annual Return-2024-PTPL.pdf</div>
                </div>
            </div>
        </section>
        </>
    )
}

export default CorporateInformationSection;