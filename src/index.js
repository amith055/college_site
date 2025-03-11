import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/login";
import Home from "./views/home";
import Admission from "./views/admissions";
import Placements from "./views/placements";
import Hostel from "./views/hostel";
import Library from "./views/library";
import Faculty from "./views/faculty";
import Events from "./views/events";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/plogin" element={<Login type="Principle" />} />
        <Route path="/flogin" element={<Login type="Faculty" />} />
        <Route path="/hlogin" element={<Login type="HoD" />} />
        <Route path="/slogin" element={<Login type="Staff" />} />
        <Route path="/hostel"element={<Hostel />} />
        <Route path="/library" element={<Library />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

