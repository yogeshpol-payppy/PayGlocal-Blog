import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import ClientWebDevelopment from "./top-10-freelancing-sites-2024";








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