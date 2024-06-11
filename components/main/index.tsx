"use client";
import { LiFiWidget, WidgetConfig } from "@lifi/widget";

const widgetConfig: WidgetConfig = {
  containerStyle: {
    border: "1px solid rgb(234, 234, 234)",
    borderRadius: "16px",
  },
  integrator: "babySwap",
  toToken: "0x59E25CC1E5a9AbDA2593debD74A5215836A10C9a",
  toChain: 8453,
  slippage: 10,
};

export const MainPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center my-8">
        Welcome to the $BABY Swap!
      </h1>
      <LiFiWidget integrator="babySwap" config={widgetConfig} />
    </div>
  );
};
