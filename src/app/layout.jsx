import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";


const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: "--font-jetbrainsMono",
});


export const metadata = {
  title: "Abdelouahed",
  description: "Made by Abdelouahed A.K.A EVL44",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${JetBrainsMono.variable} antialiased bg-surface-foreground text-surface`} >
        <Header/>
        <StairTransition/>
        <PageTransition> {children} </PageTransition>
      </body>
    </html>
  );
}
