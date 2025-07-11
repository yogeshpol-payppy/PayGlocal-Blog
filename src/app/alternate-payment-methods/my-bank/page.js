import '@/Styles/OnePlatform/OnePlatform.css';          //this component is same as one platform so importing one platform page css
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import MyBankHeader from './MyBankHeader';
import MyBankSection from './MyBankSection';

function Page()
{
    return(
        <>
            <MyBankHeader/>
            <MyBankSection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;