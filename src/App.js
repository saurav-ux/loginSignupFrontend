import "./App.css";
import Register from "./Components/Register";
import Login from "./Components/Login";
import TableDetails from "./Components/TableDetails";
import Navigatio from "./Components/Navigatio";
import { useEffect } from "react";
import {
  BrowserRouter as Router7,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const token = localStorage.getItem('token');
  useEffect(()=>{

  },[token])
  return (
    <div className="App">
      <Router7>
        <Routes>
          <Route
            path="/register"
            element={
              <>
              <Navigatio/>
                <Register />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
               <Navigatio/>
                <Login />
              </>
            }
          />
           <Route
            path="/detail"
            element={
              <>
              {token===null || token === undefined  ?
              <>
              <Navigatio/>
              <Login/>
              </>
              :
          
        <>
               <Navigatio/>
                <TableDetails/>
                </>
              }
              </>
            }
          />
        </Routes>
      </Router7>
    </div>
  );
}

export default App;
