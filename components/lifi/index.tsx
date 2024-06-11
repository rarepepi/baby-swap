import dynamic from "next/dynamic";
import { LoadingIndicator } from "./loading";

export const LiFiWidgetNext = dynamic(
  () => import("./widget").then((module) => module.LifiWidgetComponent) as any,
  {
    ssr: false,
    loading: () => <LoadingIndicator />,
  }
);
