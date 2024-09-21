import https from 'https';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const baseApiUrl = process.env.API_URL || "http://localhost:1337";
    const apiUrl = `${baseApiUrl}/api/faqs?populate=faq_questions`;

    https.get(apiUrl, (apiRes) => {
      let data = '';

      apiRes.on('data', (chunk) => {
        data += chunk;
      });

      apiRes.on('end', () => {
        try {
          const parsedData = JSON.parse(data);
          res.status(200).json(parsedData);
        } catch (error) {
          res.status(500).json({ message: 'JSON Parse error', error });
        }
      });
    }).on('error', (error) => {
      res.status(500).json({ message: 'Error fetching data', error });
    });
  } else {
    res.status(405).json({ message: 'Only GET method is allowed' });
  }
}
