import axios from 'axios';
import { BINANCE_API_URL, KRAKEN_API_URL } from '../constants/constant.js';


export async function getBinanceEthPrice(){
    try{
        const response = await axios.get(BINANCE_API_URL);
        const binanceEthPrice = response.data.price
        console.log(`ETH Price (Binance) : $${binanceEthPrice}`);
        return binanceEthPrice;
    }catch(err){
        console.log("error fetching Binancedata",err.message);
    }
    
}

export async function getKrakenEthPrice(){
    try{
        const response = await axios.get(KRAKEN_API_URL) //Add ,{timeout: 5000};
        // The key for ETHerium in Kraken's API is  'XETHZUSD'
        const result = response.data.result.XETHZUSD;
        const price = result.c[0];
        console.log(`ETH Price (Kraken): $${price}`);
        return price;
    }
    catch(err){
        console.log("error fetching Krakendata",err.message);
        //setTimeout(getKrakenEthPrice,3000);
       
    }
}