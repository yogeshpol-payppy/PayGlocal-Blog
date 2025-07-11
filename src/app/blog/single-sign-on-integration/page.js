import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import OneLogin from "./single-sign-on-integration";







function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <OneLogin/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;