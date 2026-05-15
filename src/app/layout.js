import dns from 'node:dns';
dns.setServers(['8.8.8.8','8.8.4.4']);
import { Manrope, Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  variable:"--font-poppins",
  subsets:["latin"],
  weight:["400","500","600","700","800","900"]

})

export const manrope = Manrope({
  variable:"--font-manrope",
  subsets:["latin"],
  weight:["400","500","600","700","800"]
})

export const metadata = {
  title: "Dragon News",
  description: " Bangladesh No.1 News Paper ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={` h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        
        {children}
         <ToastContainer />
      </body>
    </html>
  );
}
