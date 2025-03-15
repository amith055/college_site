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
import FacultyHome from "./views/administrator_pages/facultyhome";
import HODHome from  "./views/administrator_pages/hodhome";
import PrincipalHome from './views/administrator_pages/principlehome';
import AcadamicCalender from "./views/acadamiccalendar";
import Facilities from "./views/facilities";
import Alumni from "./views/alumni";
import Academics from "./views/academics";
import Gallery from "./views/gallery";
import Notifications from "./views/notifications";
import About from "./views/aboutus";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        //Routes for the main website pages
        <Route path="/" element={<Home />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/hostel"element={<Hostel />} />
        <Route path="/library" element={<Library />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/events" element={<Events />} />
        <Route path="/acadamiccalender" element={<AcadamicCalender />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/about" element={<About />} />

        //Routes for the login pages for different roles
        <Route path="/plogin" element={<Login type="Principle" />} />
        <Route path="/flogin" element={<Login type="Faculty" />} />
        <Route path="/hlogin" element={<Login type="HoD" />} />
        <Route path="/slogin" element={<Login type="Staff" />} />
        

        //Routes to manage the flow of different roles
        <Route path="/facultyhome" element={<FacultyHome />} />
        <Route path="/hodhome" element={<HODHome />} />
        <Route path="/principalhome" element={<PrincipalHome />} />
        <Route path="/logout" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

