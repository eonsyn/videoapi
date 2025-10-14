const payload = {
    link:"https://1024terabox.com/s/1urCjCT6lk748Cs_j-Tqxew"
}
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
};
fetch('https://tboxdownloader.in/tbox/basic/v2/tboxdownloader-in.php', requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
