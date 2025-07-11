'use client';

import { JetBrains_Mono } from "next/font/google";
import { useState } from "react";

// Domestic Payment Type Images
import Visa from '@/Images/Pricing/visa.svg';
import MasterCard from '@/Images/Pricing/master-card.svg';
import Rupay from '@/Images/Pricing/rupay.svg';
import Googlepay from '@/Images/Pricing/googlepay.svg';
import Phonepay from '@/Images/Pricing/phonepay.svg';
import Paytm from '@/Images/Pricing/paytm.svg';
import Hdfc from '@/Images/Pricing/hdfc.svg';
import Axis from '@/Images/Pricing/axis.svg';
import Icici from '@/Images/Pricing/icici.svg';
import Sbi from '@/Images/Pricing/sbi.svg';
import Wallet from '@/Images/Pricing/wallet.svg';
import MoneyInHand from '@/Images/Pricing/money-inhand.svg';




//international payment type images
import AmericanExpress from '@/Images/Pricing/american-express.svg';
import DinersClub from '@/Images/Pricing/diners-club.svg';
import Bank from '@/Images/Pricing/ph_bank-fill.svg';
import Trustly from '@/Images/Grabpay/trustly.svg';
import Sofort from '@/Images/Grabpay/sofort.svg';
import Eps from '@/Images/Grabpay/eps.svg';
import MyBank from '@/Images/Grabpay/mybank.svg';
import Attachment from '@/Images/Pricing/attachment.svg';
import PayWithPayglocal from '@/Images/Pricing/pay-with-payglocal.svg';

//additional payment type images
import GitBranchLine from '@/Images/Pricing/git-branch-line.svg';
import RiskManagement from '@/Images/Pricing/risk-management.svg';
import Account from '@/Images/Pricing/account.svg';
import AdminLine from '@/Images/Pricing/admin-line.svg';


import PricingDifferentPaymentTypesCard from "@/Components/PricingDifferentPaymentTypesCard";
import PricingGradientTextCards from "@/Components/SmallComponents/PricingGradientTextCards";
import PricingAdditionalPaymentTypeCard from "@/Components/PricingAdditionalPaymentTypeCard";
import SignUpBtn from "@/Components/SignUpBtn";



const jetBrains_Mono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})
function PricingSection()
{
    let [filterBtnText, setfilterBtnText] = useState("domestic");

     //solution cards filters
     const filters = ["domestic", "internatonal", "additionals"];

    return(
        <>
        <section className="px-4 sm:px-10 py-28 flex justify-center items-center overflow-hidden">
            
            <div className="flex flex-col gap-14 max-w-5xl w-full">
            
                <div className="flex flex-col items-center gap-6 ">
                    <h3 className="common-h3-heading max-w-[550px] w-full custom-text-grey900 text-center">Fees tailored for different payment types</h3>
                    <div className="flex items-center gap-2.5">
                        <div className={"flex gap-2 sm:gap-2 overflow-scroll " + jetBrains_Mono.className}>
                                {filters.map((filter) => (
                                    <button key={filter} className={`common-all-caps py-4 px-5 border-b-2 font-bold ${filterBtnText === filter? "custom-border-blue custom-text-blue1": "custom-border-grey400 custom-text-grey400"}`} onClick={() => setfilterBtnText(filter)}>{filter}</button>
                                ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5  w-full ">
                    
                    {filterBtnText==='domestic'&& 
                    <div className="flex flex-col gap-4 items-center">  
                        <div className="flex flex-col lg:flex-row gap-2.5">
                            <div className="flex flex-col gap-2.5">
                                <PricingDifferentPaymentTypesCard 
                                    title={'Debit & Credit Cards'} 
                                    imgs={[
                                        {src:Rupay,width:107.,height:26},
                                        {src:Visa,width:67,height:22},
                                        {src:MasterCard,width:47,height:32},
                                    ]} 
                                    moreTextPresent={true}/>


                                
                                <PricingDifferentPaymentTypesCard 
                                    title={'UPI'} 
                                    imgs={[
                                        {src:Googlepay,width:46.,height:39},
                                        {src:Phonepay,width:38,height:39},
                                        {src:Paytm,width:93,height:39},
                                    ]} 
                                    moreTextPresent={true}/>



                                
                                <PricingDifferentPaymentTypesCard 
                                    title={'Net Banking'} 
                                    imgs={[
                                        {src:Hdfc,width:36,height:37},
                                        {src:Axis,width:37,height:37},
                                        {src:Icici,width:38,height:37},
                                        {src:Sbi,width:36,height:35},
                                    ]} 
                                    moreTextPresent={true}/>


                                

                                
                                <PricingDifferentPaymentTypesCard 
                                    title={'Wallets'} 
                                    imgs={[
                                        {src:Wallet,width:73,height:28},
                                    ]} 
                                    />      


                                

                                <PricingDifferentPaymentTypesCard 
                                    title={'Payment Link/Button'} 
                                    imgs={[
                                        {src:MoneyInHand,width:72,height:72},
                                    ]} 
                                    />

                            </div> 
                            <PricingGradientTextCards value={'2%'} isTooltipPresent={true} toolTipText="Instruments like Diners and Amex Cards, International Cards, EMI (Credit Card, Debit Card & Cardless) & Corporate (Business) Credit cards will be charged at 3% (+ applicable GST) and International Amex Cards will be charged at 3.5% (+ applicable GST)."/>
                        </div>
                        <div className="flex flex-col items-center gap-10">
                            <div className="common-body1-text custom-text-grey600 text-center">*plus applicable GST on all transactions</div>
                            <SignUpBtn text="Sign Up Now" linkUrl="/contact" />
                        </div>
                    </div>
                    }
                   {filterBtnText==='internatonal'&& 
                    <div className="flex flex-col gap-4 items-center">
                        <div className="grid lg:grid-cols-[1.5fr,0.5fr] gap-2.5">
                                <PricingDifferentPaymentTypesCard 
                                    title={'Credit & Debit Cards'} 
                                    imgs={[
                                        {src:Visa,width:67,height:22},
                                        {src:MasterCard,width:47,height:32},
                                        {src:AmericanExpress,width:31,height:31},
                                        {src:DinersClub,width:56,height:33},
                                    ]} 
                                    moreTextPresent={true}/>

                                <PricingGradientTextCards value={'3%'} isTooltipPresent={true} toolTipText="Amex  Card will be charged at 3.5% + applicable GST"/>

                                
                                <PricingDifferentPaymentTypesCard 
                                    title={'Multi-Currency Account'} 
                                    imgs={[
                                        {src:Bank,width:64,height:44},
                                    ]} 
                                    />

                                <PricingGradientTextCards value={'1.5%'}/>

                                
                                <PricingDifferentPaymentTypesCard 
                                    title={'Global Payment Methods'} 
                                    imgs={[
                                        {src:Trustly,width:83,height:29},
                                        {src:Sofort,width:74,height:39},
                                        {src:Eps,width:33,height:20},
                                        {src:MyBank,width:36,height:20},
                                    ]} 
                                    moreTextPresent={true}/>

                                <PricingGradientTextCards value={'3.5%'}/>
                                

                                
                                <PricingDifferentPaymentTypesCard 
                                    title={'Recurring Payments'} 
                                    imgs={[
                                        {src:Visa,width:67,height:22},
                                        {src:MasterCard,width:47,height:32},
                                    ]} 
                                    />      

                                <PricingGradientTextCards value={'3.5%'}/>
                                

                                <PricingDifferentPaymentTypesCard 
                                    title={'Payment Link/Button'} 
                                    imgs={[
                                        {src:Attachment,width:48,height:48},
                                        {src:PayWithPayglocal,width:212,height:48},
                                    ]} 
                                    />

                                <PricingGradientTextCards value={'3.5%'}/>
                                
                        </div>
                        <div className="flex flex-col items-center gap-10">
                            <div className="common-body1-text custom-text-grey600 text-center">*plus applicable GST on all transactions</div>
                            <SignUpBtn text="Sign up Now" linkUrl="/contact" />
                        </div>
                    </div>
                        }
                    {filterBtnText==='additionals'&& 
                     <div className="flex flex-col gap-4 items-center">
                        <div className="grid lg:grid-cols-2 gap-2.5">
                            <PricingAdditionalPaymentTypeCard img={GitBranchLine} title={'Payments orchestration platform'} para={'AI enabled payment routing to multiple payment gateways with a single switch enablement'} />
                            <PricingAdditionalPaymentTypeCard img={RiskManagement} title={'Risk Management Tools'} para={'Fraud prevention and safeguards to mitigate/minimize risk'} />
                            <PricingAdditionalPaymentTypeCard img={Account} title={'Account validation'} para={'Validation service significantly improves transaction reliability'} />
                            <PricingAdditionalPaymentTypeCard img={AdminLine} title={'Sanction screening'} para={'A tool to identify and block individuals, entities, or transactions that are prohibited or restricted due to sanctions imposed by governments, regulatory bodies, or international organizations'} />
                        </div>
                            <div className="flex flex-col items-center gap-10">
                                <div className="common-body1-text custom-text-grey600 text-center">Pricing available on request</div>
                                <SignUpBtn text="Contact Us" linkUrl="/contact" />
                            </div>
                    </div>
                    }
                </div>
            </div>
        </section>
        </>
    )
}

export default PricingSection;