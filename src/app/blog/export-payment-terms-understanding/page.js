import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import ExportTC from "./export-payment-terms-understanding";








function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <ExportTC/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;