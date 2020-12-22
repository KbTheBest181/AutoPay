/*CMD
  command: 🤚 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttom
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*☣ User : "+user.first_name+"\n\n🏵 Balance : btt "+balance.value().toFixed(1)+" \n\n🔄Refer And Earn More btt*")
