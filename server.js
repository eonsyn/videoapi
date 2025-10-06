import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load env variables

const app = express();
const PORT = process.env.PORT || 3000;
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY; // get key from env

app.use(cors());
app.use(express.json());

app.post('/fetch-url', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required in body' });
  }

  try {
    const apiUrl = `https://terabox-downloader-direct-download-link-generator2.p.rapidapi.com/url?url=${encodeURIComponent(url)}`;

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,hi;q=0.6',
        'Cache-Control': 'no-cache',
        'DNT': '1',
        'Origin': 'https://teradownloader.vercel.app',
        'Pragma': 'no-cache',
        'Referer': 'https://teradownloader.vercel.app/',
        'Sec-CH-UA': '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
        'Sec-CH-UA-Mobile': '?1',
        'Sec-CH-UA-Platform': '"Android"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36',
        'X-RapidAPI-Host': 'terabox-downloader-direct-download-link-generator2.p.rapidapi.com',
        'X-RapidAPI-Key': RAPIDAPI_KEY
      }
    });

    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const data = await response.json();
      return res.json(data);
    } else {
      const text = await response.text();
      return res.send(text);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

app.post("/iteraplay", async (req, res) => {
  const { link } = req.body;

  if (!link) {
    return res.status(400).json({ error: "link is required in body" });
  }

  try {
    const apiUrl = "https://api.iteraplay.com/iteraplay.php";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,hi;q=0.6",
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "DNT": "1",
        "Origin": "https://iteraplay.com",
        "Pragma": "no-cache",
        "Referer": "https://iteraplay.com/",
        "Sec-CH-UA": '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
        "Sec-CH-UA-Mobile": "?1",
        "Sec-CH-UA-Platform": '"Android"',
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36",
        "x-api-key": terabox_pro_api_august_2025_premium,
      },
      body: JSON.stringify({ link }),
    });

    const data = await response.json();
    return res.json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
