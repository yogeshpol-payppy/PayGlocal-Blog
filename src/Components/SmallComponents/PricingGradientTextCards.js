import '@/Styles/Homepage/payglocalHomepage.css';           //this component contains homepage style so i have to import the homepage style

//images
import PricingTooltip from '../PricingTooltip';

function PricingGradientTextCards({value,isTooltipPresent=false ,toolTipText=''})
{
    return(
        <>
            <div className="flex lg:justify-center items-center py-5 px-12 gap-2 background-custom-white lg:max-w-56 w-full  rounded-xl background-custom-grey50 ">
                <div className="flex flex-col  ">
                    <h3 className="common-h3-heading background-text-gradient-1 matterfont">{value}</h3>
                    <div className="flex items-center gap-0.5">
                        <div className="common-body1-text whitespace-nowrap">Platform Fees*</div>
                        {isTooltipPresent&&<PricingTooltip tooltipContent={toolTipText}/>}
                    </div>
                    <p className="common-body2-text custom-text-grey500">per transaction</p>
                </div>
            </div>
        </>
    )
}
export default PricingGradientTextCards;