import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import ScrollToTop from "./ScrollToTop";
import SnackbarProvider from "react-simple-snackbar";

import LandingPg from "./components/landing/LandingPg";
import SearchResults from "./components/searchResults/SearchResults";
import Signup from "./components/Signup/Signup.jsx";
import Login from "./components/Login/Login.jsx";
import ProductInfo from "./components/ProductInfo/ProductInfo.jsx";
import Wishlist from "./components/Wishlist/Wishlist.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Conformation from "./components/Conformation/Conformation.jsx";
import Myaccount from "./components/Myaccount/Myaccount.jsx";
import ForgotPass from "./components/ForgotPass/ForgotPass.jsx";
import GetToken from "./components/GetToken/GetToken.jsx";
import Devs from "./components/Devs/Devs.jsx";
import "./App.scss";



const App = () => {

  return (
    <div>
      <Router history={history}>
        <ScrollToTop>
          <SnackbarProvider>
            <Switch>
              <Route path="/" exact component={LandingPg} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/login" exact component={Login} />
              <Route path="/wishlist" exact component={Wishlist} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/myaccount" exact component={Myaccount} />
              <Route path="/conformation/:id" exact component={Conformation} />
              <Route path="/getToken/:token" exact component={GetToken} />
              <Route path="/forgotPass/:token" exact component={ForgotPass} />
              <Route path="/devs" exact component={Devs} />
              {/* <Route path="/results/:id" exact component={SearchResults} /> */}
              {/* <Route path="/productInfo/:id" exact component={ProductInfo} /> */}
              <Route
                path={`/productInfo/:id`}
                render={(props) => (
                  <ProductInfo key={props.match.params.id} {...props} />
                )}
              />
              <Route
                path={`/results/:id`}
                render={(props) => (
                  <SearchResults key={props.match.params.id} {...props} />
                )}
              />
            </Switch>
          </SnackbarProvider>
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default App;
