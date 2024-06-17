import {Route, Routes} from 'react-router-dom'
import appRoutes from "../routes";
import {Header} from "../components";
import {useAccount} from "wagmi";
import {useChainModal} from "@rainbow-me/rainbowkit";
import {useEffect} from "react";

const AppLayout = () => {
  const {chainId} = useAccount()
  console.log('chainId', chainId)
  const {openChainModal} = useChainModal();
  useEffect(() => {
    if (chainId !== 97 && openChainModal) {
      openChainModal();
    }
  }, [chainId, openChainModal]);
  return (
    <>
      <Header/>
      <Routes>
        <Route>
          {Object.values(appRoutes).map(({path, component: Page}) => (
            <Route
              key={path}
              path={path}
              element={<Page/>}
            />
          ))}
        </Route>
      </Routes>
    </>
  )
}

export default AppLayout