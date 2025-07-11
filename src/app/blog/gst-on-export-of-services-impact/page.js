import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import GstOnExportOfServices from "./gst-on-export-of-services-impact";










function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <GstOnExportOfServices/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;