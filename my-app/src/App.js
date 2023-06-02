import React, {Component} from 'react';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  // Switch 
  Routes,
} from "react-router-dom";
import InventoryList from './InventoryList';
import InventoryEdit from './InventoryEdit';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/inventories" element={<InventoryList />} />
          <Route exact path="/inventories/:id" element={<InventoryEdit />} />
        </Routes>
        {/* <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/inventories" exact={true} component={InventoryList} />
          <Route path="/inventories/:id" component={InventoryEdit} />
        </Switch> */}
      </Router>
    );
  }
}

export default App;