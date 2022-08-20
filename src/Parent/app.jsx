import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import "./app.css";
import Nav from "./../components/navigation/nav";
import HomeComp from "./../components/main/home";
import About from "./../components/about/about";
import Footer from "./../components/footer/foot";

class App extends Component {
  state = {
    products: [],
  };
  async componentDidMount() {
    let { data } = await axios.get("http://localhost:3000/products");
    this.setState({ products: data });
  }
  inCartAdd = (i) => {
    let products = [...this.state.products];
    let index = products.indexOf(i);
    products[index] = { ...products[index] };
    products[index].inCart = true;
    products[index].count = 1;
    this.setState({ products });
  };
  inCartDelete = (i) => {
    let products = [...this.state.products];
    let index = products.indexOf(i);
    products[index] = { ...products[index] };
    products[index].inCart = false;
    products[index].count = 0;
    this.setState({ products });
  };
  render() {
    return (
      <React.Fragment>
        <Nav
          products={this.state.products.filter((p) => p.inCart && p.count > 0)}
          onDelete={this.inCartDelete}
        />
        <div className="main_entire">
          <Switch>
            <Route
              path="/home"
              render={(props) => (
                <HomeComp
                  products={this.state.products.filter((p) => p.featured)}
                  {...props}
                  onCartChange={this.inCartAdd}
                />
              )}
            />
            <Route path="/about" component={About} />
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
