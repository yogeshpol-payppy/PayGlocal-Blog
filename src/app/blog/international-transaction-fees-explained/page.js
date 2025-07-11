import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import InternationalTransactionsFees from "./international-transaction-fees-explained";




function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <InternationalTransactionsFees/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;