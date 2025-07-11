import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import GetInternationalClients from "./how-to-get-international-clients-for-web-development-tips";





function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <GetInternationalClients/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;