import React from 'react';
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import SignUp from "./containers/SignUp/SignUp";
import SignIn from "./containers/SignIn/SignIn";
import Test from "./containers/Test/Test";
import AddForm from "./containers/AddForm/AddForm";

function App() {
  return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Test}/>
          {/*<Route path="/artist/:id" exact component={Artist}/>*/}
          <Route path="/addproduct" component={AddForm}/>
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/signin" exact component={SignIn}/>
          <Route render={() => <h1>404</h1>}/>
        </Switch>
      </div>
  );
}

export default App;
