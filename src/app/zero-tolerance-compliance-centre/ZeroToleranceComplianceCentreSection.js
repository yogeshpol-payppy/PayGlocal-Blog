import React from 'react';
import { JetBrains_Mono } from 'next/font/google';



const jetBrains_Mono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap'
})

function ZeroToleranceComplianceCentreSection() {





    return (
        <>
            {/* Highlights  section*/}
            <section className={"py-10 sm:py-20 px-4 sm:px-10 flex items-center justify-center background-custom-white " }>
                <div className="flex flex-col gap-20 items-center max-w-[1000px] w-full">
                    <div className="flex flex-col background-custom-grey50 gap-10 sm:gap-20 py-14 px-5 lg:py-20 sm:px-14 rounded-3xl max-w-[1000px] w-full">
                        <div className="flex flex-col gap-4 items-center">
                            <p className={"common-all-caps custom-text-grey500 " + jetBrains_Mono.className}>At PayGlocal,</p>
                            <h2 className="common-h2-heading custom-text-black text-center max-w-3xl">We Believe in Zero Tolerance.</h2>
                            <p className={"common-body1-text custom-text-grey600 text-center lg:max-w-3xl " }>Our commitment to creating a safe, inclusive, and ethical work environment is unwavering. We are proud to be an equal opportunity employer and firmly uphold a zero tolerance policy in three critical areas to ensure the well-being and integrity of our organization.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                            <div className="flex flex-col gap-5 sm:gap-8 py-10 px-4 sm:pt-10 sm:pb-12 sm:px-12 lg:p-14 background-custom-grey50 rounded-2xl">
                                <div className="flex border border-custom-grey200 justify-center items-center w-20 h-20 sm:w-24 sm:h-24 background-custom-white rounded-full">
                                    <h3 className="common-h3-heading custom-text-blue1">1</h3>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4 className="common-h4-heading text-left">Prevention of Sexual Harassment (POSH)</h4>
                                    <p className={"common-body1-text custom-text-grey600 text-left " }>We staunchly reject all forms of sexual harassment within our workspace. Our dedicated Internal Committees (IC) is in place to promptly address and resolve harassment issues reported by any employee. We follow stringent timelines and maintain gender-neutral processes for redressal.</p>
                                    <p className=" common-body2-text  border-t pt-5 ">Click here for any compliance support on <a href="mailto:posh@payglocal.in" className='custom-text-blue1'>POSH.</a></p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 sm:gap-8 py-10 px-4 sm:pt-10 sm:pb-12 sm:px-12 lg:p-14 background-custom-grey50 rounded-2xl">
                                <div className="flex border border-custom-grey200 justify-center items-center w-20 h-20 sm:w-24 sm:h-24 background-custom-white rounded-full">
                                    <h3 className="common-h3-heading custom-text-blue1">2</h3>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4 className="common-h4-heading text-left">Whistleblower Protection</h4>
                                    <p className={"common-body1-text custom-text-grey600 text-left " }>We understand the importance of transparency and accountability. Our Whistleblower Policy allows stakeholders to report potential violations, such as financial irregularities and breaches of company policies or relevant laws, with complete confidentiality and anonymity. We review these whistleblower complaints independently to maintain the highest ethical standards.</p>
                                    <p className=" common-body2-text  border-t pt-5 ">Click here for any compliance support on <a href="mailto:Compliance@payglocal.in" className='custom-text-blue1'>Whistleblower Protection.</a></p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 sm:gap-8 py-10 px-4 sm:pt-10 sm:pb-12 sm:px-12 lg:p-14 background-custom-grey50 rounded-2xl">
                                <div className="flex border border-custom-grey200 justify-center items-center w-20 h-20 sm:w-24 sm:h-24 background-custom-white rounded-full">
                                    <h3 className="common-h3-heading custom-text-blue1">3</h3>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4 className="common-h4-heading text-left">Anti-Money Laundering (AML)</h4>
                                    <p className={"common-body1-text custom-text-grey600 text-left " }>We take our commitment to preventing money laundering seriously. Our policies and procedures strictly adhere to anti-money laundering regulations, ensuring compliance and safeguarding against financial crimes. We prioritize ethical financial practices to protect the integrity of our organization.</p>
                                    <p className=" common-body2-text  border-t pt-5 ">Click here for any compliance support on <a href="mailto:Compliance@payglocal.in" className='custom-text-blue1'>AML.</a></p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 sm:gap-8 py-10 px-4 sm:pt-10 sm:pb-12 sm:px-12 lg:p-14 background-custom-grey50 rounded-2xl">
                                <div className="flex border border-custom-grey200 justify-center items-center w-20 h-20 sm:w-24 sm:h-24 background-custom-white rounded-full">
                                    <h3 className="common-h3-heading custom-text-blue1">4</h3>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4 className="common-h4-heading text-left">Anti-Bribery and Corruption (ABAC)</h4>
                                    <p className={"common-body1-text custom-text-grey600 text-left " }>We maintain a strong stance against bribery, upholding our ethical values and integrity.</p>
                                    <p className=" common-body2-text  border-t pt-5 ">Click here for any compliance support on <a href="mailto:Compliance@payglocal.in" className='custom-text-blue1'>ABAC.</a></p>
                                </div>
                            </div>



                        </div>

                    </div>

                    <div className="flex flex-col items-center gap-5">
                        <p className="common-body1-text custom-text-grey900">In summary, our zero tolerance policy at PayGlocal underscores our unwavering commitment to promoting a safe, ethical, and inclusive work environment. We address sexual harassment issues through our IC, protect whistleblowers, and maintain strict adherence to anti-money laundering regulations. These principles, in conjunction with our status as an equal opportunity employer, form the foundation of our company&apos;s values and our dedication to creating a better workplace for all.</p>
                        <p className="common-body1-text custom-text-grey900">Join us in our pursuit of excellence, integrity, and inclusivity at PayGlocal.</p>
                        <p className="common-body1-text custom-text-grey900">Your journey to a better workplace starts here!</p>
                    </div>


                </div>

            </section>
        </>
    )
}

export default ZeroToleranceComplianceCentreSection;
