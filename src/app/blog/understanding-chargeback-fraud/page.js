import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import UnderstandingChargebackFrauds from "./understanding-chargeback-fraud";








function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <UnderstandingChargebackFrauds/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;