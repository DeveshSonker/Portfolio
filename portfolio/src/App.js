import './App.css';
import AllRoutes from './Routes';
import {BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
      <Router>
        <AllRoutes/>
      </Router>
  );

      
}

export default App;
