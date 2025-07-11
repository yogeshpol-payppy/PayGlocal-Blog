import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import LUTCertificate from "./lut-certificate-download-furnish";





function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <LUTCertificate/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;