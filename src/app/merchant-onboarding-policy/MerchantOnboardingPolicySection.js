import PolicyTitleWithPara from '@/Components/SmallComponents/PolicyTitleWithPara';

 function MerchantOnboardingPolicySection (){





  return (
        <section className={"flex flex-col gap-10 lg:gap-12 justify-center items-center px-4 py-10 sm:px-10 sm:py-10  lg:py-20  background-custom-white "}>
            {/* Introduction section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Introduction</h4>
                <p className="common-body1-text custom-text-grey900">This policy is created by PayGlocal Technologies Private Limited (hereinafter referred to as the <strong>&quot;Company&quot;</strong> or <strong>PayGlocal</strong> or <strong>&quot;We&quot;</strong>) to clearly document guidelines & practices followed by the Company for refund in the course of its Payment Aggregator <strong>(&quot;PA&quot;)</strong> and Payment Aggregator – Cross Border (&quot;PA-CB&quot;) businesses. The Reserve Bank of India <strong>(&quot;RBI&quot;)</strong> by means of Guidelines on Regulation of Payment Aggregators and Payment Gateways <strong>(&quot;PA Guidelines&quot;)</strong> and Regulations on Payment Aggregator – Cross Border <strong>(&quot;PA-CB Regulations&quot;)</strong> regulates PA and PA-CB intermediaries in the payment ecosystem.</p>
                <p className="common-body1-text custom-text-grey900">In accordance with the PA Guidelines and PA-CB Regulations PayGlocal ensures detailed evaluation of each merchant onboarded on its system with detailed coverage of all the steps. <strong></strong>(&quot;Merchant On-boarding Policy&quot;<strong></strong> or <strong>&quot;Policy&quot;).</strong> The intent of the Policy is to establish a comprehensive mechanism to onboard merchants on the platform.</p>
                <p className="common-body1-text custom-text-grey900">Merchant on-boarding process includes documentation collection and verification, merchant nodal codes setup process, activation & maintenance activities.</p>
                <p className="common-body1-text custom-text-grey900">Our assessment and evaluation processes followed have been diligently drafted primarily on the guidelines and rules framed by RBI, advice and counsel of our banking partners and renowned consultants, prevailing industry best practices and our own zeal to provide our merchants and customers a safe, trusted, reliable and a secure platform to allow exchange of payments across. These assessments, evaluations and processes are updated from time to time as per the regulatory guidelines formulated and enforced.</p>

            </div>

            {/* Objectives section */}
              <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">II Objectives</h4>
                <p className="common-body1-text custom-text-grey900">The key Policy objectives are:</p>

                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Adherence to regulatory compliance in line with RBI guidelines titled &apos;Guidelines on Regulation of Payment Aggregators and Payment Gateways&apos; dated March 17, 2020 and bearing reference no. RBI/2020-21/117 CO.DPSS.POLC.No.S33/02-14-008/2020-2021 and amendments issued to the same thereafter.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Adherence to regulatory compliance in line with RBI regulations titled &apos;Regulation of Payment Aggregator – Cross Border (PA – Cross Border)&apos; dated October 31, 2023 and bearing reference no. RBI/2023-23/80CO.DPSS.POLC.No.S-786/02-14-008/2023-24 and amendments issued to the same thereafter.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Adherence to regulatory compliance in line with RBI regulation titled &apos;Master Direction on Know Your Customer (KYC), 2016 (&apos;KYC Master Directions) and amendments issued to the same thereafter.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Provide a clean, secure and robust process to ensure thorough assessment and evaluation of the prospective merchants of the Company.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Provide seamless onboarding experience to the merchant</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Adequate management of financial and operational risk associated with the merchant onboarding process.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Checks and evaluation criteria at the time of onboarding the merchant.</li>
                </ul>
                <p className="common-body1-text custom-text-grey900">The policy must be read in conjunction with the Company&apos;s Know Your Customer/ Anti-Money Laundering/ Combating Financing of Terrorism Policy (KYC/AML/CFT Policy), as updated from time to time.</p>
            </div>

            {/* III Scope and Applicability */}
            <PolicyTitleWithPara title={'III Scope and Applicability'}
            paras={[
                {'text':'The scope of the Merchant Onboarding Policy is to establish the framework and requirements for ensuring adequate management of regulatory compliance, financial and operational risk associated with the merchant onboarding process. The aim of this framework is not to eliminate the aforesaid risk, but to assist in managing the risks involved in the activities associated with KYC verification, commercial update/ payment option enablement etc., to maximize efficiency, to improve the processes and to minimize chances of adverse consequences and resultant losses.'},
                {'text':'This Policy shall be applicable to all the merchants with whom the Company establishes a PA or PA-CB relationship irrespective of the entity types or the scale of the merchants.'},
                {'text':'The Customer Onboarding, Risk and Compliance teams shall be responsible to assess scrutinize the potential merchant based on the information collected from the said merchant. The parameters for assessing the merchant are subject to and in accordance with the applicable laws, including the PA Guidelines and PA-CB Regulations.'}
            ]} />

             {/* IV Governance */}
             <PolicyTitleWithPara title={'IV Governance'}
            paras={[
                {'text':'The Policy is approved by the Board of Directors (“the Board”) of the Company.'},
                {'text':'The merchant sourcing / sales team and the risk & operations team are responsible for onboarding merchants and performing necessary due diligence.'},
                {'text':'A report on an agreed frequency is submitted to senior management for the merchants onboarded, necessary findings and due diligence conducted. A list of merchants is also provided to competent regulatory authorities whenever requested.'}
            ]} />

             {/* On-boarding Risks */}
             <PolicyTitleWithPara title={'On-boarding Risks'}
            paras={[
                {'text':'The scope of this section is to capture the activities and process steps involved in merchant onboarding and to identify the risks in the system.'},
                {'text':'Throughout our process of merchant onboarding, PayGlocal bears two types of contingent liability: Financial risk and compliance risk.'},
                {'text':"Please note that relevant financial risk and its mitigation guidelines on account of merchant credit / fraud risk is part of the Company's 'Merchant Risk & Fraud Policy.’"}
            ]} />

             {/* Financial risk section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Financial risk</h4>
                <p className="common-body1-text custom-text-grey900">PayGlocal is exposed to financial risks in the following situations:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Activate payment option / merchant on incorrect TDR (with reference to agreement/ addendum).</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Activate merchant / payment option on TDRs less than the buy rate / bank rate except in cases where business head approval on TDR is available.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Activate merchant on incorrect settlement type / flag (T+1, T+2 or any other).</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Activate incorrect bank details updated on MID.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Activate incorrect nodal codes.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Activate a merchant without requisite approval.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Activate merchant on incorrect back-end processor keys.</li>
                </ul>
            </div>

            {/* Compliance risk section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Compliance risk</h4>
                <p className="common-body1-text custom-text-grey900">Compliance Risk is endured in the following situations:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Merchant on-boarded without agreement.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Merchant KYC documents are missing as per the entity type of the merchant.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Merchant KYC documents are forged or not validated from the source.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Modification of details for live merchant without additional checks.</li>
                </ul>
            </div>

             {/* Other Assessments section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Other Assessments</h4>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Verification of brand identity, business model and line of business of the Merchants</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Website Redirection – If the merchant website is redirecting to a different website for purchase or payments, we seek clarification on requirement of PG Web/App not live. If web/app is not live or throwing some error, we don&apos;t allow and inform the business team to take up with merchant further.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Incorrect web/app URL – If the merchant has shared an incorrect URL, we do not allow and inform the business team to talk with the merchant about such rectification. These businesses are subject to further verification of business model. Additional information or documents are sought here. Business Model must be clearly defined while ascertaining LOB of the merchant. Model must accurately define the use of PG on the merchant website/application. Purpose of PG must be clearly stated in detail.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Refund & Cancellations Policy of the merchants: Verify refund policy offered by merchant (Returns/ Refunds or replacements or no refund no exchange), applicable policy TAT (Days till policy remains active for services/products as per merchant business model), mode of refund, the time till when the merchant is going to accept the cancellations and through which all channels.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Privacy policy of the merchants – Privacy policy should be according to the jurisdiction of India or their state in addition from where merchant is doing his business, customer/user information collection, use of information, third party disclosure, information protection, rights of users, cookies policy and notification of changes</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Commercial check – This check is needed for the enterprise level merchants. PayGlocal will validate merchant’s commercials as per the updated benchmark sheet for respective banking industry. Users need to select approve/reject/approval required for all the line as per the Commercials which are below the benchmark rates would need an approval from the respective business head of department.</li>
                </ul>
            </div>

             {/* V Merchant Onboarding Overview section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">V Merchant Onboarding Overview</h4>
                <p className="common-body1-text custom-text-grey900">The Company shall ensure that the following KYC and due diligence checks are performed on the merchants as part of the onboarding process as per the PA Guidelines and PA-CB Regulations:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">The Company shall obtain the proof of business existence for the merchant as per the applicable KYC/AML regulatory requirements. (Refer to Appendix-2 below) and KYC for overseas merchants, will be as per the regulation defined in that geography.
                        <span className="common-body1-text custom-text-grey900">Important Note: KYC/AML/CFT Policy covers the detailed approach on KYC process</span>
                    </li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">The merchant onboarding team shall perform a complete KYC check of the merchant. Verification shall be done for identity of the merchant and address of the establishment as per the regulatory requirements for KYC verification.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">The Company shall undertake background and antecedent checks of the merchant to ensure that fraudulent merchant set-ups, unreliable or untrustworthy operators are not onboarded. It includes KYC document verification and risk assessment of the merchant through assessment of the website, line of business and various paid / unpaid third party platforms.
                        <span className="common-body1-text custom-text-grey900">Important Note: KYC/AML/CFT Policy covers the detailed approach on KYC process</span>
                    </li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">For domestic merchants, based on the merchant&apos;s line of business / business model, number of years of operations, the merchant shall be classified as low, medium or high risk and accordingly, and the periodic updation of KYC/ Re-KYC will be triggered as per the extant directions of the RBI including but without limitation the RBI KYC Master Directions.</li>
                </ul>
            </div>

             {/* VI Merchant Onboarding Process section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">VI Merchant Onboarding Process</h4>
                <p className="common-body1-text custom-text-grey900">The Policy covers mainly the following aspects of managing financial risk and compliance risk:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Merchant KYC verification</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Merchant commercial update – Revenue and Cost</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Merchant payment option activation</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Merchant bank details update</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">MID Creation and Activation</li>
                </ul>
                <p className="common-body1-text custom-text-grey900">This Policy aims to define the following processes, which are to be executed by Merchant On-boarding team and part of PayGlocal core activity of payments processing:</p>
                <p className="common-body1-text custom-text-grey900">Merchant KYC validation:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Merchant supporting documents and KYC validation / verification.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">PayGlocal&apos;s terms of use to be agreed with and accepted by the Merchant</li>
                </ul>
                <p className="common-body1-text custom-text-grey900">Merchant Commercial update:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">TDR & Base rate (rack rate) verification –Revenue</li>
                </ul>
                <p className="common-body1-text custom-text-grey900">Merchant payment option update:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Checking payment options are enabled as per the as per the agreed terms.</li>
                </ul>
                <p className="common-body1-text custom-text-grey900">Merchant bank details update:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Account Verification</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Preformat Code Creation (Beneficiary code with Nodal Bank)</li>
                </ul>
                <p className="common-body1-text custom-text-grey900">MID Creation & Activation</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Creation & Activation of MID</li>
                </ul>
                <p className="common-body1-text custom-text-grey900">Please refer to Appendix 1 of this Policy for the list of banned and restricted business lists. Restricted categories to be onboarded post joint approval from Risk and Business heads.</p>
            </div>

             {/* VII Merchant KYC Verification section */}
             <PolicyTitleWithPara title={'VII Merchant KYC Verification'}
            paras={[
                {'text':'To minimize the error in merchant validation in Onboarding process and to enable Transaction and Settlement for the Merchant below due diligence on merchant KYC is performed.'}
            ]} />

             {/* Settlement Obligations section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Settlement Obligations</h4>
                <p className="common-body1-text custom-text-grey900">Merchant settlement cycle within the system will be as following:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Settlement cycle will be defined and agreed with the merchant.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">PayGlocal will ensure the settlement cycle is configured in PayGlocal system complies with the agreed time with the merchant in the contract.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">PayGlocal will ensure the settlement cycle is not configured to be later than (Td+1) or (Tr+1) as per the settlement cycle agreed with the merchant.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Certain exceptions will be agreed with the merchant when the settlement can be put on hold by PayGlocal which shall include.
                        <ul className="list-disc pl-5 space-y-5">
                            <li className="common-body2-text custom-text-grey900 font-semibold">risk-based events such as excessive chargebacks, complaints, frauds, non-compliance, etc.</li>
                            <li className="common-body2-text custom-text-grey900 font-semibold">other scenarios where deferred settlement is agreed between PayGlocal & merchant explicitly in the merchant agreement.</li>
                        </ul>

                    </li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Merchants will be obligated to comply with regulatory & compliance requirements set down in the PA Guidelines with respect to handling customers’ card data. It will be considered a breach of agreement if the PA Guidelines on handling card data are not adhered to, and the Merchant’s transaction processing is suspended immediately until the situation is remediated.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">For cross border transactions, settlement cycle shall be mutually agreed between the merchant and PayGlocal teams and shall be documented in the agreement.</li>
                </ul>
            </div>
               
            {/* Merchant supporting documents and KYC validation/ verification section */}
             <PolicyTitleWithPara title={'Merchant supporting documents and KYC validation/ verification'}
            paras={[
                {'text':'Depending on the business entity and type of the merchant a defined set of respective documents is required which should be provided by the merchant. The KYC documents are validated/ verified and if any application is considered as unacceptable/ unqualified the merchant is to be rejected and the services will not be enabled. Please refer to Appendix-2 of this Policy for KYC documents required by each merchant entity type.'}
            ]} />

             {/* Merchant commercial update section */}
             <PolicyTitleWithPara title={'Merchant commercial update'}
            paras={[
                {'text':'Based on the agreement between the merchant and PayGlocal, the merchant is charged a service fee which may vary basis the various plans offered to the merchant as per the business category or as per the agreed terms between PayGlocal and the merchant.'}
            ]} />

            {/* Merchant payment option update section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Merchant payment option update</h4>
                <p className="common-body1-text custom-text-grey900">Tp, Ts, Td and Tr are terms defined by RBI as time of payment, time of shipment, time of delivery and time of refund. PayGlocal is not in the business of shipping goods or services. Hence, PayGlocal will agree on settlement cycle with the merchants either based on Tp, Td or Tr and will adhere to the agreed timelines for settlement cycle excluding exception.</p>
                <p className="common-body1-text custom-text-grey900">Based on the commercials provided by the business team, onboarding team checks them against the base rate (rack rate) and commercials agreed with the merchant to process further. If the rates are below the base rate (rack rate), the team rejects the cases. Such cases only get processed on approval of the business head.</p>

                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">A check is in place to ensure all the payment options are enabled as per the agreed terms between PayGlocal and the merchant.</li>
                </ul>
            </div>

              {/* Merchant bank details update section */}
              <PolicyTitleWithPara title={'Merchant bank details update'}
            paras={[
                {'text':'PayGlocal will review and validate all its merchants as mentioned below:'}
            ]} />

             {/* Bank account validation section */}
             <PolicyTitleWithPara title={'Bank account validation'}
            paras={[
                {'text':'Bank verification letter/ cancelled cheque/ bank account details is/are mandatory document(s) which is provided by the merchant for due diligence wherein the details are cross checked and validated and if any application is considered as unacceptable/unqualified the merchant should be rejected and the services should be put on hold.'}
            ]} />

             {/* Bank validation testing or account verification section */}
             <PolicyTitleWithPara title={'Bank validation testing or account verification'}
            paras={[
                {'text':"A systemic bank account verification activity is performed for any new bank account that is recieved on our system to validate the authenticity of the merchant’s account. The check is implemented to see if the merchant has provided valid / active bank account."}
            ]} />

              {/* Preformat code creation section */}
              <PolicyTitleWithPara title={'Preformat code creation'}
            paras={[
                {'text':"PayGlocal system creates 'preformat codes’ which is mandatory for merchant settlement wherein a code in specific format is mapped to the bank account details of a Merchant on a particular merchant ID. These codes are updated on bank’s portal that processes PayGlocal’s merchant settlements. This ensures that settlement will be done on the merchant’s bank account that is mapped to the specific code which is mapped on the system."}
            ]} />

              {/* VIII MID Creation & Activation section */}
              <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">VIII MID Creation & Activation</h4>
                <p className="common-body1-text custom-text-grey900">PayGlocal will create the unique MID in the PayGlocal system once the below conditions are met:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Merchant Risk Underwriting approval</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">KYC assessment approval</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Sanction screening</li>
                </ul>
                <p className="common-body1-text custom-text-grey900">If all the above conditions are successfully completed, then MID will be generated post which MID would be activated for transaction processing.</p>
                <p className="common-body1-text custom-text-grey900">MID activation is preceded by following activities:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Updation of merchant and bank rates</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Update of agreement settlement cycle</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Successful setup and mapping of beneficiary codes with MID</li>
                </ul>
            </div>


            {/* IX Security Assessment of Merchants section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">IX Security Assessment of Merchants</h4>
                <p className="common-body1-text custom-text-grey900">The following security assessment will be conducted prior to onboarding merchants, wherever applicable:</p>
                <p className="common-body1-text custom-text-grey900">Security controls implemented by the merchants will be assessed by the Company. The assessment would include checks of the following aspects, at least:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Security safeguards implemented by merchants to ensure transactions are secure and customer data is protected.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Encryption standards implemented.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Breach and security incident management procedures implemented by the merchants.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">No storage of card information/ data of the customers and related data.</li>
                </ul>
                <p className="common-body1-text custom-text-grey900">Merchants will be assessed to ensure compliance of their infrastructure to security standards PCI-DSS, as applicable. Merchants are obligated to be compliant with the security standards as per PA Guidelines and PA-CB Regulations and any violation of the same is considered breach of agreed terms with PayGlocal and can be considered as grounds for delisting or deactivation.</p>
                <p className="common-body1-text custom-text-grey900">Merchant site shall not save customer card and a security audit of the merchant may be carried out to check compliance, as and when required. Merchants are not allowed to store payment data irrespective of their being PCI-DSS compliant or otherwise. They shall, however, be allowed to store limited data for the purpose of transaction tracking, for which the required limited information may be stored in compliance with the applicable standards.</p>
                <p className="common-body1-text custom-text-grey900">Data sovereignty: PayGlocal shall take preventive measures to ensure that a Merchant does not store data in infrastructure that belongs to jurisdictions which may be physically located outside India. Appropriate controls shall be considered to prevent unauthorized access to the data.</p>
                <p className="common-body1-text custom-text-grey900">A review will be conducted at least annually in order to verify continued compliance by the merchants already onboarded.</p>
                <p className="common-body1-text custom-text-grey900">Below mentioned is the indicative frequency of security assessment based on the volumes processed by the merchant:</p>

                <table className="w-full border-collapse border custom-border-grey200">
                          <thead>
                            <tr className="border-b custom-border-grey200 ">
                                <th className="px-4 py-4 common-body2-text text-left  custom-text-grey900 border-r custom-border-grey200"><strong>Volumes processed monthly (USD)</strong></th>
                                <th className="px-4 py-4 common-body2-text text-left  custom-text-grey900 border-r custom-border-grey200"><strong>Frequency of security assessment</strong></th>
                            </tr> 
                          </thead>
                          <tbody>

                              <tr className="border-b custom-border-grey200">
                                  <td className="px-4 py-4 common-body2-text  custom-text-grey900 border-r custom-border-grey200">Greater than 5 Mn</td>
                                  <td className="px-4 py-4 common-body2-text  custom-text-grey900 border-r custom-border-grey200">12 months</td>
                              </tr>

                              <tr className="border-b custom-border-grey200">
                                  <td className="px-4 py-4 common-body2-text  custom-text-grey900 border-r custom-border-grey200">Between 2 Mn to 5 Mn</td>
                                  <td className="px-4 py-4 common-body2-text  custom-text-grey900 border-r custom-border-grey200">18 Months</td>
                              </tr>
                              <tr className="border-b custom-border-grey200">
                                  <td className="px-4 py-4 common-body2-text  custom-text-grey900 border-r custom-border-grey200">Less than 2 Mn</td>
                                  <td className="px-4 py-4 common-body2-text  custom-text-grey900 border-r custom-border-grey200">24 months</td>
                              </tr>
                          </tbody>
                      </table>
            </div>

             {/* X Delisting and Deactivation of Merchants section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">X Delisting and Deactivation of Merchants</h4>
                <p className="common-body1-text custom-text-grey900">Delisting or de-activation of a merchant shall be considered for the reasons as per the agreed terms between the Company and the merchant. The reasons for deactivation shall include the following:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Non-adherence to the terms and agreed terms between the merchant and the Company.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Merchant&apos;s involvement in fraudulent transactions.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Complaints raised against the merchant.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Cancellation request from the merchant.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Merchant inactive and not performing transactions for 12 (Twelve) months or more.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Any direction or request received from any governmental authority; and</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Data security breach.</li>

                </ul>
            </div>

             {/* XI Policy Review section */}
             <PolicyTitleWithPara title={'XI Policy Review'}
            paras={[
                {'text':"The Policy shall be reviewed as and when required (at least annually), or when significant regulatory changes occur to ensure its continuing suitability, adequacy, and effectiveness. The changes must be approved by the Board of the Company."}
            ]} />

              {/* XII Record Keeping section */}
              <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">XII Record Keeping</h4>
                <p className="common-body1-text custom-text-grey900">The records pertaining to merchant transactions/ complaints shall be maintained for a minimum period of 5 (Five) years by the respective department of the Company as per the KYC Master Directions.</p>
                <p className="common-body1-text custom-text-grey900">PayGlocal shall maintain all necessary records of transactions between them and the customer, both domestic and international, for at least 5 (Five) years from the date of transaction and preserve the records pertaining to the identification of the merchants and their addresses obtained while opening the account and during the course of business relationship, for at least 5 (Five) years after the business relationship is ended.</p>
                <p className="common-body1-text custom-text-grey900">PayGlocal shall make available the identification records and transaction data to the competent authorities upon request and also maintain all necessary information in respect of transactions prescribed under Rule 3 of Prevention of Money Laundering (Maintenance of Records) Rules, 2005, so as to permit reconstruction of individual transaction, including the following:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">the nature of the transactions.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">the amount of the transaction and the currency in which it was denominated.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">the date on which the transaction was conducted.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">the parties to the transaction.</li>
                </ul>
            </div>

             {/* Banned Business List section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Banned Business List</h4>
                <ol className="list-decimal space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Adult goods and services which includes pornography and other sexually suggestive materials (including literature, imagery and other media), escort or prostitution services.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Alcohol which includes alcohol or alcoholic beverages such as beer, liquor, wine, or champagne.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Body parts which include organs or other body parts.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Bulk marketing tools which include email lists, software, or other products enabling unsolicited email messages (spam).</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Cable descramblers and black boxes which includes devices intended to obtain cable and satellite signals for free.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Child pornography which includes pornographic materials involving minors.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Copyright unlocking devices which include Mod chips or other devices designed to circumvent copyright protection.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Copyrighted media which includes unauthorized copies of books, music, movies, and other licensed or protected materials, copyright infringing merchandise.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Products labelled as &apos;tester, &apos;not for retail sale,&apos; or &apos;not intended for resale&apos;.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Copyrighted software which includes unauthorized copies of software, video games, and other licensed or protected materials, including OEM or bundled software.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Counterfeit, unauthorized goods which include replicas or imitations of designer goods; items without a celebrity endorsement that would normally require such an association; fake autographs, counterfeit stamps, and other potentially unauthorized goods.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Products that have been altered to change the product&apos;s performance, safety specifications, or indications of use.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Drugs and drug paraphernalia which includes hallucinogenic substances, illegal drugs and drug accessories, including herbal drugs like salvia and magic mushrooms.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Drug test circumvention aids which include drug cleansing shakes, urine test additives, and related items.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Endangered species which includes plants, animals, or other organisms (including product derivatives) in danger of extinction.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Government IDs or documents which includes fake IDs, passports, diplomas, and noble titles.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Hacking and cracking materials which include manuals, how-to guides, information, or equipment enabling illegal access to software, servers, websites, or other protected property.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Illegal goods which include materials, products, or information promoting illegal goods or enabling illegal acts.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Miracle cures which include unsubstantiated cures, remedies, or other items marketed as quick health fixes.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Offensive goods which include literature, products, or other materials that:
                    <ul className="list-disc pl-5 space-y-5">
                        <li className="common-body2-text custom-text-grey900 font-semibold">Defame or slander any person or groups of people based on race, ethnicity, national origin, religion, sex, or other factors.</li>
                        <li className="common-body2-text custom-text-grey900 font-semibold">Encourage or incite violent acts.</li>
                        <li className="common-body2-text custom-text-grey900 font-semibold">Promote intolerance or hatred.</li>
                    </ul>
                    </li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Offensive goods, crime which includes crime scene photos or items, such as personal belongings, associated with criminals.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Pyrotechnic devices (apart from the ones mentioned in the Restricted category), hazardous materials and radioactive materials and substances.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Tobacco and cigarettes which includes cigars, chewing tobacco, and related products.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Traffic devices which include radar detectors/jammers, license plate covers, traffic signal changers, and related products.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Weapons which include firearms, ammunition, knives, brass knuckles, gun parts, and other armaments.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Matrix sites or sites using matrix scheme approach/Ponzi/Pyramid schemes.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Work-at-home information.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Any product or service which is not in compliance with all applicable laws and regulations whether federal, state, local or international including the laws of India.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">BPO services.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Surgical products on B2C model.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Immigration services.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Immigration services.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Guaranteed Employment Services.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Religious products that make false claims or hurt someone&apos;s religious feelings/beliefs.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Adoption agencies.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Pawnshop.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Esoteric pages, Psychic consultations.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Telemarketing (Calling list, selling by phone for example travel service, overall sales).</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Credit Counselling/Credit Repair Services.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Get Rich Businesses.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Bankruptcy Services.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Websites depicting violence and extreme sexual violence.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Bestiality.</li>
                </ol>
            </div>
            

             {/* Restricted Business List section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Restricted Business List</h4>
                <ol className="list-decimal pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Gaming/gambling which includes lottery tickets, sports bets, memberships/enrolment in online gambling sites, and related content.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Prescription drugs or herbal drugs or any kind of online pharmacies which includes drugs or other products requiring a prescription by a licensed medical practitioner. Exceptions:
                        <ul className="list-disc pl-5 space-y-5">
                            <li className="common-body2-text custom-text-grey900 font-semibold"> Medical devices authorized by the FDA for over-the-counter purchase that are not otherwise restricted and are appropriately described and labelled, including eyeglass frames, tanning devices, otoscopes, ionized or ionic bracelets, Personal Sound Amplification Products (PSAPs), etc.</li>
                        </ul>
                    </li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Fireworks and related flammable goods.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Securities which include stocks, bonds, or related financial products.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Forex merchants.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Crowdfunding.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Investment in the future of assets (Futures markets are the performance of contracts for purchase or sale of certain matters at a future date, agreeing price on the present, the amount and due date. Currently, these negotiations are conducted in stock markets).</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Portfolio Collection, Debt Collection.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Stock trading & Financial advisory.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Multilevel sales, profit or income by referral of new users.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">NGO.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Real Estate.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Loans.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Surgical products on B2B model.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Club memberships.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Money transfer.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Resume Writing Services.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Auctions/Tenders.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Sale of gemstones / High value jewellery.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Sale of animal husbandry.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Antiques or collectibles.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Dietary and herbal supplements.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">OTC drugs.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Photographs, images from videos, images generated by PC Images (copyright or intellectual property).</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Foundations, donations or fundraising by third parties.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Discount coupons, coupons.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Sex shops and erotic items.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Professional services (psychologists, lawyers, etc.).</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Protection services (Bodyguards services).</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Electronic cigarettes (e-cigarettes).</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Political Parties; Politically related payments (donations for a party).</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Religious Organisations.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Financial Services: money exchange service, including bitcoins, cryptocurrency, forex brokers, financial institutions, debt recovery.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Financial Products (Mutual Funds, Insurance).</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Real Estate Agents/Brokers.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Matchmaker services.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Sexual Health Products (Vitamins, Nonprescriptive Treatment & Medicine).</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Offline dating meetups, social-based dating events, matchmaking.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Gift Cards as Primary Business.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Gold, Silver & Precious metals.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Collection Agencies.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Medical Devices.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Chit Fund, Credit societies, and small NBFC.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Fireworks.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Lottery, Raffles.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Incentive Business.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Funeral Services.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Subscription Services.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Warranty Services.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Air Bags, Batteries containing mercury.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Government Uniforms.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Real Estate Maintenance.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Web Hosting, Designing.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Art Promotion.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Commodities Trading.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Career Counselling Services.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Marketplace Model.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Aggregator, Payment Facilitator.</li>
                </ol>
            </div>


              {/* Appendix 2 section */}
              <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading text-center">Appendix 2</h4>
                <p className="common-body1-text custom-text-grey900">KYC Document Requirements by Merchant Entity type</p>
                <div className="w-full overflow-scroll policy-table-container">
                <table className="border border-collapse  w-full text-center">
  <thead>
    <tr>
      <th className="border p-5   custom-text-grey900">Common Document Name</th>
      <th className="border p-5   custom-text-grey900">Individual</th>
      <th className="border p-5   custom-text-grey900">HUF</th>
      <th className="border p-5   custom-text-grey900">Proprietor</th>
      <th className="border p-5   custom-text-grey900">Pvt Limited/ Public Ltd</th>
      <th className="border p-5   custom-text-grey900">OPC</th>
      <th className="border p-5   custom-text-grey900">Partnership Firm/ LLP (1)</th>
      <th className="border p-5   custom-text-grey900">Trust/Society (2)</th>
      <th className="border p-5   custom-text-grey900">Govt (3)</th>
      <th className="border p-5   custom-text-grey900">Associate of Person</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">
        Bank Verification Letter/ Cancelled Cheque
      </td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">
        Aadhaar Card (Individual/ Authorized Signatory)
      </td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">Individual PAN Card</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">
        Individual Address Proof* (Please go through the list of sub-category
        documents)
      </td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">HUF PAN Card</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">Proprietor PAN Card</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">Proprietor Address Proof</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">
        Signing Authorities (As per BR) - PAN Card
      </td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">
        Signing Authorities (As per BR) - Address Proof
      </td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">
        Company PAN Card (Firm/ Society/ Trust)
      </td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes (Not Mandatory)</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">
        Board Resolution/Authorization Letter (BR Mandatory for all PG)
      </td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">
        Government Issued Certificates* (Please go through the list of
        sub-category documents)
      </td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes, COI Compulsory</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes, COI Compulsory</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes, COI Compulsory</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">CIBIL/Consent Letter (Not Mandate)</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">
        List of Directors/Partners and KYC (KYC not mandatory)
      </td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">2nd Government Proof</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">
        Partnership Deed Verified by Registrar
      </td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">Partner KYC (Not mandatory)</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">
        Memorandum and Articles of Association
      </td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
    </tr>
    <tr>
      <td className="border p-5 common-body2-text  custom-text-grey900">Trust/Society Deed</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900">Yes</td>
      <td className="border p-5 common-body2-text  custom-text-grey900" />
      <td className="border p-5 common-body2-text  custom-text-grey900" />
    </tr>
  </tbody>
</table>

                </div>
              </div>
            

        </section>
    )
}

export default MerchantOnboardingPolicySection;
