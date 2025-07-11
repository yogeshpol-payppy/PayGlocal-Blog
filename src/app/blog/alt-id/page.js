import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import AltId from "./Alt-id";
import '@/Styles/Blogs/blogs.css';

function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <AltId/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;