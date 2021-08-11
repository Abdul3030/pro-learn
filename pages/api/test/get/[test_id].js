import {data} from '../../../../testData';


export default function handler(req, res){
    // Dummy data ******
    const filteredData = data.filter((val) => val.id === 232332 );
    // Response *********
    res.status(200).json({data: {...filteredData[0]}});
};