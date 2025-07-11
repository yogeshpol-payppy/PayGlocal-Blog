import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import XpressPayflowShopify from "./xpress-payflow-shopify";








function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <XpressPayflowShopify/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;