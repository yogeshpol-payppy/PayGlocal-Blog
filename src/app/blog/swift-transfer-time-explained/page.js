import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import SwiftTransferTime from "./swift-transfer-time-explained";








function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <SwiftTransferTime/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;