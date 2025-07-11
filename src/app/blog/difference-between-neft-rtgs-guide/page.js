import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import NeftRtgsGuide from "./difference-between-neft-rtgs-guide";






function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <NeftRtgsGuide/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;