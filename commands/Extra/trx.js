/*CMD
  command: trx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Extra
  answer: 
  keyboard: 
  aliases: 
CMD*/

var res = Libs.ResourcesLib.userRes("balance");
if(res.value() < 10){
Bot.sendMessage("❌ Minimum amount to withdraw 10 btt")
}else{
Bot.sendKeyboard("🔙 Back","📤 _How many btt you want to withdraw?_\n\n*Minimum:* 10 btt"+"\n"+"*Maximum:* "+res.value().toFixed(8)+"*\n"+"*\n_Maximum amount corresponds to your balance_"+"\n\n"+"*➡️ Send now the amount of you want to withdraw*")
Bot.runCommand("/with")
}
