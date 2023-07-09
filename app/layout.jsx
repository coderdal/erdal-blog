import "./globals.css";

import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

export const metadata = {
  title: "Muhammed ERDAL | Blog",
  description: "Blog of a Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-y-scroll">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
