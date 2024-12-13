import CartContext from '../../context/CartContext'

import './index.css'

const CartItemSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalPrice = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )
      return (
        <div>
          <p>
            Order Total:<span className="total-price">Rs {totalPrice}/-</span>
          </p>
          <p>
            <span>{cartList.length}</span> items in cart
          </p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartItemSummary
