import {Button} from "antd";
import {useAccount, useReadContract} from "wagmi";
import NFT_ABI from "../../contracts/abis/nft.json";
import {NFT_ADDRESS} from "../../contracts/address.ts";
import {formatEther} from "viem";
import {readContract, waitForTransactionReceipt, writeContract} from "@wagmi/core";
import {wagmiConfig} from "../../config.ts";
import {useState} from "react";
import toast from "react-hot-toast";

const NftBoxPage = () => {
  const {
    address
  } = useAccount()
  const {data: blindBoxPrice = 0n}: any = useReadContract({
    abi: NFT_ABI,
    address: NFT_ADDRESS,
    functionName: 'getBlindBoxPrice'
  })
  const {data: myBlindBox = 0n, refetch: reFetchBlindBoxCount} = useReadContract({
    abi: NFT_ABI,
    address: NFT_ADDRESS,
    functionName: 'blindBox',
    args: [address]
  })
  const [loading, setLoading] = useState(false)
  const handleBuyBox = async () => {
    try {
      setLoading(true)
      if (!blindBoxPrice) return
      const hash = await writeContract(wagmiConfig, {
        abi: NFT_ABI,
        address: NFT_ADDRESS,
        functionName: 'buyBlindBox',
        args: [1n],
        value: blindBoxPrice as bigint
      })
      await waitForTransactionReceipt(wagmiConfig, {
        hash
      })
      await reFetchBlindBoxCount();
      toast('Successfully bought box')
    } catch (e) {
      console.log(e)
      toast.error('Failed to buy box')
    } finally {
      setLoading(false)
    }
  }

  const handleOpenBox = async () => {
    try {
      setLoading(true)
      const fee: any = await readContract(wagmiConfig, {
        abi: NFT_ABI,
        address: NFT_ADDRESS,
        functionName: 'blindBoxOpenFee',
      })
      const hash = await writeContract(wagmiConfig, {
        abi: NFT_ABI,
        address: NFT_ADDRESS,
        functionName: 'openBlindBox',
        args: [1n],
        value: fee
      })
      await waitForTransactionReceipt(wagmiConfig, {
        hash
      })
      await reFetchBlindBoxCount();
      toast('Successfully open box')
    } catch (e) {
      console.log(e)
      toast.error('Failed to open box')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <h3>Gacha your waifu</h3>
      <h4>Unonpened box: {myBlindBox?.toString()}
        <Button onClick={handleOpenBox} loading={loading} disabled={Number(myBlindBox) === 0}>Open box</Button>
      </h4>
      <div>

        <Button loading={loading} type='primary' onClick={handleBuyBox}>Buy
          box {formatEther(blindBoxPrice)} BNB</Button>
      </div>

    </div>
  )
}
export default NftBoxPage;