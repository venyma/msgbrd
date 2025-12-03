export default async function handler(req, res) {
  const { board } = req.query;

  if (req.method === 'POST') {
    res.status(200).json({ message: `Thread created on ${board}`, data: req.body });
  } else if (req.method === 'PUT') {
    res.status(200).json({ message: `Thread reported on ${board}`, data: req.body });
  } else if (req.method === 'DELETE') {
    res.status(200).json({ message: `Thread deleted on ${board}`, data: req.body });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
