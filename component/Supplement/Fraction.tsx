import * as React from 'react';
import { Field } from 'formik';
import { gradColPallate } from '../../colorPallate';



const Fraction = ({name, options, values, prevQId, showResults, answer}) => {
    
    const [selected, setSelected] = React.useState<number>(null);
    let isActive = prevQId === null ? true : false;
    let selectedColor = gradColPallate[0];
    if(showResults){
        selectedColor = selected === answer ? gradColPallate[3] : gradColPallate[2];
    }
    if(prevQId){
        values[prevQId] ? isActive = true : isActive = false;
    }

    return (
        <div className={`relative w-1/2 mx-auto my-5 text-pro-gray flex justify-center text-2xl items-center}`}>
            {/* ******************* Question **************** */}
            <div className={`absolute w-full h-full top-0 left-0 bg-opacity-70 bg-white z-10 ${!isActive ? 'block' : 'hidden'}`}></div>
            <div className={`absolute w-full h-full top-0 left-0 z-10 ${showResults ? 'block' : 'hidden'}`}></div>
            <div className="flex justify-center items-center px-10 py-5 shadow-pro rounded">
                <div className="">
                    <span className="inline-block text-center ">
                        <sup className="border-b-2 border-pro-gray p-2 block font-semibold">1</sup>
                            {/* <span className="hidden">&frasl;</span> */}
                        <sub className="block font-semibold">4</sub>
                    </span>
                </div>
                <div className="">
                    <h1 className="-mt-4 mx-2">+</h1>
                </div>
                <div className="">
                    <span className="inline-block text-center">
                            <sup className="border-b-2 border-pro-gray p-2 block font-semibold">2</sup>
                                {/* <span className="hidden">&frasl;</span> */}
                            <sub className="block font-semibold">5</sub>
                    </span>
                </div>
            </div>
            {/* ****************** Equal ****************** */}
            <div className="mx-5 flex items-center">
                <h1 className=""> = </h1>
            </div>
            {/* ********************* Possible Answers **************** */}
            {/* New Code */}
            <Field name={name}>
                {
                    ({field}) => {
                        return options.map((option, idx) => {
                            const fraction = option.split('/');
                            console.log(fraction);
                            return (
                                <div key={idx} className={`p-0.5 bg-gradient-to-br rounded shadow-pro mr-5 ${selected === option ? selectedColor : 'from-white to-white'}`}>
                                    <label htmlFor={option} onClick={() => setSelected(option)} className={`w-20 h-full bg-white rounded p-5 cursor-pointer flex justify-center items-center`}>
                                        <div className="inline-block text-center cursor pointer">
                                            <sup className="cursor-pointer border-b-2 border-pro-gray p-2 block font-semibold">{fraction[0]}</sup>
                                                <span className="hidden">&frasl;</span>
                                            <sub className="cursor-pointer block font-semibold">{fraction[1]}</sub>
                                        </div>
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
        </div>
    )
};


export default Fraction;