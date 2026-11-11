import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

// Inter is downloaded at build time and served from this site (no Google request from visitors).
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: `${site.role} in ${site.location}. ${site.techLine.join(", ")}.`,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // lets content use the full screen on notched phones
  // No themeColor here on purpose: it would need hex values copied out of tokens.css,
  // breaking the rule that every colour lives in one place.
};

// Runs before the first paint: saved choice first, otherwise the visitor's system setting.
// This prevents a flash of the wrong theme on load.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="light" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh antialiased">
        <div id="top" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
