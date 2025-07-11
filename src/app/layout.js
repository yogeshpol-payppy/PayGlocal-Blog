import '@/Styles/tailwindcss.css';
import '@/Styles/Typrography.css';
import { Manrope } from "next/font/google";
import MetaData from './HeadTag';
import FreelancerSection from './freelancer/FreelancerSection';
import McaSection from './mca/McaSection';
import AmazonSection from './amazon/AmazonSection';

// export const metadata = {
//   title: "PayGlocal | Fostering Global Commerce",
//   description: "Payglocal.in",
// };

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({ children }) {
 

  return (
    <html lang="en">
      <MetaData />
      {/* </MetaData> */}
      
      <body
        className={'' + manrope.className}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W48CTF73"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children} 
      </body>
    </html>
  );
}
