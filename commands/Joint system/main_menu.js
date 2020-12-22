/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Joint system
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status");
if (user=="member" | user =="administrator" | user=="creator"){
let referrer = Libs.ReferralLib.currentUser.attractedByUser();
if (referrer){
var res = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);
  res.add(0.00);  // add 0.05000 bonus for friend
var refchatid= referrer.chatId;
Bot.sendMessageToChatWithId( refchatid,"✔️Channels Joined by - "+user.first_name+" \n🎁 +5 BTT");
}
var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("🤚 Balance\n🏵 Referral,,🔅Withdraw,\n♻️Set wallet", "*🔄 Refer and Earn btt*")
}
if (user=="left"){
Bot.runCommand("/start");

}

