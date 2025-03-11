// import React from 'react';
// import './styles/header.css'

// function toggleDropdown() {
//   document.getElementById("dropdownMenu").classList.toggle("show");
// }

// window.onclick = function(event) {
//   if (!event.target.matches('button')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       for (var i = 0; i < dropdowns.length; i++) {
//           var openDropdown = dropdowns[i];
//           if (openDropdown.classList.contains('show')) {
//               openDropdown.classList.remove('show');
//           }
//       }
//   }
// }


// function Home() {
//   return (
//     <div class="header">
//         <div class="top">
//             <div class="logo">
//                 <img src="tcelogo.gif" alt="" /> 
//             </div>
//             <div class="container">
//                 <nav>
//                     <ul>
//                         <li><a href="#">Home</a></li>
//                         <li><a href="#">Admissions</a></li>
//                         <li><a href="#">Placements</a></li>
//                         <div class="dropdown">
//                             <button onclick={toggleDropdown()}>Administration</button>
//                             <div id="dropdownMenu" class="dropdown-content">
//                                 <a href="#">Principal</a>
//                                 <a href="#">Faculty</a>
//                                 <a href="#">HoD</a>
//                                 <a href="#">Staff</a>
//                             </div>
//                         </div>
//                         <li><a href="#">More</a></li> 
//                          <li><a href="#">Hostel</a></li>
//                          <li><a href="#">Library</a></li>
//                          <li><a href="#">Faculty</a></li>
//                          <li><a href="#">Events</a></li>
//                          <li><a href="#">Gallery</a></li>
//                          <li><a href="#">Academic Calendar</a></li>
//                          <li><a href="#">Placementas</a></li>
//                          <li><a href="#">Facilities</a></li>
//                          <li><a href="#">Notifications</a></li>
//                          <li><a href="#">Alumni</a></li>
//                          <li><a href="#">Acadamics</a></li>
//                          <li><a href="#">About us</a></li>
//                     </ul>
//                 </nav> 
//     </div>
//     <section class="hero">
//         <div class="container">
//             <h2>Your Future Starts Here</h2>
//             <p>Join the community of scholars at XYZ College. Explore various courses, research opportunities, and a vibrant campus life.</p>
//             <a href="#" class="cta-button">Learn More</a>
//         </div>
//     </section>
//     <footer>
//         <div class="container">
//             <p>&copy; 2025 XYZ College | All Rights Reserved</p>
//         </div>
//     </footer>
//   </div>
//   </div>
// )};


// export default Home;

import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import './styles/home.css';


function Home() {
  return (
    <div>
      <Header />
      <section className="hero">
                <div className="container">
                    <h2>Your Future Starts Here</h2>
                    <p>Join the community of scholars at XYZ College. Explore various courses, research opportunities, and a vibrant campus life.</p>
                    <a href="#" className="cta-button">Learn More</a>
                </div>
      </section>
      <Footer />
    </div>
  )
};


export default Home;
