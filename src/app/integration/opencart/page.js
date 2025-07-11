import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import OpenCartHeader from './OpenCartHeader';
import OpenCartSection from './OpenCartSection';


function Page()
{
    return(
        <>
            <OpenCartHeader/>
            <OpenCartSection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;