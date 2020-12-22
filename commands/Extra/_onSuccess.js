/*CMD
  command: /onSuccess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Extra
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = options.body.result;
var error = options.body.error;
var wallet = User.getProperty("wallet")

if (error == "ok"){


 Bot.sendMessage("*✅ Withdrawal Requested*\nYour payment is being processed automatically right now!\n\nSecured Payment ID:\n*"+result.id+"*\n_You will receive TXID soon _\n\n*💳 Transaction Details:*\n"+(result.amount)+" *BTT* to the wallet\n"+wallet);
}else{

Bot.sendMessage(error)

 }
