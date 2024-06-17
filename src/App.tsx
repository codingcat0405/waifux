import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {WagmiProvider} from 'wagmi';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import AppLayout from "./layouts/AppLayout.tsx";
import {BrowserRouter} from "react-router-dom";
import {wagmiConfig} from "./config.ts";
import {Toaster} from "react-hot-toast";


const queryClient = new QueryClient();
const App = () => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <BrowserRouter>
            <AppLayout/>
          </BrowserRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
      <Toaster/>
    </WagmiProvider>
  );
};


export default App
