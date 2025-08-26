import { getBinanceEthPrice, getKrakenEthPrice } from './fetchPrice.js';
import { THRESHOLD } from '../constants/constant.js';
export async function calculateArbitrage(){
    try{
         //const ETHPriceBinance = await getBinanceEthPrice();
         //let ETHPriceKraken = await getKrakenEthPrice();

        let [ETHPriceBinance, ETHPriceKraken] = await Promise.all([getBinanceEthPrice(), getKrakenEthPrice()]);
        ETHPriceBinance = parseFloat(ETHPriceBinance);
        ETHPriceKraken = parseFloat(ETHPriceKraken);
        console.log('Value from Binance:', ETHPriceBinance);
        
        if(ETHPriceKraken === undefined){
            let ETHPriceKraken = 0;
            console.log('Value from Kraken:', parseFloat(ETHPriceKraken));
        }
        else{
            console.log('Value from Kraken:', parseFloat(ETHPriceKraken));
        }
        
        if ((ETHPriceBinance + ETHPriceKraken) / 2 === 0) {
            // Handle the case where the average is zero to avoid division by zero
            console.log("0 Found")
            return 0; 
        }
        const difference = parseFloat(Math.abs(ETHPriceBinance - ETHPriceKraken));
        const average = (parseFloat(ETHPriceBinance) + parseFloat(ETHPriceKraken)) / 2;
        console.log("avg", ETHPriceBinance, '+' , ETHPriceKraken, '/', '2');
        const percentageDifference = parseFloat(difference / average) * 100;
        console.log(
            difference, '/' ,average, '*', '100'
        )
        if (percentageDifference === NaN || percentageDifference === undefined) {
            return 0;
        }
    
        console.log('Arbitrage %:', percentageDifference, '%');
        
        if (percentageDifference >= THRESHOLD) {
            console.log('Arbitrage opportunity found!');

        }
        else {
            console.log('No arbitrage opportunity found.');
        }

        return { ETHPriceBinance, ETHPriceKraken, percentageDifference };
    }catch(err){
        console.error('Error in calculation:', err);
        throw err;        
    }

}
//calculateArbitrage();

