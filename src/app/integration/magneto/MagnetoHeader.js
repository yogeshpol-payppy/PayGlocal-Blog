
import Magneto from '@/Images/DynamicCheckout/magneto.svg';
import PaymentMethodPagesHeader from '@/Components/PaymentMethodPagesHeader';
import PayglocalNavbar from '@/Components/Navbar';

function MagnetoHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <PaymentMethodPagesHeader imgName={Magneto} title={'Magento'} para={'Magento is an open-source e-commerce platform that allows businesses to build and manage their online stores. It was first released in 2008 and has since become one of the most popular e-commerce platforms in the world. Magento offers a range of features and tools that make it easy for businesses to sell their products and services online.'} />
        
        </>
    )
}

export default MagnetoHeader;


