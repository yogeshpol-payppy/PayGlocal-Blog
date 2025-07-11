import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import Xborder from "./real-time-crossborder-payments";







function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <Xborder/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;