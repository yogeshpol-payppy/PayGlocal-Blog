import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import UPIHeader from './UPIHeader';
import UPISection from './UPISection';

function Page()
{
    return(
        <>
            <UPIHeader/>
            <UPISection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;