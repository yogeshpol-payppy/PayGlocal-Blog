import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import ZeroKnowledgeProof from "./zero-knowledge-proof";








function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <ZeroKnowledgeProof/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;