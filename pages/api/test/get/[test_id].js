
export default function handler(req, res){
    // Dummy data ******
    const data = {
        "id": 232332,
        "estimated_time": 30,
        "questions": [
          {
            "id": 2323,
            "type": "long",
            "text": "Write a composition of at least 150 words about a special gift. The pictures are provided to help you think about this topic. Your composition should be based on one or more of these pictures.",
            "orientation": "This question was asked in PSLE 2016. Let’s see if you can do it!",
            "image": {
              "id": 233903
            },
            "explanation": "",
            "hint1": "Study the pictures and pick only ONE gift to write about.",
            "hint2": "Write about the the one gift.",
            "reading_time": 30,
            "suggested_time": 120,
            "maximum_time": 300,
            "answer": {
              "text": "",
              "image": null,
              "steps": "",
              "explanation": "",
              "alternate": ""
            }
          },
          {
            "id": 2323,
            "type": "short",
            "orientation": "A simple calculative question.",
            "text": "A machine can produce 630 toys in 1/2 hour. How many toys can it produce in 60 minutes?",
            "image": null,
            "explanation": "Production of machine in 1/2 hour is given.We have to find its production in 60 minutes.",
            "hint1": "1/2 hour = 30 minutes",
            "hint2": "Toys produced in 60 minutes = 2 * 630",
            "reading_time": 30,
            "suggested_time": 60,
            "maximum_time": 90,
            "answer": {
              "text": "1260",
              "image": null,
              "steps": "2 * 630 = 1260",
              "explanation": "1/2 hour = 30 minutes\nToys produced in 30 minutes = 630\nHence, toys produced in 60 minutes = 2 * 630\n= 1260",
              "alternate": ""
            }
          },
          {
            "id": 2323,
            "type": "mcqs",
            "orientation": "A simple question of division of decimal numbers.",
            "text": "Find the value when 77.5 is divided by 5",
            "options": [
              "15.5",
              "15",
              "16",
              "15.05"
            ],
            "image": null,
            "explanation": "A question of division of decimals is given. Divide it to get the answer.",
            "hint1": "Divide keeping decimals in mind.",
            "hint2": "77.5 ÷ 5 = 15.5",
            "reading_time": 30,
            "suggested_time": 60,
            "maximum_time": 90,
            "answer": {
              "text": "15.5",
              "image": null,
              "steps": "77.5 ÷ 5 = 15.5",
              "explanation": "77.5 is a decimal number.\n77.5 ÷ 5 = 15.5",
              "alternate": ""
            }
          }
        ]
      };
    
    // Response *********

    res.status(200).json({data});
};