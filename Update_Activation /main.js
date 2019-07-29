
/**
 * 
 */
cost chargebee = require('chargebee');
const agilecrm = require('agile_crm',)

let success = function (data) {
    console.log(data)
}

let error = function (data) {
    console.log(data);
}

let obj = new agilecrm("growthsocial.agilecrm.com", "e85jkrcgjar255e5mqc6ch3i5r", "support@growthsocialmedia.com");

chargebee.configure({site : "exoid-test",
  api_key : "test_OufzAcCB3co6maz32P9PhfVtqtD0imAd"});

  



