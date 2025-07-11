import '@/Styles/OnePlatform/OnePlatform.css';          // this page uses component is same as one platform so importing one platform page css

import PayglocalFooter from '@/Components/PayglocalFooter';
import CardPaymentsHeader from './CardPaymentsHeader';
import CardPaymentsSection from './CardPaymentsSection';

function Page()
{
    return(
        <>
           <CardPaymentsHeader/>
           <CardPaymentsSection/>
           <PayglocalFooter/>
        </>
    )
}

export default  Page;