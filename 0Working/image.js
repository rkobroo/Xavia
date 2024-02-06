module.exports.config = {
    name: "image",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",//tổng hợp api của JRT, ManhG,...
    description: "Xem tất cả các ảnh trên bot",
    commandCategory: "random-img",
    usages: "ảnh",
    cooldowns: 10,
    envConfig: {
      cooldownTime: 1200000
    }
  };
module.exports.run = async function ({ event, api , args, Users}){
    const fs = require("fs");
    const moment = require("moment-timezone"); 
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
    let name1 = await Users.getNameUser(event.senderID)
    var name = ["Sexy", "Gái nga", "Ganyu", "Twitter", "LGBT", "Loli", "Blackpink", "Tát", "Wallpaper", "Trai", "Jack", "Nude", "Instagram", "Kiss", "Ngực", "Meme", "Hentai", "Gái", "Mông", "Cosplay", "Kurumi", "Liên quân", "Lucy", "Sagiri", "Chitanda", "Rem", "Anime", "Naughty", "Wibu", "Beo", "Ausand", "Shiba", "Khánh Huyền", "Ngọc Trinh", "Linh Ngọc Đàm", "Jimmy", "Lê Bống", "Sex", "Độ Mixi", "Cặp đôi", "Streamer Hanna", "Nobra", "Gái Sexy", "Gái Xinh", "Trai đẹp", "Background 4K", "Anime Hot", "Gái Japan", "Gái China", "Hololive", "Hot Twitter", "Hot Instagram", "Gái VSBG", "Ảnh Phan Trần Anh Tâm", "Ảnh Sex 18+", "Japan", "VSBG Hot", "Gái Xinh Việt Nam"]
    var b = name.length;
    var page = 1;
    page = parseInt(args[0]) || 1;
    page < -1 ? page = 1 : "";
    var limit = 10;
    var numPage = Math.ceil(b / limit);
    var msg = `=== 『RANDOM IMAGE』 ===\n\n`;
    var x = 1;
    for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
        if (i >= b) break;
        msg += `${i+1} → ${name[i]}\n\n`;
    }
    msg += `→ Trang (${page}/${numPage})\n→ Dùng ${global.config.PREFIX}${this.config.name} <số trang>\n→ Xin mời ${name1} reply tin nhắn theo số thứ tự để chọn ảnh!!!\n=== 『 𝐁𝐎𝐓 』 ===\n\n===「${timeNow}」===`;
    return api.sendMessage(msg, event.threadID, (error, info) =>
    {
      global.client.handleReply.push(
      {
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID,
        type: "choose"
      });
    }, event.messageID);
  }
  module.exports.handleReply = async function ({ event, api , args, handleReply, Users}){
    const axios = require("axios");
    
             if(event.body == "1"){
         var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/gaisexy"
}
         else if(event.body == "2"){
         var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/gainga"
}
         else if(event.body == "3"){
         var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/ganyu"
}
          else if(event.body == "4"){
          var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/twitter"
}
          else if(event.body == "5"){
          var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/lgbt"
}
         else if(event.body == "6"){
          var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/loli"
}
         else if(event.body == "7"){
          var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/blackpink"
}
         else if(event.body == "8"){
          var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/slap"
}
         else if(event.body == "9"){
         var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/wallpaper"
}
         else if(event.body == "10"){
         var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/trai"
}
         else if(event.body == "11"){
         var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/jack"
}
        else if(event.body == "12"){
          var  url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/nude"
}
         else if(event.body == "13"){
          var  url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/instagram"
}
         else if(event.body == "14"){
         var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/kiss"
}
         else if(event.body == "15"){
         var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/gaivuto"
}
         else if(event.body == "16"){
          var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/meme"
}
         else if(event.body == "17"){
           var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/hentai"
}
         else if(event.body == "18"){
          var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/gai"
}
         else if(event.body == "19"){
           var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/gaiditbu"
}
         else if(event.body == "20"){
          var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/cosplay"
}
        else if(event.body == "21"){
          var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/kurumi.php"
}
       else if(event.body == "22"){
          var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/lienquan.php"
}
       else if(event.body == "23"){
          var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/lucy.php"
}
       else if(event.body == "24"){
          var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/sagiri.php"
}
       else if(event.body == "25"){
          var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/chitanda.php"
}
       else if(event.body == "26"){
           var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/rem.php"
}
       else if(event.body == "27"){
         var  url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/loli.php"
}
       else if(event.body == "28"){
           var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/naughty.php "
}
       else if(event.body == "29"){
           var url = "https://wibu.demngayyeu.repl.co/"
}
       else if(event.body == "30"){
         var url = "https://beo.demngayyeu.repl.co/"
}
       else if(event.body == "31"){
         var url = "https://ausand.demngayyeu.repl.co/"
}
       else if(event.body == "32"){
          var url = "https://shiba.demngayyeu.repl.co/"
}
       else if(event.body == "33"){
        var url = "https://khanhhuyen.demngayyeu.repl.co/"
}
       else if(event.body == "34"){
         var url = "https://ngoctrinh.demngayyeu.repl.co/"
}
       else if(event.body == "35"){
         var url = "https://linhngocdam.demngayyeu.repl.co/"
}
       else if(event.body == "36"){
         var url = "https://jimmy.demngayyeu.repl.co/"
}
       else if(event.body == "37"){
        var url = "https://lebong.demngayyeu.repl.co/"
}
       else if(event.body == "38"){
        var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/nude.php"
}
        else if(event.body == "39"){
        var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/domixi"
}
        else if(event.body == "40"){
        var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/capdoi"
}
        else if(event.body == "41"){
        var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/hanna"
}
        else if(event.body == "42"){
        var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/nobra.php"
}
        else if(event.body == "43"){
        var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/sexy.php"
}
        else if(event.body == "44"){
        var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/gái.php"
}
        else if(event.body == "45"){
        var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/trai.php"
}
        else if(event.body == "46"){
        var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/background.php"
}
        else if(event.body == "47"){
        var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/anime"
}
        else if(event.body == "48"){
        var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/japan.php"
}
        else if(event.body == "49"){
        var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/china.php"
}
    else if(event.body == "50"){
        var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/hololive.php"
}
    else if(event.body == "51"){
        var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/twitter.php"
}
    else if(event.body == "52"){
        var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/instagram.php"
}
    else if(event.body == "53"){
        var url = "https://apimyjrt.https://api-jrt.jrtxtracy.repl.co/vsbg.php"
}
    else if(event.body == "54"){
        var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/ptat"
}
    else if(event.body == "55"){
        var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/sex"
}
    else if(event.body == "56"){
        var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/japan"
}
    else if(event.body == "57"){
        var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/vsbg"
}
    else if(event.body == "58"){
        var url = "https://jrt-api.https://api-jrt.jrtxtracy.repl.co/gaixinhvn"
}
    switch(handleReply.type){
    case "choose":{
    api.unsendMessage(handleReply.messageID);
    const res = await axios.get(url);
    const fs = require ("fs");
    const moment = require("moment-timezone"); 
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
    let name = await Users.getNameUser(event.senderID)
    const data = res.data.data;
    const download = (await axios.get(data, {
        responseType: "stream"
    })).data;
    return api.sendMessage({body: `[⚜️] Success [⚜️]\n[❤️] Ảnh của ${name} đây!!!\n\n━━━━━━━━━━━━━━━\n[⚜️]=== 『 𝐁𝐎𝐓 𝐉𝐑𝐓 』 ===[⚜️]\n\n===「${timeNow}」===`, attachment : download}, event.threadID)
}
    }
}