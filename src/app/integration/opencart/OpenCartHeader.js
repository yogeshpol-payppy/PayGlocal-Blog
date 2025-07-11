import OpenCart from '@/Images/DynamicCheckout/opencart.svg';
import PaymentMethodPagesHeader from '@/Components/PaymentMethodPagesHeader';
import PayglocalNavbar from '@/Components/Navbar';


function OpenCartHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <PaymentMethodPagesHeader imgName={OpenCart} title={'OpenCart'} para={'OpenCart is a free and open-source e-commerce platform that allows businesses to create and manage their online stores. It was first released in 2008 and has since become one of the most popular e-commerce platforms in the world. OpenCart is designed to be user-friendly and easy to use, with a range of features and tools that make it ideal for businesses of all sizes.'}  />
        </>
    )
}

export default OpenCartHeader;


