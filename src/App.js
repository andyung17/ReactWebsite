import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>  {/* style={{backgroundColor:'#fafafa'}} */}
        <Home />
        {/* <Jobs/> */}
      </div>
    </Router>
  );
}

export default App;
