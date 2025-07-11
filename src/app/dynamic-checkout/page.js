import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css

import DynamicCheckoutHeader from "./DynamicCheckoutHeader";
import DynamicCheckoutSection from './DynamicCheckoutSection';
import PayglocalFooter from '@/Components/PayglocalFooter';

function Page()
{
    return(
        <>
           <DynamicCheckoutHeader/>
           <DynamicCheckoutSection/>
           <PayglocalFooter/>
        </>
    )
}

export default  Page;