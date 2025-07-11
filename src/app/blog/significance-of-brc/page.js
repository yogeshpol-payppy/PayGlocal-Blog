import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import SWIFT from "./significance-of-brc";







function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <SWIFT/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;