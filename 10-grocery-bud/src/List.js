import React from 'react';
import { AiTwotoneDelete, AiTwotoneEdit} from "react-icons/ai";

const List = ({Task, deleteTask, editItem}) => {
    console.log(Task.id)
    return (
        <article className='list'>
           <h4>{Task.title}</h4>
           <div className='container__btn'>
            <button type="" className='btn_icon edit' onClick={()=>editItem(Task.id)}><AiTwotoneEdit/></button>
            <button type="button" className='btn_icon delete' onClick={()=>deleteTask(Task.id)}><AiTwotoneDelete/></button>
           </div> 
        </article>
    );
};

export default List;