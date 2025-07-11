import Shopify from '@/Images/DynamicCheckout/shopify.svg';
import PaymentMethodPagesHeader from '@/Components/PaymentMethodPagesHeader';
import PayglocalNavbar from '@/Components/Navbar';

function ShopifyHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <PaymentMethodPagesHeader imgName={Shopify} title={'Shopify'} para={'Shopify is a popular e-commerce platform that allows businesses to create and manage their online stores. It was first released in 2006 and has since become one of the most popular e-commerce platforms in the world. Shopify is known for its user-friendly interface and easy-to-use tools, with a range of features that make it ideal for businesses of all sizes.'}  />
      
        </>
    )
}

export default ShopifyHeader;


