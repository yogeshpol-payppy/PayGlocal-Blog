'use client';

function CareerHeader ({handleClickForScroll})
{
    return(
        <>
        <header className="bg-black one-platform-header flex items-center justify-center">
            <div className="px-4 py-20 sm:px-10 sm:py-28 flex justify-center items-center ">
                <div className="flex flex-col gap-6 sm:gap-8 sm:items-center">
                    <div className="flex flex-col gap-4 sm:gap-5 sm:items-center ">
                        <h1 className="common-h1-heading custom-text-white font-medium sm:text-center max-w-4xl w-full  ">Building for the future @PayGlocal</h1>
                        <p className={"custom-text-grey300 font-medium common-body1-text sm:text-center max-w-2xl w-full "}>Be a part of lasting innovation - create new products, new processes and new standards. Join us to help us shape the future of payments.</p>
                    </div>
                    <button className={"background-custom-blue1 py-2.5 px-6 common-btn-text custom-text-white rounded-3xl sign-up-blue-btn-drop-shadow hover:scale-110 duration-300 "} onClick={handleClickForScroll}>Work with us</button>
                </div>
            </div>
        </header>
        </>
    )
}
export default CareerHeader;