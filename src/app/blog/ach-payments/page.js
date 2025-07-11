import PayglocalNavbar from "@/Components/Navbar";
import AchPayments from "./Ach-payments";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';

function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <AchPayments/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;