import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import EInvoicing from "./e-invoicing";






function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <EInvoicing/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;