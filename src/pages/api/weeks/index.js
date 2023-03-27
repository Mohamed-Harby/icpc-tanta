import weeks from "@/data/weeks.json";

export default function handler(req, res) {
  res.status(200).json(weeks);
}
