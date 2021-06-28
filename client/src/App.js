import Home from './pages/Home/Home.jsx'
import './App.css';
import Profile from './pages/profile/Profile.jsx';
import Login from './pages/login/Login.jsx';
import Register from './components/register/Register.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <switch>
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/login'>
          <Login/>
        </Route>

        <Route path='/register'>
          <Register/>
        </Route>

        <Route path='/profile/:username'>
          <Profile/>
        </Route>

      </switch>
    </Router>
  );
}

export default App;
