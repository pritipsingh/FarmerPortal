import React, { useState } from 'react'
import projImg1 from "../assets/img/project-img1.png";
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';
import SellCropsCard from './SellCropsCard';
import { CropContext } from '../context';
import wheat from '../assets/img/wheat.jpg'
import dal from '../assets/img/dal.jpg'
const SellCrops = () => {

    const projects = [
        {
          index:0,
          owner: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
          title: "Paddy",
          description: "Grown in Bihar",
          imgUrl: wheat,
          msp: "10",
          price: "15",
        },
        {
          index:1,
          owner: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
          title: "Dal",
          description: "Grown in Punjab",
          imgUrl:dal ,
          msp: "13",
          price: "10",
        },
        {
          index:2,
          owner: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
          title: "Wheat",
          description: "Grown in Bihar",
          imgUrl: wheat ,
          msp: "10",
          price: "10",
    
        },
        {
          index:3,
          owner: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
          title: "Rice",
          description: "Grown in Haryana",
          imgUrl: dal ,
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