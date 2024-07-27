import React from 'react'

function NoticeBoard() {
  const data = [
    { id: 1, title: 'Admission Started! Join Us', dated: 'July 17, 2024', description: 'MCAER Admission process is started. You an check official website of MCAER', link:'https://www.mcaer.org/' },
    { id: 2, title: 'CET Updated Schedule ', dated: 'June 10, 2024', description: 'Download the updaed schedule circular of CET attached below :' },
    { id: 3, title: 'Important Instructions to the Candidates', dated: 'June 10, 2024', description: 'Must read'},
    { id: 4, title: '2023-24 Cut Offs', dated: 'June 15, 2024', description: 'You can take a look to the Last year cut offs of the agricuture colleges from India.'},
   
    ];
  return (
    <div className='notice'>
      {data.map((d, index) => (
        <div key={index} className='notice-cards'>
          
          <div className='sub-card-title'>{d.title} </div>
            <h3 className='sub-card-dated'>{d.dated}</h3>
            <p className='sub-card-desc'>{d.description}</p>
            <a className='sub-card-link' href={d.link} />
            <button className='sub-card-button'>Download</button>
         
        </div>
      ))}
    </div>

  )
}

export default NoticeBoard
