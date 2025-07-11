import '@/Styles/OnePlatform/OnePlatform.css';          // this page uses component is same as one platform so importing one platform page css

import PayglocalFooter from '@/Components/PayglocalFooter';
import RecurringPaymentsSection from './RecurringPaymentsSection';
import RecurringPaymentsHeader from './RecurringPaymentsHeader';

function Page()
{
    return(
        <>
           <RecurringPaymentsHeader/>
           <RecurringPaymentsSection/>
           <PayglocalFooter/>
        </>
    )
}

export default  Page;