import PayglocalNavbar from "@/Components/Navbar";
import PayglocalFooter from "@/Components/PayglocalFooter";
import PrivacyPolicyForClientsHeader from "./PrivacyPolicyForClientsHeader";
import PrivacyPolicyForClientsSection from "./PrivacyPolicyForClientsSection";

function Page()
{
    return(
        <>
        <PayglocalNavbar />
        <PrivacyPolicyForClientsHeader/>
        <PrivacyPolicyForClientsSection/>
        <PayglocalFooter/>
        </>
    )
}

export default Page;