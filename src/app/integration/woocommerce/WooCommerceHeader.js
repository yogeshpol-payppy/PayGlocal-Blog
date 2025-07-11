import WooCommerce from '@/Images/DynamicCheckout/woo-commerce.svg';
import PaymentMethodPagesHeader from '@/Components/PaymentMethodPagesHeader';
import PayglocalNavbar from '@/Components/Navbar';



function WooCommerceHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <PaymentMethodPagesHeader imgName={WooCommerce} title={'WooCommerce'} para={'WooCommerce is a free, open-source e-commerce plugin for WordPress websites. It was first released in 2011 and has since become one of the most popular e-commerce platforms in the world. WooCommerce is designed to make it easy for businesses to sell products and services online, and it integrates seamlessly with the WordPress content management system.'} />
       
        </>
    )
}

export default WooCommerceHeader;


