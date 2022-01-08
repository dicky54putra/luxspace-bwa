import "assets/css/app.css";
import Provider from "helpers/hooks/useGLobalContext";
import Cart from "pages/Cart";
import Congratulation from "pages/Congratulation";
import HomePage from "pages/HomePage";
import NotFound from "pages/NotFound";
import ProductDetails from "pages/ProductDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/categories/:idc" component={ProductDetails} />
          <Route
            path="/categories/:idc/product/:idp"
            component={ProductDetails}
          />
          <Route path="/cart" component={Cart} />
          <Route path="/congratulation" component={Congratulation} />

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
