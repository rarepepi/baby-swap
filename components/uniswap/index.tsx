import { RouterPreference, SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import { useActiveProvider } from "../connectors";

export const UniSwapPage = () => {
  // const provider = useActiveProvider();

  const MY_TOKEN_LIST = [
    {
      name: "Baby Token",
      address: "0x59E25CC1E5a9AbDA2593debD74A5215836A10C9a",
      symbol: "BABY",
      decimals: 9,
      chainId: 8453,
      logoURI: "https://buy.getbaby.xyz/logo.webp",
    },
    {
      name: "USDC",
      address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      symbol: "USDC",
      decimals: 6,
      chainId: 8453,
      logoURI: "https://basescan.org/token/images/centre-usdc_28.png",
    },
  ];

  return (
    <div className="">
      <SwapWidget
        tokenList={MY_TOKEN_LIST}
        jsonRpcUrlMap={{
          8453: "https://base.llamarpc.com",
        }}
        // provider={provider}
        defaultInputTokenAddress="NATIVE"
        defaultInputAmount="1"
        settings={{
          slippage: {
            auto: false,
            max: "14.00",
          },
          routerPreference: RouterPreference.API,
          transactionTtl: 60 * 20,
        }}
        // convenienceFee={1}
        // convenienceFeeRecipient={"0x2184d6a4fbd26584eb4ff90a215c1db334209053"}
        defaultOutputTokenAddress={"0x59E25CC1E5a9AbDA2593debD74A5215836A10C9a"}
        // defaultChainId={8453}
      />
    </div>
  );
};
