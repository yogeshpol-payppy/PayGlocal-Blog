import OnePlatformHeaderCompo from '@/Components/OnePlatformHeaderCompo';
import PayglocalNavbar from '@/Components/Navbar';


function CardPaymentsHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <OnePlatformHeaderCompo title={'Offer seamless debits on International cards'} para={'A unified yet dynamic checkout for your global customers to pay through global credit and debit cards.'} titleWidthClass=' sm:max-w-screen-lg ' paraWidthClass=' sm:max-w-lg ' />
    
        </>
    )
}

export default CardPaymentsHeader;


