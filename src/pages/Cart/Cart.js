import React, { Component } from "react";
import { List, Button } from "antd";
import { Layout, CartItem } from "../../components";

class Cart extends Component {
  onNextButtonPress = () => {
    this.props.history.push("/address");
  };

  renderFooter() {
    const { clearCart } = this.props;

    return [
      <Button key="btn-clear" onClick={clearCart}>
        Clear cart
      </Button>,
      <Button key="btn-order" type="primary" onClick={this.onNextButtonPress}>
        Next
      </Button>
    ];
  }

  render() {
    const { cartSummary, cart, changeQuantity, removeFromCart } = this.props;

    return (
      <Layout cartSummary={cartSummary}>
        <List
          data-test-id="cart-items-list"
          className="demo-loadmore-list"
          data-test-id="card-list"
          itemLayout="horizontal"
          dataSource={cart}
          renderItem={item => (
            <CartItem
              product={item.product}
              quantity={item.quantity}
              onChangeQuantity={changeQuantity}
              onRemoveFromCart={removeFromCart}
            />
          )}
        />
        <div
          style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px"
          }}
          data-test-id="menu-cart-list"
        >
          {cart.length > 0 && this.renderFooter()}
        </div>
      </Layout>
    );
  }
}

export default Cart;
