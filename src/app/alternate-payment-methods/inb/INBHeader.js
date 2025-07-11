import INB from '@/Images/Grabpay/inb.svg';
import PaymentMethodPagesHeader from '@/Components/PaymentMethodPagesHeader';
import PayglocalNavbar from '@/Components/Navbar';

function INBHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <PaymentMethodPagesHeader imgName={INB} title={'Indian Net Banking (INB)'} para={'Indian Net Banking is a bank transfer method in India. PayGlocal supports retail Net Banking processing of over 50 Indian banks and corporate Net Banking support for the major commercial banks in India.'} />
       
        </>
    )
}

export default INBHeader;


