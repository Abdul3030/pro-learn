import * as React from 'react';
import {Formik , Form} from 'formik';
import McQuestion from './McQuestion';


const McqTest = ({title, data}:{title: string, data: any}) => {

    // if(data = {}) return <FiLoader />;

    const {questions} = data;
    let initVal = {};
    questions.map(question => initVal[question.id] = '')
    return (
        <div className="w-full">
            
                    <h1 className=" h-10 font-semibold text-pro-darkgray px-5 py-2">{title}</h1>
                    <div className="w-full px-5 pb-10 scrollable scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-pro-scroll">

                        <Formik
                            initialValues={initVal}
                            onSubmit={(values) => console.log(values)}
                            >
                            {
                                ({values}) => (
                                    <Form>
                                        
                                        {
                                            questions.map( (item, idx) => <McQuestion key={idx} name={item.id} qData={item} />)
                                        }
                                        <div className="w-full my-5 flex justify-center items-center text-white">
                                            <button className="bg-gradient-to-r from-pro-blue hover:from-pro-lightblue to-pro-lightblue hover:to-pro-blue rounded-lg px-10 py-1" type="submit">Submit</button>
                                        </div> 
                                    </Form>
                                )
                            }
                        </Formik>

                    </div>
            <style jsx>{`
                .scrollable {
                    max-height: calc(100vh - 120px);
                }
            `}</style>
        </div>
    )
};

export default McqTest;