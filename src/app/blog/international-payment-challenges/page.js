import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import ChallengesOfInternationalPayments from "./international-payment-challenges";




function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <ChallengesOfInternationalPayments/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;