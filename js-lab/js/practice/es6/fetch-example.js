let fetch = require('node-fetch')

const url =
  "https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftyStockWatch.json";

const fetchHeader = {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.5",
        Connection: "keep-alive",
        Host: "www1.nseindia.com",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0",
      }

// fetch(url, {headers: {
    
// "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
// "Accept-Encoding": "gzip, deflate, br",
// "Accept-Language": "en-US,en;q=0.5",
// "Connection": "keep-alive",
// "Host": "www1.nseindia.com",
// "Sec-Fetch-Dest": "document",
// "Sec-Fetch-Mode": "navigate",
// "Sec-Fetch-Site": "none",
// "Sec-Fetch-User": "?1",
// "Upgrade-Insecure-Requests": "1",
// "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0",

//   }}).then(res => res.json()).then(data => console.log(data.data))


  async function nifty() {

    try {
      
      let response = await fetch(url, {
        headers: fetchHeader,
      });
  
      let data = await response.json()

      console.log('------------------------------------------');
      console.table(data.data);
    } catch (error) {

      console.log(error);
      
    }



    
  }

  nifty()