export default async function handler(req, res) {
const { board } = req.query;


// ---- Body Parsing (fixes Vercel PUT/DELETE) ----
let body = {};
if (req.method !== 'GET') {
const raw = await new Promise(resolve => {
let d = '';
req.on('data', c => d += c);
req.on('end', () => resolve(d));
});
body = Object.fromEntries(new URLSearchParams(raw));
}
// ------------------------------------------------


if (req.method === 'POST')
return res.status(200).json({ action: 'create_thread', board, body });


if (req.method === 'PUT')
return res.status(200).json({ action: 'report_thread', board, body });


if (req.method === 'DELETE')
return res.status(200).json({ action: 'delete_thread', board, body });


return res.status(405).json({ error: 'Method not allowed' });
}
