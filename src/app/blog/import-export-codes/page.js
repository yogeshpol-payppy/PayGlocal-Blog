import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import IEC from "./import-export-codes";











function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <IEC/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;