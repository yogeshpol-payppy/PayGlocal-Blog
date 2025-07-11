import OnePlatformHeaderCompo from '@/Components/OnePlatformHeaderCompo';
import PayglocalNavbar from '@/Components/Navbar';

function EnterpriseHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <OnePlatformHeaderCompo title={'PayGlocal for Enterprise'} para={'Every payment, every checkout, every customer experience, is a reflection of your brand. We want nothing less than perfection in each of them.'} titleWidthClass=' sm:max-w-6xl ' paraWidthClass=' sm:max-w-xl '  />
       
        </>
    )
}

export default EnterpriseHeader;


