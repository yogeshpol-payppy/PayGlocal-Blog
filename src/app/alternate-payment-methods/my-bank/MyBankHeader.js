
import MyBank from '@/Images/Grabpay/mybank.svg';
import PaymentMethodPagesHeader from '@/Components/PaymentMethodPagesHeader';
import PayglocalNavbar from '@/Components/Navbar';

function MyBankHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <PaymentMethodPagesHeader title={'MyBank'} imgName={MyBank} para={"MyBank is integrated with 209 banks and has a potential consumer base of 40 million consumers across Europe. MyBank allows transactions of any amount."} />

        </>
    )
}

export default MyBankHeader;


