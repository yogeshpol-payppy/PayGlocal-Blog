import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import FobInExportInvoices from "./fob-full-form-export-invoices";








function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <FobInExportInvoices/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;