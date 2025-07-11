import '@/Styles/OnePlatform/OnePlatform.css';          // this page uses component is same as one platform so importing one platform page css

import PayglocalFooter from '@/Components/PayglocalFooter';
import WhyPayglocalHeader from './WhyPayGlocalHeader';
import WhyPayglocalSection from './WhyPayGlocalSection';

function Page()
{
    return(
        <>
           <WhyPayglocalHeader/>
           <WhyPayglocalSection/>
           <PayglocalFooter/>
        </>
    )
}

export default  Page;