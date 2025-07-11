import PayglocalNavbar from '@/Components/Navbar';
import PayglocalFooter from '@/Components/PayglocalFooter';
import CorporateInformationSection from './CorporateInformationSection';

function Page()
{
    return(
        <>
           <PayglocalNavbar navbarScrolledprop={true}/>
           <CorporateInformationSection/>
           <PayglocalFooter/>
        </>
    )
}

export default  Page;