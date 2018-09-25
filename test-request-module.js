const request = require('request');

// Key Point : You should only await on something that returns a Promise.
function doRequest(url) {
    console.log('In doReq');
    return new Promise(function (resolve, reject) {
      request(url, function (error, res, body) {
        if (!error && res.statusCode == 200) {
          console.log('Got Response');
          resolve(body);
        } else {
          reject(error);
        }
      });
    });
  }
  
  // Usage:
  
  async function main() {
    const videoId = 'Yl6ggYwxL3c';
    const api_key = '**';
    const url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+videoId+'&key='+api_key;
    console.log('Call doReq from Main');  
    let res = await doRequest(url);
    console.log('Back to Main');
    console.log(res);
  }
  
  main();