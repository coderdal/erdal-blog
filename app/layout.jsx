import "./globals.css";

import Header from "@/app/components/Header/Header";

export const metadata = {
  title: "Muhammed ERDAL | Blog",
  description: "Blog of a Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
