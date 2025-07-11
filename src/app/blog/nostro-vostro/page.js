import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import NostroVostro from "./nostro-vostro";





function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <NostroVostro/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;