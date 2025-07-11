import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import IsIfscAndSwiftCodeSameDifferenc from "./is-ifsc-and-swift-code-same-difference";




function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <IsIfscAndSwiftCodeSameDifferenc/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;