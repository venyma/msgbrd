export default async function handler(req, res) {
  const { board } = req.query;

  if (req.method === 'POST') {
    res.status(200).json({ message: `Reply created on ${board}`, data: req.body });
  } else if (req.method === 'PUT') {
    res.status(200).json({ message: `Reply reported on ${board}`, data: req.body });
  } else if (req.method === 'DELETE') {
    res.status(200).json({ message: `Reply deleted on ${board}`, data: req.body });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
