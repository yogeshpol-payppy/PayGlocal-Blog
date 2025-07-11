import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import FreelancerInd from "./freelancer-india";









function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <FreelancerInd/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;