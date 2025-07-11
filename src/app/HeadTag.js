'use client';
import { usePathname } from "next/navigation";
import Script from "next/script";


function MetaData({...props})
{
  let pathname=usePathname();
  
  const getMetaData = () => {
      switch (pathname) {
        case "/about":
          return {
            title: "The PayGlocal DNA - What binds us",
            desc: "PayGlocal - building crossborder payment solutions with a team of passionate superstars.",
          };
        case "/alternate-payment-methods":
          return {
            title: "Add 20+ Local Payment Methods to your Checkout",
            desc: "Grow into new markets, increase your business revenue with alternate payment methods.",
          };
        case "/alternate-payment-methods/klarna":
          return {
            title: "Expand to Europe with klarna",
            desc: "Looking to grow your business in Europe? Start accepting payments via klarna with PayGlocal",
          };
        case "/alternate-payment-methods/grab-pay-singapore":
          return {
            title: "Expand to Singapore with grab pay",
            desc: "Looking to grow your business in Singapore? Start accepting payments via grab pay with PayGlocal",
          };
        case "/alternate-payment-methods/giro-pay":
          return {
            title: "Expand to Germany with giro pay",
            desc: "Looking to grow your business in Germany? Start accepting payments via giro pay with PayGlocal",
          };
        case "/alternate-payment-methods/sofort":
          return {
            title: "Expand to Europe with sofort",
            desc: "Looking to grow your business in Europe? Start accepting payments via sofort with PayGlocal",
          };
        case "/alternate-payment-methods/trustly":
          return {
            title: "Expand to Europe with trustly",
            desc: "Looking to grow your business in Europe? Start accepting payments via trustly with PayGlocal",
          };
        case "/alternate-payment-methods/eps":
          return {
            title: "Expand to Austria with eps",
            desc: "Looking to grow your business in Austria? Start accepting payments via eps with PayGlocal",
          };
        case "/alternate-payment-methods/my-bank":
          return {
            title: "Expand to Italy with my-bank",
            desc: "Looking to grow your business in Italy? Start accepting payments via my-bank with PayGlocal",
          };
        case "/alternate-payment-methods/zip":
          return {
            title: "Expand to Australia with zip",
            desc: "Looking to grow your business in Australia? Start accepting payments via zip with PayGlocal",
          };
        case "/alternate-payment-methods/przelewy":
          return {
            title: "Expand to Poland with przelewy",
            desc: "Looking to grow your business in Poland? Start accepting payments via przelewy with PayGlocal",
          };
        case "/alternate-payment-methods/upi":
          return {
            title: "Expand to India with UPI",
            desc: "Looking to grow your business in India? Start accepting payments via UPI with PayGlocal",
          };
        case "/alternate-payment-methods/inb":
          return {
            title: "Expand to India with INB",
            desc: "Looking to grow your business in India? Start accepting payments via INB with PayGlocal",
          };
        case "/blog":
          return {
            title: "PayGlocal Blog | Make Payments Easy and Secure",
            desc: "Unlock your business potential with all things payments. Stay up to date with latest industry news and trends and guides with PayGlocal Blog",
          };
        case "/careers":
          return {
            title: "Careers at PayGlocal",
            desc: "Want to make a difference? So do we. Become a part of an innovation culture. Apply for opportunities at PayGlocal.",
          };
        case "/zero-tolerance-compliance-centre":
          return {
            title: "Zero-Tolerance Compliance Centre",
            desc: "",
          };
        case "/contact":
          return {
            title: "Talk to the PayGlocal team",
            desc: "Have a question about PayGlocal? Looking for a specific product or feature? We'd love to hear from you. ",
          };
        case "/docs":
          return {
            title: "Developer Documentation - PayGlocal",
            desc: "Create seamless payment experiences with PayGlocal - Guides, API and integration details for developers.",
          };
        case "/solutions/exporters":
          return {
            title: "PayGlocal for Global Exporters",
            desc: "All-in-one payments solution for globally growing businesses. Accept payments, manage risk, and reduce fraud with PayGlocal.",
          };
        case "/solutions/enterprise":
          return {
            title: "PayGlocal | Enterprise Payment Solutions",
            desc: "Maximize your business potential with PayGlocal's payment stack. Reduce fraud, manage risk and expand to new geographies.",
          };
        case "/card-processing":
          return {
            title: "Process International & Domestic Cards with PayGlocal",
            desc: "Accept payments from international or domestic cards. Get high payment approval rates and smooth user experience with PayGlocal",
          };
        case "/dynamic-checkout":
          return {
            title: "Create Seamless Payment Ceremonies with Dynamic Checkout",
            desc: "Create smooth, secure and seamless payment checkout experience with complete flexibility through server-server integrations or hosted payment pages.",
          };
        case "/recurring-payments-subscriptions":
          return {
            title: "Multiply your Revenue with Recurring Payments",
            desc: "Set up payment mandates and recurring payments on international transactions as per your business needs.",
          };
        case "/multi-currency-accounts":
          return {
            title: "Multi-Currency Account for Global Businesses",
            desc: "Accept international payments like a local entity in 33+ currencies with PayGlocal's multi-currency account.",
          };
        case "/international-payments-platform":
          return {
            title: "Unified Platform for International Payments | PayGlocal",
            desc: "Set up, manage and track your international payments from a single platform. Safe, secure payments at best approval rates.",
          };
        case "/why-payglocal":
          return {
            title: "Go Global with PayGlocal",
            desc: "All-in-one payments solution for globally growing businesses. Accept payments, manage risk, and reduce fraud with PayGlocal.",
          };
        case "/blog/real-time-crossborder-payments":
          return {
            title: "Unlocking Real Time Payments for Cross-border",
            desc: "Fintech leaders discuss the evolution, growth and future of real time payments for cross border.",
          };
        case "/blog/payment-failure":
          return {
            title: "Payment Failure: Why it Happens and How to Avoid It",
            desc: "Why does this happen? Banks and other entities decline real and genuine transactions at the slightest hint of risk or fraud. This can however lead to the loss of legitimate business for merchants.",
          };
        case "/blog/true-cost-of-fraud":
          return {
            title:
              "The True Cost of Fraud | Why Businesses Need Fraud Prevention",
            desc: "The cost of fraud goes beyond the lost transaction value itself. Businesses have to spend on chargebacks, merchandise replacements, and so on. This is why businesses invest in risk assessment systems and fraud protection.",
          };
        case "/blog/why-alternate-payment-methods":
          return {
            title: "What are Global Payment Methods & Why They Matter",
            desc: "The rise of online payments has also increased the consumer’s expectations of payment experience and flexibility.",
          };
        case "/blog/click-click-goose":
          return {
            title: "Click, Click, Goose! - What do your clicks say about you?",
            desc: "Through this blog, we hope to help the layman understand how their user interaction can be used in a positive manner, while data engineers and aspirants in the field can be inspired by how the idea can be implemented in their own ways. We had fun working on this project, and we hope you have fun too!",
          };
        case "/blog/single-sign-on-integration":
          return {
            title:
              "One Login to Rule Them All: Understanding and Integrating With Single Sign On",
            desc: "Through this blog, we aim to provide valuable insights and guidance for product managers and novice developers on the topic of Single Sign-On (SSO).",
          };
        case "/blog/multi-currency-account-india":
          return {
            title:
              "What is a Multi-Currency Account - A Beginner’s Guide to Business Accounts",
            metaTitle:
              "What is a Multi-Currency Account - A Beginner’s Guide to Business Accounts",
            desc: "All-in-one payments solution for globally growing businesses. Accept payments, manage risk, and reduce fraud with PayGlocal.",
          };
        case "/blog/international-payment-challenges":
          return {
            title:
              "International Payments: The Challenges and Solutions of Cross border Payments ",
            metaTitle:
              "Cross-border Payments: Challenges of International Transaction",
            desc: "The four main challenges in international payments - high costs, slow transactions, security and lack of transparency; and the potential solutions.",
          };
        case "/blog/open-multicurrency-account":
          return {
            title:
              "Breaking Borders: How to Open a Multi-Currency Business Account in India",
            metaTitle:
              "A Beginner’s Guide: Opening a Multicurrency Account for Global Currency Management",
            desc: "Break through borders and expand your financial reach by opening a multicurrency account. Our guide walks you through the process, providing insights and tips to ensure a smooth experience as you venture into international payments.",
          };
        case "/blog/international-money-transfer":
          return {
            title: "Guide to International Money Transfer for Indian Businesses",
            metaTitle:
              "International Money Transfer Methods: A Comprehensive Guide for Indian Businesses",
            desc: "Discover the best money transfer methods for international transfers, pros and cons of which. Find more secure and efficient ways to send and receive money globally.",
          };
        case "/blog/hidden-costs-in-international-payments":
          return {
            title:
              "Uncovering the Hidden Costs of International Business Transactions",
            metaTitle:
              "The True Cost of International Transactions for Expanding Businesses",
            desc: "Make informed financial choices by understanding the costs of international transfers. Learn about exchange rate markups, transfer fees, and more.",
          };
        case "/blog/choosing-the-right-mca-provider":
          return {
            title: "Choosing the right multi-currency account provider ",
            metaTitle: "Multi Currency Account Providers Factors to Consider",
            desc: "Explore key factors in choosing multi-currency account providers for seamless cross border transactions.",
          };
        case "/blog/firc":
          return {
            title: "FIRC - Everything you need to know!",
            metaTitle: "FIRC – Everything you need to know",
            desc: "Explore the significance of the Foreign Inward Remittance Certificate (FIRC) for Indian exporters. Learn about its role as proof of foreign currency inflow, benefits, connection to the Bank Realization Certificate (BRC), and essential details. Discover how FIRC facilitates compliance, access to incentives, and transparent transaction records, supporting seamless cross-border trade.",
          };
        case "/blog/http-redirect":
          return {
            title: "HTTP Redirection Demystified",
            metaTitle: "Mastering Web Performance with HTTP Redirects",
            desc: "Learn about HTTP redirection and how it can improve your website's performance, user experience, and security.",
          };
        case "/blog/empowering-exporters-rodtep":
          return {
            title: "Empowering Exporters – The RoDTEP Scheme",
            metaTitle: "Empowering Exporters – The RoDTEP Scheme",
            desc: "Explore the RoDTEP a scheme intended to lower the cost of exported goods. Learn more on who is eligible, its benefits and advantages.",
          };
        case "/blog/e-invoicing":
          return {
            title: "E-Invoicing: A Comprehensive Guide for Businesses in India ",
            metaTitle:
              "E-Invoicing: A Comprehensive Guide for Businesses in India ",
            desc: "E-Invoicing in India decoded: Compliance made simple, business benefits revealed, and digital advancements explored.",
          };
        case "/blog/swift-international-money-transfer":
          return {
            title: "SWIFT: The network powering international money transfer ",
            metaTitle:
              "SWIFT: The network powering international money transfer ",
            desc: "Dive into the world of international finance with our comprehensive guide on SWIFT, the backbone of global money transfers. Discover how SWIFT codes work, understand the intricacies of secure transactions, and navigate the complexities of fees and processing times. Empower your cross-border financial journey with expert insights and practical tips.",
          };
        case "/blog/zero-knowledge-proof":
          return {
            title: "Zero-Knowledge Proof: Redefining Data Privacy",
            metaTitle: "Zero-Knowledge Proof: Redefining Data Privacy",
            desc: "Explore the fascinating world of Zero-Knowledge Proofs and discover how they're reshaping data privacy. Dive into the future of secure digital interactions in our latest article.",
          };
        case "/blog/significance-of-brc":
          return {
            title:
              "Unravelling the Significance of Bank Realization Certificate (BRC) for Indian Exporters",
            metaTitle:
              "Significance of Bank Realization Certificate (BRC) for Indian Exporters",
            desc: "Explore the significance of the Bank Realization Certificate (BRC) in Indian exports. Learn about the electronic version, the process, required documents, and lucrative incentives for exporters. Stay informed for strategic trade success.",
          };
        case "/blog/import-export-codes":
          return {
            title:
              "Understanding Import-Export Codes (IEC) for Indian Importers and Exporters",
            metaTitle:
              "Understanding Import-Export Codes (IEC) for Indian Importers and Exporters",
            desc: "Unlock international markets seamlessly with the Importer Exporter Code (IEC)! Explore its pivotal role in streamlining trade, securing licenses, and accessing benefits for Indian businesses.",
          };
        case "/blog/eefc":
          return {
            title: "Optimizing Forex Management: A Deep Dive into EEFC Accounts",
            metaTitle:
              "Optimizing Forex Management: A Deep Dive into EEFC Accounts",
            desc: "Explore the world of efficient foreign exchange management with insights into Exchange Earners' Foreign Currency (EEFC) accounts. Uncover the benefits, limitations, and alternative solutions for exporters navigating the complexities of international trade. Discover strategic financial tools to enhance stability and growth in the global market",
          };
        case "/blog/xpress-payflow-shopify":
          return {
            title: "Xpress PayFlow for Shopify",
            metaTitle: "Xpress PayFlow for Shopify",
            desc: "Explore the world of efficient foreign exchange management with insights into Exchange Earners' Foreign Currency (EEFC) accounts. Uncover the benefits, limitations, and alternative solutions for exporters navigating the complexities of international trade. Discover strategic financial tools to enhance stability and growth in the global market",
          };
        case "/blog/ach-payments":
          return {
            title: "Understanding ACH payments",
            metaTitle: "Understanding ACH payments",
            desc: "Explore the speed and convenience of ACH payments – the backbone of electronic fund transfers in the US. Cost-effective, secure, and evolving for faster transactions for businesses and individuals.",
          };
        case "/blog/softex":
          return {
            title: "SOFTEX: A comprehensive guide",
            metaTitle: "SOFTEX: A comprehensive guide",
            desc: "Explore the vital role of Softex certification in India's software export industry. Learn how this RBI-mandated process ensures regulatory compliance, mitigates financial risks, and fosters transparent, accountable global transactions for software companies. Prioritize Softex for seamless growth, international credibility, and sustained success in the dynamic landscape of software export.",
          };
        case "/blog/nostro-vostro":
          return {
            title: "Understanding Nostro and Vostro accounts",
            metaTitle: "Nostro and Vostro accounts",
            desc: "Explore Nostro and Vostro accounts in international banking. Learn their functions,benefits, and how they simplify cross-border transactions.",
          };
        case "/blog/RoSCTL-Textile-Export":
          return {
            title: "Empowering Textile Exports – The RoSCTL Scheme",
            metaTitle: "Empowering Textile Exports – The RoSCTL Scheme",
            desc: "Unlocking competitiveness for India's apparel export industry, RoSCTL offers refunds on state and central taxes. Learn how this initiative fosters growth and dynamism in the textile sector, promoting global competitiveness and market expansion. Discover the benefits, restrictions, and advantages of the RoSCTL scheme in shaping India's position in the global textile and apparel market.",
          };
        case "/blog/alt-id":
          return {
            title: "Alt ID Solution for Guest Checkout Transactions",
            metaTitle: "Alt ID Solution for Guest Checkout Transactions",
            desc: "Explore Alt IDs, the innovative solution for enhanced online transaction security. By leveraging Alt IDs, merchants can ensure that transactions are conducted securely and adhere to regulatory requirements, ensuring a safer online shopping experience for all.",
          };
        case "/blog/freelancer-india":
          return {
            title: "Freelancing from India - A Growing Opportunity",
            metaTitle: "Freelancing from India - A Growing Opportunity",
            desc: "Explore Alt IDs, the innovative solution for enhanced online transaction security. By leveraging Alt IDs, merchants can ensure that transactions are conducted securely and adhere to regulatory requirements, ensuring a safer online shopping experience for all.",
          };
        case "/blog/HSN_Codes":
          return {
            title: "Cracking the Code: HSN Simplified",
            metaTitle: "Cracking the Code: HSN Simplified",
            desc: "Explore the importance of HSN (Harmonized System of Nomenclature) codes in global trade. Understand their role in standardizing product classification, simplifying tax calculation, and ensuring regulatory compliance. Learn how HSN codes streamline business operations and facilitate international commerce.",
          };
        case "/blog/choosing-the-right-payment-gateway":
          return {
            title: "Choosing the Right Payment Gateway",
            metaTitle: "Choosing the Right Payment Gateway",
            desc: "Explore the strategic importance of selecting the right payment gateway to enhance your international customer experience. Delve into the necessity of customizing payment systems to match cultural preferences, ensure robust security, and support regional payment methods. Gain insights into implementing consistent branding, legal compliance, and effective localization strategies. Learn how PayGlocal’s payment solutions ensure smooth and secure transactions. ",
          };
        case "/blog/mastering-exports-LUT":
          return {
            title: "Mastering Exports: A Complete Guide to Letters of Undertaking (LUT) for Indian Exporters",
            metaTitle: "Mastering Exports: A Complete Guide to Letters of Undertaking (LUT) for Indian Exporters",
            desc: "Navigating the complexities of international trade can be challenging, but understanding and utilizing a Letter of Undertaking (LUT) under the GST regime can significantly ease the process for Indian exporters. This comprehensive guide explores the benefits and everything you need to know about LUT.",
          };
        case "/blog/e-invoicing-under-GST":
          return {
            title: "E-Invoicing Under GST: Everything You Need to Know",
            metaTitle: "E-Invoicing Under GST: Everything You Need to Know",
            desc: "Navigating the world of business finance can often be a labyrinth of paperwork, regulations, and compliance headaches. But with the advent of e-invoicing under the Goods and Services Tax (GST) in India, businesses can now streamline their invoicing processes like never before. This blog covers everything you need to know about GST e-invoicing, how it works, and the benefits it offers..",
          };
        case "/blog/stay-ahead-of-fraud-liability-shift":
          return {
            title: "Stay Ahead of Fraud: Understanding Liability Shift in Card Payments",
            metaTitle: "Stay Ahead of Fraud: Understanding Liability Shift in Card Payments",
            desc: "At PayGlocal, we help our clients to stay ahead in this precarious world of online payments fraud. In the fast-paced world of digital transactions, staying one step ahead of fraudsters is crucial for any business. This article is one of the first articles where we dig deeper into the concept of online card payment fraud and related concepts.",
          };
        case "/blog/comprehensive-guide-to-fraud-reporting-mitigation-strategie":
          return {
            title: "Comprehensive Guide to Fraud Reporting and Mitigation Strategies",
            metaTitle: "Comprehensive Guide to Fraud Reporting and Mitigation Strategies",
            desc: "Fraud reporting is a critical process in maintaining financial integrity and combating fraudulent activities. When a consumer reports a suspicious transaction to their issuer, it alerts the bank to potential fraud. Dive in to our latest blog for insights and strategies to prevent fraud. ",
          };
        case "/blog/lut-certificate-how-to-download-and-furnish-on-gst-portal":
          return {
            title: "LUT Certificate: How to Download and Furnish on GST Portal",
            metaTitle: "LUT Certificate: How to Download and Furnish on GST Portal",
            desc: "Learn the steps to download and furnish a LUT certificate on the GST portal, ensuring GST obligations are fulfilled.",
          };
        case "/blog/how-to-get-clients-for-web-development-strategies":
          return {
            title: "How to Get Clients for Web Development: Proven Strategies and Tips",
            metaTitle: "How to Get Clients for Web Development: Proven Strategies and Tips",
            desc: "Learn proven strategies and tips on how to get clients for web development using social media, and employing effective content marketing strategies.",
          };
        case "/blog/brc-details-download-print":
          return {
            title: "Understanding How to Download and Print e-BRC Certificate Online",
            metaTitle: "Understanding How to Download and Print e-BRC Certificate Online",
            desc: "Get step-by-step guide on how to download and print e-BRC from the DGFT website and troubleshoot common issues involved in accessing BRC details.",
          };
        case "/blog/itr-for-freelancers-guide":
          return {
            title: "How to file Income Tax Returns (ITR) for freelancers in India",
            metaTitle: "How to file Income Tax Returns (ITR) for freelancers in India",
            desc: "Understand how to file ITR for freelancers in India, including applicable rates, deductions, and filing process via ITR-3 and ITR-4 forms.",
          };
        case "/blog/iec-code-import-export":
          return {
            title: "Applying for IEC (Import Export Code): Benefits and How to Get It",
            metaTitle: "Applying for IEC (Import Export Code): Benefits and How to Get It",
            desc: "The Import Export Code (IEC) is crucial for international trade, mandated for customs clearance and legal compliance in global transactions.",
          };
        case "/blog/payment-transaction-processing-types":
          return {
            title: "Understanding Payment Transaction Processing and Types",
            metaTitle: "Understanding Payment Transaction Processing and Types",
            desc: "Understanding payment transaction processing, from authorization to clearing, is crucial for businesses to ensure smooth and secure transactions in today's digital economy.",
          };
        case "/blog/edpms-understanding-system":
          return {
            title: "Understanding the Export Data Processing and Monitoring System (EDPMS)",
            metaTitle: "Understanding the Export Data Processing and Monitoring System (EDPMS)",
            desc: "EDPMS, launched by the Reserve Bank of India, enhances transparency in dollar transactions and aids in managing Forex operations.",
          };
        case "/blog/top-10-freelancing-sites-2024":
          return {
            title: "Top 10 Freelancing Websites for Online Work (2024)",
            metaTitle: "Top 10 Freelancing Websites for Online Work (2024)",
            desc: "Discover the top 10 freelancing sites for finding online work in 2024, including Upwork, Fiverr, Toptal, Freelancer.com, and more.",
          };
        case "/blog/managing-and-understanding-your-EEFC":
          return {
            title: "Managing and Understanding Your EEFC Account",
            metaTitle: "Managing and Understanding Your EEFC Account",
            desc: "Learn the full form of EEFC account, its primary purpose, and how it supports foreign exchange-earners.",
            keyword: "eefc"
          };
        case "/blog/role-and-importance-of-selecting-C&F-Agent":
          return {
            title: "Role and Importance of Selecting the Right C&F Agent",
            metaTitle: "Role and Importance of Selecting the Right C&F Agent",
            desc: "A C&F agent assists in customs clearance, coordinates with carriers, handles shipping and ensures cost-effectiveness.",
            keyword: "C&F Agent Full Form"
          };
        case "/blog/amazon-fulfillment-fees-changes":
          return {
            title: "Amazon FBA Fees: What You Should Know",
            metaTitle: "Amazon FBA Fees: What You Should Know",
            desc: "Get updated about the specific 2024 Amazon fulfillment fees, including changes to fulfillment, referral, and storage fees.",
            keyword: "amazon fulfillment fees"
          };
        case "/blog/sort-code-understanding-usage":
          return {
            title: "Understanding What a Sort Code Is and How to Use It",
            metaTitle: "Understanding What a Sort Code Is and How to Use It",
            desc: "A sort code is a 6-digit number used to identify UK banks and branches. It ensures accurate and efficient payment routing.",
            keyword: "sort code"
          };
        case "/blog/gst-on-export-of-services-impact":
          return {
            title: "Impact of GST on Export of Services in India",
            metaTitle: "Impact of GST on Export of Services in India",
            desc: "No GST is levied on the export of any services. The treatment is considered as zero-rated supply in India offering competitiveness.",
            keyword: "gst on export of services"
          };
        case "/blog/is-ifsc-and-swift-code-same-difference":
          return {
            title: "Difference Between Swift Code and IFSC Code for Transactions",
            metaTitle: "Difference Between Swift Code and IFSC Code for Transactions",
            desc: "The blog explains the difference between ifsc and swift code, how they serve distinct purposes in the global banking system.",
            keyword: "is ifsc and swift code same"
          };
        case "/blog/international-transaction-fees-explained":
          return {
            title: "Understanding International Transaction Fees: How Businesses Can Thrive Globally?",
            metaTitle: "Understanding International Transaction Fees: How Businesses Can Thrive Globally?",
            desc: "Understanding why international transaction fees is key to protecting your business profits and avoiding unnecessary charges during global trade.",
            keyword: "international transaction"
          };
        case "/blog/how-to-select-amazon-global-in-india-explained":
          return {
            title: "Sell and Ship Products Internationally from India using Amazon Global",
            metaTitle: "Sell and Ship Products Internationally from India using Amazon Global",
            desc: "Learn how to select Amazon Global in India for your products, understanding Amazon’s global marketplace requirements for international business expansion.",
            keyword: "how to select amazon global in india"
          };
        case "/blog/understanding-app-fraud-in-the-uk":
          return {
            title: "Understanding APP Fraud in the UK: A Growing Concern",
            metaTitle: "Understanding APP Fraud in the UK: A Growing Concern",
            desc: "Read more about APP fraud and the changing regulatory landscape in the UK, this blog highlights the nuances and applicability of regulation.",
          };
        case "/blog/mt103-swift-message-elements":
          return {
            title: "Understanding the Use and Elements of MT103 in SWIFT Payment Transfers",
            metaTitle: "Understanding the Use and Elements of MT103 in SWIFT Payment Transfers",
            desc: "Discover how to use the MT103 SWIFT message in payment transfers effectively. Learn the essential elements and streamline your transactions today!",
            keyword: "mt103 swift message"
          };
        case "/blog/difference-between-neft-rtgs-guide":
          return {
            title: "Difference Between NEFT and RTGS: A Simple Guide",
            metaTitle: "Difference Between NEFT and RTGS: A Simple Guide",
            desc: "Discover the difference between NEFT and RTGS payment systems: their purpose, pros and cons, processing time, charges, minimum and maximum limit.",
            keyword: "difference between neft and rtgs"
          };
        case "/blog/section-44ada-tax-scheme":
          return {
            title: "Section 44ADA - Presumptive Tax Scheme for Professionals",
            metaTitle: "Section 44ADA - Presumptive Tax Scheme for Professionals",
            desc: "Discover tax savings with Section 44ADA. Simplify tax filing by declaring 50% of your gross receipts as presumptive income to focus on business growth.",
            keyword: "section 44ada"
          };
        case "/blog/iban-understanding-its-function":
          return {
            title: "Understanding What an International Bank Account Number (IBAN) Is and How It Works.",
            metaTitle: "Understanding What an International Bank Account Number (IBAN) Is and How It Works.",
            desc: "IBAN stands for International Bank Account Number, a universally recognized identifier for bank accounts with a specific structure.",
            keyword: "iban"
          };
        case "/blog/sac-code-full-form-hsn-difference":
          return {
            title: "What are the Differences and Similarities between SAC Code and HSN Code?",
            metaTitle: "What are the Differences and Similarities between SAC Code and HSN Code?",
            desc: "The blog compares both SAC (Service Accounting Code) and HSN (Harmonized System of Nomenclature Code) which are key elements in the GST system.",
            keyword: "hsn and sac codes"
          };
        case "/blog/checking-aba-number-methods":
          return {
            title: "How to Find Your ABA Routing Number?",
            metaTitle: "How to Find Your ABA Routing Number?",
            desc: "Your ABA routing number is found on the bottom left corner of personal and business cheques or via banking platforms.",
            keyword: "ABA routing number"
          };
        case "/blog/bank-guarantee-vs-letter-of-credit-differences":
          return {
            title: "Bank Guarantee vs. Letter of Credit: Understanding the Differences.",
            metaTitle: "Bank Guarantee vs. Letter of Credit: Understanding the Differences.",
            desc: "Discover how a Bank guarantee and letters of credit help businesses safeguard financial interests and streamline transactions in trade.",
            keyword: "bank guarantee and letters of credit"
          };
        case "/blog/export-payment-terms-understanding":
          return {
            title: "Understanding Types of Export Payment Terms",
            metaTitle: "Understanding Types of Export Payment Terms",
            desc: "Understand the criticality of export payment terms, their selection in international trade, and techniques for handling transaction risks.",
            keyword: "export payment terms"
          };
        case "/blog/igst-cgst-sgst-indian-gst-types":
          return {
            title: "Understanding Types of GST: IGST, CGST, SGST, and UTGST in India",
            metaTitle: "Understanding Types of GST: IGST, CGST, SGST, and UTGST in India",
            desc: "Learn about IGST, CGST, SGST - the types of GST in India and their relevance for interstate and intrastate transactions.",
            keyword: "types of GST"
          };
        case "/blog/fob-full-form-export-invoices":
          return {
            title: "Understanding the Meaning and Use of FOB in Export Invoices",
            metaTitle: "Understanding the Meaning and Use of FOB in Export Invoices",
            desc: "Learn FOB meaning in export invoices: Its role in shipping, cost allocation, risk transfer, and impact on international trade transactions.",
            keyword: "fob meaning in export"
          };
        case "/blog/proforma-invoice-in-export-creation":
          return {
            title: "Creating a Proforma Invoice for Export Sales",
            metaTitle: "Creating a Proforma Invoice for Export Sales",
            desc: "Proforma invoices in export are comprehensive quotations used pre-shipment, serving as transaction previews to prevent misunderstandings and aid planning.",
            keyword: "proforma invoice in export"
          };
        case "/blog/how-to-learn-export-documentation-strategy":
          return {
            title: "A Guide to Learning Export Procedures and Documentation",
            metaTitle: "A Guide to Learning Export Procedures and Documentation",
            desc: "Discover various documents required for an export license in India, different export procedures, and banking options for international transactions.",
            keyword: "How to learn export documentation | Documents required for an export license in India"
          };
        case "/blog/forms-of-export-finance-business-growth":
          return {
            title: "Types and Uses of Export Finance in Business Growth ",
            metaTitle: "Types and Uses of Export Finance in Business Growth ",
            desc: "Discover insights on export finance, their types, how they support working capital and mitigate risks to aid your business growth.",
            keyword: "forms of export finance"
          };
        case "/blog/import-export-documentation-required":
          return {
            title: "Common Documents Required for Import and Export Procedures",
            metaTitle: "Common Documents Required for Import and Export Procedures",
            desc: "Discover why import-export documentation is mandatory for all import and export transactions and is primary for starting any business activities. ",
            keyword: "forms of export finance"
          };
        case "/blog/receivable-accounting-definition-types":
          return {
            title: "Understanding Accounts Receivable in Accounting: Definition, Uses and Types ",
            metaTitle: "Understanding Accounts Receivable in Accounting: Definition, Uses and Types ",
            desc: "Discover Accounts Receivable, a crucial asset, and how AR impacts business cash flow and can be used as collateral for business loans.",
            keyword: "accounts receivable"
          };
        case "/blog/rcmc-full-form-registration-documents":
          return {
            title: "Understanding RCMC Registration, Benefits, and Document Requirements in India",
            metaTitle: "Understanding RCMC Registration, Benefits, and Document Requirements in India",
            desc: "Learn about RCMC registration in India, its benefits, and required documents. Discover how RCMC can boost your export business effectively!",
            keyword: "RCMC"
          };
        case "/blog/top-10-products-export-India-2024":
          return {
            title: "Top 10 Products Exported from India in 2024",
            metaTitle: "Top 10 Products Exported from India in 2024",
            desc: "Discover the top 10 products exported from India: Petroleum, Gems, Pharmaceuticals, Fabric, Chemicals, Machines, Metals, Automobiles, Dairy, and Tea.",
            keyword: "top 10 products exported from India"
          };
        case "/blog/swift-transfer-time-explained":
          return {
            title: "Understanding How Long SWIFT Transfers Take",
            metaTitle: "Understanding How Long SWIFT Transfers Take",
            desc: "Discover how the expected SWIFT transfer time: typically 1 to 5 working days, is influenced by intermediary banks, time zones and cut-off times.",
            keyword: "swift transfer time"
          };
        case "/blog/how-to-get-international-clients-for-web-development-tips":
          return {
            title: "Smart Strategies To Gain International Web Development Clients",
            metaTitle: "Smart Strategies To Gain International Web Development Clients",
            desc: "Understand your target market, specialize in a high-demand niche, and optimize your online presence to get international clients for web development.",
            keyword: "how to get international clients for web development"
          };
  
        case "/blog/what-is-foreign-exchange":
          return {
            title: "What Is Foreign Exchange And How It Works?",
            metaTitle: "What Is Foreign Exchange And How It Works?",
            desc: "Learn what a foreign exchange rate is, and how it works. Explore the top factors that affect foreign exchange and the different types of currency systems.",
            keyword: "what is foreign exchange"
          };
  
        default:
          return {
            title: "PayGlocal | Fostering Global Commerce",
            desc: "All-in-one payments solution for globally growing businesses. Accept payments, manage risk, and reduce fraud with PayGlocal.",
          };
      }
    };

    
  const currentPageMetadata = getMetaData();

  return (
      <head>
          <title>{currentPageMetadata.title}</title>
          <meta
            name="title"
            content={currentPageMetadata?.metaTitle || currentPageMetadata?.title}
          />
          <meta name="description" content={currentPageMetadata?.desc} />
          {/* <meta property="image" content={"/favicon.png"} /> */ }
    <meta charSet="UTF-8" />
    {/* <meta httpEquiv="X-UA-Compatible" content="IE=edge" /> */ }
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="keywords"
            content={currentPageMetadata?.keyword || ""}
          />
    {/* <meta property="url" content="https://payglocal.in" /> */ }
          <meta
            property="og:title"
            content={currentPageMetadata.metaTitle || currentPageMetadata.title}
          />
          <meta
            name="description"
            property="og:description"
            content={currentPageMetadata?.desc}
          />
    {/* <!-- JSON-LD markup generated by Google Structured Data Markup Helper. --> */ }
    <Script type="application/ld+json">
      {`
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              name: "PayGlocal",
              image: "https://payglocal.in/payglocal-logo.svg",
              description: "We are a Global Payments Tech Stack.",
              email: "support@payglocal.in",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Payglocal, 72, service road, LRDE layout, Doddanekkundi,",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                addressCountry: "India",
                postalCode: "560037",
              },
              url: "https://payglocal.in/",
            `}
        </Script>
        <Script
          id="gtm-main"
          src={`https://www.googletagmanager.com/gtm.js?id=GTM-W48CTF73`}
          strategy="afterInteractive"
        />
      </head>

    )
}
export default MetaData;