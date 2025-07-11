import ArrowRight from '@/Images/OnePlatform/arrow-up-right.svg';
import Image from 'next/image';
import Link from 'next/link';

function CareerOpenPosition({data})
{
    
    return(
        <>
        <Link href={'/careers/'+data?.id} >
            <div className={'border border-custom-grey200 rounded-3xl px-5 py-10 sm:p-10  flex flex-col  gap-5 relative group cursor-pointer open-position-card-container'}>
                <h6 className="common-h6-heading">{data?.location}</h6>
                <h4 className="common-h4-heading">{data?.role}</h4>
                <h6 className="common-h6-heading custom-text-blue1">{data?.function}</h6>
                <div className="flex justify-center items-center w-10 h-10 sm:w-14 sm:h-14  border rounded-full border-custom-grey200 duration-300 absolute top-5 right-5 group-hover:top-4 group-hover:right-4 group-hover:bg-black open-position-card-img-container">
                    <Image src={ArrowRight} width={25} height={25} alt='img' quality={100} className='open-position-card-img' />
                </div>
            </div>
        </Link>
        </>
    )
}

export default CareerOpenPosition;