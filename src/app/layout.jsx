import localFont from "next/font/local";
import "./globals.css";

const poppinsLt = localFont({
  src: "./fonts/poppinsLt.ttf",
  variable: "--font-poppins-lt",
  weight: "400",
});

const poppinsRg = localFont({
  src: "./fonts/poppinsRg.ttf",
  variable: "--font-poppins-rg",
  weight: "500",
});

const poppinsMd = localFont({
  src: "./fonts/poppinsMd.ttf",
  variable: "--font-poppins-md",
  weight: "600",
});

const poppinsSb = localFont({
  src: "./fonts/poppinsSb.ttf",
  variable: "--font-poppins-sb",
  weight: "700",
});

export const metadata = {
  title: "Velzon - Next Admin & Dashboard Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppinsMd.variable} ${poppinsRg.variable} ${poppinsLt.variable} ${poppinsSb.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
