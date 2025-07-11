import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import SofortHeader from './SofortHeader';
import SofortSection from './SofortSection';

function Page()
{
    return(
        <>
            <SofortHeader/>
            <SofortSection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;