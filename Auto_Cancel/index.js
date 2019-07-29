// chargebee API KEY live_G8Gfz11MVRviIWiigKBhsYQR606MQAiq
// agile rest api key: e85jkrcgjar255e5mqc6ch3i5r

const chargebee = require('chargebee');
const moment = require('moment');

chargebee.configure({site : "growthpr", 
  api_key : "live_G8Gfz11MVRviIWiigKBhsYQR606MQAiq"});

  console.log(moment().add(1, 'd').startOf('day').toString())
  console.log(moment().add(2, 'd').startOf('day').toString())

  chargebee.subscription.list({
    limit: 100,
    "next_billing_at[after]" : moment().add(1, 'd').startOf('day').unix(),
    "next_billing_at[before]" : moment().add(2, 'd').startOf('day').unix()

  }).request(function(error,result) {
    if(error){
      //handle error
      console.log(error);
    } else {
      console.log(result.list.length)
      
      // for(var i = 0; i < result.list.length;i++) {
      //     var entry=result.list[i]
      //     console.log(entry);
      //     var subscription = entry.subscription;
      //     var customer = entry.customer;
      //     var card = entry.card;
      //   }
      }
    });
