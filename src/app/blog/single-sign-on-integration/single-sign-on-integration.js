'use client';
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";

const OneLogin = () => {
  const [origin, setOrigin] = useState("https://payglocal.in");
  useEffect(() => {
    setOrigin(window?.location?.origin);
  }, []);
  return (
    <>
      <Head>
        <meta
          name="image"
          property="og:image"
          content={origin + "/blogs/one-login/header.png"}
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="One Login to Rule Them All: Understanding and Integrating With Single Sign On"
        />
        <meta
          name="twitter:description"
          content="Through this blog, we aim to provide valuable insights and
                  guidance for product managers and novice developers on the
                  topic of Single Sign-On (SSO)."
        />
        <meta
          name="twitter:image"
          content={origin + "/blogs/one-login/header.png"}
        />
      </Head>
      <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px]  pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content">
        <Image
          src="/blogs/one-login/header.png"
          alt="one-login"
          height={88}
          width={1184}
          className="rounded-[40px] mb-[5.375rem]"
        />
        <br />
        <div className="flex flex-col md:flex-row justify-between flex-[7 auto] w-100 gap-x-[5rem]">
          <div className="blog block md:inline md:min-w-[66.29%]">
            <div className="blog-info section-tags">
              <div className="blog-tag ">Tech</div>
              <div className="blog-read-time">5 min read</div>
              <hr className="blog-info-divider" />
              <div className="blog-date">22 March 2023</div>
            </div>
            <h3 className="blog-title  common-h4-heading">
              One Login to Rule Them All: Understanding and Integrating With
              Single Sign On
            </h3>
            <hr className="blog-divider" />
            <div className="blog-content large-card-body text-[#1a1a1a]">
              <div className="blog-section">
                <h4>Who’s reading?</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Through this blog, we aim to provide valuable insights and
                  guidance for product managers and novice developers on the
                  topic of Single Sign-On (SSO). Here, you will learn about the
                  importance of SSO and how to navigate the process of choosing
                  a provider and integrating it into your system. Additionally,
                  for those more experienced in the field, this blog will offer
                  a glimpse into the decision-making process at PayGlocal when
                  it comes to selecting technical partners. Whether you&apos;re
                  new to SSO or a seasoned pro, there&apos;s something for
                  everyone to gain from reading this blog.
                </p>
              </div>
              <div className="blog-section">
                <h4>The Login Dilemma: Security vs Simplicity</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  In 2013, a well-respected organisation reported that all 3
                  billion of the company&apos;s accounts were compromised in a
                  data breach. The hackers were able to steal personal
                  information, including names, email addresses, phone numbers,
                  dates of birth, and security questions and answers. This
                  resulted in a huge loss of trust among users and significant
                  financial losses for the company. This incident shows how
                  important it is to have robust security measures in place to
                  protect against hacking attempts and data breaches. Hence,
                  <span>
                    authentication and authorization security systems are
                    essential for protecting sensitive user information.
                  </span>
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  However, when security systems on applications become too
                  complicated for users, it can lead to a number of negative
                  consequences, like:
                </p>
                <ol
                  className="large-card-body text-[#1a1a1a]"
                  style={{ listStyleType: "decimal" }}
                >
                  <li>
                    <span>High Dropout Rate</span>: It can result in a high
                    dropout rate, as users may become frustrated with the
                    process and choose to abandon the application altogether.
                  </li>
                  <li>
                    <span>User Mistakes</span>: If users are unable to
                    understand or navigate the security system, they may
                    inadvertently make mistakes that could compromise their own
                    security, such as using weak passwords or sharing sensitive
                    information with the wrong parties.
                  </li>
                  <li>
                    <span>Security Workarounds</span>: It can lead to users
                    resorting to workarounds that compromise the security of the
                    application, such as writing down passwords, sharing them
                    with others, or even disabling the security features
                    altogether.
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  This can create a false sense of security and open up
                  vulnerabilities in the system that could be exploited by
                  hackers or cybercriminals. In short,{" "}
                  <span>
                    a security system that is too complicated for users will
                    fail to protect sensitive user information
                  </span>
                  , the very thing it was created to do.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Now comes the million dollar question:{" "}
                  <span>
                    Security vs Simplicity, how do you strike the right balance?
                  </span>{" "}
                  And the million-dollar answer,{" "}
                  <span>Single Sign-On Solutions!</span>
                </p>
              </div>
              <div className="blog-section">
                <h4>Single Sign-On: Striking the Right Balance</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Single Sign-On (SSO) solutions provide security without
                  compromising the usability of your application by:
                </p>
                <ol
                  className="large-card-body text-[#1a1a1a]"
                  style={{ listStyleType: "decimal" }}
                >
                  <li>
                    <span>Providing Security</span>: Providing a secure protocol
                    for logging-in that is backed by tech giants like Google,
                    Apple, Facebook, etc. This ensures the highest standards of
                    security is used during the login process.
                  </li>
                  <li>
                    <span>Instilling Confidence</span>: Enabling ease of user
                    login to different platforms using credentials from the
                    above-mentioned platforms. This instills confidence and
                    simplifies the process, all while maintaining security.
                  </li>
                  <li>
                    <span>Providing Simplicity</span>: Enabling users to
                    securely log into multiple platforms using a single set of
                    credentials. This removes the need to shuffle through
                    multiple credentials as users interact with a countless
                    number of applications each day.
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>
                    SSO solutions provide organisations the right balance
                    between security and simplicity!
                  </span>{" "}
                  But is it worth the integration effort? Let’s find out.
                </p>
              </div>
              <div className="blog-section">
                <h4>To Integrate or Not to Integrate?</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Single Sign-On (SSO) can simplify the login process for users
                  and increase security for organisations, however, it&apos;s
                  not always the best solution for all use cases. In this
                  section, we will take a closer look at the pros and cons of
                  SSO integration and help you decide whether it&apos;s worth it
                  for your organisation.
                </p>
                <Image
                  src="/blogs/one-login/proscons.jpg"
                  alt="Click Here"
                  height={480}
                  width={480}
                  className="blog-section"
                />
                <p className="large-card-body text-[#1a1a1a]">
                  Despite the few cons, SSO is a great enhancement for any
                  application. It strengthens the user experience through a more
                  refined consumer login experience.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  By now, you should be convinced of how a SSO integration would
                  be good for your organisation and you would want to dive right
                  into its integration. But before that, let’s get an
                  understanding of the basics of SSO security and how exactly
                  SSO works.
                </p>
              </div>
              <div className="blog-section">
                <h4>SSO Security: Authentication and Authorization</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Authentication is the process of verifying a user&apos;s
                  identity, while authorization establishes a user&apos;s access
                  to specific resources. Think of it like using your ID card at
                  your college. The ID card tells the security guard at the
                  campus that you are a student or teacher at your college, but
                  it also allows you access to only a particular set of
                  amenities and resources at your college based on whether you
                  are a teacher or a student.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  When deciding on an SSO integration, it&apos;s important to
                  take into account the company&apos;s overall security posture
                  and understand whether to use both authentication and
                  authorization or either one. Now let us understand how SSO
                  works and provides these services to users.
                </p>
              </div>
              <div className="blog-section">
                <h4>Decoding SSO: How Does it Work</h4>
                <Image
                  src="/blogs/one-login/sso.jpg"
                  alt="developer"
                  height={480}
                  width={480}
                />
                <p className="large-card-body text-[#1a1a1a]">
                  Single Sign-On (SSO) is a method of authenticating a user to
                  multiple systems and applications with a single set of
                  credentials. This process is depicted in the above diagram,
                  and involves three main components: an{" "}
                  <span>Identity Provider (IDP)</span>, a{" "}
                  <span>Service Provider (SP)</span>, and the <span>user</span>.
                  To facilitate the connection between the IDP and the Service
                  Provider, SaaS-based SSO solutions are used. These solutions
                  act as a middleman between the two, allowing for a smooth and
                  seamless login process.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Now, are we good to get started with the integration? Well,
                  not really. Navigating through the sheer number of integration
                  types for SSO-based integrations is <span>pretty tricky</span>
                  . SSO solutions provide a wide variety of features and
                  authentication flows leading into{" "}
                  <span>multiple decision points</span>. Thus, having a sound
                  <span>technical decision-making skill is essential</span>{" "}
                  during this process, which we shall discuss in the next
                  section.
                </p>
              </div>
              <div className="blog-section">
                <h4>The Art of Technical Decision Making</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  <i>
                    Before anything else, preparation is the key to success.”
                  </i>{" "}
                  - Alexander Graham Bell
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  While developing products and features for an organisation,
                  developers always stumble upon a range of decision points.
                  Hence, it is key to ensure that decisions are made in a
                  systematic and swift manner to avoid diving into{" "}
                  <span>analysis paralysis</span>. There are some key points to
                  keep in mind while making a technical decision:
                </p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    <span>Always have the problem statement in mind</span>:
                    Deviations from the problem statement can arise during
                    research. An open mind finds opportunities, while a focused
                    open mind takes action on those opportunities.
                  </li>
                  <li>
                    <span>Do Proof of Concepts (POC) wherever required</span>:
                    When checking out vendors or flows, performing POCs brings
                    more clarity than hours spent reading.
                  </li>
                  <li>
                    <span>Price evaluation</span>: The pricing of solutions is
                    critical to making the right decision. A free, open-source
                    solution with fewer features is better than a priced,
                    feature-rich solution, as long as it solves the problem.
                  </li>
                  <li>
                    <span>Document</span>: Always document the pros and cons,
                    POC results, and other relevant information about all the
                    choices present. This is good practice if someone wants to
                    revisit the solution and understand how certain decisions
                    were made or even make enhancements in the future.
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  Performing systematic research to come up with a viable and
                  secure SSO integration is essential, and the next section
                  shows the reader one of the many ways to solve a SSO
                  integration maze.
                </p>
              </div>
              <div className="blog-section">
                <h4>The SSO Integration Maze</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Navigating the SSO integration space can be a challenging task
                  due to the wide range of options available. With so many
                  vendors and integration types to choose from, it can be
                  difficult to know where to start. A simple{" "}
                  <span>google search for "SSO integrations"</span> may only
                  provide a small glimpse of the vast options that exist, making
                  it{" "}
                  <span>
                    hard to identify the right solution for a particular
                    application.
                  </span>{" "}
                  It is important to navigate through this maze correctly, as
                  the wrong integration choice can have{" "}
                  <span>negative consequences</span>:
                </p>
                <ul
                  className="large-card-body text-[#1a1a1a]"
                  style={{ listStyleType: "decimal" }}
                >
                  <li>
                    <span>Unusable Platform:</span> It can result in poor user
                    adoption, low security, or even data breaches, and can have
                    a negative impact on the overall success of the product. For
                    example, if you only support Apple as a sign-on provider,
                    non-Apple users will not be able to use your application.
                  </li>
                  <li>
                    <span>Incorrect Integration:</span> It can make your
                    integration difficult, non-seamless, and not align with the
                    company&apos;s security policies, compliance requirements,
                    and regulations. SSO integrations use different technologies
                    and provide different features for authentication and
                    authorization, and utilising the correct one will save the
                    organisation money and developer bandwidth.
                  </li>
                </ul>
              </div>
              <div className="blog-section">
                <h4>Solving the SSO Integration Maze</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Let us assume there exists an organisation that is developing
                  a product for the B2C segment for accepting international
                  payments from consumers across the globe. The organisation had
                  already developed their own authentication and authorization
                  flows for their APIs, as they value security and it is a core
                  principle of the organisation. From a tech stack perspective,
                  the organisation uses a regular web application executing on a
                  server that communicates with a separate backend server. This
                  organisation wants to integrate with a{" "}
                  <span>SSO provider</span>. Let’s check out their journey in
                  solving the integration maze.
                </p>
              </div>
              <div className="blog-section">
                <h4>Decision Point 1: SSO Features</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  To connect to consumers around the globe, the organisation
                  requires a login solution that:
                </p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    Would <span>securely authenticate</span> users.
                  </li>
                  <li>
                    Was <span>familiar</span> to users as we needed a good
                    acceptance rate for our platform.
                  </li>
                  <li>
                    Was <span>simple</span> to use by the consumers, as we
                    wanted fewer abandonments.
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  As the organisation had already developed their own
                  authentication and authorization flows for their APIs, the
                  <span>
                    clear requirement for the integration was the authentication
                    of the users.
                  </span>{" "}
                  Other features would not be required for this product, such as
                  authorization, user risk control, etc., which are provided by
                  the SSO partners.
                </p>
              </div>
              <div className="blog-section">
                <h4>Decision Point 2: SSO Protocol</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Different protocols are used for SSO flows, two of them being
                  Open ID Connect (<span>OIDC</span>) and Security Assertion
                  Markup Language (<span>SAML</span>). Apart from the low-level
                  flow of authentication being different, the tokens given out
                  after authentication are different too. In the OIDC protocol,
                  after a user is authenticated by the IDP, a JWT token is
                  returned, while in SAML, an XML document called a SAML
                  assertion is returned.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Even though SAML is more mature and has more features, for a
                  simple identity-based authentication solution, OIDC is
                  becoming more popular in the space due to the ease of handling
                  JWT tokens when compared to XML documents.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  These tokens contain the identity information of the user, and
                  handling them in a secure manner is therefore critical. Since
                  the organisation emphasizes simplicity, security, and
                  functionality for any feature that is developed,{" "}
                  <span>adopting the OIDC protocol</span> for their SSO
                  integration would be an obvious choice as it helps setup a
                  simple authentication system using a quick integration.
                </p>
              </div>
              <div className="blog-section">
                <h4>Decision Point 3: SSO Flow</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  When using the OIDC protocol, which is an extension of the
                  OAuth protocol, there are <span>several flows</span> that can
                  be utilised for SSO integration. Choosing the right one is
                  necessary for a secure and smooth SSO experience, and the
                  choice is influenced by the technical architecture of the
                  organisation. <span>Auth0</span> has put out a brilliant{" "}
                  <a
                    href="https://auth0.com/docs/get-started/authentication-and-authorization-flow/which-oauth-2-0-flow-should-i-use"
                    target="_blank" rel="noreferrer"
                  >
                    article
                  </a>{" "}
                  stating how this flow can be decided for a particular
                  platform.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Since the organisation uses a regular web application
                  executing on a server that communicates with a separate
                  backend server, the recommended flow type is the{" "}
                  <a
                    href="https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow"
                    target="_blank" rel="noreferrer"
                  >
                    authorization code flow
                  </a>
                  , which is the most common and safest flow available. After
                  the flow is executed, the web application will receive an JWT
                  access token, which contains the user’s identity information
                  that can be utilised by the platform. The access token will be
                  sent to the backend server, which will verify the token using
                  the public certificate provided by the SSO vendor. When
                  verified, the user is authenticated to access the resources on
                  the service provider’s platform.
                </p>
              </div>
              <div className="blog-section">
                <h4>Decision Point 2: SSO Protocol</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Different protocols are used for SSO flows, two of them being
                  Open ID Connect (<span>OIDC</span>) and Security Assertion
                  Markup Language (<span>SAML</span>). Apart from the low-level
                  flow of authentication being different, the tokens given out
                  after authentication are different too. In the OIDC protocol,
                  after a user is authenticated by the IDP, a JWT token is
                  returned, while in SAML, an XML document called a SAML
                  assertion is returned.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Even though SAML is more mature and has more features, for a
                  simple identity-based authentication solution, OIDC is
                  becoming more popular in the space due to the ease of handling
                  JWT tokens when compared to XML documents.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  These tokens contain the identity information of the user, and
                  handling them in a secure manner is therefore critical. Since
                  the organisation emphasizes simplicity, security, and
                  functionality for any feature that is developed,{" "}
                  <span>adopting the OIDC protocol</span> for their SSO
                  integration would be an obvious choice as it helps setup a
                  simple authentication system using a quick integration.
                </p>
              </div>
              <div className="blog-section">
                <h4>Decision Point 4: SSO Vendor</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  There are numerous SSO vendors in the market that provide SSO
                  as a SaaS solution. The choice of the vendor depends on the
                  feature set, protocol, and flow required for an organisation’s
                  SSO solution. For the purpose of this article, a comparative
                  study was conducted between{" "}
                  <a href="https://auth0.com/" target="_blank" rel="noreferrer">
                    auth0
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://firebase.google.com/?authuser=0"
                    target="_blank" rel="noreferrer"
                  >
                    firebase
                  </a>
                  , and the observations were as follows:
                </p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    Auth0 is easier to integrate, feature-rich, and more secure,
                    but has features that might not be utilised on our platform.
                  </li>
                  <li>
                    OAuth 2.0 from Firebase is comparatively more involved to
                    implement because of the generic SDK, but it provides much
                    finer control over the authentication process, and the costs
                    are comparatively lower.
                  </li>
                  <li>
                    The data in the access token and the verification of the
                    access token are the same across both platforms.
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  Thus, while Auth0 provides better functionalities, is lighter,
                  and is very focused on authentication,{" "}
                  <span>Firebase solves the problem at a much lower cost</span>.
                  Hence, <span>choosing Firebase</span> as the SSO solution
                  provider for the organisation would be a great choice. With
                  this said, let’s move on to our step-by-step guide on how to
                  integrate with Firebase!
                </p>
              </div>
              <div className="blog-section">
                <h4>Decision Point 2: SSO Protocol</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Different protocols are used for SSO flows, two of them being
                  Open ID Connect (<span>OIDC</span>) and Security Assertion
                  Markup Language (<span>SAML</span>). Apart from the low-level
                  flow of authentication being different, the tokens given out
                  after authentication are different too. In the OIDC protocol,
                  after a user is authenticated by the IDP, a JWT token is
                  returned, while in SAML, an XML document called a SAML
                  assertion is returned.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Even though SAML is more mature and has more features, for a
                  simple identity-based authentication solution, OIDC is
                  becoming more popular in the space due to the ease of handling
                  JWT tokens when compared to XML documents.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  These tokens contain the identity information of the user, and
                  handling them in a secure manner is therefore critical. Since
                  the organisation emphasizes simplicity, security, and
                  functionality for any feature that is developed,{" "}
                  <span>adopting the OIDC protocol</span> for their SSO
                  integration would be an obvious choice as it helps setup a
                  simple authentication system using a quick integration.
                </p>
              </div>
              <div className="blog-section">
                <h4>Firebase Integration Made Easy</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  The goal of this section is to simplify your SSO integration
                  using Firebase. At a high level, the development team has to:
                </p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    Setup the team’s Firebase account and configure a project.
                  </li>
                  <li>
                    Develop the frontend code base for IDP integrations using
                    Firebase.
                  </li>
                  <li>
                    Develop the backend code base to verify access tokens
                    provided by the IDP.
                  </li>
                </ol>
              </div>
              <div className="blog-section">
                <h4>Setting up a Firebase Project</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Firebase has made it really simple for developers to set up an
                  SSO integration project. The steps below show how to complete
                  the setup in no time:
                </p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    Log in to{" "}
                    <a
                      href="https://console.firebase.google.com/"
                      target="_blank" rel="noreferrer"
                    >
                      https://console.firebase.google.com/
                    </a>{" "}
                    using your organisation credentials.
                  </li>
                  <li>
                    Create a project and enter the necessary details for the
                    initial setup of the project.
                  </li>
                  <li>
                    Share the API key and authDomain with the front-end team,
                    which will be used for the front-end SDK.
                  </li>
                  <li>
                    Enable the authentication service and add the necessary
                    sign-in providers (e.g., Google).
                  </li>
                  <li>
                    Setup resource location as per compliance requirement, and
                    add a name for the app.
                  </li>
                  <li>
                    Setup API key restrictions for the API key. To do so, follow
                    the below steps:
                  </li>
                  <li>
                    Go to{" "}
                    <a
                      href="https://console.cloud.google.com/apis/credentials"
                      target="_blank" rel="noreferrer"
                    >
                      https://console.cloud.google.com/apis/credentials.
                    </a>
                  </li>
                  <li>Choose the API key that was created.</li>
                  <li>
                    Add HTTP referrers as the Firebase app’s auth domain and the
                    organisation’s app domain.
                  </li>
                  <li>Change the application to PROD mode in settings.</li>
                  <li>
                    Add Google APIs as allowed in the identity toolkit ONLY.
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  Follow this{" "}
                  <a
                    href="https://firebase.google.com/support/guides/launch-checklist"
                    target="_blank" rel="noreferrer"
                  >
                    checklist
                  </a>{" "}
                  as well to ensure all the right practices are followed.
                </p>
              </div>
              <div className="blog-section">
                <h4>Steps for Frontend Integration</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  After completing the setup process, follow the steps below to
                  complete your front-end integration:
                </p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    Choose one of the available sign-in providers on the
                    Firebase platform that you want to integrate with, each
                    provider has its own unique integration process.
                  </li>
                  <li>
                    Go to Firebase&apos;s website and follow the documentation
                    for the provider you&apos;ve chosen, for example,{" "}
                    <a
                      href="https://firebase.google.com/docs/auth/web/google-signin"
                      target="_blank" rel="noreferrer"
                    >
                      Google IDP Integration
                    </a>
                    .
                  </li>
                  <li>
                    Once the integration is successful, the application&apos;s
                    user interface will allow users to utilise social sign-in
                    providers.
                  </li>
                  <li>
                    The IDPs will return an access token that must be sent to a
                    backend API endpoint for user verification and
                    authentication. This completes the authorization code flow,
                    enabling users to securely access the application.
                  </li>
                </ol>
              </div>
              <div className="blog-section">
                <h4>Steps for Backend Integration</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  After completing the setup process, follow the steps below to
                  complete your backend integration, which can be done in
                  parallel to the frontend integration:
                </p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    Create a backend endpoint on your server or server-less
                    application to accept the access token sent by the frontend.
                  </li>
                  <li>
                    Create a backend endpoint on your server or server-less
                    application to accept the access token sent by the frontend.
                  </li>
                  <li>
                    Verify the access token using a third-party JWT token
                    library available in the language your server is written in.
                    This list provides a good set of libraries a developer can
                    refer to and experiment with.
                  </li>
                  <li>
                    Additional checks can be done on the token, and further data
                    can be stored in your application database if required, all
                    of which is explained in detail in Firebase’s backend
                    integration document.
                  </li>
                </ol>
              </div>
              <div className="blog-section">
                <h4>In a Nutshell</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  SSO integration enhances an organisation’s consumer
                  reachability by providing them with a seamless login
                  experience. Moreover, it improves the overall security posture
                  of the platform, provides verified user data, and decreases
                  operational costs and overhead. Navigating the space of SSO
                  integrations is tricky, but by making well-thought-out
                  decisions, you will be able to make the Firebase SSO
                  integration comfortable and swift.
                </p>
              </div>
            </div>
          </div>
          <hr className="author-data-divider mobile-view" />
          <div className="author-data block md:inline-block w-full md:w-[23.71%] md:min-w-[281px]">
            <div className="section-tags author-data-title">Written by</div>
            <div className="authors ">
              <div className="author">
                <Image
                  src="/blogs/one-login/author.png"
                  alt="author"
                  height={80}
                  width={80}
                  className="rounded-full"
                />
                <div className="author-identity">
                  <div className="author-name">Nihal Haneef</div>
                  <div className="author-designation">
                    Senior Software Engineer
                  </div>
                </div>
              </div>
            </div>
            <BlogSuggestions
              names={["click-click-goose", "zero-knowledge-proof"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OneLogin;
