import React from 'react';
import Tour from './Tour';

const Tours = ({ tours,removeTour,resetTour }) => {
    return (
        <section>
            <div className='title'>
                <h2>ours tours</h2>
                <div className='underline'></div>
            </div>
            <div>
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour} />
                })}
            </div>
            <button className='reset-btn' onClick={()=>resetTour(tours.id)}>Reset List Tours</button>
        </section>
    );
};

export default Tours;