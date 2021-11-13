import React from 'react';
import Form from './Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Temperature from './Temperature';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={Form}/>
            <Route exact path="/Temperature" component={Temperature}/>
        </Switch>
      </Router>,
    </div>
  );
}

export default App;
