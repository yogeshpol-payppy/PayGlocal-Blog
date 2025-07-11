

import Shopaccino from '@/Images/DynamicCheckout/shopaccino.svg';
import PaymentMethodPagesHeader from '@/Components/PaymentMethodPagesHeader';
import PayglocalNavbar from '@/Components/Navbar';



function ShopaccinoHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <PaymentMethodPagesHeader imgName={Shopaccino} title={'Shopaccino'} para={'Shopaccino is a popular e-commerce platform that allows businesses to create and manage their online stores. It was launched in 2014, and has since become one of the most popular e-commerce platforms in the world. Shopaccino is known to offer a smart, simple, and user-friendly interface to create fully-functional online stores giving you the leverage to design your own website with the help of its beautiful responsive themes, customize your product catalog, and promote sales through marketing tools.'}  />
        </>
    )
}

export default ShopaccinoHeader;


