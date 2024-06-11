import "@/styles/globals.css";
import { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Baby Swap",
  description: "Swap your tokens for the best $BABY tokens on the market!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>
          {/* <Nav /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
