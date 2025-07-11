import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import MultiCurrencyAccountIndia from "./multi-currency-account-india";





function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <MultiCurrencyAccountIndia/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;