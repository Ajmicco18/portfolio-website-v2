import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Anthony's Site",
  description: "Anthony Micco's personal website",
  authors: [{ name: "Anthony Micco" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "royalblue" }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
