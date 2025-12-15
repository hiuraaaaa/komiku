export default async function handler(req, res) {
  const { url } = req.query;
  if(!url) return res.status(400).json({ success: false, message: "URL required" });

  try {
    const response = await fetch(`https://api.nekolabs.web.id/discovery/komikindo/v2/detail?url=${encodeURIComponent(url)}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ success: false, message: "Gagal load detail komik" });
  }
}
