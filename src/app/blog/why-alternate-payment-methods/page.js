import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import AltPays from "./why-alternate-payment-methods";








function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <AltPays/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;