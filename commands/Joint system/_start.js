/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Joint system
  answer: 
  keyboard: 
  aliases: 
CMD*/

var welco = User.getProperty("welco")
if (welco == undefined) {
var tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
  tota.add(1)
var balance = Libs.ResourcesLib.userRes("balance")
balance.add(1)
Bot.sendMessage("🎁 welcome bonus 1 BTT")
}
User.setProperty("welco", user.telegramid, "text")
function onAttracted(refUser){
// access to Bonus Res of refUser
var res = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid);
  res.add(0.00);  // add 0.05000 bonus for friend
var refchatid= refUser.chatId;
Bot.sendMessageToChatWithId( refchatid,"✔️ New referral - "+user.first_name+" \n🎁 Refer reward only if user joins all channels!");
}
Bot.sendKeyboard("✅ joined","*💡 To use this bot you must join this channels:@paytmHero1\n@LegitAirdrop_AndInvest\n@Ultra_looter\n@hiddenscripter123\n@Auto_invest_payments\n@UnknownScripterr99OfficiaL\n@MoneyEaringoffical\n@Airdrop_loots")
Libs.ReferralLib.currentUser.track({
   onAtractedByUser: onAttracted
});

