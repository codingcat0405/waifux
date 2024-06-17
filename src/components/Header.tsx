import {ConnectButton} from "@rainbow-me/rainbowkit";
import {Flex} from "antd";
import {useAccount} from "wagmi";
import {Link} from "react-router-dom";

const Header = () => {
  const {isConnected} = useAccount()
  return (
    <header>
      <Flex justify="space-between" align='center'>
        <h4>
          <Link to="/">Waifux</Link>
        </h4>
        <Flex justify="center" align='center'>
          {isConnected && (
            <>
              <Link to="/profile" style={{margin: '0 20px'}}>Profile</Link>
              <Link to="/nft-box" style={{margin: '0 20px'}}>Box</Link>
            </>
          )}
          <ConnectButton/>
        </Flex>

      </Flex>
    </header>
  )
}
export default Header;