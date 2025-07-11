import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import PerformaInvoice from "./proforma-invoice-in-export-creation";







function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <PerformaInvoice/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;