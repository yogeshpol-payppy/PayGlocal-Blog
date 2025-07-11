import { Manrope } from 'next/font/google';

const manrope=Manrope({
    subsets:['latin'],
    display:'swap'
})
 function PolicyTitleWithPara ({title,paras}){

  return (
            <>
                <div className={"flex flex-col gap-5 max-w-3xl w-full " + manrope.className}>
                    <h4 className="common-h4-heading">{title}</h4>
                    {paras.map((para, index) => (
                        <p key={index} className="common-body1-text custom-text-grey900"> {para.bold ? <strong>{para.text}</strong> : para.text}</p>
                    ))}
                </div>
            </>
    
    )
}

export default PolicyTitleWithPara;
