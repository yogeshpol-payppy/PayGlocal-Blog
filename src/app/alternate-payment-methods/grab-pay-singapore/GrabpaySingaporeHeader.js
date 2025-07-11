
import GrabpayMalaysiaSignaporeHeaderCompo from '@/Components/GrabpayMalaysiaSignaporeHeaderCompo';
import PayglocalNavbar from '@/Components/Navbar';


function GrabpaySingaporeHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <GrabpayMalaysiaSignaporeHeaderCompo title={'GrabPay - Singapore'} para={"Credit card penetration in Singapore is just 49% and 2 million Singapore consumers are underbanked - making GrabPay important to any e-commerce strategy. In 2022, GrabPay had an estimated 4.9 million users in Singapore which is 96% of Singapore's adult population."} link={'/alternate-payment-methods/grab-pay-malaysia'}  />
        
        </>
    )
}

export default GrabpaySingaporeHeader;


