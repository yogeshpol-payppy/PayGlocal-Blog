import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import ManagingAndUnderstandingYourEEFC from "./managing-and-understanding-your-EEFC";





function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <ManagingAndUnderstandingYourEEFC/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;