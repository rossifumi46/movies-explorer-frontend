import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router';

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
import api from '../../utils/MainApi';
import ProtectedRoute from '../../utils/ProtectedRoute';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PagePreloader from '../PagePreloader/PagePreloader';
import Preloader from '../Preloader/Preloader';
import ErrorInfo from '../ErrorInfo/ErrorInfo';

const SavedMoviesPage = ({loggedIn}) => (
  <>
    <Header Login={loggedIn}/>
    <SavedMovies />
    <Footer/>
  </>
)

const ProfilePage = ({ loggedIn, onSignout }) => (
  <>
    <Header Login={loggedIn}/>
    <Profile onSignout={onSignout} />
  </>
)

const MoviesPage = ({ loggedIn }) => (
  <>
    <Header Login={loggedIn}/>
    <Movies />
    <Footer/>
  </>
)

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.setToken(token);
      setLoading(true);
      api.getProfile()
        .then((res) => {
          setCurrentUser(res.user);
          setLoading(false);
        })
        .catch(err => {
          setError(true);
        })
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleSignup = (body) => {
    setLoading(true);
    api.signup(body)
      .then(() => {
        setLoading(false)
        history.push('/login');
      })
      .catch(err => {
        setError(true);
        console.log(err);
      })
  }

  const handleLogin = (body) => {
    setLoading(true);
    api.login(body)
      .then((res) => {
        setLoading(false)
        setLoggedIn(true);
        localStorage.setItem('token', res.token);
        history.push('/movies');
      })
      .catch(err => {
        setError(true);
        console.log(err);
      })
  }

  const history = useHistory();

  const handleSignout = () => {
    localStorage.removeItem('token');
    setCurrentUser({});
    setLoggedIn(false);
    history.push('/');
  }

  const handleClose = () => {
    setLoading(false);
    setError(false);
  }

  return loggedIn !== null && (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="App">
        {loading ? (
          <PagePreloader show={loading}>
            {!error ? (
              <Preloader />
            ) : (
              <ErrorInfo onClose={handleClose} />
            )}
          </PagePreloader>
        ) : (
          <Switch>
            <Route path="/signup">
              {!loggedIn ? <Register onSignup={handleSignup} /> : <Redirect to="/movies" />}
            </Route>
            <Route path="/login">
              {!loggedIn ? <Login onLogin={handleLogin} /> : <Redirect to="/movies" />}
            </Route>
            <Route path="/" exact>
              <Header Login={loggedIn}/>
              <Promo/>
              <AboutProject/>
              <Techs/>
              <AboutMe/>
              <Footer/>
            </Route>
            <ProtectedRoute
              path="/saved"
              component={SavedMoviesPage}
              loggedIn={loggedIn}
            />
            <ProtectedRoute
              path="/movies"
              component={MoviesPage}
              loggedIn={loggedIn}
            />
            <ProtectedRoute
              path="/profile"
              component={ProfilePage}
              loggedIn={loggedIn}
              onSignout={handleSignout}
            />
            <Route>
              <NotFound />
            </Route>
          </Switch>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
