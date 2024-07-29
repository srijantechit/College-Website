import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/HomePage/TopNav';
import Heading from './components/HomePage/Heading';
import HeaderNav from './components/HomePage/HeaderNav';
import ImageBackground from './components/HomePage/ImageBackground';
import AboutUs from './components/HomePage/AboutUs';
import CardSlider from './components/HomePage/CardSlider';
import Footer from './components/HomePage/Footer';
import ContactUs from './components/HomePage/ContactUs';
import Events from './components/NavigatedPages/Events';
import Activities from './components/NavigatedPages/Activities';
import Courses from './components/NavigatedPages/Courses';
import Facilities from './components/NavigatedPages/Facilities';
import Alumini from './components/NavigatedPages/Alumini';
import Blogs from './components/NavigatedPages/Blogs';
import Gallery from './components/NavigatedPages/Gallery';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
     
        <TopNav />
        <Heading />
        <HeaderNav />
        <Routes>
          <Route path='/' Component={ImageBackground}/>
          <Route path="/events" Component={Events}/>
          <Route path="/activities" Component={Activities} />
          <Route path='/facilities' Component={Facilities}/>
          <Route path="/courses" Component={Courses}/>
          <Route path="/alumini" Component={Alumini}/>
          <Route path="/blogs" Component={Blogs}/>
          <Route path="/gallery" Component={Gallery}/>
          
        </Routes>   
        {/* <AboutUs /> */}
        
        {/* <Events/> */}
        {/* Define your routes within <Routes> */}
       

        <ContactUs />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
