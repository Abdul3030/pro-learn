export default function handler(req, res) {

    // Dummy data
    const data = [
        {
          "name": "10 minutes early release to recess",
          "used": false
        },
        {
          "name": "Plus 2 marks for maths assessment",
          "used": true
        },
        {
          "name": "“Get out of Tuition” Card",
          "used": true
        },
        {
          "name": "Plus 1 mark for english assessment",
          "used": true
        }
      ];

    //   Response
    
    res.status(200).json({ 
        "data": data
     })
  }