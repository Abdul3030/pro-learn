import * as React from 'react';
import Image from 'next/image';


const McQuestion = ({qData}: {qData: any}) => {
    const {id, text, image, explanation, options} = qData;
    const [selected, setSelected] = React.useState<number>(null);

    return (
        <div className="w-full text-xsm bg-white text-pro-darkgray my-5 p-3 shadow-pro text-center rounded flex flex-wrap justify-center">
            {/* *************** Question */}
            <p className="text-pro-darkgray">
                {text}
            </p>
            {/* ****** Image if stay ********* */}
            {
                image && (
                    <div className="w-full h-full">
                        <Image src={image} alt="Question Image" />
                    </div>
                )
            }
            {/* ***** Explanation ***** */}
            <p className="text-pro-darkgray">
                {explanation}
            </p>
            {/* ************** Possible Answer */}
            <ul className="flex justify-center items-center mt-5 mb-2 flex-1">
               
                <li onClick={() => setSelected(0)} className={`mx-2 shadow-light p-1 rounded cursor-pointer ${selected === 0 ? 'bg-gradient-to-br from-pro-blue to-pro-lightblue' : 'bg-white'}`}><div className="w-full h-full px-5 py-1 bg-white">10<sup>4</sup>gm</div></li>
                <li onClick={() => setSelected(1)} className={`mx-2 shadow-light p-1 rounded cursor-pointer ${selected === 1 ? 'bg-gradient-to-br from-pro-blue to-pro-lightblue' : 'bg-white'}`}><div className="w-full h-full px-5 py-1 bg-white">10<sup>5</sup> tm </div></li>
                <li onClick={() => setSelected(2)} className={`mx-2 shadow-light p-1 rounded cursor-pointer ${selected === 2 ? 'bg-gradient-to-br from-pro-blue to-pro-lightblue' : 'bg-white'}`} ><div className="w-full h-full px-5 py-1 bg-white">10<sup>8</sup> Gm </div></li>
                <li onClick={() => setSelected(3)} className={`mx-2 shadow-light p-1 rounded cursor-pointer ${selected === 3 ? 'bg-gradient-to-br from-pro-blue to-pro-lightblue' : 'bg-white'}`}><div className="w-full h-full px-5 py-1 bg-white">10<sup>9</sup> Gm </div></li>
                
            </ul>
        </div>
    )
};

export default McQuestion;