import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
   <>
     <Router>
   <div>
    <Routes>

    <Route exact path="/" element={<Home></Home>}/>
      <Route exact path="/createuser" element={<Signup></Signup>}/>
      <Route exact path="/login" element={<Login></Login>}/>

    </Routes>
   </div>
   </Router>
   </>
  );
}

export default App;
