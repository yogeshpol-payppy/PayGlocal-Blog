import '@/Styles/OnePlatform/OnePlatform.css';
import OnePlatformHeader from './OnePlatformHeader';
import OnePlatformSection from './OnePlatformSection';
import PayglocalFooter from '@/Components/PayglocalFooter';

function Page()
{
    return(
        <>
            <OnePlatformHeader/>
            <OnePlatformSection/>
            <PayglocalFooter/>
        </>
    )
}

export default  Page;