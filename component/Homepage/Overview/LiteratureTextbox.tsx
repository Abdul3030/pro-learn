import * as React from 'react';




const LiteratureTextbox = () => {

    return (
        <div className="w-full h-full">
            <h1 className="font-medium text-pro-darkgray">Literature</h1>
            <form action="" className="w-full h-full">
                <div className="w-full my-5 rounded-md shadow-lg">
                    <textarea value="Harper Lee’s was an American novelist widely known for To Kill a Mockingbird, published in 1960. Immediately
                        successful" name="literature" id="titerature" className="w-full h-72 text-pro-darkgray text-sm px-5 focus:outline-none resize-none">
                        
                    </textarea>
                    <div className="w-full text-right">
                        <h3 className="text-xs text-pro-lightgray">18 words</h3>
                    </div>
                </div>
                <button type="submit" className="w-36 float-right py-1 rounded-md text-white bg-gradient-to-r from-pro-blue to-pro-lightblue" >Submit</button>
            </form>
        </div>
    )
};


export default LiteratureTextbox;