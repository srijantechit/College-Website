import React from 'react';
import '../../App.css';
import cultural from '../../images/cultural.jpg'
import wifi from '../../images/wifi.jpg'
import hostel from '../../images/hostel.jpg'
import laboratory from '../../images/laboratory.jpg'
import library from '../../images/library.jpg';
import eduTour from '../../images/edu-tour.jpg';
function Facilities() {
  return (
    <div className='facilities'>
{/**** Page Heading ****/}
        <div className='events-heading'>
          <div className='headingText'>F A C I L I T I E S</div>
        </div>
{/**** Educational tour ****/}
        <div className=''>
          <div className="card facilities-style card-side bg-base-100 shadow-xl">
              <figure className='facility-figure' >
                <img
                  src={eduTour}
                  alt="Movie" className='facilities-img' />
              </figure>
              <div className="facility-body card-body">
                <h2 className="facility-title card-title">EDUCATIONAL TOUR</h2>
                <p>Educational tour is nothing but the planned combination of tours, site visits with the target of global learning which can enhance the knowledge of students and can help them to see the clear picture of the theoretical things they have learnt so far.</p>
              </div>
          </div>
{/**** Library ****/}
          <div className="card facilities-style card-side bg-base-100 shadow-xl">
              <figure className='facility-figure' >
                <img
                  src={library}
                  alt="Movie" className='facilities-img' />
              </figure>   
              <div className="facility-body card-body">
                <h2 className="facility-title card-title">LIBRARY</h2>
                <p>Educational tour is nothing but the planned combination of tours, site visits with the target of global learning which can enhance the knowledge of students and can help them to see the clear picture of the theoretical things they have learnt so far.</p>
              </div>
          </div>
{/**** Laoratory ****/}
          <div className="card facilities-style card-side bg-base-100 shadow-xl">
              <figure className='facility-figure' >
                <img
                  src={laboratory}
                  alt="Movie" className='facilities-img' />
              </figure>
              <div className="facility-body card-body">
                <h2 className="facility-title card-title">LABORATORY</h2>
                <p>Educational tour is nothing but the planned combination of tours, site visits with the target of global learning which can enhance the knowledge of students and can help them to see the clear picture of the theoretical things they have learnt so far.</p>
              </div>
          </div>
{/**** Wifi Campus ****/}
          <div className="card facilities-style card-side bg-base-100 shadow-xl">
              <figure className='facility-figure' >
                <img
                  src={wifi}
                  alt="Movie" className='facilities-img' />
              </figure>
              <div className="facility-body card-body">
                <h2 className="facility-title card-title">WIFI CAMPUS</h2>
                <p>Educational tour is nothing but the planned combination of tours, site visits with the target of global learning which can enhance the knowledge of students and can help them to see the clear picture of the theoretical things they have learnt so far.</p>
              </div>
             </div>
{/**** Hostel ****/}
          <div className="card facilities-style card-side bg-base-100 shadow-xl">
              <figure className='facility-figure'>
                <img
                  src={hostel}
                  alt="Movie" className='facilities-img' />
              </figure>
              <div className="facility-body card-body">
                <h2 className="facility-title card-title">HOSTEL</h2>
                <p>Educational tour is nothing but the planned combination of tours, site visits with the target of global learning which can enhance the knowledge of students and can help them to see the clear picture of the theoretical things they have learnt so far.</p>
              </div>
          </div>
{/**** Cultural Program ****/}
          <div className="card facilities-style card-side bg-base-100 shadow-xl">           
              <figure className='facility-figure' >
                <img
                  src={cultural}
                  alt="Movie" className='facilities-img' />
              </figure>
              <div className="facility-body card-body">
                <h2 className="facility-title card-title">CULTURAL PROGRAM  </h2>
                <p>Educational tour is nothing but the planned combination of tours, site visits with the target of global learning which can enhance the knowledge of students and can help them to see the clear picture of the theoretical things they have learnt so far.</p>
              </div>
          </div>
        </div>

    </div>
  )
}

export default Facilities
