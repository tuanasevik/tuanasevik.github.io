import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display, Montserrat, Space_Grotesk, Crimson_Text, Lora, Merriweather, Alike, Source_Serif_4, Libre_Baskerville, Roboto_Slab, Cinzel, Cinzel_Decorative, Permanent_Marker } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const alike = Alike({
  variable: "--font-alike",
  subsets: ["latin"],
  weight: "400",
});

const sourceSerifPro = Source_Serif_4({
  variable: "--font-source-serif-pro",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Tuana Sevik",
  description: "Portfolio website showcasing projects, travel experiences, and personal journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} ${montserrat.variable} ${spaceGrotesk.variable} ${crimsonText.variable} ${lora.variable} ${merriweather.variable} ${alike.variable} ${sourceSerifPro.variable} ${libreBaskerville.variable} ${robotoSlab.variable} ${cinzel.variable} ${cinzelDecorative.variable} ${permanentMarker.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
