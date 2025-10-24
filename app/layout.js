import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Jinyu Zhou | Portfolio",
  description: "Cinematic portfolio of Jinyu Zhou",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          {/* Grain/Noise Overlay */}
          <div className="grain-overlay" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
