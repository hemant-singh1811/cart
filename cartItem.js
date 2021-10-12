import React from "react";

const CartItem = (props) => { 
  const { price, title, qty, img ,id} = props.product 
    
  return (
    <div style={style.div} className="cart-item" >
      <div style={style.div} className="left-block">
        <img style={style.img} alt="" src={img} />
      </div>

      <div className="right-block">
        <div>{title}</div>
        <div>{price}</div>
        <div>{qty}</div>
        <div className="cart-item-actions">

          <img
            className="cart-item-action"
            style={style.Image}
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            onClick={() => props.onIncrease(props.product)}
          />

          <img
            className="cart-item-action"
            alt=""
            style={style.Image}
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            onClick={() => props.onDecrease(props.product)}
          />
          <img
            className="cart-item-action"
            alt=""
            style={style.Image}
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            onClick={() => props.onDelete(id)}
          />
        </div>
      </div>
    </div>
  )

}


const style = {


  div: {
    width: 'fit-content',
    height: 'fit-content',

  },
  Image: {
    width: 55,
    height: 54,
    borderRadius: 4
  },
  img: {
    padding: '10px 10px 10px 10px',
    width: 110,
    height: 110,

  }
}

export default CartItem;