import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Mission from './views/Mission';
import Dragon from './views/Dragon';
import Portfolio from './views/Portfolio';
function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">My Portfolio</Link>
          </li>
          <li>
            <Link to="/missions">Mission</Link>
          </li>
          <li>
            <Link to="/dragons">Dragons</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/">
          <Portfolio />
        </Route>
        <Route path="/missions">
          <Mission />
        </Route>
        <Route path="/dragons">
          <Dragon />
        </Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
