import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "ITHAKA",
  description: "Your Gate to Explore Egypt",
};

const myFont = localFont({ src: '../public/fonts/Poppins-Medium.ttf' })
const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});
const gelatoLuxe = localFont({
  src: [
    {
      path: "../public/fonts/Gelato-Luxe.ttf",
      weight: "400",
      style: "normal",

    },
  ],
  variable: "--font-gelatoLuxe",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${gelatoLuxe.variable} ${myFont.className}`}>
        {children}
      </body>
    </html>
  );
}
