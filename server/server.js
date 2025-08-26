import express from "express";
import  {calculateArbitrage}  from "../src/arbitrage.js";

const app = express();
const PORT = 3000;

let result = {message : "No data yet... "}

setInterval(async () => {
  try {
    result = await calculateArbitrage();
    console.log("Updated arbitrage:", result);
  } catch (err) {
    console.error("Error in job:", err.message);
  }
}, 5000);

app.get("/api/arbitrage", (req, res) =>{
    res.json(result);
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});