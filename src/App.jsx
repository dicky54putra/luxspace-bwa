import 'assets/css/app.css';
import Cart from 'pages/Cart';
import Congratulation from 'pages/Congratulation';
import HomePage from 'pages/HomePage';
import NotFound from 'pages/NotFound';
import ProductDetails from 'pages/ProductDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:slug" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/congratulation" component={Congratulation} />


          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
