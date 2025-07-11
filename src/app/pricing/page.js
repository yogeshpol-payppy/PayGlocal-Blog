import PayglocalNavbar from "@/Components/Navbar";
import PricingHeader from "./PricingHeader";
import PricingSection from "./PricingSection";
import PayglocalFooter from "@/Components/PayglocalFooter";

function Page()
{
    return(
        <>
        <PayglocalNavbar navbarScrolledprop={true}/>
        <PricingHeader/>
        <PricingSection/>
        <PayglocalFooter/>
        </>
    )
}

export default Page;