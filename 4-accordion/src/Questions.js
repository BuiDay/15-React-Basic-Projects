import React, {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Questions = ({question}) => {
    const [value, setValue] = useState(true);
    return (
        <article className='question'>
            <header>
                <h4>{question.title}</h4>
                <button className='btn' onClick={()=>{setValue(!value)}}> {value ? <AiOutlinePlus /> : <AiOutlineMinus/>} </button>
            </header>
            {value || <p>{question.info}</p>}
        </article>
    );
};

export default Questions;