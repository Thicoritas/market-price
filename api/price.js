let currentPrice = (Math.random() * (10e12 - 10e9) + 10e9).toFixed(2);

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ price: currentPrice });
    } else if (req.method === 'POST') {
        const { price } = req.body;
        currentPrice = price;
        res.status(200).json({ success: true });
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
