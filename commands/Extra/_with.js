/*CMD
  command: /with
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Extra
  answer: 
  keyboard: 
  aliases: 
CMD*/


var withdraw = Libs.ResourcesLib.userRes("withdraw");
var wallet = User.getProperty("wallet");
var balance = Libs.ResourcesLib.userRes("balance")
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
let userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global");

var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var value = message
if(!isNumeric(value)){
Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*",{is_reply:true})
return
}

if(message < 1){
Bot.sendMessage("❌ Minimum amount to withdraw 1 TRX")
}else{
if(message > balance.value()){
Bot.sendMessage("_🚫 You Can Withdraw Maximum: "+balance.value().toFixed(6)+" TRX")
}else{
Libs.CoinPayments.apiCall({
  fields: { cmd: "create_withdrawal",
            amount: message // input your withdrawal amount
,
            currency: "BTT" //currency for withdrawal
,
address: wallet,
           auto_confirm: 1
},
  onSuccess: '/onSuccess',
  onPaymentCompleted: '/onPaymentCompleted'
});
balance.add(-message)
withdraw.add(+message)
userPayment.add(+message)
Api.sendMessage ({chat_id: "@Auto_invest_payments", text: "*✅ New Withdrawal ✅\n\n*"+info+"* just withdrawn "+message+" BTT!\n\n💵 Amount *: "+message+" *BTT\n\n➕ User address : *"+wallet+"*\n\n⏱️ *_Our server time_ : "+time+"\n\n*🛡 Bot Link: @Auto_btt_pay_bot*\n\n🔥 Refer and earn  🔥",parse_mode : "Markdown" , disable_web_page_preview: true
});
}
}
