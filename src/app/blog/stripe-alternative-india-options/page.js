import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import StripeAlternativeIndiaOptions from "./stripe-alternative-india-options";








function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <StripeAlternativeIndiaOptions/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;