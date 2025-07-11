
import Giropay from '@/Images/Grabpay/giropay.svg';
import PaymentMethodPagesHeader from '@/Components/PaymentMethodPagesHeader';
import PayglocalNavbar from '@/Components/Navbar';



function GiropayHeader()
{ 
    return(
        <>
        <PayglocalNavbar/>
        <PaymentMethodPagesHeader title={'Giropay'} para={"Giropay is one of Germany's top five e-commerce payment methods, with over one million transactions every month. With Giropay reach out to over 45 million online banking customers in Germany, which accounts for about 54% of the adult population through Giropay."} imgName={Giropay} />
        </>
    )
}

export default GiropayHeader;


