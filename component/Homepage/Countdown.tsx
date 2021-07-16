import * as React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type CountdownProps = {

};

const Countdown = ({}: CountdownProps) => {

return (
    <div className="w-full ml-10">
        <h1 className="text-gray-700 text-sm font-medium">Countdown</h1>
        <div className="w-32 h-32 flex justify-center items-center px-2 py-5 rounded shadow-lg">
            <div className="w-24 h-24">
                <CircularProgressbar value={60} text={`${60}%`} />
            </div>
        </div>
    </div>
) 

};

export default Countdown;