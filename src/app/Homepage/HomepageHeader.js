
import Image from 'next/image';
import Link from 'next/link';
import HeroSectionImg from '@/Images/Homepage/home-header-image.svg';

//css for animation
import '@/Styles/Homepage/HomepageAnimation.css';
import HomepageHeaderGreenCheckmarkTitle from '@/Components/SmallComponents/HomepageHeaderGreenCheckmarkTitle';



function HomepageHeader()
{
    return(
        <>
                <header className="payglocal-home-header  flex items-center justify-center overflow-hidden">
                    <div className="hero"></div>

                    <div className=" flex flex-col xl:flex-row gap-20 justify-between items-center pt-20 pb-14 payglocal-home-header-center-content-image-parent-container w-full mx-auto ">

                        <div className="flex flex-col gap-6 sm:gap-8 payglocal-home-header-center-content w-full px-4 sm:px-10 pt-10  sm:pt-14  lg:pt-auto flex-shrink-0">

                            <div className="flex flex-col gap-5 sm:gap-7 ">
                                <h1 className="common-h1-heading custom-text-white ">One-stop solution for all your international payment needs</h1>

                                <div className="flex flex-wrap gap-5">
                                    <HomepageHeaderGreenCheckmarkTitle title={'Multi-currency Accounts'} />
                                    <HomepageHeaderGreenCheckmarkTitle title={'Global Payment Methods'} />
                                    <HomepageHeaderGreenCheckmarkTitle title={'Low-cost Payment Collection'} />
                                    <HomepageHeaderGreenCheckmarkTitle title={'Unparalleled Payment Success Rate'} />
                                </div>

                            </div>
                            <Link href='/contact' className='relative z-[1]'>
                                <button className={"background-custom-white py-2.5 px-6 common-btn-text custom-text-black rounded-3xl sign-up-blue-btn-drop-shadow duration-500 hover:scale-110 " }>Sign up Now</button>
                            </Link>
                        </div>

                        <div className="home-header-image-video-parent-container w-full overflow-visible relative grow">
                            <Image src={HeroSectionImg} width={785} height={600} alt='img' quality={100} className='home-header-main-img absolute -top-0 left-0 max-w-none z-index2 ' />
                            <div className="absolute  top-20 -left-10 payglocal-home-header-video hidden lg:block -z-[2] lg:z-10 bg-white p-2.5">
                                <video loop muted autoPlay width='270' className='  max-w-none'>
                                    <source src='/videos/homepage-header-video.mp4' type='video/mp4' />
                                </video>
                            </div>
                        </div>
                    </div>

                </header>
          
        </>
    )
}
export default HomepageHeader;