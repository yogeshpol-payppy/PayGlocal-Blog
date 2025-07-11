import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import ClickClickGoose from "./click-click-goose";





function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <ClickClickGoose/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;