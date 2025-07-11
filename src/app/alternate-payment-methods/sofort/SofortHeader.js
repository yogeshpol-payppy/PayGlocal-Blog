
import Sofort from '@/Images/Grabpay/sofort.svg';
import PaymentMethodPagesHeader from '@/Components/PaymentMethodPagesHeader';
import PayglocalNavbar from '@/Components/Navbar';


function SofortHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <PaymentMethodPagesHeader title={'Sofort'} para={"Sofort is one of the top 5 e-commerce payment methods in Germany. Sofort has been part of the Klarna Group since 2014. Klarna reports that merchants typically see a 68% increase in average order value with Sofort offering. PayGlocal’s Sofort integration has one of the highest conversion rates in the industry."} imgName={Sofort} />
      
        </>
    )
}

export default SofortHeader;


