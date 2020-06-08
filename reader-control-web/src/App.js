import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ReaderList from "./Components/ReaderList";
import ReaderConfiguration from "./Components/ReaderConfiguration";
import ReaderData from "./Components/ReaderData";
import NotFoundComponent from "./Components/NotFoundComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div>
      {/* <Header></Header> */}
      <div>
          
      </div>
      <Switch>
          <Route exact path='/' component={ReaderList}></Route>
          <Route exact path='/reader_configuration' component={ReaderConfiguration}></Route>
          <Route exact path='/reader_data' component={ReaderData}></Route>
          <Route component={NotFoundComponent}></Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;









