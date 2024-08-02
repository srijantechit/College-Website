
import '../../App.css';
import React, { useState, useEffect } from 'react';

function Admissions() {
  //state to manage which field description is currently selected
  const [selectedFields, setSelectedFields] = useState(null);

  const fields = [
    {
      id: 1,
      name: 'Admission Procedure',
      title1: 'Entrance Exam',
      description1: 'Admission in universities or institutes offering B.Sc. in Agriculture course is done based on the Common Entrance Test conducted by the competent authority (MHTCET/JEE/NEET) the merit of admission will be determined by considering the 70% of total percent marks obtained in the respective group (PCB/PCM) and 30% of total percent marks in the eligibility examination/12th (Science) examination and the other weightages.',
      title2: 'Application Process:',
      description2: 'Candidates need to apply online through the MCAER website or designated portals during the specified application period. The application typically involves filling out personal details, educational qualifications, and uploading required documents. Candidates need to apply online through the MCAER website or designated portals during the specified application period.',
      title3: 'Merit List and Seat Allotment:',
      description3: 'After counseling, a merit list is published based on candidates MHT-CET scores and preferences. Seats are allotted to candidates based on their ranks in the merit list and availability of seats in their preferred colleges.',
      title4: 'Direct Admission (Management Quota):',
      description4: 'Some seats may also be available under management quota for which direct admission procedures may vary. Interested candidates should contact the college directly for details.'
    },
    {
      id: 2,
      name: 'Scholarship',
    },
    {
      id: 3,
      name: 'Eligibility',
      title1: 'Eligibility Criteria:',
      description1: 'Candidates must meet the eligibility criteria set by the college and the State Government of Maharashtra. This usually includes passing the 10+2 examination (or equivalent) with specific subjects such as Physics, Chemistry, Biology, and/or Mathematics.',
      title2: 'Entrance Examination:',
      description2: 'Candidates need to appear for the MHT-CET (Maharashtra Common Entrance Test) conducted by the State Government.'
    },
    {
      id: 4,
      name: 'Fee Structure',
      title1: 'Course Offered: B.Sc Agriculture (Hons)',
      description1: 'Fees: INR 69,000/- per year (subject to change annually)',
      title2: 'Course Offered: Agri Diploma',
      description2: 'Fees: INR 26,900/- per year (subject to change annually)',
    },
    {
      id: 5,
      name: 'FAQs',
      title1: 'What are the eligibility criteria for admission to UG degree programme?',
      description1: 'Students must have passed XII std. with 10+2 pattern from Maharashtra State Board of Higher Secondary Education or an equivalent Examination with Physics, Chemistry, Biology or Mathematics',
      title2: 'What is the degree name and to which university it is affiliated?',
      description2: '“B.Sc (Hons.) programme are affiliated to Dr. Panjabrao Deshmukh Krishi Vidyapeeth, Akola. and approved by Maharashtra Council of Agricultural Education & Research, Pune.',
      title3: 'Is there a hostel facility in this college?',
      description3: 'Yes',
      title4: 'What is an additional facility for the preparation of competitive Exams?',
      description4: 'Separate Competitive forum is there. Books and magazines in the library. Various seminars and lectures are arranged for this purpose.',
      title5: 'What is the limit of additional grace marks in admission process?',
      description5: 'Maximum 20 points (Percentage).',
    }
  ];

  const scholarships = [
    
    {
      id: 2,
      title: 'OBC, SEBC, VJNT & SBC Welfare Department',
      description: [
         { text: 'Post Matric Scholarship to VJNT Students',},
         { text: 'Tuition Fees and Examination Fees to VJNT Students'},
         { text: 'Payment of Maintenance Allowance to VJNT and SBC Students Studying in Professional Courses and Living in Hostel Attached to Professional Colleges'},
         { text: 'Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship for students studying in 11th & 12th standard of VJNT & SBC category'},
         { text: 'Post Matric Scholarship to OBC Students'},
         { text: 'Post Matric Scholarship to SBC Students'},
         { text: 'Tuition Fees and Examination Fees to OBC Students'},
         { text: 'Tuition Fees and Examination Fees to SBC Students'},
         { text: 'Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students'}
      ]
    },
    {
      id: 3,
      title: 'Tribal Development Department',
      description: [
        { text: 'Post Matric Scholarship Scheme (Government Of India)' },
        { text: 'Tuition Fee & Exam Fee for Tribal Students (Freeship)' },
        { text: 'Vocational Education Fee Reimbursement' },
        { text: 'Vocational Education Maintenance Allowance' },
        { text: 'Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe Category' },
      ]
    },
    
    {
      id: 5,
      title: 'Mahatma Phule Krishi Vidyapeeth, Rahuri ',
      description: [
        { text: 'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC) ' },
        { text: 'Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (AGR) ' }
      ]
    },
    {
      id: 4,
      title: 'Minority Development Department',
      description: [
        { text: 'State Minority Scholarship Part II (DHE)' },
        { text: 'Scholarship for students of minority communities pursuing Higher and Professional courses (DTE)' },
        { text: 'Scholarship for students of minority communities pursuing Higher and Professional courses (DMER)' },
        { text: 'Scholarship for students of minority communities pursuing Higher and Professional courses of MCAER Department' },
      ]
    },
    {
      id: 6,
      title: 'Social Justice and Special Assistance Department ',
      description: [
        { text: ' Government of India Post-Matric Scholarship ' },
        { text: ' Post-Matric Tuition Fee and Examination Fee (Freeship) ' },
        { text: ' Maintenance Allowance for student Studying in professional courses ' },
        { text: ' Rajarshri Chhatrapati Shahu Maharaj Merit Scholarship ' },
        { text: ' Post-Matric Scholarship for persons with disability ' },
        { text: ' El Vocational Training Fee reimbursement for the students belonging to Scheduled Caste category Students ' },
      ]
    },
    {
      id: 1,
      title: 'Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna.',
      description: [
        { heading: 'About Scheme', text: 'Department Name: Department of Technical Education' },
        { heading: 'Overview', text: 'This is a plan for students of government, government funded and non-affiliated colleges / polytechnics entering the vocational courses set by the government, whose students are certified by the competent authority, as a marginal farmers or whose parents are registered laborers.' },
        { heading: 'Benefits', text: 'a) For child of Registered Labor / Alpabhudharak (Marginal Land Holder).\n- For institute in MMRDA / PMRDA / Aurangabad City / Nagpur City- Rs.30,000/- for 10 months.\n- For institute in other area Rs.20,000/- for 10 months.\nb) For Annual Family income up to 8 Lakhs.\n- For institute in MMRDA / PMRDA/ Aurangabad City / Nagpur City- Rs.10,000/- for 10 months.\n- For Institute in other area Rs.8,000/- for 10 months.' },
        { heading: 'Eligibility', text: 'Eligibility Criteria: (As per the GR Dated 07th Oct 2017, 22nd Feb 2018 , 01st March 2018, 18th June 2018, 11th July 2019 )\na) Applicant should have Nationality of India.\nb) Candidate should be Domicile of Maharashtra State.\nc) Applicant should be ”Bonafide Student of Institute” and admitted for Professional and Technical course (Diploma / Graduation / Post Graduation Degree) as mentioned in GR\nd) Deemed University and Private university is not applicable\ne) Candidate should be admitted through Centralized Admission Process (CAP).\nf) Applicant should not avail any other scholarship/stipend.\ng) For current Academic Year, Only 2 child from family are allowed for benefit of scheme.\nh) The Total Annual Income of Family / Guardian should not be more than 8 Lakhs.\ni) Minimum 50 % attendance in previous semester (Exception for fresh admitted in College).\nj) During course duration, candidate should not have a gap of 2 or more than 2 years.\nk) Candidates are eligible those who have taken an admission under General category and SEBC Category' },
        { heading: 'Documents Required', text: 'a) Mark sheet of 10th (S.S.C) & Onwards.\nb) Domicile Certificate of Maharashtra State.\nc) Register Labor Certificate / Alpabhudharak (Marginal Land Holder) Certificate ( In case of not a child of Alpabudharak or Registered Labour then family Annual Income Certificate ).\nd) Undertaking “In current year, not more than 2 beneficiary from family”.\ne) CAP Related document.\nf) Hosteller documents ( In case of private hostel or Paying Guest, Agreement with owner will be required.' }
      ]
    },
  ];

  useEffect(() => {
    if (fields.length > 0) {
      setSelectedFields(fields[0].id);
    }
  }, []);

  const handleFieldsClick = (fieldsId) => {
    setSelectedFields(fieldsId);
  };

  return (
    <div className='admission-style'>
      <div className="admission-headings display-flex">
        {/* Render list of course names */}
        {fields.map(field => (
          <div key={field.id} className=''>
            <div
              className={`course-item hover-color ${selectedFields === field.id ? 'selected' : ''}`}
              onClick={() => handleFieldsClick(field.id)}
              style={{ backgroundColor: selectedFields === field.id ? '#6a994e' : 'inherit' }}
            >
              {field.name}
            </div>
          </div>
        ))}
      </div>
      <div className="course-details">
        {/* Render course description based on selectedCourse */}
        {selectedFields !== null && selectedFields !== 2 && (
          <div className="details-box-admission">
            <div className='title'>
              {fields.find(field => field.id === selectedFields).title1}
            </div>
            <div className='admission-description'>
              {fields.find(field => field.id === selectedFields).description1}
            </div>
            <div className='title'>
              {fields.find(field => field.id === selectedFields).title2}
            </div>
            <div className='admission-description'>
              {fields.find(field => field.id === selectedFields).description2}
            </div>
            <div className='title'>
              {fields.find(field => field.id === selectedFields).title3}
            </div>
            <div className='admission-description'>
              {fields.find(field => field.id === selectedFields).description3}
            </div>
            <div className='title'>
              {fields.find(field => field.id === selectedFields).title4}
            </div>
            <div className='admission-description'>
              {fields.find(field => field.id === selectedFields).description4}
            </div>
            <div className='title'>
              {fields.find(field => field.id === selectedFields).title5}
            </div>
            <div className='admission-description'>
              {fields.find(field => field.id === selectedFields).description5}
            </div>
          </div>
        )}
        {selectedFields === 2 && (
          <div className="details-box-admission justify-content-around">
            {scholarships.map(scholarship => (
              <div key={scholarship.id} className="admission-card">
                <div className='title'>
                  {scholarship.title}
                </div>
                {scholarship.description.map((item, index) => (
                  <div key={index} className='admission-description'>
                    <strong>{item.heading}</strong><br />
                    {item.text.split('\n').map((line, idx) => (
                      <span key={idx}>{line}<br /></span>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Admissions;

