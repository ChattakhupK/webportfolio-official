import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "@/components/NavBar/Navbar";
import ContainerBox from "@/components/ContainerBox";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CK - Portfolio | ChattakhupK",
  description:
    "เว็บแสดงผลงานข้อมูลข่าวสาร การติดต่อต่างๆหรือหลักฐานใบเกียรติบัตร รูปภาพต่างๆ",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "google-site-verification": process.env
      .NEXT_PUBLIC_GOOGLEVERIFICATION as string,
  },
  openGraph: {
    title: "CK - Portfolio | ChattakhupK",
    description:
      "เว็บแสดงผลงานข้อมูลข่าวสาร การติดต่อต่างๆหรือหลักฐานใบเกียรติบัตร รูปภาพต่างๆ",
    url: "https://portfolio-official-liart.vercel.app/",
    siteName: "ChattakhupK Portfolio",
    images: [
      {
        url: "https://portfolio-official-liart.vercel.app/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${notoSansThai.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ContainerBox>
            <Navbar />
            {children}
          </ContainerBox>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
