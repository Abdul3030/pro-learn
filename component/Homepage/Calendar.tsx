import * as React from 'react';
import { Calendar } from 'react-modern-calendar-datepicker';
import dayjs from 'dayjs';
import momentjs from 'moment';
import withRouter from 'next/dist/client/with-router';

const CalendarComponent = ({setDate}) => {

    const calendar = [];
    const moment = momentjs();
    const startDay = moment.clone().startOf('month').startOf('week');
    const endDay = moment.clone().endOf('month').endOf('week');
    const today = momentjs().format('D/M');
    const thisMonth = moment.format('M');

    let day = startDay.clone().subtract(1, 'day');
    
    while (day.isBefore(endDay, 'day')) {
        calendar.push(
            Array(7)
            .fill(0)
            .map(() => day.add(1, 'day').clone() )
        )
    };


return (
    <div className="w-full h-full mt-7">
        <h1 className="text-pro-darkgray text-sm font-medium py-2">Calendar</h1>
        <div className="w-full h-72 rounded shadow-pro bg-white">
            <div className="w-full">
                <h1 className="w-full text-center font-medium text-pro-darkgray py-3">{moment.format('MMMM')}</h1>
            </div>
            <div className="w-full justify-evenly flex flex-1 text-sm font-medium text-pro-gray">
                {
                    ['s','m','t','w','t','f','s']
                    .map((val, idx) => 
                    <div key={idx} className="w-7 h-7 px-5 flex justify-center items-center uppercase">{val}</div>)
                }
            </div>
           {
               calendar.map((week, idx) => (
                   <div key={idx} className="w-full justify-evenly flex flex-1">
                       {
                           week.map((day, index) => (
                               <div
                                onClick={() => setDate(day.format('D MMM'))} 
                                key={index} 
                                className={`w-5 p-4 h-5 mt-1 text-xs font-medium flex justify-center items-center rounded-full cursor-pointer ${day.format('D/M') === today ? 'bg-gradient-to-br from-pro-blue to-pro-lightblue text-white' : day.format('M') !== thisMonth ? 'text-pro-white' : 'text-pro-darkgray hover:bg-pro-lightblue hover:text-white'} `}>
                                   {day.format('D')}
                                </div>
                           ))
                       }
                   </div>
               )
               )
           }
        </div>
    </div>
) 

};

export default CalendarComponent;