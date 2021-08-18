import * as React from 'react';
import { useState } from 'react';




const LiteratureTextbox = () => {
    const [text, setText] = useState('Harper Lee’s was an American novelist widely known for To Kill a Mockingbird, published in 1960.');

    const onChangeHanlder = (e) => {
        setText(e.target.value);
    };

    return (
        <div className=" px-5 w-full h-full">
            <h1 className="h-10 font-semibold text-pro-darkgray py-2">Literature</h1>
            <form action="" className="bg-white w-full h-full">
                <div className="w-full my-5 rounded-md shadow-pro">
                    <textarea onChange={onChangeHanlder} value={text} name="literature" id="Literature" className="pt-4 text-xsm w-full h-72 text-pro-darkgray text-sm px-5 focus:outline-none resize-none scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-pro-lightgray scrollbar-track-pro-white">
                    </textarea>
                    <div className="w-full text-right">
                        <h3 className="text-xs text-pro-lightgray">{text ? text.split(/[\s]+/g).length - 1 : 0}words</h3>
                    </div>
                </div>
                <button type="submit" className="w-36 float-right py-1 rounded-md text-white bg-gradient-to-r from-pro-blue to-pro-lightblue" >Submit</button>
            </form>
        </div>
    )
};


export default LiteratureTextbox;