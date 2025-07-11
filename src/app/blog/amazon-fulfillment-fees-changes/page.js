import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import AmazonFBAFees from "./amazon-fulfillment-fees-changes";
import '@/Styles/Blogs/blogs.css';

function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <AmazonFBAFees/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;