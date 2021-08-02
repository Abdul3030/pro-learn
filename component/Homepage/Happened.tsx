import * as React from 'react';
import momentjs from 'moment';

type HappenedProps = {
    date: string
};

const Happened = ({date}: HappenedProps) => {
    const today = momentjs().format('D MMM');
return (
    <div className="w-40 h-full mt-2">
    <h1 className="text-gray-700 text-sm font-medium py-2">What&apos;s happening</h1>
    <div className="w-full h-72 rounded shadow-pro">
        <div className="overflow-hidden w-full h-12 text-center bg-gradient-to-r from-pro-blue to-pro-lightblue ">
            <h1 className="mt-5 -ml-10 text-3xl font-bold text-white leading-0 uppercase"> {today === date ? 'today' : date} </h1>
        </div>
        <div className="w-full">
            <ul className="px-4 py-3 text-xs text-pro-lightgray">
                <li className="">Nothing is going much right now...</li>
            </ul>
        </div>
    </div>
</div>
) 

};

export default Happened;