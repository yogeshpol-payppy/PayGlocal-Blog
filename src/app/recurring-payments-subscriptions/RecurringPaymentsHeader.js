
import OnePlatformHeaderCompo from '@/Components/OnePlatformHeaderCompo';
import PayglocalNavbar from '@/Components/Navbar';



function RecurringPaymentsHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <OnePlatformHeaderCompo title={'Debit global cards seamlessly with Recurring Payments'} para={"Execute subscriptions, recurring billing and unscheduled charges on international card payments with PayGlocal's network compliant global solution"} titleWidthClass=' sm:max-w-4xl ' paraWidthClass=' sm:max-w-4xl ' />
        </>
    )
}

export default RecurringPaymentsHeader;


