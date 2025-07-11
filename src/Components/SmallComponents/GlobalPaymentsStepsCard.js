
function GlobalPaymentsStepsCard({title,para,classname})
{
    return(
        <>
            <div className="flex flex-col gap-3 items-center pt-12 pb-14 px-6   background-custom-grey50 rounded-2xl lg:h-80 justify-center self-stretch">
                <h2 className={`common-h2-heading ${classname} text-center`}>{title}</h2>
                <h6 className="common-h6-heading custom-text-grey600 text-center lg:max-w-72 w-full">{para}</h6>
            </div>
        </>
    )
}

export default GlobalPaymentsStepsCard;