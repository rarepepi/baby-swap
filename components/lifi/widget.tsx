import { LiFiWidget, WidgetConfig } from "@lifi/widget";

const widgetConfig: WidgetConfig = {
  containerStyle: {
    border: "1px solid rgb(234, 234, 234)",
    borderRadius: "16px",
  },
  integrator: "baby-swap",
  toToken: "0x4730DdC61264ba9189B25169BdAEae46CF07Ee93",
  toChain: 8453,
  // slippage: 0.05,
  appearance: "light",
};

export const LifiWidgetComponent = () => {
  return <LiFiWidget integrator="baby-swap" config={widgetConfig} />;
};
