
import PayglocalNavbar from '@/Components/Navbar';
import OnePlatformHeaderCompo from '@/Components/OnePlatformHeaderCompo';




function OnePlatformHeader ()
{
    return(
        <>
          <PayglocalNavbar/>
          <OnePlatformHeaderCompo titleWidthClass=' max-w-[700px] ' paraWidthClass=' max-w-[380px] ' title={'One platform for all your payments'} para={'Do more with less. Set up, view, manage and settle your payments from a single place.'}/>

        </>
    )
}
export default OnePlatformHeader;