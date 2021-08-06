
export default function handler(req, res) {
    res.status(200).json({
        "data": {
            "tasks": 4,
            "days_to_next_exam": 52,
            "days_to_holiday": 89,
            "completion": 34,
            "lessons_taken": 25,
            "time_spent": 145,
            "rewards_earned": 4
            } 
    })
  };