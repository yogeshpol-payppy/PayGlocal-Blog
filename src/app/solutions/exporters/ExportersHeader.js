import OnePlatformHeaderCompo from '@/Components/OnePlatformHeaderCompo';
import PayglocalNavbar from '@/Components/Navbar';

function ExportersHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <OnePlatformHeaderCompo title={'PayGlocal for Exporters'} para={'Every payment, every checkout, every customer experience, is a reflection of your brand. We want nothing less than perfection in each of them.'} titleWidthClass=' sm:max-w-4xl ' paraWidthClass=' sm:max-w-xl ' />
       
        </>
    )
}

export default ExportersHeader;


