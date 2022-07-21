let nifty50 = [
  "INDUSINDBK",
  "BAJFINANCE",
  "TATACONSUM",
  "UPL",
  "LT",
  "BAJAJFINSV",
  "ASIANPAINT",
  "BPCL",
  "HINDALCO",
  "TECHM",
  "POWERGRID",
  "GRASIM",
  "BAJAJ-AUTO",
  "AXISBANK",
  "ADANIPORTS",
  "EICHERMOT",
  "DIVISLAB",
  "NESTLEIND",
  "INFY",
  "SHREECEM",
  "BHARTIARTL",
  "M&M",
  "HDFCLIFE",
  "TATASTEEL",
  "MARUTI",
  "APOLLOHOSP",
  "TITAN",
  "HCLTECH",
  "ULTRACEMCO",
  "HEROMOTOCO",
  "HDFC",
  "ONGC",
  "SBIN",
  "TCS",
  "ITC",
  "SUNPHARMA",
  "BRITANNIA",
  "COALINDIA",
  "WIPRO",
  "ICICIBANK",
  "TATAMOTORS",
  "HINDUNILVR",
  "NTPC",
  "HDFCBANK",
  "JSWSTEEL",
  "RELIANCE",
  "CIPLA",
  "KOTAKBANK",
  "SBILIFE",
  "DRREDDY",
];

console.log(nifty50.slice(1, 5));

let newStocks = nifty50.slice(); // arr.slice() creates a copy of arr

console.log(newStocks);

let revereseStocks = nifty50.slice(2, -1); // from last 10 to index 2

console.log(revereseStocks.length);

let newStocks100 = nifty50.slice(10, 13, "abc"); // from last 10 to index 2

console.log(newStocks100);
