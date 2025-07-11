import EPS from '@/Images/Grabpay/eps.svg';
import PaymentMethodPagesHeader from '@/Components/PaymentMethodPagesHeader';
import PayglocalNavbar from '@/Components/Navbar';



function EPSHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <PaymentMethodPagesHeader title={'EPS'} imgName={EPS} para={"EPS is bank transfer method in Austria. eps is one of Austria's most popular payment methods with approximately 20% market share. It is the official payment method for the Austrian e- government. With 83% of Austrians shopping cross border and bank transfer the preferred payment method in Austria."} />
        
        </>
    )
}

export default EPSHeader;


