/*CMD
  command: /setwallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Extra
  answer: 
  keyboard: 
  aliases: ♻️set wallet
CMD*/

let wallet = User.getProperty("wallet")
if(wallet==undefined){
var button = [
[{title : "💼 Set / Change Wallet" , command : "/wallet"}]
]
Bot.sendInlineKeyboard(button,"*💡 Your currently set btt wallet is:* not set\n\n💹It will be used for *all future withdrawals.*");
}else{
var button = [
[{title : "💼 Set / Change Wallet" , command : "/wallet"}]
]
Bot.sendInlineKeyboard(button,"*💡 Your currently set btt wallet is:* \n "+wallet+"\n\n💹It will be used for *all future withdrawals.*");
}
