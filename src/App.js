///import logo from './logo.svg';
///import logo_mitaoe from './logo-mitaoe.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Navbar_login from "./components/Navbar_login";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>

<BrowserRouter>
<Navbar/>
<Routes>
          <Route path="/signup" element={<Navbar_login />} />
          
          </Routes>
          </BrowserRouter>
    
    
    </>
  );
}

export default App;
