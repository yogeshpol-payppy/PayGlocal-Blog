
function ComplianceHeader()
{
    return(
        <>
            <header className={"bg-black  flex items-center justify-center px-4 pb-20 sm:px-10 sm:pb-28 pt-36 sm:pt-56 " }>

                <div className=" flex flex-col items-center max-w-xl lg:max-w-4xl w-full gap-4 lg:gap-8">
                    <h1 className="common-h1-heading custom-text-white text-center">Compliance & Security @PayGlocal</h1>
                    <p className="common-body1-text custom-text-grey400 max-w-lg w-full text-center">PayGlocal has implemented a security mesh & zero trust architecture to achieve the &quot;never trust, always verify&quot; approach.</p>
                    <p className="common-body2-text custom-text-white text-center">Got questions? Write to us at <a href="mailto:infosec@payglocal.in" className='custom-text-blue1'>infosec@payglocal.in</a></p>
                </div>

            </header>
        </>
    )
}

export default ComplianceHeader;


