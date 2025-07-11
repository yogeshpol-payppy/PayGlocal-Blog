import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import ComprehensiveGuideToFraudReporting from "./comprehensive-guide-to-fraud-reporting-mitigation-strategies";






function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <ComprehensiveGuideToFraudReporting/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;