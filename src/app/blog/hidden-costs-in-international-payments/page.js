import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import InternationalMoneyTransfer from "./hidden-costs-in-international-payments";





function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <InternationalMoneyTransfer/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;