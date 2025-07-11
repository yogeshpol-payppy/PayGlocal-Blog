import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import WooCommerceHeader from './WooCommerceHeader';
import WooCommerceSection from './WooCommerceSection';


function Page()
{
    return(
        <>
            <WooCommerceHeader/>
            <WooCommerceSection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;