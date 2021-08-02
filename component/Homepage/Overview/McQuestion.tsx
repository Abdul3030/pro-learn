import * as React from 'react';



const McQuestion = () => {

    const [selected, setSelected] = React.useState<number>(null);

    return (
        <div className="w-full font-base my-5 p-3 shadow-pro text-center rounded flex flex-wrap justify-center">
            {/* *************** Question */}
            <p className="">
                A 40kg mass is moving across a horizontal surface at  5 m/s. What is the magnitude of the uniform net force
                required to bring the mass to a stopin 8.0s?
            </p>
            {/* ************** Possible Answer */}
            <ul className="flex justify-center items-center mt-5 mb-2 flex-1 text-xs">
               
                <li onClick={() => setSelected(0)} className={`mx-2 shadow-light p-1 rounded cursor-pointer ${selected === 0 ? 'bg-gradient-to-br from-pro-blue to-pro-lightblue' : 'bg-white'}`}><div className="w-full h-full px-5 py-1 bg-white">10<sup>4</sup>gm</div></li>
                <li onClick={() => setSelected(1)} className={`mx-2 shadow-light p-1 rounded cursor-pointer ${selected === 1 ? 'bg-gradient-to-br from-pro-blue to-pro-lightblue' : 'bg-white'}`}><div className="w-full h-full px-5 py-1 bg-white">10<sup>5</sup> tm </div></li>
                <li onClick={() => setSelected(2)} className={`mx-2 shadow-light p-1 rounded cursor-pointer ${selected === 2 ? 'bg-gradient-to-br from-pro-blue to-pro-lightblue' : 'bg-white'}`} ><div className="w-full h-full px-5 py-1 bg-white">10<sup>8</sup> Gm </div></li>
                <li onClick={() => setSelected(3)} className={`mx-2 shadow-light p-1 rounded cursor-pointer ${selected === 3 ? 'bg-gradient-to-br from-pro-blue to-pro-lightblue' : 'bg-white'}`}><div className="w-full h-full px-5 py-1 bg-white">10<sup>9</sup> Gm </div></li>
                
            </ul>
        </div>
    )
};

export default McQuestion;