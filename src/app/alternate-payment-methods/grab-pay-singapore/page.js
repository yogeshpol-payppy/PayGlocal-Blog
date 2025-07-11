import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import GrabpaySingaporeHeader from './GrabpaySingaporeHeader';
import GrabpaySingaporeSection from './GrabpaySingaporeSection';

function Page()
{
    return(
        <>
            <GrabpaySingaporeHeader/>
            <GrabpaySingaporeSection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;