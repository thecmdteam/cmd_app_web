import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Form from './pages/Form';
import SignIn from './components/SignIn';
import OTPprompt from './components/OTPprompt';
import CreatePassword from './components/CreatePassword';
import ViewProfile from './components/ViewProfile';
import UpdateProfile from './components/UpdateProfile';
// import FormikContainer from './components/UpdateProfile';
// import ProtectectedRoutes from './components/ProtectectedRoutes'

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
            <Route path="/CreatePassword" component={CreatePassword} />
            <Route path="/ViewProfile" component={ViewProfile} />
            <Route path="/UpdateProfile" component={UpdateProfile} />
            <Route component={Error} />
          </Switch>
        </div>
      
    </Router>
    
  );
}

export default App;
