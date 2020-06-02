'use strict';


$( function() {
    console.log("Działa");
} );

let buy = $(".buy");
let sell = $(".sell");
let btn = $(".btn");


$.getJSON(
    "https://blockchain.info/pl/ticker",
    function (data){

        let obj = data;
        
        let objKey = Object.keys(obj);

        let keyArray = objKey.map((key) => {

            let objCurrency = {
                currency: key,
                buy: obj[key].buy,
                sell: obj[key].sell
            }


            btn.click( function() {
                buy.text(objCurrency.buy),
                sell.text(objCurrency.sell);

                console.log(objCurrency.currency);
                  
         })
     });    
 })
        
        
    