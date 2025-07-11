
import Klarna from '@/Images/Grabpay/klarna.svg';
import PaymentMethodPagesHeader from '@/Components/PaymentMethodPagesHeader';
import PayglocalNavbar from '@/Components/Navbar';


function KlarnaHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <PaymentMethodPagesHeader title={'Klarna'} para={'Klarna has a customer base of over 150 Million Customers and increasing. Klarna cites a 20% increase in purchase frequency for consumers using pay-later. PayGlocal offers Klarna Pay Now and Klarna Pay in 30 days'} imgName={Klarna} />
        
        </>
    )
}

export default KlarnaHeader;


