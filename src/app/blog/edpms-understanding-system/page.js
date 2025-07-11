import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import ClientWebDevelopment from "./edpms-understanding-system";







function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <ClientWebDevelopment/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;