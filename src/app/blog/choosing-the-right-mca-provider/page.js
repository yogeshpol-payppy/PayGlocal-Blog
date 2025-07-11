import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import ChoosingTheMCAProvider from "./choosing-the-right-mca-provider";





function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <ChoosingTheMCAProvider/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;