import { LiFiWidget, WidgetConfig } from "@lifi/widget";

const widgetConfig: WidgetConfig = {
  containerStyle: {
    border: "1px solid rgb(234, 234, 234)",
    borderRadius: "16px",
  },
  integrator: "baby-swap",
  toToken: "0x59E25CC1E5a9AbDA2593debD74A5215836A10C9a",
  toChain: 8453,
  slippage: 0.13,
};

export const LifiWidgetComponent = () => {
  return <LiFiWidget integrator="baby-swap" config={widgetConfig} />;
};
