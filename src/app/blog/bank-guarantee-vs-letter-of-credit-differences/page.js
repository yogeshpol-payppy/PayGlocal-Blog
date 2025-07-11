import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import CheckingAbaNumberMethods from "./bank-guarantee-vs-letter-of-credit-differences";


function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <CheckingAbaNumberMethods/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;