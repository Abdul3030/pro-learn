import * as React from 'react';


type SummaryProps = {

};

const Summary = ({}: SummaryProps) => {

return (
    <div className="w-full">
        <h1 className="text-gray-700 text-sm font-medium">Summary</h1>
        <div className="w-full h-32 flex items-center justify-between px-2 py-5 rounded shadow-lg">
            <div className="text-center px-2">
                <h2 className="bg-clip-text font-medium text-5xl text-transparent inline-block bg-gradient-to-r from-pro-blue to-pro-lightblue">4</h2>
                <p className="text-gray-700 text-xs">Task To Be Completed</p>
            </div>    
            <div className="text-center px-2">
                <h2 className="bg-clip-text font-medium text-5xl text-transparent inline-block bg-gradient-to-r from-pro-green to-pro-spring">16</h2>
                <p className="text-gray-700 text-xs">Task To Be Completed</p>
            </div>    
            <div className="text-center px-2">
                <h2 className="bg-clip-text font-medium text-5xl text-transparent inline-block bg-gradient-to-r from-pro-red to-pro-orange">89</h2>
                <p className="text-gray-700 text-xs">Task To Be Completed</p>
            </div>    
        </div>
    </div>
) 

};

export default Summary;