import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import EInvoicingUnderGST from "./e-invoicing-under-GST";






function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <EInvoicingUnderGST/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;