import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import MasteringExportsLUT from "./mastering-exports-LUT";





function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <MasteringExportsLUT/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;