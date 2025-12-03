export default async function handler(req, res) {
  const { board } = req.query;

  let body = {};
  if (req.method !== 'GET') {
    const buf = await new Promise(resolve => {
      let data = '';
      req.on('data', chunk => data += chunk);
      req.on('end', () => resolve(data));
    });
    body = Object.fromEntries(new URLSearchParams(buf));
  }

  if (req.method === 'POST') {
    res.status(200).json({ message: `Reply created on ${board}`, data: body });
  } else if (req.method === 'PUT') {
    res.status(200).json({ message: `Reply reported on ${board}`, data: body });
  } else if (req.method === 'DELETE') {
    res.status(200).json({ message: `Reply deleted on ${board}`, data: body });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
