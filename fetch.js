import fetch from 'node-fetch'; // if Node 18+, you can use global fetch



async function fetchData() {
  try {
    const response = await fetch(url, { headers });
    const data = await response.text(); // use .json() if the response is JSON
    console.log(data);
  } catch (err) {
    console.error('Error fetching data:', err);
  }
}

fetchData();
