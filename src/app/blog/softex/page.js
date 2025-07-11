import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import Softex from "./softex";







function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <Softex/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;