import * as React from 'react';



const RecommendItem = () => {
    return (
        <div className="w-full h-36 py-5 pl-5 pr-2 flex rounded shadow-pro overflow-hidden">
            <div className="w-2/3 mr-2 bg-pro-gray bg-opacity-50">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MSYw502dJNY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="flex flex-col justify-between">
                <div className="text-sm">
                    <h1 className="font-medium">How and why we Read</h1>
                    <h3 className="">- Crashcourse</h3>
                </div>
                <div className="">
                    <h2 className="font-medium"><span className="text-3xl font-medium bg-clip-text bg-gradient-to-r from-pro-red to-pro-orange text-transparent">{49.2}%</span>match</h2>
                </div>
            </div>
        </div>
    )
};
export default RecommendItem;