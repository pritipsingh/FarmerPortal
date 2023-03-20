import React from 'react'
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';
const SellCropsCard = (description) => {
 
  return (
    <div className='productList'>
    <div  className='productCard'>
        {/* <img src={imgUrl} alt='product-img' className='productImage'></img>

        <FaShoppingCart className={"productCard__cart"} />
        <FaRegBookmark className={"productCard__wishlist"} />
        <FaFireAlt className={"productCard__fastSelling"} />

        <div className='productCard__content'>
            <h3 className='productName'>{title}</h3>
            <div className='displayStack__1'>
                <div className='productPrice'>${owner}</div>
                <div className='productSales'>{price} units sold</div>
            </div> */}
            <div className='displayStack__2'>
                {/* <div className='productRating'>
                    {[...Array(props.rating)].map((index) => (
                        <FaStar id={index + 1 } key={index} />
                    ))}
                </div> */}
                <div className='productTime'>{description} days left</div>
            {/* </div> */}
        </div>
    </div>
</div>
  )
}

export default SellCropsCard