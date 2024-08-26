import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/HomePage/TopNav';
import Heading from './components/HomePage/Heading';
import HeaderNav from './components/HomePage/HeaderNav';
import ImageBackground from './components/HomePage/ImageBackground';
import Footer from './components/HomePage/Footer';
import FooterContactUs from './components/HomePage/FooterContactUs';
import AboutCollege from './components/NavigatedPages/AboutCollege';
import ContactUs from './components/NavigatedPages/ContactUs';
import Events from './components/NavigatedPages/Events';
import Courses from './components/NavigatedPages/Courses';
import NoticeBoard from './components/NavigatedPages/NoticeBoard';
import CampusLife from './components/NavigatedPages/CampusLife';
import Admissions from './components/NavigatedPages/Admissions';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <Heading /> <HeaderNav />   
       
        <Routes>
          <Route path="/" Component={ImageBackground} />
          <Route path="/aboutCollege" Component={AboutCollege} />
          <Route path="/admissions" Component={Admissions} />
          <Route path="/events" Component={Events} />
          <Route path="/courses" Component={Courses} />
          <Route path="/campusLife" Component={CampusLife} />
          <Route path="/noticeBoard" Component={NoticeBoard} />
          <Route path="/contactUs" Component={ContactUs}/>
          <Route path='/adminLogin' Component={Login}/>
          <Route path='/admin/dashboard' Component={Dashboard}/>
         </Routes>
        <FooterContactUs />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
