
import '@/Styles/Grabpay/Grabpay.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import ContactUsSection from './ContactUsSection';



function Page()
{
    return(
        <>

            <ContactUsSection/>
            <PayglocalFooter ReadyToTakeOffBtnPresent={false}/>
        </>
    )
}

export default  Page;