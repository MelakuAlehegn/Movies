import './App.css';
import Header from '../Header/Header';
import MovieCard from '../MovieCard/MovieCard';
import MovieDetail from '../MovieDetail/MovieDetail'
import Nav from '../Nav/Nav';
import Tvshow from '../Tvshow/Tvshow';
import TvDetail from '../TvDetail/TvDetail';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className='app'>
      <Nav />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <MovieCard />
          </Route>
          <Route path="/movies/:id">
            <MovieDetail />
          </Route>
          <Route exact path="/tv">
            <Tvshow />
          </Route>
          {/* <Route path="/tv/:id">
            <TvDetail />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
