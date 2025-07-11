import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import SortCode from "./sort-code-understanding-usage";







function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <SortCode/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;