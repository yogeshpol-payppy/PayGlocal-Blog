import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import ExportProceduresDocumentation from "./how-to-learn-export-documentation-strategy";






function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <ExportProceduresDocumentation/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;