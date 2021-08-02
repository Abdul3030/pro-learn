import * as React from 'react';

type propsType = {
    days_to_next_exam: number,
    days_to_holiday: number,
    tasks: number
}
type SummaryProps = {
    summary: propsType
};

const Summary = ({summary}: SummaryProps) => {
    const {days_to_next_exam, days_to_holiday, tasks} = summary;
return (
    <div className="w-full">
        <h1 className="text-gray-700 text-sm font-medium py-2">Summary</h1>
        <div className="w-full h-40 flex items-center justify-between px-4 py-5 rounded shadow-pro">
            <div className="text-center px-2">
                <h2 className="bg-clip-text font-medium text-5xl text-transparent inline-block bg-gradient-to-r from-pro-blue to-pro-lightblue">{tasks}</h2>
                <p className="text-gray-700 text-xs">Task To Be Completed</p>
            </div>    
            <div className="text-center px-2">
                <h2 className="bg-clip-text font-medium text-5xl text-transparent inline-block bg-gradient-to-r from-pro-green to-pro-spring">{days_to_next_exam}</h2>
                <p className="text-gray-700 text-xs">Days left to Next Exam</p>
            </div>    
            <div className="text-center px-2">
                <h2 className="bg-clip-text font-medium text-5xl text-transparent inline-block bg-gradient-to-r from-pro-red to-pro-darkorange">{days_to_holiday}</h2>
                <p className="text-gray-700 text-xs">Days left to Holiday</p>
            </div>    
        </div>
    </div>
) 

};

export default Summary;