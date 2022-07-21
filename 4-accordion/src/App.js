import React, { useState } from 'react';
import data from './data'
import './App.css';
import Questions from './Questions';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>Questions and answers about login</h3>
        <section className='info'>
         {
          questions.map((question)=>{
            return(
              <Questions key={question.id} question={question} />
            )
          })
         }
        </section>
      </div>
    </main>
  );
}

export default App;
