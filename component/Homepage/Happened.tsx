import * as React from 'react';
import momentjs from 'moment';

type HappenedProps = {
    date: string,
    idays: any
};

const Happened = ({date, idays}: HappenedProps) => {
    const today = momentjs().format('D/M');
    const whatHappend = idays.filter((item) => item.date === momentjs(date, 'D/M').format('D'));
    console.log(whatHappend);
return (
    <div className="w-40 h-full mt-7">
    <h1 className="text-gray-700 text-sm font-medium py-2">What&apos;s happening</h1>
    <div className="bg-white w-full h-72 rounded shadow-pro">
        <div className="overflow-hidden w-full h-12 text-center bg-gradient-to-r from-pro-blue to-pro-lightblue ">
            <h1 className="mt-5 -ml-10 text-3xl font-bold text-white leading-0 uppercase"> {today === date ? 'today' : momentjs(date, 'D/M').format('D MMM')} </h1>
        </div>
        <div className="w-full">
            <ul className="px-5 py-3 text-xs text-pro-lightgray">
                    {
                        whatHappend.length > 0 ? whatHappend[0].information.map((item, idx) => <li key={idx} className="list-disc">{item}</li>) : 'Nothing is going on right now...'
                    }
            </ul>
        </div>
    </div>
</div>
) 

};

export default Happened;