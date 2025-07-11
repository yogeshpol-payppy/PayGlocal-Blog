import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import ReceivableAccounting from "./receivable-accounting-definition-types";







function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <ReceivableAccounting/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;