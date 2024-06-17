import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {WagmiProvider} from 'wagmi';
import {
  bscTestnet
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import AppLayout from "./layouts/AppLayout.tsx";
import {BrowserRouter} from "react-router-dom";

const config = getDefaultConfig({
  appName: 'Waifux',
  projectId: '0a8c0849bc3d5fb00e3ae7cef2a2ec97',
  chains: [bscTestnet],
  ssr: false, // If your dApp uses server side rendering (SSR)
});


const queryClient = new QueryClient();
const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <BrowserRouter>
            <AppLayout/>
          </BrowserRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};


export default App
