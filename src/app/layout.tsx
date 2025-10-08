import type { Metadata } from "next";
import "./index.css";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Anthony Micco",
  description: "Anthony Micco's Portfolio",
  authors: [{ name: "Anthony Micco" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Providers>
          {children}
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
