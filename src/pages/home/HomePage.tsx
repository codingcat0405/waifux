import {Tabs, TabsProps} from "antd";
import MarketPlaceTab from "./tabs/MarketPlaceTab.tsx";
import AuctionTab from "./tabs/AuctionTab.tsx";

const HomePage = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Marketplace',
      children: <MarketPlaceTab/>,
    },
    {
      key: '2',
      label: 'Auction House',
      children: <AuctionTab/>,
    },

  ];
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items}/>
    </div>
  )
}
export default HomePage;