import {getDefaultConfig} from "@rainbow-me/rainbowkit";
import {bscTestnet} from "wagmi/chains";

export const wagmiConfig = getDefaultConfig({
  appName: 'Waifux',
  projectId: '0a8c0849bc3d5fb00e3ae7cef2a2ec97',
  chains: [bscTestnet],
  ssr: false, // If your dApp uses server side rendering (SSR)
})