import React from 'react'


const ProductItem = (props) => {
    console.log(props)
    
    
    const a = props.productInfo
  return (
    <div className="newProducts__item">
                <div className="item__image">
                    <img src={a.image} alt="p6"/>
                    <div className="item__image-child">
                        <img src={a.image} alt="p5"/>
                    </div>
                </div>
                <div className="item__content">
                    <h3>{a.name}</h3>
                    <p><strong>XL/XXL/S</strong></p>
                    <div className="item__text">
                        <p><del>{a.oldPrice}</del></p>
                        <p><strong>{a.newPrice}</strong></p>
                    </div>
                    <button>Add To Cart</button>
                </div>
            </div>
  )
}


export default ProductItem