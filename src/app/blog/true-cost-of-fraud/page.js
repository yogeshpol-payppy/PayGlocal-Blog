import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import Fraud from "./true-cost-of-fraud";








function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <Fraud/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;