import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import MagnetoHeader from './MagnetoHeader';
import MagnetoSection from './MagentoSection';


function Page()
{
    return(
        <>
            <MagnetoHeader/>
            <MagnetoSection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;