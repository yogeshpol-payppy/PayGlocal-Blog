import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import INBHeader from './INBHeader';
import INBSection from './INBSection';

function Page()
{
    return(
        <>
            <INBHeader/>
            <INBSection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;