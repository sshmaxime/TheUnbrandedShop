import React from "react";

import { Dispatch, AnyAction, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { commonActions } from "./store/actions/common.actions";
import { IAppState } from "./store/reducers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Collections from "./pages/collections/collections";
import CheckoutSuccess from "./pages/checkoutDone/checkoutSuccess";
import CheckoutCancel from "./pages/checkoutDone/checkoutCancel";
import Error404 from "./pages/Error404/error404";
import Checkout from "./pages/checkout/checkout";
import Item from "./pages/item/item";
import { LastLocationProvider } from 'react-router-last-location';
import ScrollToTop from "./components/tools/scrollToTop";
import ItemWrapper from "./pages/item/itemWrapper";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
    },
    dispatch
  );

const mapStateToProps = (state: IAppState): IAppState => {
  return {
    commonState: state.commonState
  };
};

class App extends React.Component<ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>> {
  render() {
    const stripePromise = loadStripe(String(process.env.REACT_APP_STRIPE_API_DEV));
    return (
      <div className="App">
        <Router>
          <ScrollToTop />
          <LastLocationProvider>
            <Navbar normalTitle="The Unbranded Shop" reducedTitle="UNBRDSHP" />
            <Switch>
              <Route
                path={"/"}
                exact
                component={Home}
              />
              <Route
                path={["/item:id"]}
                exact
                component={ItemWrapper}
              />
              <Route
                path={["/collections"]}
                exact
                component={Collections}
              />

              <Route
                path="/checkout"
                render={({ match: { url } }) => (
                  <Elements stripe={stripePromise} options={{
                    fonts: [
                      {
                        cssSrc: 'https://fonts.googleapis.com/css?family=Source+Code+Pro'
                      }
                    ]
                  }}>
                    <Route path={`${url}/`} component={Checkout} exact />
                    <Route path={`${url}/success/:session_id`} component={CheckoutSuccess} />
                    <Route path={`${url}/cancel`} component={CheckoutCancel} />
                  </Elements>
                )}
              />

              <Route component={Error404} />
            </Switch>
            <Footer />
          </LastLocationProvider>
        </Router>
      </div >
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



