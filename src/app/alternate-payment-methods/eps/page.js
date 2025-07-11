import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import EPSHeader from './EPSHeader';
import EpsSection from './EPSSection';

function Page()
{
    return(
        <>
            <EPSHeader/>
            <EpsSection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;