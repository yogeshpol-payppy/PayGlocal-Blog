import Trustly from '@/Images/Grabpay/trustly.svg';
import PaymentMethodPagesHeader from '@/Components/PaymentMethodPagesHeader';
import PayglocalNavbar from '@/Components/Navbar';


function TrustlyHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <PaymentMethodPagesHeader title={'Trustly'} para={'Trustly is one of the leaders of bank transfer payments in key European markets. With a merchant base of more than 8,500, Trustly integrates with 6,300 banks to collect funds locally across Europe and offers real-time reconciliation through proprietary integrations to these accounts. Trustly reports strong brand recognition across the Nordics'} imgName={Trustly} />
        
        </>
    )
}

export default TrustlyHeader;


