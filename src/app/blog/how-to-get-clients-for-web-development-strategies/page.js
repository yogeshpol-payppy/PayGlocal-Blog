import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import ClientWebDevelopment from "./how-to-get-clients-for-web-development-strategies";






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