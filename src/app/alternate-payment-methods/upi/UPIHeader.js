
import UPI from '@/Images/Grabpay/upi.svg';
import PaymentMethodPagesHeader from '@/Components/PaymentMethodPagesHeader';
import PayglocalNavbar from '@/Components/Navbar';

function UPIHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <PaymentMethodPagesHeader imgName={UPI} title={"United Payment Interface (UPI)"} para={"UPI or Unified Payment Interface is the payment technology developed by National Payments Corporation of India (NPCI), using the IMPS infrastructure. An individual or business having a mobile number linked to a bank account can generate a UPI VPA and make payments to another UPI ID or bank account. UPI is now one of the most popular choices of method in India. PayGlocal offers multiple UPI checkout options: UPI Intent Flow, UPI Collect Flow, and UPI Dynamic QR Code"} />
      
        </>
    )
}

export default UPIHeader;


