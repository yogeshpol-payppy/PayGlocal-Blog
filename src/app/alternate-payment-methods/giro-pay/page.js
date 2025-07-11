import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import GiropayHeader from './GiropayHeader';
import GiropaySection from './GiropaySection';

function Page()
{
    return(
        <>
            <GiropayHeader/>
            <GiropaySection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;