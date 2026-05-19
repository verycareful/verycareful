import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter_Tight, Newsreader } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sricharan Suresh — Quantum Engineer",
  description:
    "Computer Science undergraduate specialising in Quantum Computing. I work at the intersection of research and production software — Ising/QUBO optimisation, quantum K-means, and cross-platform campus systems.",
  keywords: [
    "Quantum Computing",
    "QAOA",
    "Machine Learning",
    "C++",
    "Next.js",
    "SRM IST",
  ],
  authors: [{ name: "Sricharan Suresh" }],
  openGraph: {
    title: "Sricharan Suresh",
    description: "Quantum engineer building at the edge of CS.",
    url: "https://verycareful.github.io",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-type="mono" data-density="airy" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'paper');}catch(e){document.documentElement.setAttribute('data-theme','paper');}})();`,
          }}
        />
      </head>
      <body
        className={`${ibmPlexMono.variable} ${interTight.variable} ${newsreader.variable}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
