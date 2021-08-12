import {data} from '../../../../testData';


export default function handler(req, res){
    const {test_id} = req.query;
    console.log( typeof test_id);
    // Dummy data ******
    const filteredData = data.filter((val) => val.id === Number(test_id) );
    console.log(filteredData);
    // Response *********
    res.status(200).json({data: filteredData});
};