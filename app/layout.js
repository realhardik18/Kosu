import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Kozu",
  description: "",
};

export default function RootLayout({ children }) {
  return (    
      <html lang="en">
        <body className={`${inter.variable} font-sans antialiased`}>
          {children}
        </body>
      </html>    
  );
}
