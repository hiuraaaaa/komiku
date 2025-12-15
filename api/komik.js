export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.nekolabs.web.id/discovery/komikindo/v2/popular");
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ success: false, message: "Gagal load data" });
  }
}
