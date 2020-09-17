import React from "react";

import { Dispatch, AnyAction, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { commonActions } from "./store/actions/common.actions";
import { IAppState } from "./store/reducers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Checkout from "./pages/checkout/checkout";
import Item from "./pages/item/item";
import { LastLocationProvider } from 'react-router-last-location';
import ScrollToTop from "./components/tools/scrollToTop";

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
    return (
      <div className="App">
        <Router>
          <ScrollToTop />
          <LastLocationProvider>
            <Navbar normalTitle="The Unbranded Shop" reducedTitle="UNBRDSHP" />
            <div >
              <Route
                path={["/"]}
                exact
                component={Home}
              />
              <Route
                path={["/item:id"]}
                exact
                component={Item}
              />
              <Route
                path={["/checkout"]}
                exact
                component={Checkout}
              />
            </div>
            <Footer />
          </LastLocationProvider>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



