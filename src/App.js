import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn';
import Error from './pages/Error'
import Form from './pages/Form';
import OTPprompt from './components/OTPprompt';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
        <div className="container">
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/About" component={About} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/Form" component={Form} />
            <Route path="/OTPprompt" component={OTPprompt} />
            <Route component={Error} />
          </Switch>
        </div>
      
    </Router>
    
  );
}

export default App;
