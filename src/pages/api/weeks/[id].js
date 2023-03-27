import weeks from "@/data/weeks.json";

export default function handler(req, res) {
  const week = weeks.find((week) => week.id === req.query.id);
  week
    ? res.status(200).json(week)
    : res
        .status(404)
        .json({ message: `Week with the id of ${req.query.id} not found` });
}
