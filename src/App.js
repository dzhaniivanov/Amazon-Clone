import './App.css';
import Header from './Header';
import Login from './Login';
import Home from './Home';
import Checkout from './Checkout';
import Footer from './Footer';
import Navlinks from './Navlinks';
import { auth } from './firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51IXlvoIssDitHYfkTEhrCtcD79TjVGbiakvJEieVKotu48nPrXGSABsVIvjiPZfgyvAhXYWLUjPiY2Ed7tg1Bhuf00g7Ok18hN');

function App() {

  const [{ loggedinuser }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch({
          type: 'SET_LOGIN',
          user: userAuth
        })
      } else {
        dispatch({
          type: 'SET_LOGIN',
          user: null
        })
      }
    })
    return () => {
      unsubscribe();
    }
  }, [])


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Navlinks />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
