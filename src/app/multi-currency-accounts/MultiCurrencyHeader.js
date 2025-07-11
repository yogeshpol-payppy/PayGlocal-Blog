import OnePlatformHeaderCompo from '@/Components/OnePlatformHeaderCompo';
import PayglocalNavbar from '@/Components/Navbar';



function MultiCurrencyHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <OnePlatformHeaderCompo title={'Multi Currency Accounts'} para={'Efficiently process international payments in over 33 currencies using multi-currency accounts.'} titleWidthClass=' sm:max-w-xl ' paraWidthClass=' sm:max-w-md ' />
       
        </>
    )
}

export default MultiCurrencyHeader;


