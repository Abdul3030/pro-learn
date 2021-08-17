import * as React from 'react';
import { Field } from 'formik';
import { gradColPallate } from '../../colorPallate';
import TeX from '@matejmazur/react-katex';


const Fraction = ({name, options, question, values, prevQId, showResults, answer}) => {
    
    const [selected, setSelected] = React.useState<number>(null);
    let isActive = prevQId === null ? true : false;
    let selectedColor = gradColPallate[0];
    if(showResults){
        selectedColor = selected === answer ? gradColPallate[3] : gradColPallate[2];
    }
    if(prevQId){
        values[prevQId] ? isActive = true : isActive = false;
    }

    const quesEl = question.split(/[+*\-\/]/g);
    console.log("quesEl", quesEl);
    const quesOp = question.match(/[+-]/g);
    console.log(quesOp);
    return (
        <div className={`relative w-1/2 mx-auto my-5 text-pro-gray flex justify-center text-2xl items-center}`}>
            {/* ******************* Question **************** */}
            <div className={`absolute w-full h-full top-0 left-0 bg-opacity-70 bg-white z-10 ${!isActive ? 'block' : 'hidden'}`}></div>
            <div className={`absolute w-full h-full top-0 left-0 z-10 ${showResults ? 'block' : 'hidden'}`}></div>
            <div className="flex justify-center items-center px-10 shadow-pro rounded">
                
                <TeX className="text-base m-0 p-0" block>{`\\frac{\\text{${quesEl[0]}}}{\\text{${quesEl[1]}}} ${quesOp[0]} \\frac{\\text{${quesEl[2]}}}{\\text{${quesEl[3]}}}`}</TeX>
            </div>
            {/* ****************** Equal ****************** */}
            <div className="mx-5 flex items-center">
                <TeX className="text-lg"> = </TeX>
            </div>
            {/* ********************* Possible Answers **************** */}
            {/* New Code */}
            <Field name={name}>
                {
                    ({field}) => {
                        return options.map((option, idx) => {
                            const fraction = option.split('/');
                            return (
                                <div key={idx} className={`p-0.5 bg-gradient-to-br rounded shadow-pro mr-5 ${selected === option ? selectedColor : 'from-white to-white'}`}>
                                    <label htmlFor={option} onClick={() => setSelected(option)} className={`w-20 h-full bg-white rounded p-5 cursor-pointer flex justify-center items-center`}>
                                        
                                        <TeX >{String.raw`\frac{\text{${fraction[0]}}}{\text{${fraction[1]}}}`}</TeX>
                                        
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