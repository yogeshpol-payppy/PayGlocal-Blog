import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import KlarnaHeader from './KlarnaHeader';
import KlarnaSection from './KlarnaSection';

function Page()
{
    return(
        <>
            <KlarnaHeader/>
            <KlarnaSection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;