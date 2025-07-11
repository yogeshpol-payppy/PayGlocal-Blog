import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import Mt103SwiftMessage from "./mt103-swift-message-elements";





function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <Mt103SwiftMessage/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;