export default function handler(req, res) {

    // Dummy data
    const data = [
            {
                id: 284422,
                sub_name: 'English',
                class_name: '040A',
                level: 'Secondary 4',
                progress: 65,
                prev_score: 72
            },
            {
                id: 284422,
                sub_name: 'Mathmatics',
                class_name: '040A',
                level: 'Secondary 4',
                progress: 75,
                prev_score: 65
            },
            {
                id: 284422,
                sub_name: 'Chemistry',
                class_name: '040A',
                level: 'Secondary 4',
                progress: 95,
                prev_score: 85
            },
            {
                id: 284422,
                sub_name: 'Biology',
                class_name: '040A',
                level: 'Secondary 4',
                progress: 32,
                prev_score: 72
            },
            {
                id: 284422,
                sub_name: 'Physics',
                class_name: '040A',
                level: 'Secondary 4',
                progress: 50,
                prev_score: 85
            },
            {
                id: 284422,
                sub_name: 'Social Studies',
                class_name: '040A',
                level: 'Secondary 4',
                progress: 75,
                prev_score: 25
            },
      ];

    //   Response
    
    res.status(200).json({ 
        "data": data
     })
  };