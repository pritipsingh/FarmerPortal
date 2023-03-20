import { useState, useEffect, createContext, useContext } from "react";
  import {ethers} from 'ethers';
import {CONTRACT_ADDRESS} from '../constants/utils'
import { abi } from "../constants/utils";


export const CropContext = createContext();

export const CropProvider = ({children}) => {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [buyer, setBuyer] = useState("");
  const [seller, setSeller] = useState("");
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [msp, setMsp] = useState();
  const [price, setPrice] = useState();
 const [img, setImg] = useState('');
 const [owner, setOwner] = useState('');
       // Calls Metamask to connect wallet on clicking Connect Wallet button

//   const createCampaign = async() => {
//     try {
//       const {ethereum} = window

//       if(ethereum) {
//         const provider = new ethers.providers.Web3Provider(ethereum);
//         const signer = provider.getSigner();
//         const BuyCrops = new ethers.Contract(
//           CONTRACT_ADDRESS,
//           abi,
//           signer
//         )
//         BuyCrops.createCampaign()
//       }
//     }catch (error) {
//       console.log(error)
//     }
  
// }


  const connectWallet = async () => {
    try {
      const { ethereum } = window

      if (!ethereum) {
        console.log('Metamask not detected')
        return
      }
      let chainId = await ethereum.request({ method: 'eth_chainId'})
      console.log('Connected to chain:' + chainId)

      const Mumbai = '0x13881' // Mumbai Testnet

      if (chainId !== Mumbai) {
        alert('You are not connected to the Mumbai Testnet!')
        return
      } 

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      console.log('Found account', accounts[0])
      setAccount(accounts[0])
    } catch (error) {
      console.log('Error connecting to metamask', error)
    }
  }  
  return (
    <CropContext.Provider value={{img, owner, setOwner, setImg, price, setPrice, msp, setMsp, description, setDescription, account, connectWallet, title, setTitle, }}>
      {children}
    </CropContext.Provider>
  )
  }

export const useStateContext = () => useContext(CropContext)
