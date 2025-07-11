
import Przelewy from '@/Images/Grabpay/przelewy.svg';

import PaymentMethodPagesHeader from '@/Components/PaymentMethodPagesHeader';
import PayglocalNavbar from '@/Components/Navbar';

function PrzelewyHeader()
{
    return(
        <>
        <PayglocalNavbar/>
        <PaymentMethodPagesHeader imgName={Przelewy} title={'Przelewy 24 | P24'} para={'P24 gives access to 165 banks in Poland. Used by more than 72% of Polish e-commerce consumers. P24 has a very high brand recognition of 91% thus leading to higher conversion ratios to the merchants offering P24 on the checkout.'} />
       
        </>
    )
}

export default PrzelewyHeader;


