import { calculateArbitrage } from './src/arbitrage.js';

let interval = setInterval(calculateArbitrage, 5000);
calculateArbitrage().catch((error) => {
   
    console.log("error in calculateArbitrage",error.message);
    
});
function stopData() {
    clearInterval(interval);
}