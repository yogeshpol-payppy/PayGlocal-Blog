import OnePlatformHeaderCompo from '@/Components/OnePlatformHeaderCompo';
import PayglocalNavbar from '@/Components/Navbar';


function DynamicCheckoutHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <OnePlatformHeaderCompo titleWidthClass=' lg:max-w-4xl ' paraWidthClass=' lg:max-w-xl ' title={'Create a memorable Payment Ceremony for your customers'} para={'A unified yet dynamic checkout for your global customers to pay through global cards and global payment methods.'}/>
        </>
    )
}

export default DynamicCheckoutHeader;


