
import GrabpayMalaysiaSignaporeHeaderCompo from '@/Components/GrabpayMalaysiaSignaporeHeaderCompo';
import PayglocalNavbar from '@/Components/Navbar';



function GrabpayMalaysiaHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <GrabpayMalaysiaSignaporeHeaderCompo title={'GrabPay - Malaysia'} para={'There are over 17 million Grab users in Malaysia, forecast to reach more than 28 million consumers by 2025. Spend-per GrabPay consumer increased by 19% year on year to 2022, due in part to consumers using it to pay for more categories of goods with more merchants (Grab).In 2020-21, the number of Southeast Asian merchants registered with GrabPay nearly tripled making it one of the most widely available method in Southeast Asia thus, driving consumer adoption.'} link={'/alternate-payment-methods/grab-pay-singapore'} />
        
        </>
    )
}

export default GrabpayMalaysiaHeader;


