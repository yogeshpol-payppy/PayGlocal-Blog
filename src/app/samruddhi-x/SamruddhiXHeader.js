'use client';
import Image from "next/image";

import { JetBrains_Mono } from "next/font/google";


// header images 
import Header from '@/Images/SamruddhiX/sam-x-header-bg.png';
import HeaderText from '@/Images/SamruddhiX/samx-header-text.png';
import Search from '@/Images/SamruddhiX/search.svg';
import SanctionChecker from '@/Images/SamruddhiX/sanction-list-checker.svg';

import { useState } from "react";
import SanitizingInputs from "@/SanitizingInputs/SanitizingInput";
import { nameMatch } from "@/Apis/SamXCheckNameApi";
import AnimatedCircularProgressBar from "@/shadcnComponents/ui/animated-circular-progress-bar";
import GreenThumsUp from '@/Images/SamruddhiX/green-thumbs-up.svg';
import SamXSourcesTitle from "@/Components/SmallComponents/SamXSourcesTitle";


//modal images
import SamXHeaderSanctionToolDetail from "@/Components/SmallComponents/SamXHeaderSanctionToolDetail";
import SamXModal from "@/Components/SamXModal";


const jetBrains_Mono=JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})

function SamruddhiXHeader()
{

    let[uesrName,setUserName]=useState('');

    let[sanctionListUIRenderingSteps,setSanctionListUIRenderingSteps]=useState(0);      //used to show diiferent sanction results
    let[sanctionListDetail,setSanctionListdetail]=useState('');                         //used to store UI with different colors and catagory like Match No Found , Partially Match 

    //for modal 
    let[modalOpen,setModalOpen]=useState(false);

    //handle input change
    function handleInputChange(e)
    {
        setUserName(e.target.value);
        setSanctionListUIRenderingSteps(0);
    }

    //function for api 
    function handleCheckUserName()
    {
        let sanitizedValue=SanitizingInputs(uesrName);
        if(sanitizedValue.length===0)
        {
            return;
        }
 
        nameMatch(sanitizedValue)
        .then((data)=>{
            let result=matchStatusColor(data.data.data);
            setSanctionListUIRenderingSteps(1);
            setSanctionListdetail(result);
        })
        .catch((error)=>{
            console.error(error);
        })
    }

    //if user press a enter key
    function handleInputKeyPress(e)
    {
        if(e.key==='Enter')
        {
            handleCheckUserName();
        }
    }


    //calculatePercentage function is used to convert omniscore (which is a value in decimal points) to make it rounded  value
    function calculatePercentage(value)
    {
        if(value===0)
        {
            return 100;     // If omniScore is 0, display as 100% (green circle case)
        }
        return Math.round(value * 100);
    }

    //Object to store the categories and corresponding colors for match statuses
    const match = {
        noMatch: {
          text: "NO MATCH FOUND",
          color: "#22C373",
        },
        partialMatch: {
          text: "PARTIAL MATCH",
          color: "#D7BA57",
        },
        matchFound: {
          text: "MATCH FOUND",
          color: "#F47F65",
        },
      };
     
      const matchStatusColor = (result) => {
        const value = parseFloat(result?.omniScore?.toFixed(2));
        if (value >= 0.9) {
          return { color: match.matchFound.color, text: match.matchFound.text , matchScoreValue:calculatePercentage(result.omniScore) };
        } else if (value >= 0.6 && value < 0.9) {
          return { color: match.partialMatch.color, text: match.partialMatch.text ,  matchScoreValue:calculatePercentage(result.omniScore) };
        } else if (value < 0.6) {
          return { color: match.noMatch.color, text: match.noMatch.text ,  matchScoreValue:calculatePercentage(result.omniScore)};
        }
      };


      function handleModalOpen()
      {
          setModalOpen(true);
      }

        // //when user close modal
        // function handleModalClose()
        // {
        //     setModalOpen(false);
        // }
    return(
        <>
        
        <header className={"flex items-center justify-center px-4 pb-20 pt-36 sm:px-10   samx-header relative overflow-hidden bg-[#F6F8FE] "}>
            <Image src={Header} width={1134} height={778} quality={100} alt="img" className="absolute -top-5 sm:-top-10 left-0 lg:left-auto right-auto lg:-right-44 object-contain"/>
            <Image src={HeaderText} width={1134} height={778} quality={100} alt="img" className="absolute max-w-4xl w-full top-32 -right-0 text-[#FFFFFF66] -z-[-1] text-xl leading-8 white-absolute-header-text "/>

            {/* </div> */}
            <div className="max-w-[1380px] flex flex-col gap-10 w-full relative overflow-hidden z-[2]  ">
               
                <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-14 lg:gap-52 w-full ">
                    
                    <div className="flex flex-col items-center lg:items-start gap-10 lg:max-w-2xl w-full  ">
                        <SamXHeaderSanctionToolDetail />
                        {/* <div className="flex flex-col gap-4 items-center lg:items-start">
                            <div className={"common-all-caps custom-text-blue1 "+jetBrains_Mono.className}>Sanction screening tool</div>
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <h1 className="common-h1-heading text-center lg:text-left">SamruddhiX</h1>
                                <h2 className="common-h2-heading text-center lg:text-left">Sanctions Screening with Privacy & Precision</h2>
                            </div>
                            <p className={"common-body1-text lg:max-w-sm w-full text-center lg:text-left "}>Ensure your business stays compliant with global AML regulations—instantly and securely.</p>
                        </div> */}
                        <div className="flex flex-col gap-2 max-w-lg w-full  items-center lg:items-start">
                            <div className={"text-sm leading-6 uppercase font-bold custom-text-grey900 "+jetBrains_Mono.className}>try it yourself</div>
                            <div className="flex items-center rounded-xl  background-custom-white relative z-[1] w-full border ">
                                <input type="text" value={uesrName} name="fullName" className={" custom-text-grey600 z-[2] py-5 px-4 grow outline-none border h-full font-normal relative rounded-l-xl "} placeholder="Enter Full Name" onChange={handleInputChange} onKeyDown={handleInputKeyPress} />
                                <div className="flex items-center justify-center background-custom-blue1 p-4 h-full rounded-r-xl z-[1] cursor-pointer " onClick={handleCheckUserName}>
                                    <Image src={Search} width={32} height={32} quality={100} alt="" className="" />
                                </div>
                                <div className={"hidden lg:block text-[#BBD0FF99] absolute -z-[1]  top-0.5 -right-[550px] common-body1-text font-normal RightToLeftSlide  "}>d k j g h e 9 p 4 8 7 w e i f j s h d k j f 7 f d s d 8 f g f d f g 7 8 6 7 f w e s i h 7 f d s d 8 f g f d f g 7 8 6 7 f w e s i h f d s d 8 f g f d f g 7 8 6 7 f w e s i h 7 f d s d 8 f g f d f g 7 8 6 7 f w e s i h</div>
                                <div className={"hidden lg:block text-[#BBD0FF99] absolute -z-[1]  top-8 -right-[550px] common-body1-text font-normal LeftToRightSlide  "}>d k j g h e 9 p 4 8 7 w f d s d 8 f g f d f g 7 8 6 7 f w e s i h 7 f d s d 8 f g f d f g 7 8 6 7 f w e s i h e i f j s h d k j f 7 f d s d 8 f g f d f g 7 8 6 7 f w e s i h 7 f d s d 8 f g f d f g 7 8 6 7 f w e s i h</div>

                            </div>
                            <div  className="common-body3-text custom-text-blue1 cursor-pointer " onClick={handleModalOpen}><span>Terms & Conditions</span></div>
                        </div>
                    </div>

                    <div className={`max-w-[300px] sm:max-w-[379px] w-full background-custom-white rounded-xl p-8 ${sanctionListUIRenderingSteps!=0?' pt-28 ':' '} flex flex-col gap-4 items-center z-[1] border border-custom-grey200 relative`}>
                       {sanctionListUIRenderingSteps==0?
                                <>
                                    <h5 className="common-h5-heading custom-text-blue1 text-center">Sanction List Checker</h5>
                                    <div className="flex background-custom-grey50 pt-10 px-5 pb-8 w-full border border-custom-grey200 rounded-xl">
                                        <div className="flex flex-col items-center ">
                                            <Image src={SanctionChecker} width={189} height={186} quality={100} alt="" className="" />
                                            {/* <AnimatedCircularProgressBar max={100} min={0} value={75} gaugePrimaryColor={'blue'} gaugeSecondaryColor={'#EBF0F9'} className={' w-36 h-36 '}/> */}
                                            <p className={"common-body1-text custom-text-grey500 text-center " }>Add a name to get a sanction screening result</p>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <h6 className="common-h6-heading text-center absolute top-6 screening-result-text p-3 custom-text-white w-[120%] z-[1] ">Screening Result</h6>
                                    <div className="flex justify-center background-custom-grey50 pt-8 px-5 pb-8 w-full border border-custom-grey200 rounded-xl relative ">
                                        <div className={"py-1 px-3 text-xs leading-5 custom-text-white rounded-full absolute top-0 left-[50%] -translate-y-1/2 -translate-x-1/2 whitespace-nowrap "+jetBrains_Mono.className} style={{backgroundColor:sanctionListDetail.color}}><strong>{sanctionListDetail.text}</strong></div>
                                        <div className="flex flex-col gap-3 items-center ">
                                            <div className="common-body1-text custom-text-grey600 capitalize ">{uesrName}</div>
                                            <div className="w-36 h-36 relative">
                                                <AnimatedCircularProgressBar max={100} min={0} value={sanctionListDetail.matchScoreValue} gaugePrimaryColor={sanctionListDetail.color} gaugeSecondaryColor={'#EBF0F9'} className={' w-36 h-36 '} showPercentage={sanctionListDetail.text!=='NO MATCH FOUND'} />
                                                {sanctionListDetail.text==='NO MATCH FOUND'?<Image src={GreenThumsUp} width={45} height={45} alt="img" quality={100} className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 " />:null}
                                            </div>

                                        </div>
                                    </div>
                                </>
                        }

                    </div>

                </div>

                    <div className="flex flex-col w-full gap-6 ">
                        <div className={"text-sm leading-6 uppercase font-bold text-center lg:text-left "+jetBrains_Mono.className}>with over 300 sources including</div>
                        <div className="flex items-center overflow-scroll overflow-scrollbarHidden  gap-3">
                            <SamXSourcesTitle title={'OFAC'} />
                            <SamXSourcesTitle title={'UNSC'} />
                            <SamXSourcesTitle title={'EU'} />
                            <SamXSourcesTitle title={'HM Treasury'} />
                        </div>
                    </div>
            </div>

        </header>



         {/* modal  */}

            <SamXModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </>
    )
}

export default SamruddhiXHeader;

















