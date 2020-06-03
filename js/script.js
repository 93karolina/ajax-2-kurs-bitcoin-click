'use strict';


$( function() {
    console.log("Działa");
} );

let buy = $(".buy");
let sell = $(".sell");
let btn = $(".btn");

let beforeBuy = buy.text();
let beforeSell = sell.text();

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

                let afterBuy = obj[key].buy;
        
                if (beforeBuy < afterBuy) {
                    console.log("zwiekszylo sie");
                    $(".arrow-buy").html(`<i class="fas fa-long-arrow-alt-up green" ></i>`)
                    
                } else if ( beforeBuy === afterBuy) {
                    console.log("taki sam");
                    $(".arrow-buy").html(`<i class=""fas fa-minus blue" ></i>`)

                } else {
                    console.log("zmniejszylo");
                    $(".arrow-buy").html(`<i class="fas fa-long-arrow-alt-down red"></i>`)
                }

                
         })
     });    
 })
        
        
    