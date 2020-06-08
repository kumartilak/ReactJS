import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom'
import ReaderConfiguration from "./ReaderConfiguration";
import ReaderData from "./ReaderData";

function ReaderList (){
 return (
     <Router>
         <div>
             <a href="/reader_configuration">Go to Reader Configuration</a>
        </div>
         <div>
            <a href="/reader_data">Go to Reader Data</a>
        </div>
        <Route exact path='/reader_configuration' component={ReaderConfiguration}></Route>
        <Route exact path='/reader_data' component={ReaderData}></Route>
     </Router>
 );
}

export default ReaderList;