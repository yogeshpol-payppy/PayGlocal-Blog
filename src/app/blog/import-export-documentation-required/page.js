import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import ExportDocsRequired from "./import-export-documentation-required";












function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <ExportDocsRequired/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;