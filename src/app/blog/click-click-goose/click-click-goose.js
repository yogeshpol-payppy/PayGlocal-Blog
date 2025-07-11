'use client';
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import BlogSuggestions from "@/Components/BlogSuggestions";


const ClickClickGoose = () => {
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
          content={origin + "/blogs/click-click-goose/header.png"}
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Click, Click, Goose! - What do your clicks say about you?"
        />
        <meta
          name="twitter:description"
          content="Through this blog, we hope to help the layman understand how
                  their user interaction can be used in a positive manner, while
                  data engineers and aspirants in the field can be inspired by
                  how the idea can be implemented in their own ways. We had fun
                  working on this project, and we hope you have fun too!"
        />
        <meta
          name="twitter:image"
          content={origin + "/blogs/click-click-goose/header.png"}
        />
      </Head>
      <div className=" bg-[#ffffff] flex flex-col items-center justify-center max-w-[1184px]  pt-[7rem] md:pt-[7.75rem] pb-[3.75rem] px-[5%] mx-[auto] box-content">
        <Image
          src="/blogs/click-click-goose/header.png"
          alt="Click click goose"
          height={88}
          width={1184}
          className="rounded-[20px] md:rounded-[40px] mb-[2.25rem] md:mb-[5.375rem]"
        />
        <br />
        <div className="flex flex-col md:flex-row justify-between flex-[7 auto] w-100 gap-x-[5rem]">
          <div className="blog block md:inline md:min-w-[66.29%]">
            <div className="blog-info section-tags">
              <div className="blog-tag ">Tech</div>
              <div className="blog-read-time">5 min read</div>
              <hr className="blog-info-divider" />
              <div className="blog-date">6 January 2023</div>
            </div>
            <h3 className="blog-title  common-h3-heading">
              Click, Click, Goose! - What do your clicks say about you?
            </h3>
            <hr className="blog-divider" />
            <div className="blog-content large-card-body text-[#1a1a1a]">
              <div className="blog-section">
                <Image
                  src="/blogs/click-click-goose/click-here.png"
                  alt="Click Here"
                  height={480}
                  width={480}
                />
                <h4 className="common-h4-heading">Who’s reading?</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Through this blog, we hope to help the layman understand how
                  their user interaction can be used in a positive manner, while
                  data engineers and aspirants in the field can be inspired by
                  how the idea can be implemented in their own ways. We had fun
                  working on this project, and we hope you have fun too!
                </p>
              </div>
              <div className="blog-section">
                <h4 className="common-h4-heading">Information is Money</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  You may not realise it, but your interaction today with a
                  single website leaves a trail of breadcrumbs and can be a{" "}
                  <span>treasure trove of data</span> for businesses. If that
                  sounds alarming, <span>don&apos;t worry</span>.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  The data aggregated by most websites isn&apos;t private or
                  meant to target you. Companies today go out of their way to
                  better understand their demographic&apos;s interests and
                  behavior, provide better user experience, and stay in the
                  competition. The objective is mainly to understand a general
                  trend of user interactions and behaviour on a particular
                  platform.
                </p>
                <Image
                  src="/blogs/click-click-goose/money.png"
                  alt="money"
                  height={480}
                  width={480}
                  className="blog-section"
                />
                <p className="large-card-body text-[#1a1a1a]">
                  The next time you&apos;re on a website, pay attention to the
                  user experience. You might notice some websites providing a
                  more dynamic set of content than others. Your information
                  makes this possible.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  <span>Cognitive analysis</span> is an easy way for companies
                  to personalize and customize experiences by accessing that
                  &apos;treasure trove of data&apos;. Cognitive Analysis has
                  also found its way to the payment industry, where we are able
                  to solve a different line of problems.
                </p>
                <Image
                  src="/blogs/click-click-goose/online.png"
                  alt="online"
                  height={480}
                  width={480}
                  className="blog-section"
                />
                <p className="large-card-body text-[#1a1a1a]">
                  With the increase in data breach and other security issues, it
                  became important for Payment companies to maintain a{" "}
                  <span>security standard</span> to safeguard customer&apos;s
                  personal data. With this thought, our industry was introduced
                  to compliances- a list of rules to be followed for different
                  eligibilities.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  We at PayGlocal, take these compliances very seriously, while
                  also following our own best practices to ensure minimum to
                  zero risk on our platform. At PayGlocal, we carry out{" "}
                  <span>Defense in Depth</span>- involving multiple security
                  practices at each layer of the application, ensuring a
                  holistic defense against threats. From Edge defense at the
                  network layer, and API Gateway at the Application Layer, to
                  the extensive encryption of data in transit, in use, and at
                  rest in the DB Layer- it&apos;s safe to say our application
                  practices a <span>Zero Trust Architecture</span>.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Apart from the secure handling of in-transit and stored data,
                  we also have a system in place for fraudster identification
                  through data analytics.
                </p>
              </div>
              <div className="blog-section">
                <h4 className="common-h4-heading">Fintech vs the Fraudsters</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Digitalisation of the industry has revolutionised the way we
                  pay. A merchant today can accept payments from customers
                  around the world- of different countries and currencies.
                  Customers, on the other hand, can complete payments in the
                  click of a button. However, along with the <span>speed</span>,
                  convenience and the sheer <span>volume</span> of digital
                  payments, the merchants were also forced to welcome a steep
                  increase in fraudsters.
                </p>
              </div>
              <div className="blog-section">
                <h4 className="common-h4-heading">Introducing Synapse</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  As a part of our Defense in Depth strategy, we have
                  implemented our own layer of protection through an in-house
                  technology to secure payments by identifying fraudster
                  activity. Inspired by clickstream, we have developed our own
                  framework to better use the user’s interaction online. Synapse
                  can be described as a roadmap of a user’s activity. The{" "}
                  <i>streamed</i>-clicks and other behavioural aspects of the
                  user’s interaction on the web browser, like-
                </p>
                <ul
                  className="large-card-body text-[#1a1a1a]"
                  style={{ listStyleType: "disc" }}
                >
                  <li>if they left the tab,</li>
                  <li>if they entered data into the page, </li>
                  <li>if they tried close the window, etc.</li>
                </ul>
                <p className="large-card-body text-[#1a1a1a]">
                  is used for a <span>behavioural analysis</span>; to help us
                  identify behavioural patterns and habits of our users, and in
                  turn help us identify <span>fraudsters</span> through
                  suspicious activity (such as pasting text instead of typing,
                  running scripts, leaving the tab, etc).
                </p>
                <Image
                  src="/blogs/click-click-goose/protection.png"
                  alt="protection"
                  height={480}
                  width={480}
                />
                <ol
                  className="large-card-body text-[#1a1a1a]"
                  style={{ listStyleType: "decimal" }}
                >
                  <li>Identify fraudsters from suspicious activity</li>
                  <li>
                    Improve User experience by understanding consumer’s pain
                    points{" "}
                  </li>
                  <li>Catch system errors if any</li>
                </ol>
              </div>
              <div className="blog-section">
                <h4 className="common-h4-heading">How are we doing this?</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  Let’s get into the technicalities of what is happening behind
                  the screens.
                </p>
                <Image
                  src="/blogs/click-click-goose/dev.png"
                  alt="developer"
                  height={480}
                  width={480}
                />
                <p className="large-card-body text-[#1a1a1a]">
                  The main objective is to stream the user’s behavioural data
                  into the system to analyse and identify suspicious activity.
                  From a technical standpoint, there are some implicit
                  objectives and best practices to be implemented-
                </p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>The data must be displayed in real-time.</li>
                  <li>
                    The data must be stored in an organised manner for future
                    analysis.
                  </li>
                  <li>
                    Data must be securely transferred over the browser and safe
                    from vulnerabilities and attacks.
                  </li>
                  <li>
                    The Synapse system must not affect any of the essential
                    payment activities.
                  </li>
                  <li>
                    If any of the data fails to be sent, there must be backed up
                    logs for the same.
                  </li>
                  <li>
                    Data must be available as a quick view, detailed view and
                    aggregates
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  Now let us go over how we can achieve each of these
                  requirements.
                </p>
              </div>
              <div className="blog-section">
                <h4 className="common-h4-heading">Basic Architecture</h4>
                <Image
                  src="/blogs/click-click-goose/architecture.png"
                  alt="developer"
                  height={1200}
                  width={1200}
                />
                <p className="large-card-body text-[#1a1a1a]">
                  Shown above is a simple depiction of our Synapse system
                  architecture. We begin by streaming user events on the front
                  end with the help of our well-known{" "}
                  <span>event handlers</span>. The <span>masked</span> sensitive
                  data and other event logs undergo <span>encoding</span>
                  before being sent over to the back end. The data is then
                  <span>queued</span> for pre-processing. During the{" "}
                  <span>pre-processing</span>, it is decoded, categorized,
                  aggregated and <span>dynamically partitioned</span> for
                  storage in the <span>database</span>.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  The data finally makes its way to our analytics platforms
                  where we can make use of it.
                </p>
              </div>
              <div className="blog-section">
                <h4 className="common-h4-heading">Achieving Real-time data</h4>
                <Image
                  src="/blogs/click-click-goose/rocket.png"
                  alt="developer"
                  height={480}
                  width={480}
                />
                <p className="large-card-body text-[#1a1a1a]">
                  The tricky thing about pulling off real-time data is that it
                  is not just one best practice that would do the job. The
                  system needs to be optimal at every stage of architecture.
                </p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    <span>Dynamic Partitioning.</span> We continuously segregate
                    our data streams by using a partition key provided within
                    data. This dynamically partitioned data is stored in
                    separate files in the database, making it easier to run
                    high-performance, and cost-efficient analytics. Partitioning
                    your data minimizes the amount of data scanned, optimizes
                    performance, and reduces the costs of your analytics
                    queries, while also increasing granular access to your data-
                    making it a good practice and solution for real-time data.
                  </li>
                  <li>
                    <span>Easy Read and Write Storage.</span> To ensure the
                    system can provide data in real-time, it was important to
                    choose a storage service that could give us fast performance
                    in terms of read and write operations.
                  </li>
                </ol>
              </div>
              <div className="blog-section">
                <h4 className="common-h4-heading">Batching</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  During a single transaction, we expect an ample number of
                  Synapse logs to be sent from the client’s system. A few things
                  were observed-
                </p>
                <ul style={{ listStyleType: "decimal" }}>
                  <li>
                    Each call that takes place undergoes a series of steps- a
                    TLS connection is initiated, for this the client creates a
                    session key, which contributes to an increase in CPU cycles
                    and hence, more <span>CPU utilisation</span>.
                  </li>
                  <li>
                    In addition to this, provided the fact that a majority of
                    these transactions will be taking place internationally, the
                    calculated <span>network overhead</span> is substantial.
                  </li>
                  <li>
                    It was also observed that a significant number of calls
                    (particularly those with metadata and successful setup info)
                    tend to occur almost <span>simultaneously</span>, within
                    milliseconds of one another.
                  </li>
                </ul>
                <p className="large-card-body text-[#1a1a1a]">
                  Batching of logs was a solid use case for this problem
                  statement.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  A batch could either be sent out after fulfilling a threshold
                  of <span>number of records</span> or{" "}
                  <span>duration of time</span>. It was clear that using
                  duration as a threshold was more viable as the Synapse logs
                  weren’t periodic in nature and latency needed to be at
                  minimum. Again, due to the erratic nature of the logs, instead
                  of having a static threshold for duration, we decided to have
                  the batches sent out based on{" "}
                  <span>time since last push to the batch</span>. For example,
                  if we set it to 2s- if the batch hasn’t received a new log for
                  the past two seconds, the batched logs will be sent and
                  cleared for the next set of logs.
                </p>
                <p className="large-card-body text-[#1a1a1a]">
                  Batching of logs was a solid use case for this problem
                  statement.
                </p>
              </div>
              <div className="blog-section">
                <h4 className="common-h4-heading">Security Practices</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  A system is only as good as its security measures. While
                  building this clickstream system, it was our responsibility to
                  ensure zero vulnerabilities.
                </p>
                <Image
                  src="/blogs/click-click-goose/security.png"
                  alt="developer"
                  height={480}
                  width={480}
                />
                <p className="large-card-body text-[#1a1a1a]">
                  Right off the bat, from the architecture diagram, you will
                  notice a few security measures being implemented. Let us
                  discuss them-
                </p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    <span>Masking.</span> Sensitive data is masked at the very
                    beginning of the data’s journey, even before leaving the
                    client’s device, in the front end. This means that the
                    user’s sensitive data will not be viewable at any point, be
                    it over the network, or in the database.
                  </li>
                  <li>
                    <span>Encoding.</span> Not only is the data base64 encoded,
                    but we also make use of our own secret codes to transfer the
                    event information. Much like HTTP status codes, we have a
                    set of pre-defined Log Codes that convey all the required
                    information regarding the event and transaction type.
                  </li>
                  <li>
                    <span>Auth system.</span> Synapse has an authentication
                    system in place, ensuring that no signal enters
                    unauthenticated. Much like the transaction itself, it is
                    ensured that the access to the resources used by the Synapse
                    system on the client’s is restricted.
                  </li>
                  <li>
                    <span>Rate Limiting.</span> An age old practice to prevent
                    DoS attacks. In the scenario of a malicious user getting
                    access to the Synapse resources through the temporary
                    credentials, our system is protected from an overflow of
                    data through this handy technique.
                  </li>
                </ol>
              </div>
              <div className="blog-section">
                <h4 className="common-h4-heading">System Availability</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  In the event that the Synapse log calls are failing, the
                  system makes sure of two things-
                </p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    The payment functionality is not being affected by
                    non-essential Synapse activity.
                  </li>
                  <li>Logs are being backed up to a more reliable service.</li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  In fact, the back up logs are executed at all points in the
                  system that are capable of producing an error. This is a
                  healthy practice that ensures all information for debugging is
                  readily available, and a root cause analysis can be executed
                  efficiently.
                </p>
              </div>
              <div className="blog-section">
                <h4 className="common-h4-heading">Analytics</h4>
                <p className="large-card-body text-[#1a1a1a]">
                  With the data safely entering our system at a minimal delay,
                  it was time to put it to good use. The streamed data, after
                  undergoing transformation in our intelligent models, is
                  presented to our Ops team for further analysis. The team then
                  picks up on alerts and suspicious activity and takes the
                  required actions to secure the system.
                </p>
                <Image
                  src="/blogs/click-click-goose/analytics.png"
                  alt="developer"
                  height={480}
                  width={480}
                />
                <p className="large-card-body text-[#1a1a1a]">
                  With a large amount of data coming in from Synapse, it was
                  important to provide apt views of the same for the operations
                  team. We introduced three views for Synapse data-
                </p>
                <ol style={{ listStyleType: "decimal" }}>
                  <li>
                    <span>Transaction Timeline (or the quick view)</span>. The
                    transaction timeline or journey provides a general idea of
                    how the transaction progressed. It contains the more
                    prominent events that took place during the transaction and
                    is colour coded for quick identification.
                  </li>
                  <li>
                    <span>The detailed view</span>. This contains all the
                    Synapse logs, with comprehensive categorization and
                    filtering for more convenient and efficient debugging.
                  </li>
                  <li>
                    <span>Aggregates</span>. Last but not least, Synapse
                    aggregates contribute largely to the analytics dashboard as
                    it is able to provide many granular details.{" "}
                  </li>
                </ol>
                <p className="large-card-body text-[#1a1a1a]">
                  All in all, incorporating the concept of Synapse has greatly
                  helped us in identifying malicious activity, understanding our
                  transactions better, capturing potential flaws in our
                  application, and kicking-off our cognitive analytics journey.
                  We are just getting started and have a lot more in mind for
                  future phases of Synapse. We hope to introduce edge-computing,
                  web sockets, execute persona identification, and open these
                  features to more businesses.
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
                  src="/blogs/click-click-goose/author1.png"
                  alt="author"
                  height={80}
                  width={80}
                  className="rounded-[60%]"
                />
                <div className="author-identity">
                  <div className="author-name">Sanjana Palisetti</div>
                  <div className="author-designation">
                    Senior Software Engineer
                  </div>
                </div>
              </div>
              <div className="author">
                <Image
                  src="/blogs/click-click-goose/author2.png"
                  alt="author"
                  height={80}
                  width={80}
                  className="author-image rounded-[60%]"
                />
                <div className="author-identity">
                  <div className="author-name">Shyam Santosh</div>
                  <div className="author-designation">Software Engineer</div>
                </div>
              </div>
            </div>
            <BlogSuggestions
              names={["http-redirect", "zero-knowledge-proof"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClickClickGoose;
