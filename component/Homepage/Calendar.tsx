import * as React from 'react';
import { Calendar } from 'react-modern-calendar-datepicker';

const CalendarComponent = () => {

return (
    <div className="w-full">
        <h1 className="text-gray-700 text-sm font-medium">Calendar</h1>
        <div className="flex justify-center items-center px-2 py-5 rounded shadow-lg">
            <Calendar 
                calendarTodayClassName="custom-today"
                colorPrimary="#0fbcf9"
            />
        </div>
    </div>
) 

};

export default CalendarComponent;