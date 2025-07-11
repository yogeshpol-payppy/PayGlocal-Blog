import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import SelectAmazonGlobal from "./how-to-select-amazon-global-in-india-explained";






function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <SelectAmazonGlobal/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;