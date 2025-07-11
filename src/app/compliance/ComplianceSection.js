import Image from 'next/image';

import DSS from '@/Images/Compliance/pci-dss-green.svg';
import PolicyTitleWithPara from '@/Components/SmallComponents/PolicyTitleWithPara';


 function ComplianceSection (){





  return (
        <section className={"flex flex-col gap-10 lg:gap-12 justify-center items-center px-4 py-10 sm:px-10 sm:py-10  lg:py-20  background-custom-grey50 "}>
            <PolicyTitleWithPara title={'Our philosophy'} paras={[{text:'At PayGlocal, we take security very seriously. We understand that our customers entrust us with their data and we are committed to maintaining its confidentiality, integrity, and availability. To achieve this, we have implemented innovative security strategies that constantly evolve to remain ahead of emerging threats. Our security strategy includes not only technical safeguards, such as encryption and firewalls but also robust policies and procedures that govern employee access and behavior. We believe that our customers deserve nothing less than the highest level of security and we are dedicated to providing it.'}]} />
            
            <PolicyTitleWithPara title={'Authentication'} paras={
                [{text:'PayGlocal utilizes the latest encryption standards, applied cryptography, and a security framework to authenticate and communicate with each merchant using a zero-trust architecture.'},
                 {text:'We use JWT-based authentication using the RS256 encryption algorithm.',bold:true}
                ]} />

            {/* End-to-End Encryption section  */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                    <h4 className="common-h4-heading">End-to-End Encryption</h4>
                        <p  className="common-body1-text custom-text-grey900">PayGlocal is committed to safeguarding customers&apos; sensitive information throughout its lifecycle. The data entering the system embarks on a journey, starting from the user, going over the wire, and traversing through the edge, perimeter, business, and restricted layers. At various checkpoints along this journey, there are moments when the SSL connection is temporarily terminated and restarted, potentially leaving the payload vulnerable and exposed in its unencrypted form.</p>
                        <p  className="common-body1-text custom-text-grey900">However, PayGlocal takes an extra step to fortify the security of customer data by encrypting the data even before it even enters the network. By implementing this additional layer of encryption, we ensure that the <strong> data is only accessible in its clear, readable form only where and when it is absolutely necessary.</strong></p>
                        <p  className="common-body1-text custom-text-grey900 "><strong>We use an AES with a key strength of 256 bits and a GCM algorithm to encrypt data.</strong></p>
                </div>

                {/* Compliances */}
            <div className="flex flex-col gap-5 max-w-3xl w-full">
                <h4 className="common-h4-heading">Compliances</h4>
                <div className="flex justify-between items-center gap-4">
                    <h4 className="common-h4-heading max-w-[490px] w-full">PayGlocal is PCI-DSS Level 1 Certified</h4>
                    <div className="flex justify-center items-center border border-custom-grey200 rounded-2xl p-5">
                        <Image src={DSS} width={180} height={69} quality={100} alt='img' className='' />
                    </div>
                </div>
                <p className="common-body1-text custom-text-grey900 ">We believe in security compliance, an effective way to mitigate risk and build trust. PayGlocal has been audited by an independent PCI Qualified Security Assessor (QSA) and is certified as a Level 1 PCI DSS v4.0 certification. PCI DSS is the most stringent level of certification available in the payments industry.</p>
            </div>
        </section>
    )
}

export default ComplianceSection;
