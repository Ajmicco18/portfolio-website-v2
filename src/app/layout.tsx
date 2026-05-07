import type { Metadata } from "next";
import "./index.css";
import { Provider } from "@/components/ui/provider";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';

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
    <>
      <html lang="en" suppressHydrationWarning>
        <body>
          <Provider>
            {children}
            <SpeedInsights />
            <Analytics />
          </Provider>
        </body>
      </html>
    </>
  );
}
