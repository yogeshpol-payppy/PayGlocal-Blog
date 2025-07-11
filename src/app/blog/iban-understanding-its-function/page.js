import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import IbanUnderstandingItsFunction from "./iban-understanding-its-function";








function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <IbanUnderstandingItsFunction/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;