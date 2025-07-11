import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import '@/Styles/Blogs/blogs.css';
import Top10ProductsExported from "./top-10-products-export-India-2024";








function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <Top10ProductsExported/>
        <PayglocalFooter/>
        </>
    )
}
export default Page;