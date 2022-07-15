import './App.css';
import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchTabs = async () => {
    setLoading(true)
    try {
      const response = await fetch(url);
      const tabs = await response.json();
      setJobs(tabs);
      setLoading(false);
    }
    catch (err) {
      setLoading(false);
    }
  };
 
  useEffect(()=>{
    fetchTabs();
  },[]);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const {company, dates, duties,title} = jobs[value];
  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((item, index)=>{
            return(
              <button key={index} className='job-btn' onClick={()=>{setValue(index)}}>{item.company}</button>
            )
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='jonb-date'>{dates}</p>
          {duties.map((duty, index)=>{
              return(
                <div className='job-desc' key={index}>
                  <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
