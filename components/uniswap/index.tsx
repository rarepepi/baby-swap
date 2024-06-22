import { config } from "@/lib/config";
import { MAINNET_RPC } from "@/lib/utils";
import { RouterPreference, SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import { useEffect, useState } from "react";
import { useConnectWallet } from "@web3-onboard/react";
import { ethers } from "ethers";

export const UniSwapPage = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [provider, setProvider] = useState<ethers.BrowserProvider>();

  // Once the wallet is connected the provider will be defined and we'll set the provider value
  // This provider will then be passed to the Uniswap component in the next step.
  useEffect(() => {
    if (wallet?.provider) {
      // if using ethers v6 this is:
      setProvider(new ethers.BrowserProvider(wallet.provider, "any"));
      // setProvider(new ethers.providers.Web3Provider(wallet.provider, "any"));
    } else {
      // Reset the provider back to 'undefined' such that the
      // connect wallet option will reappear in the uniswap modal
      setProvider(undefined);
    }
  }, [wallet]);

  // The connect wallet function which will be based to the Uniswap component in the next step.
  const connectWallet = () => {
    connect();
  };

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
        provider={provider as any}
        onConnectWalletClick={connectWallet}
        // tokenList={"https://ipfs.io/ipns/tokens.uniswap.org"}
        tokenList={MY_TOKEN_LIST}
        jsonRpcUrlMap={{
          1: MAINNET_RPC as string,
          8453: MAINNET_RPC as string,
        }}
        // defaultInputTokenAddress="NATIVE"
        // defaultInputAmount="1"
        // @ts-ignore
        // settings={{
        //   slippage: {
        //     auto: false,
        //     max: "14.00",
        //   },
        // }}
        // convenienceFee={1}
        // convenienceFeeRecipient={"0x2184d6a4fbd26584eb4ff90a215c1db334209053"}
        // defaultOutputTokenAddress={"0x59E25CC1E5a9AbDA2593debD74A5215836A10C9a"}
        // defaultChainId={8453}
      />
    </div>
  );
};
