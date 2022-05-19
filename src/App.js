import "./App.css";
import {Routes, Route} from "react-router-dom"
import { LandingPage, Login, Signup } from "./Pages/pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<LandingPage/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
