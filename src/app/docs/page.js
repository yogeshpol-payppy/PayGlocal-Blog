import '@/Styles/OnePlatform/OnePlatform.css';
import PayglocalFooter from '@/Components/PayglocalFooter';
import DocumentationHeader from './DocumentationHeader';
import DocumentationSection from './DocumentationSection';
import PayglocalNavbar from '@/Components/Navbar';

function Page()
{
    return(
        <>
            <PayglocalNavbar/>
            <DocumentationHeader/>
            <DocumentationSection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;