import * as React from 'react';


type SummaryProps = {

};

const Summary = ({}: SummaryProps) => {

return (
    <div className="w-full">
        <h1 className="text-gray-700 text-sm font-medium">Summary</h1>
        <div className="w-full h-32 flex items-center justify-between px-2 py-5 rounded shadow-lg">
            {
                Array(3).fill('').map((item, idx) => {
                    return (
                        <div key={idx} className="text-center px-2">
                            <h2 className="bg-clip-text font-medium text-5xl text-transparent inline-block bg-gradient-to-r from-pro-blue to-pro-spring">4</h2>
                            <p className="text-gray-700 text-xs">Task To Be Completed</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
) 

};

export default Summary;