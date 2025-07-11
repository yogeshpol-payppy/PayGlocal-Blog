import '@/Styles/OnePlatform/OnePlatform.css';          // this page uses component is same as one platform so importing one platform page css

import PayglocalFooter from '@/Components/PayglocalFooter';
import MultiCurrencyHeader from './MultiCurrencyHeader';
import MultiCurrencySection from './MultiCurrencySection';

function Page()
{
    return(
        <>
           <MultiCurrencyHeader/>
           <MultiCurrencySection/>
           <PayglocalFooter/>
        </>
    )
}

export default  Page;