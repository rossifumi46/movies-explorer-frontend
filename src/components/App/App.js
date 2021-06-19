import './App.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import { Route, Switch } from 'react-router';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/" exact>
          <Header Login={false}/>
          <Promo/>
          <AboutProject/>
          <Techs/>
          <AboutMe/>
          <Footer/>
        </Route>
        <Route path="/saved">
          <Header Login={true}/>
          <SavedMovies />
          <Footer/>
        </Route>
        <Route path="/movies">
          <Header Login={true}/>
          <Movies />
          <Footer/>
        </Route>
        <Route path="/profile">
          <Header Login={true}/>
          <Profile />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
