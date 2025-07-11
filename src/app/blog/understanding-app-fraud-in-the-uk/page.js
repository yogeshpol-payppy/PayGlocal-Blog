import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import UnderstandingAppFraud from "./understanding-app-fraud-in-the-uk";








function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <UnderstandingAppFraud/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;