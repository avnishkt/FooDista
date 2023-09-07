import './App.css';
import { CartProvider } from './components/ContestReducer';
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
   <CartProvider>
     <Router>
   <div>
    <Routes>

    <Route exact path="/" element={<Home></Home>}/>
      <Route exact path="/createuser" element={<Signup></Signup>}/>
      <Route exact path="/login" element={<Login></Login>}/>

    </Routes>
   </div>
   </Router>
   </CartProvider>
  );
}

export default App;
