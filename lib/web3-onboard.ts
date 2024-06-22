import { init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";

const base = {
  id: 8453,
  token: "ETH",
  label: "Base",
  rpcUrl: process.env.MAINNET_RPC,
};

const chains = [base];

const wallets = [injectedModule()];

const appMetadata = {
  name: "Uniswap Widget Example",
  icon: "<svg>My App Icon</svg>",
  description:
    "Example showcasing how to integrate web3-onboard with uniswap widget.",
  recommendedInjectedWallets: [
    { name: "MetaMask", url: "https://metamask.io" },
    { name: "Coinbase", url: "https://wallet.coinbase.com/" },
  ],
};

// initialize and export Onboard
export default init({
  wallets,
  chains,
  appMetadata,
});
