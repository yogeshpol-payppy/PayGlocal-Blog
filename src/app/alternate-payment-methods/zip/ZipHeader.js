

import ZIP from '@/Images/Grabpay/zip.svg';
import PaymentMethodPagesHeader from '@/Components/PaymentMethodPagesHeader';
import PayglocalNavbar from '@/Components/Navbar';



function ZipHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <PaymentMethodPagesHeader imgName={ZIP} title={'ZIP'} para={'ZIP have a 21% market share in Australia. Having ZIP at the checkout leads to 10-15% increase in the conversion rate and an average increase of 10-40% in the ticket size. PayGlocal offers ZIP Pay for everyday purchase and ZIP money for high value purchases.'} />
      
        </>
    )
}

export default ZipHeader;


