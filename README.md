# 🪙 Crypto Arbitrage Tracker

This project is like a **price detective** 👀 for cryptocurrencies.  
It checks the price of **Ethereum (ETH)** on **two exchanges** (Binance and Kraken),  
then compares them to see if there is a **difference (arbitrage)**.

If the difference is big enough, that means:  
👉 You could buy cheaper on one exchange and sell higher on the other.  

---

## ✨ What This Project Does

- ⏱️ Every **5 seconds**, it fetches ETH price from Binance and Kraken.  
- 📊 Calculates the **percentage difference** between the two prices.  
- 🗂️ Keeps the latest result in memory.  
- 🌍 Exposes a simple API at:  http://localhost:3000/api/arbitrage
- 📢 You (or a frontend) can check this API anytime to see the latest result.


## 🚀 How to Run
1. Clone this repo:
2.Install dependencies:

npm install


3.Start the server:

node server/server.js or node index.js

🎯 Why I Built This

## Learn by doing....
I wanted to learn real-world problem solving with JavaScript while working on something related to crypto bot development.

This project helped me understand:

How to fetch data from real exchange APIs

How to automate tasks with setInterval

How to serve data with an Express API
