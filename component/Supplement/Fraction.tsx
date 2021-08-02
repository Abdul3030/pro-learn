import * as React from 'react';




const Fraction = () => {
    
    const [selected, setSelected] = React.useState<number>(null);

    return (
        <div className="w-1/2 mx-auto my-5 text-pro-gray flex justify-center text-2xl items-center">
            {/* ******************* Question **************** */}
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
            {/* ****************** Equalt ****************** */}
            <div className="mx-5">
                <h1 className=""> = </h1>
            </div>
            {/* ********************* Possible Answers **************** */}
            <div className={`p-0.5 bg-gradient-to-br rounded shadow-pro mr-5 ${selected === 0 ? 'from-pro-blue to-pro-lightblue' : 'from-white to-white'}`}>
                <div onClick={() => setSelected(0)} className={`bg-white rounded p-5 cursor-pointer `}>
                    <span className="inline-block text-center ">
                        <sup className="border-b-2 border-pro-gray p-2 block font-semibold">13</sup>
                                {/* <span className="hidden">&frasl;</span> */}
                        <sub className="block font-semibold">20</sub>
                    </span>
                </div>
            </div>
            <div className={`p-0.5 bg-gradient-to-br rounded shadow-pro mr-5 ${selected === 1 ? 'from-pro-blue to-pro-lightblue' : 'from-white to-white'}`}>
                <div onClick={() => setSelected(1)} className={`bg-white rounded p-5 cursor-pointer `}>
                    <span className="inline-block text-center">
                        <sup className="border-pro-gray border-b-2 p-2 block font-semibold">13</sup>
                        <span className="hidden">&frasl;</span>
                        <sub className="block font-semibold">20</sub>
                    </span>
                </div>
            </div>
            <div className={`p-0.5 bg-gradient-to-br rounded shadow-pro mr-5 ${selected === 2 ? 'from-pro-blue to-pro-lightblue' : 'from-white to-white'}`}>
                <div onClick={() => setSelected(2)} className={`bg-white rounded p-5 cursor-pointer `}>
                        <span className="inline-block text-center ">
                            <sup className="border-b-2 border-pro-gray p-2 block font-semibold">5</sup>
                                    <span className="hidden">&frasl;</span>
                            <sub className="block font-semibold">10</sub>
                        </span>
                </div>
            </div>
            
        </div>
    )
};


export default Fraction;