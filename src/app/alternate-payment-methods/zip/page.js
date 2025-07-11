import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import ZipHeader from './ZipHeader';
import ZipSection from './ZipSection';

function Page()
{
    return(
        <>
            <ZipHeader/>
            <ZipSection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;