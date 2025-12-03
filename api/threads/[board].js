export default async function handler(req, res) {
  const { board } = req.query;

  // Parse body for post put deleete
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
    res.status(200).json({ message: `Thread created on ${board}`, data: body });
  } else if (req.method === 'PUT') {
    res.status(200).json({ message: `Thread reported on ${board}`, data: body });
  } else if (req.method === 'DELETE') {
    res.status(200).json({ message: `Thread deleted on ${board}`, data: body });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
