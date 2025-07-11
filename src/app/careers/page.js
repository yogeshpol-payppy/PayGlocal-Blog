import '@/Styles/OnePlatform/OnePlatform.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import CareerSection from './CareerSection';
import PayglocalNavbar from '@/Components/Navbar';

function Page()
{
    return(
        <>
            <PayglocalNavbar/>
            <CareerSection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;