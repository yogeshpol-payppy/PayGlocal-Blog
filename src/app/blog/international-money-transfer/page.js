import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import HowToOpenMCA from "./international-money-transfer";




function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <HowToOpenMCA/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;