import '@/Styles/OnePlatform/OnePlatform.css';          // this page uses component is same as one platform so importing one platform page css

import PayglocalFooter from '@/Components/PayglocalFooter';
import EnterpriseHeader from './EnterpriseHeader';
import EnterpriseSection from './EnterpriseSection';

function Page()
{
    return(
        <>
           <EnterpriseHeader/>
           <EnterpriseSection/>
           <PayglocalFooter/>
        </>
    )
}

export default  Page;