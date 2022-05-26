import "./App.css";
import {Routes, Route} from "react-router-dom"
import { Homepage, LandingPage, Login, Signup } from "./Pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<LandingPage/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/home" element ={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
