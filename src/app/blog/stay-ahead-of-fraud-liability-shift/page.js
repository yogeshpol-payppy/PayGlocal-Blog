import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import StayAheadOfFraudLiabilityShift from "./stay-ahead-of-fraud-liability-shift";








function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <StayAheadOfFraudLiabilityShift/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;