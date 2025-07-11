
import OnePlatformHeaderCompo from '@/Components/OnePlatformHeaderCompo';;

function DocumentationHeader ()
{
    return(
        <>
          {/* <OnePlatformHeaderCompo titleWidthClass=' max-w-3xl ' paraWidthClass=' max-w-sm ' title={'Begin your journey with us.'} para={'Hit the ground running with the right tools and guides to Power your Product.'} lintText='Read Docs' /> */}
          <header className="bg-black one-platform-header flex items-center justify-center">
            <div className="px-4 py-20 sm:px-10 sm:py-28 flex justify-center items-center ">
                <div className="flex flex-col gap-6 sm:gap-8 sm:items-center">
                    <div className="flex flex-col gap-4 sm:gap-5 sm:items-center ">
                        <h1 className={` common-h1-heading custom-text-white font-medium sm:text-center  max-w-3xl w-full  `}>Begin your journey with us.</h1>
                        <p className={` custom-text-grey300 font-medium common-body1-text sm:text-center max-w-sm  w-full  `}>Hit the ground running with the right tools and guides to Power your Product.</p>
                    </div>
                    <a href="https://developer.payglocal.in/reference/lets-integrate" target="_blank" className='background-custom-blue1 py-2.5 px-6 common-btn-text custom-text-white rounded-3xl sign-up-blue-btn-drop-shadow hover:scale-110 duration-300 ' rel="noopener noreferrer">Read Docs</a>
                </div>
            </div>
          </header>
        </>
    )
}
export default DocumentationHeader;