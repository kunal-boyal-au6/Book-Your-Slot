import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom"

import NavBar from './components/NavBar/NavBar'
import SlotBook from './containers/SlotBook/SlotBook'
import SlotDetails from './containers/SlotDetails/SlotDetails'
import Footer from './components/Footer/Footer'

class App extends Component {

  render() {

    return (
      <div >
        <NavBar />
        <Switch>
          <Route path="/" exact component={SlotBook} />
          <Route path="/slotDetails" component={SlotDetails} />
        </Switch>
        <Footer />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
