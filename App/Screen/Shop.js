import React, { Component } from "react";

class Book extends Component {
  state = {
    id: 1,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    price: 10.00,
  };

  addToCart = (cart) => {
    cart.items.push({
      id: this.state.id,
      title: this.state.title,
      author: this.state.author,
      price: this.state.price,
    });
  };

  render() {
    return (
      <View>
        <Text>{this.state.title}</Text>
        <Text>{this.state.author}</Text>
        <Text>{this.state.price}</Text>
        <Button title="Thêm vào giỏ hàng" onPress={() => this.addToCart(cart)} />
      </View>
    );
  }
}

class Cart extends Component {
  state = {
    items: [],
  };

  render() {
    return (
      <View>
        <Text>Giỏ hàng</Text>
        {this.state.items.map((item) => (
          <Book key={item.id} {...item} />
        ))}
      </View>
    );
  }
}

const App = () => (
  <Cart />
);

export default App;