import '@/Styles/OnePlatform/OnePlatform.css';          // this page uses component is same as one platform so importing one platform page css

import PayglocalFooter from '@/Components/PayglocalFooter';
import ExportersHeader from './ExportersHeader';
import ExportersSection from './ExportersSection';

function Page()
{
    return(
        <>
           <ExportersHeader/>
           <ExportersSection/>
           <PayglocalFooter/>
        </>
    )
}

export default  Page;