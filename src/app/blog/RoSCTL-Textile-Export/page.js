import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import RoSCTL from "./RoSCTL-Textile-Export";







function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <RoSCTL/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;