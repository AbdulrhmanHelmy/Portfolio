import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdulrahman Helmy | Full Stack Developer",
  description: "Portfolio of Abdulrahman Helmy, a Full Stack Developer skilled in React, Next.js, Node.js, Java, MongoDB, and more. Based in Cairo, Egypt.",
 
  verification: {
    google: "xjt__7mWfOTGW71gWrMVBLZF6-5mSkz5gyfBOI8rHVc", 
  },
  keywords: [
    "Abdulrahman Helmy",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Java",
    "MongoDB",
    "MySQL",
    "Frontend",
    "Backend",
    "Cairo Egypt"
  ],
  authors: [{ name: "Abdulrahman Helmy", url: "https://portfolio-info-egypt.vercel.app/" }],
  creator: "Abdulrahman Helmy",
  openGraph: {
    title: "Abdulrahman Helmy | Full Stack Developer",
    description: "Explore my portfolio, skills and projects in web development.",
    url: "https://portfolio-info-egypt.vercel.app/",
    siteName: "Abdulrahman Helmy Portfolio",
    images: [
      {
        url: "https://portfolio-info-egypt.vercel.app/pro.jpg",
        width: 1200,
        height: 630,
        alt: "Abdulrahman Helmy Portfolio Preview",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulrahman Helmy | Full Stack Developer",
    description: "Explore my portfolio, skills and projects in web development.",
    images: ["https://portfolio-info-egypt.vercel.app/preview.png"],
    creator: "@your_twitter_username",
  },
  metadataBase: new URL("https://portfolio-info-egypt.vercel.app"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
