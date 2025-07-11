import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import HSN_Codes from "./HSN_Codes";







function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <HSN_Codes/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;