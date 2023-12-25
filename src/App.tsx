
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from './Pages/HomePage/landingPage';


function HomeScreen()
{
  return (
    <div>
     <LandingPage></LandingPage>
    </div>
  );
}

function App() {
  return (
   <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
