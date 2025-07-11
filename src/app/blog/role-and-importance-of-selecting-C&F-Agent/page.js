import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import CFA from "./role-and-importance-of-selecting-C&F-Agent";







function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <CFA/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;