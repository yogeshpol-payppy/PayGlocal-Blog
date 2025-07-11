import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import ShopifyHeader from './ShopifyHeader';
import ShopifySection from './ShopifySection';


function Page()
{
    return(
        <>
            <ShopifyHeader/>
            <ShopifySection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;