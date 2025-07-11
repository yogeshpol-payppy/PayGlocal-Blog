import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import IgstCgstSgstTypes from "./igst-cgst-sgst-indian-gst-types";










function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <IgstCgstSgstTypes/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;