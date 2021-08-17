import * as React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import {useTimer} from 'use-timer';
import { gradColPallate } from '../../../colorPallate';
import Fraction from '../../../component/Supplement/Fraction';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import Congratulation from '../../../component/Supplement/Congratulation';

const testData = [
    {
        id: 458210,
        type: 'fragment',
        question: '12/13+15/12',
        options: [
            '7/12',
            '9/11',
            '8/5',
            '10/17'
        ],
        answer: '8/5'
    },
    {
        id: 458211,
        type: 'fragment',
        question: '12/13+15/12',
        options: [
            '5/15',
            '9/14',
            '8/10',
            '18/25'
        ],
        answer: '8/10'
    },
    {
        id: 458212,
        type: 'fragment',
        question: '12/13+15/12',
        options: [
            '9/35',
            '2/3',
            '1/8',
            '3/11'
        ],
        answer: '9/35'
    },
    {
        id: 458213,
        type: 'fragment',
        question: '12/13-15/12',
        options: [
            '8/65',
            '3/12',
            '8/16',
            '10/25'
        ],
        answer: '10/25'
    },
    {
        id: 458214,
        type: 'fragment',
        question: '12/13+15/12',
        options: [
            '6/18',
            '5/14',
            '1/9',
            '2/13'
        ],
        answer: '2/13'
    },
];
const ClassTest = () => {
    const router = useRouter();

    const [congrats, setCongrats] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState({});
    const [correctAnswer, setCorrectAnswer] = useState(null);

    const submitRef = React.useRef(null);
    console.log(results);

    // Stop watch for test
    const { time, start, pause, reset, status } = useTimer({
        initialTime: 600,
        endTime: 0,
        timerType: 'DECREMENTAL',
        onTimeOver: () => {
        start();
        },
      });

    // onLoad the exam timer will be started
    useEffect(()=> {
        start();
    },[]);

    // Converting seconds into hour, minutes seconds
    let hours, minutes, seconds;
    
        const minute = 60;
        const hour = 60*60;

        hours = Math.floor(time / hour);
        minutes = Math.floor((time % hour) / minute);
        seconds = Math.floor((time % minute));

    
    const onSubmitHanlder = (values) => {
        pause();
        setCongrats(true);
        setResults(values);
        const correctAns = testData.filter(question => question.answer === values[question.id]);
        setCorrectAnswer(correctAns);
    };

    // After 5 minutes of submitting result will be shown and congrats window disappeared
    useEffect(()=> {
        let timeout;
        if(congrats){
            timeout = setTimeout(() => {setShowResults(true); setCongrats(false);}, 3000);
        }
        return () => clearTimeout(timeout);
    },[showResults, congrats]);

    
    console.log(correctAnswer);
    return (

        <div className="relative w-full px-2 pt-1 select-none">
            <div className="w-full px-8 h-25 bg-white">
                <h1 onClick={() => router.back() } className="relative inline-block text-sm text-pro-lightgray font-medium cursor-pointer">
                    <span className="absolute top-0.5  inline-block transform -rotate-180 -left-4">
                        <BsPlayFill />
                    </span>
                    Supplementary Classes
                </h1>
                <div className="flex pt-5 items-center">
                    <div className="w-36">
                       { 
                       !showResults ?
                       <h1 className={`text-5xl font-medium bg-clip-text bg-gradient-to-r text-transparent ${minutes < 6 && minutes >= 1 ? gradColPallate[1] : minutes < 1 ? gradColPallate[2] : gradColPallate[0]}`}>
                            {`${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`}
                        </h1> :
                        <h1 className={`text-5xl font-medium bg-clip-text bg-gradient-to-r text-transparent ${gradColPallate[0]}`}>
                            {`${correctAnswer.length}/${testData.length}`}
                        </h1>}
                    </div>
                    <div className="">
                        <h1 className="text-xs font-medium text-pro-darkgray">Supplementary Class 1</h1>
                        <p className="text-pro-darkgray font-semibold">Fractions</p>
                    </div>
                </div>
            </div>

            {/* <FormikTesting /> */}
            <div className="w-full px-8 scrollable overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-pro-scroll">
                <Formik
                    initialValues={{
                        458213: '',
                        458214: '',
                        458210: '',
                        458211: '',
                        458212: ''
                    }}
                    onSubmit={onSubmitHanlder}
                >
                    {
                        ({values}) => (
                            <Form>
                                
                                {
                                    testData.map( (item, idx) => <Fraction key={item.id} showResults={showResults} question={item.question} answer={item.answer} prevQId={idx > 0 ? testData[idx-1].id : null} values={values} name={item.id} options={item.options} />)
                                }
                                {
                                !showResults ?
                                <div className="w-full my-5 flex justify-center items-center text-white">
                                    <button ref={submitRef} className="bg-gradient-to-r from-pro-blue hover:from-pro-lightblue to-pro-lightblue hover:to-pro-blue rounded-lg px-10 py-1" type="submit">Submit</button>
                                </div> : ''
                                }
                                
                            </Form>
                        )
                    }
                </Formik>
                {
                    showResults ?
                    <div className="w-full flex justify-center items-center text-white font-medium text-lg my-10">
                        <button onClick={() => router.push('/supplementary')} className="bg-gradient-to-r from-pro-green hover:from-pro-spring to-pro-spring hover:to-pro-green rounded-md px-10 py-1 mx-5" >Other Classes</button>
                        <button onClick={() => router.reload()} className="bg-gradient-to-r from-pro-blue hover:from-pro-lightblue to-pro-lightblue hover:to-pro-blue rounded-md px-10 py-1 mx-5">Redo Class</button>
                    </div> : ''
                }
            </div>

            {
                congrats && <Congratulation classTitle="Supplementary Class 1" />
            }
            <style jsx>{`
                .scrollable {
                    max-height: calc(100vh - 180px);
                }
            `}</style>
        </div>
    )
};


export default ClassTest;