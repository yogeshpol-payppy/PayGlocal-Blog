import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import Section44Ada from "./section-44ada-tax-scheme";







function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <Section44Ada/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;