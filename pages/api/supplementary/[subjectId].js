export default function handler(req, res) {

    const {subjectId} = req.query;

    // Dummy data
    const data = [
        {
          id: 54546,
          class_name: 'Supplementary Class 1',
          subject: 'Fractions',
          time: 10,
          description: 'This supplementary Class will focus purely on Fractions. Doing 8 questions in 10 mins will allow you to familiarise yourself with fractions.'
        },
        {
          id: 54547,
          class_name: 'Supplementary Class 2',
          subject: 'Fractions',
          time: 30,
          description: 'This supplementary Class will focus purely on Fractions. Doing 8 questions in 10 mins will allow you to familiarise yourself with fractions.'
        },
        {
          id: 54548,
          class_name: 'Supplementary Class 3',
          subject: 'Fractions',
          time: 25,
          description: 'This supplementary Class will focus purely on Fractions. Doing 8 questions in 10 mins will allow you to familiarise yourself with fractions.'
        },
      ];

    //   Response
    
    res.status(200).json({ 
        "data": data
     })
  };