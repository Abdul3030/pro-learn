
export default function handler(req, res){
    // dummy data
    const data = [
        {
          "name": "10 minutes early release to recess",
          "used": false
        },
        {
          "name": "Plus 2 marks for maths assessment",
          "used": false
        }
      ];

    // Response ******
    res.status(200).json({
      data
    });
}