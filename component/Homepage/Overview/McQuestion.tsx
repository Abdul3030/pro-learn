import * as React from 'react';
import Image from 'next/image';
import TeX from '@matejmazur/react-katex';
import {Field} from 'formik';


const McQuestion = ({qData, name}: {qData: any, name: string}) => {
    const {id, text, image, explanation, options} = qData;
    const [selected, setSelected] = React.useState<number>(null);
    const [selectedColor, setSelectedColor] = React.useState();

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
               
                {/* <li onClick={() => setSelected(0)} className={`mx-2 shadow-light p-1 rounded cursor-pointer ${selected === 0 ? 'bg-gradient-to-br from-pro-blue to-pro-lightblue' : 'bg-white'}`}><div className="w-full h-full px-5 py-1 bg-white">10<sup>4</sup>gm</div></li>
                <li onClick={() => setSelected(1)} className={`mx-2 shadow-light p-1 rounded cursor-pointer ${selected === 1 ? 'bg-gradient-to-br from-pro-blue to-pro-lightblue' : 'bg-white'}`}><div className="w-full h-full px-5 py-1 bg-white">10<sup>5</sup> tm </div></li>
                <li onClick={() => setSelected(2)} className={`mx-2 shadow-light p-1 rounded cursor-pointer ${selected === 2 ? 'bg-gradient-to-br from-pro-blue to-pro-lightblue' : 'bg-white'}`} ><div className="w-full h-full px-5 py-1 bg-white">10<sup>8</sup> Gm </div></li>
                <li onClick={() => setSelected(3)} className={`mx-2 shadow-light p-1 rounded cursor-pointer ${selected === 3 ? 'bg-gradient-to-br from-pro-blue to-pro-lightblue' : 'bg-white'}`}><div className="w-full h-full px-5 py-1 bg-white">10<sup>9</sup> Gm </div></li>
                 */}
                
                <Field name={name}>
                    {
                        ({field}) => {
                            return options.map((option, idx) => {
                                return (
                                    <div key={idx} className={`p-0.5 bg-gradient-to-br rounded shadow-pro mr-5 ${selected === option ? 'from-pro-blue to-pro-lightblue' : 'from-white to-white'}`}>
                                        <label htmlFor={option} onClick={() => setSelected(option)} className={`w-20 h-full bg-white rounded px-5 py-1 cursor-pointer flex justify-center items-center`}>
                                            
                                            <TeX >{String.raw`${option}`}</TeX>
                                            
                                            <input 
                                                className="appearance-none"
                                                type="radio" 
                                                id={option}
                                                {...field} 
                                                value={option}
                                                />
                                        </label>
                                    </div>
                                )
                            })
                        }
                    }
                </Field>
            </ul>
        </div>
    )
};

export default McQuestion;