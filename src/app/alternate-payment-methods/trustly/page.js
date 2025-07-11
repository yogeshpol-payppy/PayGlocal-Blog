import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import TrustlyHeader from './TrustlyHeader';
import TrustlySection from './TrustlySection';

function Page()
{
    return(
        <>
            <TrustlyHeader/>
            <TrustlySection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;