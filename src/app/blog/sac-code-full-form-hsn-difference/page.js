import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import SacCodeVsHsnCode from "./sac-code-full-form-hsn-difference";







function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <SacCodeVsHsnCode/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;