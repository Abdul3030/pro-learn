
export default function handler(req, res) {

    // Dummy data 
    const data = [
        {
          "type": "content",
          "id": "232332",
          "name": "Literature",
          "time": 10,
          "text": "ABCD",
          "completed": false
        },
        {
          "type": "video",
          "id": "123232",
          "name": "How and Why Read",
          "match": 45,
          "text": "Crash Course",
          "completed": false
        },
        {
          "type": "test",
          "id": "792332",
          "name": "Physics",
          "time": 16,
          "text": "PQRS",
          "completed": false
        },
        {
          "type": "test",
          "id": "358943",
          "name": "History",
          "time": 10,
          "text": "ABCD",
          "completed": true
        },
        {
          "type": "test",
          "id": "602347",
          "name": "Mathematics",
          "time": 4,
          "text": "ABCD",
          "completed": false
        },
        {
          "type": "video",
          "id": "6385",
          "name": "Maths Revision",
          "match": 10,
          "text": "ABCD",
          "completed": false
        }
      ]
    // ******** Response ***** //

    res.status(200).json({
        data
    })
};