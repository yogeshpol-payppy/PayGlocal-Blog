import '@/Styles/AboutUs/AboutUs.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import AboutUsHeader from './AboutUsHeader';
import AboutUsSection from './AboutUsSection';
import PayglocalNavbar from '@/Components/Navbar';
function Page()
{
    return(
        <>
            <PayglocalNavbar/>
            <AboutUsHeader/>
            <AboutUsSection/>
            <PayglocalFooter/>
        </>
    )
}

export default Page;