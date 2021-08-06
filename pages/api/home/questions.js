
export default function handler(req, res) {

    // Dummy data
    const data = [
        {
          "name": "How was the last module",
          "ref_id": "3939"
        },
        {
          "name": "How are you feeling today"
        }
      ]
    // Response
    res.status(200).json({
        "data": data
    })
  }