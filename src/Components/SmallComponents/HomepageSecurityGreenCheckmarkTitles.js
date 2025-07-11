import Image from "next/image";

import GreenCheckmark from '@/Images/Homepage/green-checkmark.svg';


function HomepageSecurityGreenCheckmarkTitles({title})
{
    return(
        <>
            <div className="flex flex-col gap-1 items-center payglocal-home-section5-checklist-divs">
                <Image src={GreenCheckmark} width={25} height={25} alt='img' quality={100} className='' />
                <p className="common-body3-text custom-text-white text-center">{title}</p>
            </div>
        </>
    )
}
export default HomepageSecurityGreenCheckmarkTitles;