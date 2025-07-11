import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import ExportFinanceBusiness from "./forms-of-export-finance-business-growth";









function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <ExportFinanceBusiness/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;