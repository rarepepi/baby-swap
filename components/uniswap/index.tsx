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
      decimals: 18,
      chainId: 8453,
      logoURI: "https://buy.getbaby.xyz/logo.webp",
    },
  ];

  return (
    <div className="">
      <SwapWidget
        tokenList={MY_TOKEN_LIST}
        jsonRpcUrlMap={{
          1: "https://mainnet.infura.io/v3/8b0e1b0f7f7b4f3e9b5b9c4b5b3c3f3c",
          8453: "https://base.llamarpc.com",
        }}
        // provider={provider}
        defaultInputTokenAddress="NATIVE"
        defaultInputAmount="1"
        settings={{
          slippage: {
            auto: false,
            max: "13.00",
          },
          routerPreference: RouterPreference.CLIENT,
          transactionTtl: 60 * 20,
        }}
        convenienceFee={1}
        convenienceFeeRecipient={"0x2184d6a4fbd26584eb4ff90a215c1db334209053"}
        defaultOutputTokenAddress={"0x59E25CC1E5a9AbDA2593debD74A5215836A10C9a"}
        // defaultChainId={8453}
      />
    </div>
  );
};
