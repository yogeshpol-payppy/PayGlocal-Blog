import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import HTTPRedirect from "./http-redirect";







function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <HTTPRedirect/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;