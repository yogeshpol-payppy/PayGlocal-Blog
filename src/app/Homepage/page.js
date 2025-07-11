import '@/Styles/Homepage/payglocalHomepage.css';
import HomepageSection from './HomepageSection';
import PayglocalFooter from '@/Components/PayglocalFooter';
import HomepageHeader from './HomepageHeader';
import PayglocalNavbar from '@/Components/Navbar';
function Page()
{
    return(
        <>
            <PayglocalNavbar/>
            <HomepageHeader/>
            <HomepageSection/>
            <PayglocalFooter ReadyToTakeOffBtnPresent={false}/>
        </>
    )
}

export default Page;