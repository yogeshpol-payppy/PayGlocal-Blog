import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import Paymentfailure from "./payment-failure";






function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <Paymentfailure/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;