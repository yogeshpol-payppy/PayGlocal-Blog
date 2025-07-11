import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import ShopaccinoHeader from './ShopaccinoHeader';
import ShopaccinoSection from './ShopaccinoSection';


function Page()
{
    return(
        <>
            <ShopaccinoHeader/>
            <ShopaccinoSection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;