import './App.css';
import Header from './Header';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
