"use client";

import type { WidgetConfig } from "@lifi/widget";
import { LiFiWidget, WidgetSkeleton } from "@lifi/widget";
import { ClientOnly } from "../ClientOnly";

export function LiFiWidgetNext() {
  const config = {
    toToken: "0x4730DdC61264ba9189B25169BdAEae46CF07Ee93",
    toChain: 8453,
    appearance: "light",
    tokens: {
      // Featured tokens will appear on top of the list
      featured: [
        {
          address: "0x4730DdC61264ba9189B25169BdAEae46CF07Ee93",
          symbol: "BABY",
          decimals: 18,
          chainId: 8453,
          name: "BABY",
          logoURI: "https://buy.getbaby.xyz/baby.png",
        },
      ],
    },
    theme: {
      container: {
        boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.08)",
        borderRadius: "16px",
      },
    },
  } as Partial<WidgetConfig>;

  return (
    <div>
      <ClientOnly fallback={<WidgetSkeleton config={config} />}>
        <LiFiWidget config={config} integrator="baby-swap" />
      </ClientOnly>
    </div>
  );
}
