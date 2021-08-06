
export default function handler(req, res){

    // **** Dummy Data **** //

    const data = {
        "lessons_todo": 3,
        "time_required": 145,
        "rewards_on_offer": 4
      };

    // ****** Response ******* 

    res.status(200).json({data});
};