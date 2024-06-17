import {Button, Card, Col, Image, Row} from "antd";
import NFT_ABI from "../../contracts/abis/nft.json";
import {NFT_ADDRESS} from "../../contracts/address.ts";
import {useQuery} from "@tanstack/react-query";
import {getAccount, readContract} from "@wagmi/core";
import {wagmiConfig} from "../../config.ts";

const ProfilePage = () => {
  const {
    data: myNfts = []
  } = useQuery({
    queryKey: ['myNfts'],
    queryFn: async () => {
      const {address} = getAccount(wagmiConfig)
      if (!address) throw new Error('Wallet not connected')
      const tokenIds: any[] = await readContract(wagmiConfig, {
        address: NFT_ADDRESS,
        functionName: 'list',
        abi: NFT_ABI,
        args: [address]
      })
      const myNfts = []
      for (let i = 0; i < tokenIds.length; i++) {
        const nftData = await fetch('https://waifux-be.lilhuy-server.uk/api/nft/' + Number(tokenIds[i]))
        if (!nftData.ok) throw new Error('Failed to fetch nft')
        const nftJson = await nftData.json()
        myNfts.push(nftJson)
      }
      return myNfts
    }
  })
  console.log(myNfts)
  return (
    <div>
      <h4>Your NFT</h4>
      <div style={{padding: 20}}>
        <Row gutter={12}>
          {myNfts.map((nft: any) => (
            <Col span={4} key={nft?.id}>
              <Card
                hoverable
                cover={
                  <div style={{
                    height: 300,
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>

                    <Image
                      alt="waifu"
                      src={nft?.image}
                      style={{
                        width: '100%',
                      }}
                    />
                  </div>
                }
                actions={[
                  <Button key="Buy">List now</Button>,
                ]}
              >
                <Card.Meta title={`Waifu #${nft?.tokenId}`}/>
              </Card>
            </Col>
          ))
          }
        </Row>
      </div>
    </div>
  )
}
export default ProfilePage;