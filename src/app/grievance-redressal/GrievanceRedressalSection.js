import Image from 'next/image';

// images 
import TransactionLifecycle from '@/Images/GrievanceRedressal/transaction-lifecycle.png';
import MerchantControlled from '@/Images/GrievanceRedressal/merchant-controlled.png';
import MerchantRespond from '@/Images/GrievanceRedressal/merchant-respond.png';
import OrderFailure from '@/Images/GrievanceRedressal/orderfail-img.png';
import RefundNotProcessed from '@/Images/GrievanceRedressal/refund-not-processed.png';
import FraudTrans from '@/Images/GrievanceRedressal/fraud-trans.png';
import MerchantFraud from '@/Images/GrievanceRedressal/merchant-fraud.png';
import CustomerChargeback from '@/Images/GrievanceRedressal/customer-chargeback.png';
import ResOwner from '@/Images/GrievanceRedressal/res-owner.png';


 function GrievanceRedressalSection (){





  return (
        <section className={"flex flex-col gap-10 lg:gap-12 justify-center items-center px-4 py-10 sm:px-10 sm:py-10  lg:py-20  background-custom-white "}>
            {/* Background section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Background</h4>
                <p className="common-body1-text custom-text-grey900">PayGlocal Technologies Private Limited (hereinafter referred as <strong>&quot;PayGlocal&quot;</strong> or the <strong>“Company&quot;</strong> or &quot;We&quot;) is a company incorporated under the Companies Act 2013. It has its registered office at 6048, Prestige Shantiniketan, ITPL Main Road, Whitefield, Bengaluru - 560048, Karnataka.</p>
                <p className="common-body1-text custom-text-grey900">PayGlocal proposes to offer a transparent, open, and approachable grievance redressal process for end-customers & merchants to connect with PayGlocal and raise valid grievances for their transaction related, onboarding, settlement, integration problems that they face in the course of using payment aggregator services provided by PayGlocal. The Company&apos;s Grievance Redressal Policy focuses on improving customer satisfaction by collecting feedback from customers across all business units and actions plans are put in place to address key issues. (&quot;Grievance Redressal Policy&quot; or the &quot;Policy&quot;). The Company provides payment services which includes Payment Aggregator (&quot;PA&quot;) and Payment Aggregator - Cross Border (&quot;PA-CB&quot;). The Company believes in providing best in class services to its customers/ merchants (&quot;customers&quot;).</p>
                <p className="common-body1-text custom-text-grey900">This Policy is structured for minimizing customer & merchant grievances. The Policy is formed to accept grievances through proper channels and provide review mechanism and prompt redressal of all customer & merchant grievances.</p>
                <p className="common-body1-text custom-text-grey900">The Company&apos;s endeavour is to ensure that all Customer complaints are resolved within 7 (seven) days and maximum upto 30 (thirty) days. The thirty-day period will be reckoned after all the necessary information from the customer is received.</p>
            </div>

              {/* Objective section */}
              <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Objective</h4>
                <p className="common-body1-text custom-text-grey900">This Policy has been framed with a purpose to set forth a framework for receiving, handling and responding to any complaints/ grievances against the Company in respect of the services offered to the Customers. Below are the broad objectives set by the Company for handling customer grievances:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">To provide fair treatment to all customers</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">To have a well-defined and publicly disclosed customer grievance redressal policy.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">To ensure that the Policy is clearly and easily accessible through one or more channels to customers.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">To ensure that all the customer complaints are appropriately managed and resolved within the timelines specified.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">To develop an organizational framework which promptly resolves customer complaints fairly and equitably.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">To provide the customer the facility to keep track of the grievance throughout the resolution process; and</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">To have a well-defined escalation matrix with different levels.</li>
                </ul>
            </div>
            
             {/* Grievance Reporting Channels section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Grievance Reporting Channels</h4>
                <p className="common-body1-text custom-text-grey900">PayGlocal accepts grievances through two primary channels:</p>
                <div className="w-full overflow-scroll policy-table-container">
                <table className="w-full border-collapse border custom-border-grey200">
                          <thead>
                            <tr className="border-b custom-border-grey200 ">
                                <th className="px-4 py-4 common-body2-text text-left  custom-text-grey900 border-r custom-border-grey200"><strong>S.No.</strong></th>
                                <th className="px-4 py-4 common-body2-text text-left  custom-text-grey900 border-r custom-border-grey200"><strong>Channels</strong></th>
                                <th className="px-4 py-4 common-body2-text text-left custom-text-grey900"><strong>Details</strong></th>
                            </tr> 
                          </thead>
                          <tbody>

                              <tr className="border-b custom-border-grey200">
                                  <td className="px-4 py-4 common-body2-text  custom-text-grey900 border-r custom-border-grey200">1</td>
                                  <td className="px-4 py-4 common-body2-text  custom-text-grey900 border-r custom-border-grey200">Website</td>
                                  <td className="px-4 py-4 common-body2-text custom-text-grey900"><a href="/" className="custom-text-blue1">www.payglocal.in</a></td>
                              </tr>

                              <tr className="border-b custom-border-grey200">
                                  <td className="px-4 py-4 common-body2-text  custom-text-grey900 border-r custom-border-grey200">2</td>
                                  <td className="px-4 py-4 common-body2-text  custom-text-grey900 border-r custom-border-grey200">E-mail</td>
                                  <td className="px-4 py-4 common-body2-text custom-text-grey900"><a href="mailto:merchant.support@payglocal.in" className="custom-text-blue1">merchant.support@payglocal.in</a></td>
                              </tr>

                              <tr className="border-b custom-border-grey200">
                                  <td className="px-4 py-4 common-body2-text  custom-text-grey900 border-r custom-border-grey200">3</td>
                                  <td className="px-4 py-4 common-body2-text  custom-text-grey900 border-r custom-border-grey200">Link to BBPOU</td>
                                  <td className="px-4 py-4 common-body2-text custom-text-grey900"><a href="mailto:merchant.support@payglocal.in" className="custom-text-blue1">For BillX related complaints, please refer to the below section for link</a></td>
                              </tr>

                          </tbody>
                      </table>
                </div>

                      <p className="common-body1-text custom-text-grey900">Once a grievance is received through the above channels, PayGlocal assigns that to its internal team for redressal. In the event a grievance response is not received by the customer/merchant within the prescribed time frame mentioned in this Policy, they can approach the Nodal Officer appointed by PayGlocal for escalation. The escalation matrix is defined below. The customer/merchant is expected to read and understand this process to receive appropriate redressal support from PayGlocal.</p>
                      <p className="common-body1-text custom-text-grey900"><strong>Note:</strong> Customer/merchant is advised to exhaust the remedy at the numerically preceding level before escalating to a numerically higher level.</p>
            </div>
 
            {/* Bharat Bill Payment System - Grievance Redressal Mechanism section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Bharat Bill Payment System - Grievance Redressal Mechanism</h4>
                <p className="common-body1-text custom-text-grey900">Within Payment Aggregation, PayGlocal is also going to act in the capacity of an Agent Institution within Bharat Bill Payment System (&apos;BBPS&apos;). Below are the terms defined for a product launched specifically for customers availing bill payment system offered via PayGlocal (&apos;BillX&apos;).</p>
                <p className="common-body1-text custom-text-grey900">Disputes / complaints related to Bill Payment Services of Bharat BillPay must be reported via the Bharat BillPay dispute registration channel provided on BillX platform. Please note that this includes all disputes related to the below issues -</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Biller account update</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Bharat BillPayTransaction reference ID / confirmation from biller</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Double payment / amount deducted multiple times</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Erroneous payment in wrong account (consumer account at Biller)</li>
                </ul>
                <p className="common-body1-text custom-text-grey900">Raise Bharat BillPay dispute by logging in to your BillX account & navigating to &apos;transaction history&apos;-</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">Complaints raised through this link are resolved by NPCI appointed operating units.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Please note that BillX does not look into these complaints and will not be sending any notification when the complaints gets resolved.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Customer can check the status of their Bharat BillPay complaints registered on the BillX dashboard by logging in to their account & navigating to &apos;Complaint history&apos;.</li>                   
                </ul>
                <p className="common-body1-text custom-text-grey900">Other than above stated issues, any issues related to BillX services or Customer’s BillX account must be reported via BillX’s designated grievance channel <strong>- customer.support@payglocal.in</strong></p>

            </div>

             {/* Resolution of Complaints section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Resolution of Complaints</h4>
                 <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 font-semibold">We will provide our first response within 24 (Twenty-four) hours of receiving Your complaint.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">We aim to resolve all complaints/queries within 3 (three) business days.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Delays in resolution due to operational or technical reasons will be communicated to You with revised timelines.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Some resolutions, such as refund approvals, may be instant but can take 3-10 days to reflect in Your account due to banking and operational processes.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">Complaints involving fraud and risk assessment may take longer to resolve due to the involvement of multiple agencies. You will be informed of the expected timelines based on the case&apos;s complexity.</li>
                    <li className="common-body2-text custom-text-grey900 font-semibold">You will be proactively informed of any delays in the resolution process, including updates on the status of Your complaint and expected timelines.</li>
                </ul>
           
                <p className="common-body1-text custom-text-grey900">For products/ services other than BillX, merchant’s / customer’s are required to follow the below mentioned process.</p>

            </div>

            {/* Level 1 - Reading FAQs and Reporting a specific Issue section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Level 1 - Reading FAQs and Reporting a specific Issue</h4>
                <p className="common-body1-text custom-text-grey900">The customer/merchant can visit the PayGlocal website and refer to the customer grievance process via the link - <a href="/compliance" className="custom-text-blue1">https://payglocal.in/compliance</a></p>
                <p className="common-body1-text custom-text-grey900">If the customer has any query related to a particular issue, they can also refer to a section available toward the end of the page which describes various possible issues and their resolution process. The customer/ merchant can raise a complaint by writing to PayGlocal on the email ID provided. Further, merchants can reach out to PayGlocal for any query or issue by writing to merchant.support@payglocal.in from their registered email ID, along with a detailed description of the issue and supporting details such as merchant MID and transaction details. PayGlocal support staff will acknowledge the request within 1 (One) - 2 (Two) working days.</p>
                <p className="common-body1-text custom-text-grey900">In the event the customer does not receive a response from PayGlocal within the timeline stated herein, the customer can go for the next level of escalation.</p>
                <p className="common-body1-text custom-text-grey900">Customers/merchants are encouraged to provide complete details of their grievance, along with relevant documents (if any), in their complaint. However, in case of any trouble faced by the Customer/merchant in lodging an appropriate complaint, PayGlocal shall endeavor to provide guidance to the Customer/merchant in this regard.</p>
            </div>

            {/* Level 2 - Escalation in case of No-response or non- satisfactory response section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Level 2 - Escalation in case of No-response or non- satisfactory response</h4>
                <p className="common-body1-text custom-text-grey900">If the customer does not receive answers/ is not satisfied with the response to their questions from PayGlocal&apos;s Level 1 support process, within 5 (Five) working days from filling and submitting the form, the Customer can then escalate their query to grievances@payglocal.in. This email should contain the customer email ID and &apos;support request&apos; in the subject line of the email to PayGlocal support staff.</p>
                <p className="common-body1-text custom-text-grey900">Resolution of grievance may depend upon responses and clarification from external stakeholders and would take approximately between 5 (Five) to 7 (Seven).</p>
                <p className="common-body1-text custom-text-grey900">The Customer/merchant may request for an update and PayGlocal will keep the Customer/ merchant posted if any grievance requires more than the specified time. If the Customer/ merchant is not satisfied with the response provided, they can go for the next level of support and escalate the case to the Grievance Officer:</p>
                <p className="common-body1-text custom-text-grey900"><strong>Grievance Officer:</strong></p>
                <p className="common-body1-text custom-text-grey900"><strong>Nikhil Jain,</strong></p>
                <p className="common-body1-text custom-text-grey900"><strong>PayGlocal Technologies Private Limited</strong></p>
                <p className="common-body1-text custom-text-grey900"><strong>Bangalore Office:</strong> 72, Service Road, LRDE Layout, Doddanekundi, Bengaluru, 560037</p>
                <p className="common-body1-text custom-text-grey900"><strong>E-mail :</strong><a href="mailto:grievances@payglocal.in" className='custom-text-blue1' >grievances@payglocal.in</a></p>
            </div>

            {/* Level 3 - Escalating and Reporting to Grievance Redressal Officer and/or Nodal Officer section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Level 3 - Escalating and Reporting to Grievance Redressal Officer and/or Nodal Officer</h4>
                <p className="common-body1-text custom-text-grey900">In the event the Customer/merchant does not receive a response, within the prescribed timeline of 5 (Five) to 7 (Seven) working days, it may approach the Nodal Officer of PayGlocal, at the following contact details:</p>
                <p className="common-body1-text custom-text-grey900"><strong>Nodal Officer:</strong></p>
                <p className="common-body1-text custom-text-grey900"><strong>Ritu Verma,</strong></p>
                <p className="common-body1-text custom-text-grey900"><strong>PayGlocal Technologies Private Limited</strong></p>
                <p className="common-body1-text custom-text-grey900"><strong>Bangalore Office:</strong> 72, Service Road, LRDE Layout, Doddanekundi, Bengaluru, 560037</p>
                <p className="common-body1-text custom-text-grey900"><strong>E-mail :</strong><a href="mailto:escalations@payglocal.in" className='custom-text-blue1' >escalations@payglocal.in</a></p>
                <p className="common-body1-text custom-text-grey900">The Nodal Officer shall send his/her final response to the customer within 2 working days of lodging the grievance. Such a response may either contain the resolution or an intimation that PayGlocal requires more time to examine the grievance, along with the reason for seeking such extension. The maximum time to resolve the complaint is 30 (Thirty) working days from the date of lodging the grievance.</p>
            </div>

             {/* Level 4 – RBI Ombudsman section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Level 4 – RBI Ombudsman</h4>
                <p className="common-body1-text custom-text-grey900">If the Company is unable to resolve the issue, then the Company may approach the Ombudsman for Digital Transaction of Reserve Bank of India (&quot;RBI&quot;), in terms of the Ombudsman Scheme for Digital Transactions, 2019 by way of submitting their complaint in the Form-A thereof and clearly state the (a) name and address of the complainant; (b) name and address of the branch or office against which the complaint has been lodged; (c) facts giving rise to the complaint; (d) nature and extent of the loss caused by the complainant; and (e) relief sought for. Such complaints shall be accompanied with the copies of documents, if any, which the Company may rely upon.</p>
            </div>

             {/* Guidelines For Failed Transactions section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Guidelines For Failed Transactions</h4>
                <p className="common-body1-text custom-text-grey900">In compliance with the circular DPSS:CO.PD No.629/02.01.014/2019-20 dated September 20, 2019 Turnaround Time (TAT) and Customer compensation for failed transactions using authorized Payment Systems is tabled below for applicable clauses:</p>
                <div className="w-full overflow-scroll policy-table-container">
                  <table className="border border-collapse" >
                      <thead>
                          <tr>
                              <th className="border custom-border-grey200 p-5 common-body2-text "><strong>S.NO.</strong></th>
                              <th className="border custom-border-grey200 p-5 common-body2-text "><strong>Description of the incident</strong></th>
                              <th className="border custom-border-grey200 p-5 common-body2-text " colSpan="2">
                                  <strong>Framework for auto-reversal and compensation</strong>
                              </th>
                          </tr>
                      </thead>
                      <thead>
                          <tr>
                              <th className="border custom-border-grey200 p-5 common-body2-text "></th>
                              <th className="border custom-border-grey200 p-5 common-body2-text "></th>
                              <th className="border custom-border-grey200 p-5 common-body2-text "><strong>Timeline for auto-reversal</strong></th>
                              <th className="border custom-border-grey200 p-5 common-body2-text "><strong>Compensation payable</strong></th>
                          </tr>
                      </thead>
                      <thead>
                          <tr>
                              <th className="border custom-border-grey200 p-5 common-body2-text "><strong>I</strong></th>
                              <th className="border custom-border-grey200 p-5 common-body2-text "><strong>II</strong></th>
                              <th className="border custom-border-grey200 p-5 common-body2-text "><strong>III</strong></th>
                              <th className="border custom-border-grey200 p-5 common-body2-text "><strong>IV</strong></th>
                          </tr>
                      </thead>
                      <thead>
                          <tr>
                              <th className="border custom-border-grey200 p-5 common-body2-text "><strong>1</strong></th>
                              <th className="border custom-border-grey200 p-5 common-body2-text text-left " colSpan="3">
                                  <strong>Card Transaction</strong>
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td className="border custom-border-grey200 p-5 common-body2-text text-center">a</td>
                              <td className="border custom-border-grey200 p-5 common-body2-text ">
                              Card Not Present (CNP) (e-commerce) Account debited but confirmation not received at merchant&apos;s end
                              </td>
                              <td className="border custom-border-grey200 p-5 common-body2-text ">Auto-reversal within T+5 days</td>
                              <td className="border custom-border-grey200 p-5 common-body2-text ">INR 100/- per day of delay beyond T+5 days</td>
                          </tr>
                      </tbody>
                      <thead>
                          <tr>
                              <th className="border custom-border-grey200 p-5 common-body2-text "><strong>2</strong></th>
                              <th className="border custom-border-grey200 p-5 common-body2-text text-left " colSpan="3">
                                  <strong>Immediate Payment System</strong>
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td className="border custom-border-grey200 p-5 common-body2-text text-center ">a</td>
                              <td className="border custom-border-grey200 p-5 common-body2-text ">
                                  Account debited but the beneficiary account is not credited
                              </td>
                              <td className="border custom-border-grey200 p-5 common-body2-text ">
                                  If unable to credit to beneficiary account, auto reversal &#174; by the
                                  Beneficiary bank latest on T+1 day
                              </td>
                              <td className="border custom-border-grey200 p-5 common-body2-text ">INR 100/- per day of delay beyond T+1 days</td>
                          </tr>
                      </tbody>
                      <thead>
                          <tr>
                              <th className="border custom-border-grey200 p-5 common-body2-text "><strong>3</strong></th>
                              <th className="border custom-border-grey200 p-5 common-body2-text " colSpan="3">
                                  <strong>Unified Payments Interface (UPI)</strong>
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td className="border custom-border-grey200 p-5 common-body2-text text-center ">a</td>
                              <td className="border custom-border-grey200 p-5 common-body2-text ">
                                  Account debited but the beneficiary account is not credited (transfer of funds)
                              </td>
                              <td className="border custom-border-grey200 p-5 common-body2-text ">
                                  If unable to credit the beneficiary account, auto reversal &#174; by the Beneficiary bank latest on T+1 day
                              </td>
                              <td className="border custom-border-grey200 p-5 common-body2-text ">INR 100/- per day if delay is beyond T+1 day</td>
                          </tr>
                          <tr>
                              <td className="border custom-border-grey200 p-5 common-body2-text text-center ">b</td>
                              <td className="border custom-border-grey200 p-5 common-body2-text ">
                                  Account debited but transaction confirmation not received at merchant location (payment to merchant)
                              </td>
                              <td className="border custom-border-grey200 p-5 common-body2-text ">Auto reversal within T+5 days</td>
                              <td className="border custom-border-grey200 p-5 common-body2-text ">INR 100/- per day if delay is beyond T+5 day</td>
                          </tr>
                      </tbody>
                  </table>
                </div>
            </div>


            {/* FAQs for customers/ merchants reference section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">FAQs for customers/ merchants reference</h4>
                <h6 className="common-h6-heading">Probable Disputes and Resolutions</h6>
                <p className="common-body1-text custom-text-grey900">PayGlocal defines a robust framework to manage disputes/grievances. This framework gives an overview of the transaction lifecycle of PayGlocal system and handles issues faced by customers and merchants separately, with resolution guidelines specified for each dispute type. The customer/merchant is expected to read and understand the dispute type and resolution ownership of their grievance to receive appropriate redressal support from PayGlocal.</p>
            </div>

            {/* Transaction Lifecycle section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Transaction Lifecycle of PayGlocal System</h4>
                <Image src={TransactionLifecycle} width={778} height={453} quality={100} alt='img' className='' />
                <p className="common-body1-text custom-text-grey900">When a customer initiates a transaction, it is first approved by the payment processing engine and then proceeds to get authorization from the customer for funds to be deducted from their account. Once the transaction has been authorized, it is sent for capture by the processing engine, failing which the transaction is reversed and the amount is returned to the customer account. If the customer initiates refund for any transaction, the captured transaction is then sent for refund processing.</p>
                <p className="common-body1-text custom-text-grey900">Based on this transaction lifecycle, PayGlocal has identified possible issues/ disputes that could arise with the customers or merchants and outlined a dispute resolution framework that acts as a guide to support the grievance redressal process.</p>
            </div>

            {/* Customer Level Issues and possible actions section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Customer Level Issues and possible actions</h4>
                <p className="common-body1-text custom-text-grey900">PayGlocal dispute resolution framework classifies customer issues into 5 (Five) types and outlines the guidelines for resolution as per dispute type.</p>
                <div className="w-full overflow-scroll policy-table-container">
                  <table className="border border-collapse" >
                      <thead>
                          <tr>
                              <th className="border p-5 border-custom-grey200 common-body2-text"><strong>#</strong></th>
                              <th className="border p-5 border-custom-grey200 common-body2-text"><strong>Dispute Type</strong></th>
                              <th className="border p-5 border-custom-grey200 common-body2-text"><strong>Resolution Ownership</strong></th>
                              <th className="border p-5 border-custom-grey200 common-body2-text"><strong>Resolution Steps</strong></th>
                              <th className="border p-5 border-custom-grey200 common-body2-text"><strong>Turn Around Time (TAT)</strong></th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td className="border p-5 border-custom-grey200 common-body2-text">1</td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">Goods or services issue</td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">Merchant</td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">Resolution by merchant selling the items</td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">Merchant controlled</td>
                          </tr>
                          <tr>
                              <td className="border p-5 border-custom-grey200 common-body2-text">2</td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">Transaction Issue</td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">Merchant /PayGlocal</td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">
                                  Resolution to be identified between parties participating in
                                  transaction flow. Compensate customer as per the RBI circular dated
                                  September 20, 2019, and bearing reference no.
                                  RBI/2019-20/67DPSS.CO.PD No.629/02.01.014/2019-20, as the same may
                                  be modified or supplemented from time to time{" "}
                                  <strong>(&quot;TAT Circular&quot;)</strong>.
                              </td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">5 days</td>
                          </tr>
                          <tr>
                              <td className="border p-5 border-custom-grey200 common-body2-text">3</td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">Fraudulent Transaction</td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">Merchant /PayGlocal</td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">
                                  Merchant and PayGlocal to implement measures to block future fraud.
                              </td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">5 days</td>
                          </tr>
                          <tr>
                              <td className="border p-5 border-custom-grey200 common-body2-text">4</td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">Suspected Merchant Fraud</td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">PayGlocal</td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">
                                  Resolution facilitated by PayGlocal to customer or customer is asked
                                  to file a chargeback; action against merchant
                              </td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">5 days</td>
                          </tr>
                          <tr>
                              <td className="border p-5 border-custom-grey200 common-body2-text">5</td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">Chargeback initiated by Customer</td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">Merchant</td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">
                                  Merchant is to bear the chargeback. PayGlocal to adhere to the
                                  chargeback process required for payment aggregation business.
                              </td>
                              <td className="border p-5 border-custom-grey200 common-body2-text">NA</td>
                          </tr>
                      </tbody>
                  </table>
                </div>
                <p className="common-body1-text custom-text-grey900">For dispute types where the Turn Around Time <strong>(&quot;TAT&quot;)</strong> is mentioned as &apos;NA&apos;, PayGlocal team will respond to the merchant support request within 1 (One) - 2 (Two) working days and mention the resolution details and TAT accordingly on a case-by-case basis.</p>

            </div>

            {/* Goods or Service Issue section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Goods or Service Issue</h4>
                <p className="common-body1-text custom-text-grey900">If the customer grievance or dispute is due to any of the following reasons,</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 ">Order not delivered.</li>
                    <li className="common-body2-text custom-text-grey900 ">SNAD – Items Significantly Not as Described.</li>
                    <li className="common-body2-text custom-text-grey900 ">Service not rendered.</li>
                    <li className="common-body2-text custom-text-grey900 ">Quality issue – Damaged/ defective items.</li>
                    <li className="common-body2-text custom-text-grey900 ">Goods/Service delivered later than expected.</li>
                    <li className="common-body2-text custom-text-grey900 ">Future partial service not required.</li>
                    <li className="common-body2-text custom-text-grey900 ">Other goods or services related issues.</li>
                </ul>
                <p className="common-body1-text custom-text-grey900">The customer is advised to resolve this issue with their merchant as the first step. Merchants provide direct support to the customers on their goods and service deliveries since PayGlocal does not take part in shipping or delivering of the products to the customers.</p>
                <p className="common-body1-text custom-text-grey900">The customer should visit the merchant&apos;s website or app and refer to the terms & conditions, shipping policy, refund/exchange/return/cancellation policy and contact the merchant to resolve the issue.</p>
                <p className="common-body1-text custom-text-grey900">In most cases, the customer must share the details of their transaction such as transaction date, amount, order ID shared by the merchant along with the issue they are facing with the merchant.</p>
                <p className="common-body1-text custom-text-grey900">Below is a detailed description of how this dispute is handled.</p>
                <p className="common-body1-text custom-text-grey900">
                        Resolution Owner: <strong>Merchant</strong>  <br /> 
                        Turn-around Time (TAT): Merchant Controlled
                </p>
                <Image src={MerchantControlled} width={778} height={397} quality={100} alt='img' className='' />
            </div>

             {/* Merchant is Not Responding section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Merchant is Not Responding</h4>
                <p className="common-body1-text custom-text-grey900">For a goods or service issue in case the customer does not get a response from their merchant within 15 (Fifteen) working days from the date of transaction made by the customer, then the customer can contact PayGlocal to mediate and amicably resolve the issue. The customer may provide PayGlocal with the following details:</p>
                <ol className="list-decimal pl-5 space-y-3">
                    <li className="common-body2-text custom-text-grey900 ">Merchant Name</li>
                    <li className="common-body2-text custom-text-grey900 ">Merchant Website</li>
                    <li className="common-body2-text custom-text-grey900 ">Transaction Date</li>
                    <li className="common-body2-text custom-text-grey900 ">Transaction Amount</li>
                    <li className="common-body2-text custom-text-grey900 ">Transaction ID (if available)</li>
                    <li className="common-body2-text custom-text-grey900 ">Order ID (as received from the merchant)</li>
                    <li className="common-body2-text custom-text-grey900 ">Issue description</li>
                    <li className="common-body2-text custom-text-grey900 ">Details of merchant communication
                        <ol className="list-style-alphabate space-y-5 pl-5">
                            <li className="common-body2-text custom-text-grey900 ">Screenshots of calls attempted to the merchant support from phone where no response was received.</li>
                            <li className="common-body2-text custom-text-grey900 ">Screenshots of merchant communication and the customer exchanged via email.</li>
                        </ol>
                    </li>
                </ol>
                <p className="common-body1-text custom-text-grey900">After raising the complaint, PayGlocal team will investigate the issue and respond as per</p>
                <Image src={MerchantRespond} width={778} height={378} quality={100} alt='img' className='' />
                <p className="common-body1-text custom-text-grey900">the timeline specified for Level 1/ Level 2 support request. Below is a detailed description of how this dispute is handled.</p>

            </div>

             {/* Merchant Response is Not Satisfactory section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Merchant Response is Not Satisfactory</h4>
                <p className="common-body1-text custom-text-grey900">If the customer has received a response back from the merchant and is not satisfied with their response, the customer can raise a chargeback with their issuing bank (for card payments). These chargebacks will be raised with PayGlocal by the customer&apos;s issuing bank and PayGlocal will provide support to resolve the issue as per the chargeback guidelines.</p>
            </div>

             {/* Transaction Issues section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Transaction Issues</h4>
                <p className="common-body1-text custom-text-grey900">If the customer grievance or dispute is due to any of the following reasons:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 ">Order Failure – Funds deducted but order not placed.</li>
                    <li className="common-body2-text custom-text-grey900 ">Refund not processed.</li>
                </ul>
                <p className="common-body1-text custom-text-grey900">The customer is advised to reach out to PayGlocal and raise a Level 1 support request as per the Grievance Redressal Policy.</p>
            </div>

            {/* Order Failures section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Order Failures</h4>
                <Image src={OrderFailure} width={778} height={458} quality={100} alt='img' className='' />
                <p className="common-body1-text custom-text-grey900">In case of a transaction status mismatch, it could happen that the amount is deducted from the customer&apos;s card or account, but the merchant order is not confirmed. In this case, the customer should get the credit in their bank account within 5 (Five) -7 (Seven) business days. In case the customer has not received the amount, the customer may contact the merchant for further details, as the refunds are initiated from merchant&apos;s end. Below is a detailed description of how this dispute is handled.</p>
                <p className="common-body1-text custom-text-grey900"> Please note that with respect to TAT of failed transactions (5 (Five) - 7 (Seven) days), wherever financial compensation is involved, the same shall be affected to the customer&apos;s account suo moto, without waiting for a complaint or claim from the customer. Customer can also reach out to PayGlocal as per the grievance reporting channels mentioned in this Policy in case of any compensation related issues. Further, with respect to TAT please refer to the TAT Circular.
                </p>
            </div>

             {/* Refund Not Processe dsection section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Refund Not Processed</h4>
                <p className="common-body1-text custom-text-grey900">In case a merchant declines to process the refund to the customer for cases where services/products were not delivered by the merchant and the customer&apos;s account was debited, the customer can contact PayGlocal for resolution on the same by raising a Level 1 support request as outlined under Grievance Reporting Channels in this Policy. PayGlocal then evaluates the issue and provides resolution accordingly.</p>
                <Image src={RefundNotProcessed} width={778} height={406} quality={100} alt='img' className='' />
            </div>

             {/* Cancellation/ Refund/ Return related Queries section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Cancellation/ Refund/ Return related Queries</h4>
                <p className="common-body1-text custom-text-grey900">For cancellation of orders/refunds/returns, the customer should directly contact the merchant. Merchants provide the return/refund/cancellation policy on their websites. Note that PayGlocal is a payment system provider and offers payments services to merchants. The delivery of goods and services is managed by merchants and PayGlocal does not handle delivery of products/services.</p>
            </div>

             {/* Reporting Fraudulent Transactions section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Reporting Fraudulent Transactions</h4>
                <p className="common-body1-text custom-text-grey900">In case a customer experiences that their payment instrument such as card or bank account has been used without their permission on a merchant that uses PayGlocal as their payment processing platform, the customer can report the same to PayGlocal fraud management team on email id: reportfraud@payglocal.in.</p>
                <p className="common-body1-text custom-text-grey900">For the transaction, PayGlocal will inform the same to the merchant and if merchant has not delivered the product/ services, merchant may cancel the order and refund the amount back to the cardholder. For transactions where refund cannot be initiated, customer may file complaint with law enforcement agency and PayGlocal will support to provide all details to them to carry out investigation of the case.</p>
                <Image src={FraudTrans} width={778} height={299} quality={100} alt='img' className='' />
                <p className="common-body1-text custom-text-grey900">While reporting Fraudulent transaction to PayGlocal, the customer must put this text in the subject line &apos;Fraudulent Transaction Reporting&apos; when sending email to reportfraud@payglocal.in. The customer must provide as many details about that transaction as they can without actually sharing the card details or other sensitive information with respect to a transaction and the payment instrument used for the fraudulent transaction. Please refer to the PayGlocal FAQ page for more details on specific use cases related to a fraudulent transaction. Please note that for fraudulent transactions, customer queries will be addressed appropriately on reportfraud@payglocal.in (as per RBI guidelines)</p>
            </div>

            {/* Reporting Suspected Merchant Fraud section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Reporting Suspected Merchant Fraud</h4>
                <p className="common-body1-text custom-text-grey900">In case a customer experiences fraudulent activity by a merchant such as selling goods and services not as per their website or their terms and conditions, the customer can report that to PayGlocal via a Level 1 Support request and PayGlocal will attempt to address that in good faith by contacting the merchant and asking them to take corrective measures and addressing the issue in a reasonable timeframe. PayGlocal will keep the customer informed on the course of action taken by the merchant on their complaint until a resolution is received.</p>
                <Image src={MerchantFraud} width={778} height={451} quality={100} alt='img' className='' />
                <p className="common-body1-text custom-text-grey900">If the chargeback rate for a merchant is higher than 0.75%1 per month, PayGlocal will:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 ">Work with merchant to improve this rate and bring chargeback rate down.</li>
                    <li className="common-body2-text custom-text-grey900 ">PayGlocal might stop merchant transactions on the platform if this rate remains high.</li>
                    <li className="common-body2-text custom-text-grey900 ">PayGlocal may stop merchant settlement per risk assessment by its merchant risk management team.</li>

                </ul>
            </div>

               {/* Customer Chargeback section */}
               <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Customer Chargeback</h4>
                <p className="common-body1-text custom-text-grey900">A chargeback can be initiated by the customer directly with their issuing bank in case of:</p>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 ">unresolved goods or service issue
                        <ul className="list-disc pl-5 space-y-5">
                            <li className="common-body2-text custom-text-grey900 ">merchant not responding (service not rendered)</li>
                            <li className="common-body2-text custom-text-grey900 ">merchant response unsatisfactory (SNAD – items significantly not as described)</li>
                        </ul>
                    </li>
                    <li className="common-body2-text custom-text-grey900 ">duplicate payment made</li>
                    <li className="common-body2-text custom-text-grey900 ">reporting fraudulent transaction</li>
                    <li className="common-body2-text custom-text-grey900 ">reporting suspected merchant fraud</li>
                </ul>
                <p className="common-body1-text custom-text-grey900">When the customer files a chargeback with the issuing bank, the issuing bank returns the transaction to PayGlocal&apos;s acquiring bank and the customer is refunded for the transaction by PayGlocal. The chargeback amount is handled by the merchant or PayGlocal as per their agreement. Below is a detailed description on how a chargeback is handled.</p>
                <Image src={CustomerChargeback} width={778} height={526} quality={100} alt='img' className='' />
                <p className="common-body1-text custom-text-grey900">Primarily, all the chargebacks broadly fall under two reasons – fraud chargebacks and service- related chargebacks.</p>
                <p className="common-body1-text custom-text-grey900">Common reasons for fraud chargebacks are mentioned below and each reason is assigned a reason code to be specified while processing the chargeback:</p>
                <ul className="list-style-alphabate-upper pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 ">family/friend/employee use of card</li>
                    <li className="common-body2-text custom-text-grey900 ">unauthorized transaction</li>
                    <li className="common-body2-text custom-text-grey900 ">buyer forgets about the order placed.</li>

                </ul>
                <p className="common-body1-text custom-text-grey900">Common reasons for service chargebacks are mentioned below:</p>
                <ul className="list-decimal pl-5 space-y-5">
                    <li className="common-body2-text custom-text-grey900 ">Not received – customer claims that merchandise was never delivered.</li>
                    <li className="common-body2-text custom-text-grey900 ">Not as described/ defective – merchandise was damaged or defective or did not match description on the website.</li>
                    <li className="common-body2-text custom-text-grey900 ">Returns – the buyer has returned the merchandise and has not received the refund they were expecting.</li>
                </ul>
                <p className="common-body1-text custom-text-grey900">In case of service-related chargebacks, the merchant may choose to accept the chargeback in which case amount is refunded back to the end customer else merchant may choose to contest the chargeback and basis the outcome of the case, money is either refunded to the end customer or reversed back to the merchant.</p>
                <Image src={ResOwner} width={778} height={260} quality={100} alt='img' className='' />

            </div>

            {/* Merchant Level Issues and possible actions section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Merchant Level Issues and possible actions</h4>
                <p className="common-body1-text custom-text-grey900">Outlined below are possible issues/disputes that a merchant can face while using PayGlocal payment aggregator services and guidelines on their speedy resolution.</p>
                <div className="w-full overflow-scroll policy-table-container">
                  <table className="border border-collapse">
                      <thead>
                          <tr>
                              <th className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5"><strong>#</strong></th>
                              <th className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5"><strong>Dispute Type</strong></th>
                              <th className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5"><strong>Resolution Ownership</strong></th>
                              <th className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5"><strong>Resolution Steps</strong></th>
                              <th className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5"><strong>Turn Around Time (TAT)</strong></th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5">1</td>
                              <td className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5">Merchant Account Level Issues</td>
                              <td className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5">PayGlocal</td>
                              <td className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5">
                                  Resolution by PayGlocal upon receiving a Level 2 support request from Merchant
                              </td>
                              <td className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5">NA</td>
                          </tr>
                          <tr>
                              <td className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5">2</td>
                              <td className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5">Settlement Related Issues</td>
                              <td className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5">PayGlocal</td>
                              <td className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5">
                                  Resolution by PayGlocal upon receiving a Level 2 support request from Merchant
                              </td>
                              <td className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5">NA</td>
                          </tr>
                          <tr>
                              <td className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5">3</td>
                              <td className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5">Transaction Issues</td>
                              <td className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5">PayGlocal</td>
                              <td className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5">
                                  Resolution by PayGlocal upon receiving a Level 2 support request from Merchant.
                              </td>
                              <td className="border border-custom-grey200 common-body2-text custom-text-grey900 p-5">NA</td>
                          </tr>
                      </tbody>
                  </table>
                </div>
                <p className="common-body1-text custom-text-grey900">For dispute types where the TAT is mentioned as &apos;NA&apos;, PayGlocal team will respond to the merchant support request within 1 (One) -2 (Two) working days and mention the resolution details and TAT accordingly on a case-by-case basis.</p>
                <p className="common-body1-text custom-text-grey900">As merchant issues differ on a case-to-case basis and require extensive support and immediate resolution, merchants are advised to reach out to PayGlocal directly via Level 2 support channel - email to PayGlocal Support as outlined under grievance reporting channels in this Policy.</p>
            </div>

            {/* Merchant Account Level Issues section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Merchant Account Level Issues</h4>
              <p className="common-body1-text custom-text-grey900">KYC & Application form submitted, however Account still not Activated. Activation of an account is subject to</p>
              <ul className="list-disc pl-5 space-y-5">
                  <li className="common-body2-text custom-text-grey900 ">Completion of KYC Form review (for which TAT is 3 (Three)-5 (Five) working days from the date when KYC documents were submitted to PayGlocal)</li>
                  <li className="common-body2-text custom-text-grey900 ">Approval from our banking partners</li>
              </ul>
              <p className="common-body1-text custom-text-grey900">(Working days do not include Saturdays, Sundays, and bank holidays)</p>
              <p className="common-body1-text custom-text-grey900">PayGlocal team will update the merchant on the activation status of the account upon receiving approval from banking partners.</p>
              <p className="common-body1-text custom-text-grey900">In case the issue persists after 5 (Five) - 7 (Seven) working days, merchant can contact PayGlocal for resolution on the same as per the grievance reporting channels outlined in this Policy. The merchant is required to write to PayGlocal from their registered email ID as per Level 2 support of grievance reporting channels and PayGlocal will update the Merchant on resolution accordingly.</p>

            </div>

            {/* Facing Issues while integration section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Facing Issues while integration</h4>
                <p className="common-body1-text custom-text-grey900">If the merchant faces any issue during the integration, merchant can contact PayGlocal for resolution on the same as per the grievance reporting channels outlined in this Policy. The merchant is required to write to PayGlocal from their registered email ID with a detailed description of the issue and PayGlocal will reach out to the merchant for resolution accordingly.</p>
            </div>

             {/* Settlement Related Issues section */}
             <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Settlement Related Issues</h4>
                <h6 className="common-h6-heading font-bold">Settlement Hold Issue</h6>
                <p className="common-body1-text custom-text-grey900">PayGlocal compliance team and partner banks carry out routine audits of each merchant&apos;s transactions to identify any risky or out of pattern transactions and may temporarily pause merchant settlements during this time. The merchant is advised not to worry as the merchant is informed of the same via an email to the merchant&apos;s registered email ID by PayGlocal team and asked to provide any clarifications required.</p>
                <p className="common-body1-text custom-text-grey900">Upon receiving merchant&apos; response on clarifications, PayGlocal will be able to release the settlement within 2 (Two) working days and re-enable settlements for the merchant. Please note that the merchant can still accept payments from end-customers.
                In case of no resolution within 2 (Two) working days post submission of the requested information, merchant can raise a Level 2 Support Request for grievance reporting as outlined in this Policy. PayGlocal will reach out to the merchant with appropriate resolution.</p>
            </div>
            
            {/* Merchant has not received the settlement/ Status Shown as Failed section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Merchant has not received the settlement/ Status Shown as Failed</h4>
                <p className="common-body1-text custom-text-grey900">If the merchant has been requested by PayGlocal team to provide any information/ clarification, the merchant is advised to revert to the email with the necessary details.</p>
                <p className="common-body1-text custom-text-grey900">If not, the merchant is advised to contact PayGlocal for resolution of the same by raising a Level 2 support request for grievance reporting outlined in this Policy. The merchant is required to provide the MID and transaction details with respect to the settlement in the support request email. <br />
                PayGlocal team will check the hold-up and revert to the merchant.</p>
            </div>

            {/* Transaction Issue section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Transaction Issue</h4>
                <h6 className="common-h6-heading font-bold">Unable to Refund a payment</h6>
                <p className="common-body1-text custom-text-grey900">If the current balance in the merchant account is less than the amount that the merchant is trying to refund, the merchant is advised to initiate the refund after receiving further payments or initiate a Level 2 support request with PayGlocal team with their registered email ID along with MID and transaction details. PayGlocal team will respond to the request as per the TAT and dispute type guidelines mentioned in this Policy.</p>
                <h6 className="common-h6-heading">CONTROL REFERENCE</h6>
                <ul className="list-decimal pl-5 space-y-5">
                  <li className="common-body2-text custom-text-grey900 ">RBI – Guidelines on Regulation of Payment Aggregators and Payment Gateways, March 2020</li>
                  <li className="common-body2-text custom-text-grey900 ">RBI – Regulation on Payment Aggregator – Cross Border (PA – Cross Border), October 31, 2023</li>
                  <li className="common-body2-text custom-text-grey900 ">RBI – Harmonization of Turn Around Time (TAT) and customer compensation for failed transactions using authorized Payment Systems, September 20, 2019</li>
              </ul>
            </div>

            {/* Updating of the Policy section */}
            <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Updating of the Policy</h4>
                <p className="common-body1-text custom-text-grey900">PayGlocal has the right to revise, update or amend this Policy from time to time as per the relevant laws. This Policy is a mechanism sought to be initiated for analysis and requisite action at the grass root levels towards rectification of any recurring concerns or grievances that may be identified. In the event any material changes are made to the Policy, PayGlocal will notify you via this platform. The Policy will be approved by the Board of Directors of the Company.</p>
            </div>

              {/* Disclaimer section */}
              <div className={"flex flex-col gap-5 max-w-3xl w-full " }>
                <h4 className="common-h4-heading">Disclaimer</h4>
                <p className="common-body1-text custom-text-grey900">PayGlocal shall not be liable for any failure or delay in its performance under the Policy caused by force majeure events such as acts of God, acts of civil or military authorities, fires, epidemics, pandemics, floods, earthquakes, riots, sabotage, or destruction of production facilities, systems failure, technical mishaps, strikes, work stoppages, or any disputes such as industrial disputes.</p>
            </div>
           
        </section>
    )
}

export default GrievanceRedressalSection;
