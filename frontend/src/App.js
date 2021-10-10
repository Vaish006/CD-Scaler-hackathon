import React from 'react';
import Auth from 'screens/Auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CompleteProfile from 'screens/CompleteProfile/CompleteProfile';
import Landing from 'screens/Landing/Landing';
import Quiz from 'screens/Quiz/Quiz';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Auth} />
        <Route path="/complete-profile" component={CompleteProfile} />
        <Route path="/home" component={Landing} />
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </Router>
  );
}

export default App;
