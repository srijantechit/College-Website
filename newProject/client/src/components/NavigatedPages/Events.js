
// import '../../App.css';
// import { useState, useEffect } from 'react';
// import { FaLink } from 'react-icons/fa';

// // Separate arrays for different types of events
// const featuredEvents=[
//   { 
//     imageUrl:'images/Events/featuredEvents/republicDay.jpg',
//   },
//   { 
//     imageUrl:'images/Events/featuredEvents/republicDay1.jpg',
//   },
//   { 
//     imageUrl:'images/Events/featuredEvents/blooddonation.jpeg',
//   },
//   { 
//     imageUrl:'images/Events/featuredEvents/blooddonation1.jpeg',
//   },
//   { 
//     imageUrl:'images/Events/featuredEvents/blooddonation2.jpeg',
//   },
//   { 
//     imageUrl:'images/Events/featuredEvents/savitriBaiPhule.jpg',
//   },
//   { 
//     imageUrl:'images/Events/featuredEvents/savitriBaiPhule1.jpg',
//   },
//   { 
//     imageUrl:'images/Events/featuredEvents/savitriBaiPhule2.jpg',
//   },
//   { 
//     imageUrl:'images/Events/featuredEvents/shivjayanti.jpg',
//   },
//   { 
//     imageUrl:'images/Events/featuredEvents/shivjayanti2.jpg',
//   },
// ]

// const ongoingEvents = [
    
//   {
//     title: "NSS Camp",
//     date: "24 July 2024",
//     description: "Join us for an insightful workshop on sustainable farming practices. This event will cover a range of topics including soil health, crop rotation, organic fertilizers, and water conservation techniques. Attendees will gain practical knowledge from experts in the field and learn how to implement sustainable practices in their own farming operations.",
//     imageUrl: "images/Events/NSS.png"
//   },
//   {
//     title: "Tree Plantation",
//     date: "25 July 2024",
//     description: "Join us for an insightful workshop on sustainable farming practices. This event will cover a range of topics including soil health, crop rotation, organic fertilizers, and water conservation techniques. Attendees will gain practical knowledge from experts in the field and learn how to implement sustainable practices in their own farming operations.",
//     imageUrl: "images/Events/treePlantation.jpg"
//   },
//   // Add more ongoing event objects here as needed
// ];

// const upcomingEvents = [
//   { month: 'January', events: [{ img: 'path_to_image', title: 'Event 1', date: '2024-01-01', description: 'Event 1 description', link: 'https://example.com/event1' }] },
//   { month: 'February', events: [{ img: 'path_to_image', title: 'Event 2', date: '2024-02-01', description: 'Event 2 description', link: 'https://example.com/event2' }] },
//   { month: 'March', events: [{ img: 'path_to_image', title: 'Event 3', date: '2024-03-01', description: 'Event 3 description', link: 'https://example.com/event3' }] },
//   { month: 'April', events: [{ img: 'path_to_image', title: 'Event 4', date: '2024-04-01', description: 'Event 4 description', link: 'https://example.com/event4' }] },
//   { month: 'May', events: [{ img: 'path_to_image', title: 'Event 5', date: '2024-05-01', description: 'Event 5 description', link: 'https://example.com/event5' }] },
//   { month: 'June', events: [{ img: 'path_to_image', title: 'Event 6', date: '2024-06-01', description: 'Event 6 description', link: 'https://example.com/event6' }] },
//   { month: 'July', events: [
//       { img: 'images/Events/tugOfWar.jpg', title: 'Monsoon Tug of War', date: '2024-07-28', description: 'Join us for an exciting Tug of War competition at our college! Teams will test their strength, strategy, and teamwork as they battle to pull their opponents across the line. It is a thrilling event that promises intense action and great fun. Gather your friends, form your teams, and get ready to show your might. Lets see which team will emerge victorious!', link: 'https://example.com/event7' },
//       ]},
//   { month: 'August', events: [{ img: 'images/Events/independenceDay.jpg', title: 'Independence Day', date: '2024-08-15', description: `Come and join us in celebrating Independence Day at our college! This special event will feature a variety of activities, including a flag hoisting ceremony, cultural performances, and patriotic speeches. It's a day to honor our nation's freedom and reflect on our shared history and values. Let's come together to celebrate the spirit of independence and unity. Don't miss this memorable occasion!`, link: 'https://example.com/event7' },{ img: 'images/Events/rakshaBandhan.jpg', title: 'Raksha Bandhan', date: '2024-08-19', description: 'Raksha Bandhan, is a festival celebrating the bond between brothers and sisters. During the festival, sisters tie a rakhi around their brothers, symbolizing love and protection, while brothers give gifts and promise to protect their sisters in return. ', link: 'https://example.com/event8' }, ]},
//   { month: 'September', events: [{ img: 'images/Events/ganeshJayanti.jpg', title: 'Ganesh Jayanti', date: '2024-09-07', description: 'Ganesh Jayanti, is the celebration of the birth of Lord Ganesha. The festival involves various cultural performances dedicated to Lord Ganesha. Join us for the event!!!', link: 'https://example.com/event9' }] },
//   { month: 'October', events: [{ img: 'path_to_image', title: 'Event 10', date: '2024-10-01', description: 'Event 10 description', link: 'https://example.com/event10' },{ img: 'path_to_image', title: 'Event 10', date: '2024-10-01', description: 'Event 10 description', link: 'https://example.com/event10' }] },
//   { month: 'November', events: [
//       { img: 'path_to_image', title: 'Event 11', date: '2024-11-01', description: 'Event 11 description', link: 'https://example.com/event11' },
//       { img: 'path_to_image', title: 'Event 11', date: '2024-11-01', description: 'Event 11 description', link: 'https://example.com/event11' }
//   ]},
//   { month: 'December', events: [{ img: 'path_to_image', title: 'Event 12', date: '2024-12-01', description: 'Event 12 description', link: 'https://example.com/event12' },{ img: 'path_to_image', title: 'Event 12', date: '2024-12-01', description: 'Event 12 description', link: 'https://example.com/event12' }] }
// ];


// const pastEvents = [
//   { srNo: 1, eventName: 'Shiv Jayanti', date: '2023-02-19', description: 'Celebration of the birth anniversary of Chhatrapati Shivaji Maharaj', link: 'https://drive.google.com/drive/folders/1ql4wb6nqZ80QN9h8yr1Pua_DNrwQDNQ4' },
//   { srNo: 2, eventName: 'Republic Day', date: '2023-01-26', description: 'Past Event 2 description', link: 'https://example.com/past-event2' }
// ];

// const downloadDetails = 'You can download the images from here';

// const events = [
//   { id: 1, name: 'Featurd Events', details: featuredEvents },
//   { id: 2, name: 'Ongoing Events', details: ongoingEvents },
//   { id: 3, name: 'Upcoming Events', details: upcomingEvents },
//   { id: 4, name: 'Past Events', details: pastEvents },
//   { id: 5, name: 'Download', details: downloadDetails }
// ];

// function Events() {
//   const [selectedEvents, setSelectedEvents] = useState(null);
//   const [selectedMonth, setSelectedMonth] = useState(null);
//   const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());

//   useEffect(() => {
//     if (events.length > 0) {
//       setSelectedEvents(events[0].id); // Select the first event category initially
//     }
//   }, []);

//   const handleEventsClick = (eventsId) => {
//     setSelectedEvents(eventsId);
//     setSelectedMonth(null); // Reset selected month when switching event categories

//     if (eventsId === 2) {
//       const currentMonth = new Date().getMonth();
//       setCurrentMonthIndex(currentMonth);
//     }
//   };

//   const handleMonthClick = (monthName) => {
//     setSelectedMonth(monthName);
//   };

//   const getCurrentMonthFilteredDetails = () => {
//     return events[1].details.filter((month, index) => index >= currentMonthIndex);
//   };

//   return (
//     <div className="events-container">
//       <div className="events-list">
//         {events.map(event => (
//           <div
//             key={event.id}
//             className={`event-item ${selectedEvents === event.id ? 'selected' : ''}`}
//             onClick={() => handleEventsClick(event.id)}
//           >
//             {event.name}
//           </div>
//         ))}
//       </div>
//       <div className="events-details">
//         {selectedEvents !== null && (
//           <div className="details-box1">
//           {selectedEvents === 1 && (
//               <div className='inner-details-box pt-5'>
//                 {featuredEvents.map((detail, index) => (
//                   <div key={index} className="featured-event">
//                     {/* <div className="featured-event-image"> */}
//                       <img src={process.env.PUBLIC_URL + detail.imageUrl} alt="Event" />
//                     {/* </div>/ */}
//                     {/* <div className="event-content">
//                       <h2>{detail.title}</h2>
//                       <p>{detail.date}</p>
//                       <p>{detail.description}</p>
//                     </div> */}
//                   </div>
//                 ))}
//               </div>
//             )}
//             {selectedEvents === 2 && (
//               <div className='inner-details-box'>
//                 {ongoingEvents.map((detail, index) => (
//                   <div key={index} className="event-card-horizontal featured-event">
//                     <div className="event-image">
//                       <img src={process.env.PUBLIC_URL + detail.imageUrl} alt="Event" />
//                     </div>
//                     <div className="event-content">
//                       <h2>{detail.title}</h2>
//                       <p>{detail.date}</p>
//                       <p>{detail.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//             {selectedEvents === 3 && (
//               <div>
//                 <h2 className='event-main-title'>Upcoming Events</h2>
//                 <div className="months-list">
//                   {getCurrentMonthFilteredDetails().map(month => (
//                     <div
//                       key={month.month}
//                       className={`month-item ${selectedMonth === month.month ? 'selected' : ''}`}
//                       onClick={() => handleMonthClick(month.month)}
//                     >
//                       {month.month}
//                     </div>
//                   ))}
//                 </div>
//                 {selectedMonth && (
//                   <div className="event-cards ">
//                     {upcomingEvents
//                       .find(month => month.month === selectedMonth)
//                       .events.map(event => (
//                         <div className=' upcomming-event-cards element-style'>
//                             <img src={process.env.PUBLIC_URL + event.img} alt='upcoming-events' className='upcomming-event-img'></img>
//                             <div key={event.title} className="event-card">
//                               <h4>{event.title}</h4>
//                               <p>Date: {event.date}</p>
//                               <p>{event.description}</p>
//                               {/* <a href={event.link} target="_blank" rel="noopener noreferrer">View More</a> */}
//                             </div>
//                         </div>
                        
//                       ))}
//                   </div>
//                 )}
//               </div>
//             )}
//             {selectedEvents === 4 && (
//               <div>
//                 <h2 className='event-main-title'>Past Events</h2>
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>Sr No</th>
//                       <th>Event Name</th>
//                       <th>Date of Event</th>
//                       <th>Description</th>
//                       <th>View More</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {pastEvents.map(event => (
//                       <tr key={event.srNo}>
//                         <td>{event.srNo}</td>
//                         <td>{event.eventName}</td>
//                         <td>{event.date}</td>
//                         <td>{event.description}</td>
//                         <td><a href={event.link} target="_blank" rel="noopener noreferrer" className='view-more'>
//                           <FaLink className='link-icon' />View
//                         </a></td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//             {selectedEvents === 4 && (
//               <div>
//                 <h2 className='event-main-title'>Download</h2>
//                 <p>{downloadDetails}</p>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Events;




import '../../App.css';
import { useState, useEffect } from 'react';
import { FaLink } from 'react-icons/fa';

const featuredEvents=[
  { 
    imageUrl:'images/Events/featuredEvents/republicDay.jpg',
  },
  { 
    imageUrl:'images/Events/featuredEvents/republicDay1.jpg',
  },
  { 
    imageUrl:'images/Events/featuredEvents/blooddonation.jpeg',
  },
  { 
    imageUrl:'images/Events/featuredEvents/blooddonation1.jpeg',
  },
  { 
    imageUrl:'images/Events/featuredEvents/blooddonation2.jpeg',
  },
  { 
    imageUrl:'images/Events/featuredEvents/savitriBaiPhule.jpg',
  },
  { 
    imageUrl:'images/Events/featuredEvents/savitriBaiPhule1.jpg',
  },
  { 
    imageUrl:'images/Events/featuredEvents/savitriBaiPhule2.jpg',
  },
  { 
    imageUrl:'images/Events/featuredEvents/shivjayanti.jpg',
  },
  { 
    imageUrl:'images/Events/featuredEvents/shivjayanti2.jpg',
  },
]
const ongoingEvents = [
  {
    title: "NSS Camp",
    date: "24 July 2024",
    description: "Join us for an insightful workshop on sustainable farming practices. This event will cover a range of topics including soil health, crop rotation, organic fertilizers, and water conservation techniques. Attendees will gain practical knowledge from experts in the field and learn how to implement sustainable practices in their own farming operations.",
    imageUrl: "images/Events/NSS.png"
  },
  {
    title: "Tree Plantation",
    date: "25 July 2024",
    description: "Join us for an insightful workshop on sustainable farming practices. This event will cover a range of topics including soil health, crop rotation, organic fertilizers, and water conservation techniques. Attendees will gain practical knowledge from experts in the field and learn how to implement sustainable practices in their own farming operations.",
    imageUrl: "images/Events/treePlantation.jpg"
  },
  // Add more ongoing event objects here as needed
];

const upcomingEvents = [
  { month: 'January', events: [{ img: 'path_to_image', title: 'Event 1', date: '2024-01-01', description: 'Event 1 description', link: 'https://example.com/event1' }] },
  { month: 'February', events: [{ img: 'path_to_image', title: 'Event 2', date: '2024-02-01', description: 'Event 2 description', link: 'https://example.com/event2' }] },
  { month: 'March', events: [{ img: 'path_to_image', title: 'Event 3', date: '2024-03-01', description: 'Event 3 description', link: 'https://example.com/event3' }] },
  { month: 'April', events: [{ img: 'path_to_image', title: 'Event 4', date: '2024-04-01', description: 'Event 4 description', link: 'https://example.com/event4' }] },
  { month: 'May', events: [{ img: 'path_to_image', title: 'Event 5', date: '2024-05-01', description: 'Event 5 description', link: 'https://example.com/event5' }] },
  { month: 'June', events: [{ img: 'path_to_image', title: 'Event 6', date: '2024-06-01', description: 'Event 6 description', link: 'https://example.com/event6' }] },
  { month: 'July', events: [
      { img: 'images/Events/tugOfWar.jpg', title: 'Monsoon Tug of War', date: '2024-07-28', description: 'Join us for an exciting Tug of War competition at our college! Teams will test their strength, strategy, and teamwork as they battle to pull their opponents across the line. It is a thrilling event that promises intense action and great fun. Gather your friends, form your teams, and get ready to show your might. Lets see which team will emerge victorious!', link: 'https://example.com/event7' },
      ]},
  { month: 'August', events: [{ img: 'images/Events/independenceDay.jpg', title: 'Independence Day', date: '2024-08-15', description: `Come and join us in celebrating Independence Day at our college! This special event will feature a variety of activities, including a flag hoisting ceremony, cultural performances, and patriotic speeches. It's a day to honor our nation's freedom and reflect on our shared history and values. Let's come together to celebrate the spirit of independence and unity. Don't miss this memorable occasion!`, link: 'https://example.com/event7' },{ img: 'images/Events/rakshaBandhan.jpg', title: 'Raksha Bandhan', date: '2024-08-19', description: 'Raksha Bandhan, is a festival celebrating the bond between brothers and sisters. During the festival, sisters tie a rakhi around their brothers, symbolizing love and protection, while brothers give gifts and promise to protect their sisters in return. ', link: 'https://example.com/event8' }, ]},
  { month: 'September', events: [{ img: 'images/Events/ganeshJayanti.jpg', title: 'Ganesh Jayanti', date: '2024-09-07', description: 'Ganesh Jayanti, is the celebration of the birth of Lord Ganesha. The festival involves various cultural performances dedicated to Lord Ganesha. Join us for the event!!!', link: 'https://example.com/event9' }] },
  { month: 'October', events: [{ img: 'path_to_image', title: 'Event 10', date: '2024-10-01', description: 'Event 10 description', link: 'https://example.com/event10' },{ img: 'path_to_image', title: 'Event 10', date: '2024-10-01', description: 'Event 10 description', link: 'https://example.com/event10' }] },
  { month: 'November', events: [
      { img: 'path_to_image', title: 'Event 11', date: '2024-11-01', description: 'Event 11 description', link: 'https://example.com/event11' },
      { img: 'path_to_image', title: 'Event 11', date: '2024-11-01', description: 'Event 11 description', link: 'https://example.com/event11' }
  ]},
  { month: 'December', events: [{ img: 'path_to_image', title: 'Event 12', date: '2024-12-01', description: 'Event 12 description', link: 'https://example.com/event12' },{ img: 'path_to_image', title: 'Event 12', date: '2024-12-01', description: 'Event 12 description', link: 'https://example.com/event12' }] }
];


const pastEvents = [
  { srNo: 1, eventName: 'Shiv Jayanti', date: '2023-02-19', description: 'Celebration of the birth anniversary of Chhatrapati Shivaji Maharaj', link: 'https://drive.google.com/drive/folders/1ql4wb6nqZ80QN9h8yr1Pua_DNrwQDNQ4' },
  { srNo: 2, eventName: 'Republic Day', date: '2023-01-26', description: 'Past Event 2 description', link: 'https://example.com/past-event2' }
];

const downloadDetails = 'You can download the images from here';

const events = [
  { id: 1, name: 'Featured Events', details: featuredEvents },
  { id: 2, name: 'Ongoing Events', details: ongoingEvents },
  { id: 3, name: 'Upcoming Events', details: upcomingEvents },
  { id: 4, name: 'Past Events', details: pastEvents },
  { id: 5, name: 'Download', details: downloadDetails }
];

function Events() {
  const [selectedEvents, setSelectedEvents] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());

  useEffect(() => {
    if (events.length > 0) {
      setSelectedEvents(events[0].id); // Select the first event category initially
    }
  }, []);

  const handleEventsClick = (eventsId) => {
    setSelectedEvents(eventsId);
    setSelectedMonth(null); // Reset selected month when switching event categories

    if (eventsId === 3) {
      const currentMonth = new Date().getMonth();
      setCurrentMonthIndex(currentMonth);
    }
  };

  const handleMonthClick = (monthName) => {
    setSelectedMonth(monthName);
  };

  const getCurrentMonthFilteredDetails = () => {
    return events[1].details.filter((month, index) => index >= currentMonthIndex);
  };

  return (
    <div className="events-container">
      <div className="events-list">
        {events.map(event => (
          <div
            key={event.id}
            className={`event-item ${selectedEvents === event.id ? 'selected' : ''}`}
            onClick={() => handleEventsClick(event.id)}
          >
            {event.name}
          </div>
        ))}
      </div>
      <div className="events-details">
        {selectedEvents !== null && (
          <div className="details-box1">
              {selectedEvents === 1 && (
              <div className='inner-details-box pt-5'>
                {featuredEvents.map((detail, index) => (
                  <div key={index} className="featured-event">
                    {/* <div className="featured-event-image"> */}
                      <img src={process.env.PUBLIC_URL + detail.imageUrl} alt="Event" />
                    {/* </div>/ */}
                    {/* <div className="event-content">
                      <h2>{detail.title}</h2>
                      <p>{detail.date}</p>
                      <p>{detail.description}</p>
                    </div> */}
                  </div>
                ))}
              </div>
            )}
            {selectedEvents === 2 && (
              <div className='inner-details-box'>
                {ongoingEvents.map((detail, index) => (
                  <div key={index} className="event-card-horizontal">
                    <div className="event-image">
                      <img src={process.env.PUBLIC_URL + detail.imageUrl} alt="Event" />
                    </div>
                    <div className="event-content">
                      <h2>{detail.title}</h2>
                      <p>{detail.date}</p>
                      <p>{detail.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {selectedEvents === 3 && (
              <div>
                <h2 className='event-main-title'>Upcoming Events</h2>
                <div className="months-list">
                  {getCurrentMonthFilteredDetails().map(month => (
                    <div
                      key={month.month}
                      className={`month-item ${selectedMonth === month.month ? 'selected' : ''}`}
                      onClick={() => handleMonthClick(month.month)}
                    >
                      {month.month}
                    </div>
                  ))}
                </div>
                {selectedMonth && (
                  <div className="event-cards ">
                    {upcomingEvents
                      .find(month => month.month === selectedMonth)
                      .events.map(event => (
                        <div className=' upcomming-event-cards element-style'>
                            <img src={process.env.PUBLIC_URL + event.img} alt='upcoming-events' className='upcomming-event-img'></img>
                            <div key={event.title} className="event-card">
                              <h4>{event.title}</h4>
                              <p>Date: {event.date}</p>
                              <p>{event.description}</p>
                              {/* <a href={event.link} target="_blank" rel="noopener noreferrer">View More</a> */}
                            </div>
                        </div>
                        
                      ))}
                  </div>
                )}
              </div>
            )}
            {selectedEvents === 4 && (
              <div>
                <h2 className='event-main-title'>Past Events</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Sr No</th>
                      <th>Event Name</th>
                      <th>Date of Event</th>
                      <th>Description</th>
                      <th>View More</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastEvents.map(event => (
                      <tr key={event.srNo}>
                        <td>{event.srNo}</td>
                        <td>{event.eventName}</td>
                        <td>{event.date}</td>
                        <td>{event.description}</td>
                        <td><a href={event.link} target="_blank" rel="noopener noreferrer" className='view-more'>
                          <FaLink className='link-icon' />View
                        </a></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {selectedEvents === 5 && (
              <div>
                <h2 className='event-main-title'>Download</h2>
                <p>{downloadDetails}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;
