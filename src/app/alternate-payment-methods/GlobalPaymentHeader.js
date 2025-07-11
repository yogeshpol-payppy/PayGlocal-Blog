import OnePlatformHeaderCompo from '@/Components/OnePlatformHeaderCompo';
import PayglocalNavbar from '@/Components/Navbar';


function GlobalPaymentMethodsHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <OnePlatformHeaderCompo title={'Add 40+ Payment Methods to Grow Your Business'} para={'Offer local payment methods to your international customers. Boost customer trust and enjoy increased sales volumes.'} titleWidthClass=' sm:max-w-5xl ' paraWidthClass=' sm:max-w-xl ' />

        </>
    )
}

export default GlobalPaymentMethodsHeader;


