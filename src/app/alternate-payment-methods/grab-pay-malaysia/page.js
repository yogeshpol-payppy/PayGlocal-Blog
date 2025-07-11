import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import GrabpayMalaysiaHeader from './GrabpayMalaysiaHeader';
import GrabpayMalaysiaSection from './GrabpayMalaysiaSection';

function Page()
{
    return(
        <>
            <GrabpayMalaysiaHeader/>
            <GrabpayMalaysiaSection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;