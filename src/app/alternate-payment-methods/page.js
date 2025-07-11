import '@/Styles/OnePlatform/OnePlatform.css';          // this page uses component is same as one platform so importing one platform page css

import PayglocalFooter from '@/Components/PayglocalFooter';
import GlobalPaymentMethodsHeader from './GlobalPaymentHeader';
import GlobalPaymentMethodsSection from './GlobalPaymentSection';

function Page()
{
    return(
        <>
           <GlobalPaymentMethodsHeader/>
           <GlobalPaymentMethodsSection/>
           <PayglocalFooter/>
        </>
    )
}

export default  Page;