import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import ForeignExchange from "./what-is-foreign-exchange";








function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <ForeignExchange/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;