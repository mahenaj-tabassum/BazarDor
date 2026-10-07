import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const banglaFont = Hind_Siliguri({
  variable: "--font-bangla",
  subsets: ["latin", "bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BazarDor | Daily Market Prices",
  description: "Daily essentials' prices at a glance",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${banglaFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <main>{children}</main>

        <Toaster position="top-center" />
      </body>
    </html>
  );
}
