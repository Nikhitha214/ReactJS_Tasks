import React, { Component } from "react";

class App extends Component {
  state = {
      product: {
        name: 'Example Product',
        price: 100,
        description: 'This is an example product',
        stock: 50,
    }
  };

  // Method to update the employee details
  updateDetails = () => {
    this.setState({
      product: {
        price: 50000,
      description : "This the excellent product" // Updated salary
      }
    });
  };

  render() {
    const { name,price ,description,stock } = this.state.product;

    return (
      <div>
        <h2>First Task</h2>
        Product Details are:
        <div>
          <p>Product price: {price}</p>
          <p>Product description: {description}</p>

        </div>
        <button onClick={this.updateDetails}>Update Details</button>
      </div>
    );
  }
}

export default App;
