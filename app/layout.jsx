import "./globals.css";

export const metadata = {
  title: "Muhammed ERDAL | Blog",
  description: "Blog of a Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
