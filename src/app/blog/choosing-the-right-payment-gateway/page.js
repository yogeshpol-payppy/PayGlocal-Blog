
import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import ChoosingThePaymentGateway from "./choosing-the-right-payment-gateway";





function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <ChoosingThePaymentGateway/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;