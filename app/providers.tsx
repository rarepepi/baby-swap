"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { Web3OnboardProvider } from "@web3-onboard/react";
import web3Onboard from "@/lib/web3-onboard";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Web3OnboardProvider web3Onboard={web3Onboard}>
        <NextUIProvider>
          <div className="">
            <Toaster />
            {children}
          </div>
        </NextUIProvider>
      </Web3OnboardProvider>
    </ThemeProvider>
  );
}
