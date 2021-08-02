import * as React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type CountdownProps = {

};

const Countdown = ({}: CountdownProps) => {

return (
    <div className="w-40">
        <h1 className="text-gray-700 text-sm font-medium py-2">Countdown</h1>
        <div className="w-full h-40 flex justify-center items-center rounded shadow-pro">
            <div className="w-36 h-32 flex justify-center items-center px-2">
                <CircularProgressbarWithChildren 
                    value={62}
                    counterClockwise
                    styles={buildStyles({
                        pathColor: "#387EE9",
                        trailColor: "#A5BAD0",
                    })}
                     >
                         <h2 className="text-5xl font-medium "><span className="bg-clip-text bg-gradient-to-r from-pro-blue to-pro-lightblue text-transparent">62</span><span className="text-2xl bg-clip-text bg-gradient-to-r from-pro-blue to-pro-lightblue text-transparent">%</span></h2>
                         <h4 className="text-pro-darkgray text-xs -m-2 font-medium">Semester 2</h4>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    </div>
) 

};

export default Countdown;