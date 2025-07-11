import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import RcmcFullFormRegistrationDocs from "./rcmc-full-form-registration-documents";







function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <RcmcFullFormRegistrationDocs/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;