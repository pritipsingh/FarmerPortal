import React from 'react'
import projImg1 from "../assets/img/project-img1.png";
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';
import SellCropsCard from './SellCropsCard';

const SellCrops = () => {
  const projects = [
    {
      index:0,
      owner: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
      title: "Sell your Crops",
      description: "We make sure you get your MSP",
      imgUrl: projImg1,
      msp: "10",
      price: "10",
    },
    {
      index:1,
      owner: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
      title: "Claim your insurance",
      description: "Claim your insurance",
      imgUrl: projImg1 ,
      msp: "10",
      price: "10",
    },
    {
      index:2,
      owner: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
      title: "Blogs & News",
      description: "Read About latest news and blogs about Farming",
      imgUrl: projImg1 ,
      msp: "10",
      price: "10",

    },
    {
      index:3,
      owner: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
      title: "Supply And Chain",
      description: "Coming soon",
      imgUrl: projImg1 ,
      msp: "10",
      price: "10",
    },
    {
      index:4,
      owner: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
      title: "Coming soon",
      description: "Coming soon",
      imgUrl:projImg1 ,
      msp: "10",
      price: "10",
    },
    
  ];
  const handleClick = () => { 
    console.log("clicked")
  }
  // console.log(projects)
  return (
    <div className='App1' >

{/* {
                        projects.map((project, index) => {
                          return (
                            <SellCropsCard 
                              key={index}
                              {...project}
                             
                              />
                                                  
                        })
                      } */}
                      {projects.map((something) => (
                        <div className='productList'>
                        <div  className='productCard' onClick={handleClick}>
                            <img src={something.imgUrl} alt='product-img' className='productImage'></img>
                    
                            <FaShoppingCart className={"productCard__cart"} />
                            <FaRegBookmark className={"productCard__wishlist"} />
                            <FaFireAlt className={"productCard__fastSelling"} />
                    
                            <div className='productCard__content'>
                                <h3 className='productName'>{something.title}</h3>
                                <div className='displayStack__1'>
                                    
                                    <div className='productSales'>{something.msp} MSP</div>
                                </div>
                                <div className='displayStack__2'>
                                    {/* <div className='productRating'>
                                        {[...Array(props.rating)].map((index) => (
                                            <FaStar id={index + 1 } key={index} />
                                        ))}
                                    </div> */}
                                    <div className='productTime'>{something.description}</div>
                                </div>
                                <div className='productTime'>{something.owner}</div>
                                <div>
                                <div className='productPrice'>${something.price}</div>
                                <button style={{ border: '2px solid black' , padding: '2px 3px', borderRadius: '10px'}}>Buy Now</button>
                            </div></div>
                        </div>
                    </div>
                      ))}

</div>
  )
}

export default SellCrops