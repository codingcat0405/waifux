import {Button, Card, Col, Image, Row} from "antd";

const MarketPlaceTab = () => {
  return (
    <div style={{padding: 20}}>
      <Row gutter={12}>
        <Col span={4}>
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
                  src="https://s3.lilhuy-services.uk/waifux/nft/1.jpg"
                  style={{
                    width: '100%',
                  }}
                />
              </div>
            }
            actions={[
              <Button key="Buy">Buy now</Button>,
            ]}
          >
            <Card.Meta title="Waifu #1" description="0.12BNB"/>
          </Card>
        </Col>


      </Row>
    </div>
  )
}
export default MarketPlaceTab;