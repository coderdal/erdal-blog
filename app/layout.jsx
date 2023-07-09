import "./globals.css";

import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Muhammed ERDAL | Blog",
  description: "Blog of a Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-y-scroll">
        <NextTopLoader
          color="#074163"
          height={2}
          speed={400}
          shadow="0 0 10px #2299DD,0 0 5px #10537a"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
