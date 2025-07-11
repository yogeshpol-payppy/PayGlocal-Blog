import OnePlatformHeaderCompo from '@/Components/OnePlatformHeaderCompo';
import PayglocalNavbar from '@/Components/Navbar';



function WhyPayglocalHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <OnePlatformHeaderCompo title={'Discover why brands expand globally with PayGlocal'} para={'Trust is crucial in payments partnerships. PayGlocal takes payment ceremonies seriously and partners with large enterprises and export merchants for seamless customer payment journeys.'} titleWidthClass=' sm:max-w-6xl ' paraWidthClass=' sm:max-w-3xl ' />
        </>
    )
}

export default WhyPayglocalHeader;


