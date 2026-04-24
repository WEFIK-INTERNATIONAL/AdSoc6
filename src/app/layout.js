import {
    ppNeueMontreal,
    goodMonolith,
    bigShouldersDisplay,
    pangramSans,
} from './fonts';
import "./globals.css";

export const metadata = {
  title: "ADSoC 6.0 | AI-Driven Smart Healthcare for Society 6.0",
  description: "International Conference on AI-Driven Smart Healthcare for Society 6.0, Hosted by GNIT Kolkata & IEEE Kolkata Section.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${goodMonolith.variable} ${ppNeueMontreal.variable} ${bigShouldersDisplay.variable} ${pangramSans.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
