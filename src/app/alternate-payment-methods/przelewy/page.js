import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import PrzelewyHeader from './PrzelewyHeader';
import PrzelewySection from './PrzelewySection';

function Page()
{
    return(
        <>
            <PrzelewyHeader/>
            <PrzelewySection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;