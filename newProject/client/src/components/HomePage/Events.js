import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className=''>
      <h2 className='important-headings margin-top-70'>Events</h2>
      <ul className='events'>
        <li>
          <Link className='events-link activity1' to="/events/college-events">College Events</Link>
        </li>
        <li>
          <Link className='events-link activity2' to="/events/college-activities">College Activities</Link>
        </li>
      </ul>
    </div>
  );
};

export default Events;
