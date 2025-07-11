import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import SwiftChargesExplained from "./swift-charges-explained";








function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <SwiftChargesExplained/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;