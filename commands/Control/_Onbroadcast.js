/*CMD
  command: /Onbroadcast
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Control
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request){
return
}

var msg = message

Bot.sendMessageToAllPrivateChats("📮 News\n\n"+msg)

Bot.sendMessage("Done")
