module.exports.config = {
	name: "admin",
	version: "1.0.7",// thêm 2 cái phế thải
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Turn on and off qtv only mode using the command",
	commandCategory: "Admin",
	usages: "Turn on and off only admin and qtv mode using the command",
    cooldowns: 0,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
    "vi": {
        "listAdmin": `======〘🌍『𝐀𝐃𝐌𝐈𝐍』🌍〙======\n\n%1`,
        "listNDH": `===「𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐇𝐨̂̃ 𝐓𝐫𝐨̛̣ 𝐁𝐨𝐭」===\n\n%1`,
        "notHavePermssion": '『❌』 𝐁𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 đ𝐮̉ 𝐪𝐮𝐲𝐞̂̀𝐧 𝐡𝐚̣𝐧 𝐝𝐞̂̉ 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐜𝐡𝐮̛́𝐜 𝐧𝐚̆𝐧𝐠 "%1"',
        "addedNewAdmin": '『✔️』 Đ𝐚̃ 𝐭𝐡𝐞̂𝐦 %𝟏 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐭𝐫𝐨̛̉ 𝐭𝐡𝐚̀𝐧𝐡 𝐚𝐝𝐦𝐢𝐧-𝐛𝐨𝐭:\n\n%2',
        "removedAdmin": '『✔️』 Đ𝐚̃ 𝐠𝐨̛̃ 𝐛𝐨̉ %𝟏 𝐧𝐠𝐮̛𝐨̛̀𝐢 đ𝐢𝐞̂̀𝐮 𝐡𝐚̀𝐧𝐡 𝐛𝐨𝐭:\n\n%𝟐',
        "adminsupport": '『✔️』 Đ𝐚̃ 𝐭𝐡𝐞̂𝐦 %𝟏 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐭𝐫𝐨̛̉ 𝐭𝐡𝐚̀𝐧𝐡 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐡𝐨̂̃ 𝐭𝐫𝐨̛̣ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐢𝐞̂̀𝐮 𝐡𝐚̀𝐧𝐡 𝐛𝐨𝐭:\n\n%𝟐'
    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1',
        "notHavePermssion": '[Admin] You have no permission to use "%1"',
        "addedNewAdmin": '[Admin] Added %1 Admin :\n\n%2',
        "removedAdmin": '[Admin] Remove %1 Admin:\n\n%2'
    }
}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const content = args.slice(1, args.length);
    if (args.length == 0) return api.sendMessage(`『🔎』𝐁𝐚̣𝐧 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐝𝐮̀𝐧𝐠\n» 𝐚𝐝𝐦𝐢𝐧 𝐚𝐝𝐝 ➣ 𝐭𝐡𝐞̂𝐦 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐥𝐚̀𝐦 𝐚𝐝𝐦𝐢𝐧\n» 𝐚𝐝𝐦𝐢𝐧 𝐥𝐢𝐬𝐭 ➣ 𝐱𝐞𝐦 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐜𝐚́𝐜 𝐚𝐝𝐦𝐢𝐧\n» 𝐚𝐝𝐦𝐢𝐧 𝐫𝐞𝐦𝐨𝐯𝐞 ➣ 𝐠𝐨̛̃ 𝐛𝐨̉ 𝐚𝐝𝐦𝐢𝐧\n» 𝐚𝐝𝐦𝐢𝐧 𝐫𝐞𝐬𝐩 ➣ 𝐠𝐨̛̃ 𝐛𝐨̉ 𝐧𝐝𝐡\n» 𝐚𝐝𝐦𝐢𝐧 𝐛𝐨𝐱𝐨𝐧𝐥𝐲 ➣ 𝐛𝐚̣̂𝐭 𝐭𝐚̆́𝐭 𝐜𝐡𝐞̂́ 𝐝𝐨̣̂ 𝐜𝐡𝐢̉ 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐝𝐮̀𝐧𝐠 𝐛𝐨𝐭\n» 𝐚𝐝𝐦𝐢𝐧 𝐨𝐧𝐥𝐲 ➣ 𝐛𝐚̣̂𝐭 𝐭𝐚̆́𝐭 𝐜𝐡𝐞̂́ 𝐝𝐨̣̂ 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 𝐝𝐮̛𝐨̛̣𝐜 𝐛𝐨𝐭\n» 𝐚𝐝𝐦𝐢𝐧 𝐜𝐡𝐚𝐭  ➣ [ 𝐨𝐧 / 𝐨𝐟𝐟 ] 𝐂𝐡𝐢̉ 𝐀𝐝𝐦𝐢𝐧 𝐌𝐨̛́𝐢 Đ𝐮̛𝐨̛̣𝐜 𝐂𝐡𝐚𝐭 𝐑𝐢𝐞̂𝐧𝐠 𝐕𝐨̛́𝐢 𝐁𝐨𝐭\n» 𝐇𝐃𝐒𝐃: ${global.config.PREFIX}𝐚𝐝𝐦𝐢𝐧 𝐥𝐞̣̂𝐧𝐡 𝐛𝐚̣𝐧 𝐜𝐚̂̀𝐧 𝐝𝐮̀𝐧𝐠!
`, event.threadID, event.messageID);
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { NDH } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);
    switch (args[0]) {
        case "list": {
          listAdmin = ADMINBOT || config.ADMINBOT ||  [];
            var msg = [];
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                  const name = (await Users.getData(idAdmin)).name
                    msg.push(`『📌』${name}\n『🔎』𝐋𝐢𝐧𝐤: facebook.com/${idAdmin}`);
                }
            }
          listNDH = NDH || config.NDH ||  [];
            var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`『📌』${name1}\n『🔎』𝐋𝐢𝐧𝐤: facebook.com/${idNDH}`);
                }
            }
return api.sendMessage(`======〘🌍『𝐀𝐃𝐌𝐈𝐍』🌍〙======\n»============«\n\n${msg.join("\n")}\n\n————————🛎————————\n\n===「𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐇𝐨̂̃ 𝐓𝐫𝐨̛̣ 𝐁𝐨𝐭」===\n»============«\n\n${msg1.join("\n\n")}`, event.threadID, event.messageID)
        }
        case "add": { 
            if (event.senderID != 100021818985662) return api.sendMessage(`『❗』𝐗𝐢𝐧 𝐥𝐨̂̃𝐢! 𝐥𝐞̣̂𝐧𝐡 𝐧𝐚̀𝐲 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 𝐝𝐮̛𝐨̛̣𝐜!`, event.threadID, event.messageID)
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listAdd.push(`『🌍』 ${id} 『🌍』 » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `『🤖』ADMIN SP『🌍』→ ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
case "sp": {
            if (event.senderID != 100021818985662) return api.sendMessage(`『❗』𝐗𝐢𝐧 𝐥𝐨̂̃𝐢! 𝐥𝐞̣̂𝐧𝐡 𝐧𝐚̀𝐲 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 𝐝𝐮̛𝐨̛̣𝐜!`, event.threadID, event.messageID)
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    NDH.push(id);
                    config.NDH.push(id);
                    listAdd.push(`『🌍』 ${id} 『🌍』 » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("adminsupport", 1, `『🤖』ADMIN SP『🌍』→ ${name}`), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                NDH.push(content[0]);
                config.NDH.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("adminsupport", 1, `『🤖』ADMIN SP『🌍』→ ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
        case "remove":
        case "rm":
        case "delete": {
            if (event.senderID != 100021818985662) return api.sendMessage(`『❗』𝐗𝐢𝐧 𝐥𝐨̂̃𝐢! 𝐥𝐞̣̂𝐧𝐡 𝐧𝐚̀𝐲 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 𝐝𝐮̛𝐨̛̣𝐜!`, event.threadID, event.messageID)
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`『🌍』 ${id} 『🌍』 » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `『📌』 ${content[0]} 『🔎』 → ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }
        case "resp": {
            if (event.senderID != 100021818985662) return api.sendMessage(`『❗』𝐗𝐢𝐧 𝐥𝐨̂̃𝐢! 𝐥𝐞̣̂𝐧𝐡 𝐧𝐚̀𝐲 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 𝐝𝐮̛𝐨̛̣𝐜!`, event.threadID, event.messageID)
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.NDH.findIndex(item => item == id);
                    NDH.splice(index, 1);
                    config.NDH.splice(index, 1);
                    listAdd.push(`『🌍』 ${id} 『🌍』 » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.NDH.findIndex(item => item.toString() == content[0]);
                NDH.splice(index, 1);
                config.NDH.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `『📌』 ${content[0]} 『🔎』→ ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
                              }
        case 'boxonly': {
          const { threadID, messageID, mentions } = event;
        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;   
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("『✔️』𝐓𝐚̆́𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐞̂́ 𝐝𝐨̣̂ 𝐐𝐓𝐕 𝐎𝐧𝐥𝐲", threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage("『✔️』 𝐁𝐚̣̂𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐞̂́ 𝐝𝐨̣̂ 𝐐𝐓𝐕 𝐎𝐧𝐥𝐲", threadID, messageID);
        }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
        break;
    }
    case 'only':
        case '-o': {
            //---> CODE ADMIN ONLY<---//
            if (permssion != 3) return api.sendMessage("『❗』𝐗𝐢𝐧 𝐥𝐨̂̃𝐢! 𝐥𝐞̣̂𝐧𝐡 𝐧𝐚̀𝐲 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐨𝐫 𝐚𝐝𝐦𝐢𝐧 𝐬𝐮𝐩𝐩𝐨𝐫𝐭 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 đ𝐮̛𝐨̛̣𝐜", threadID, messageID);
            if (config.adminOnly == false) {
                config.adminOnly = true;
                api.sendMessage(`『✔️』𝐁𝐚̣̂𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐢̉ 𝐀𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 𝐝𝐮̛𝐨̛̣𝐜 𝐛𝐨𝐭`, threadID, messageID);
            } else {
                config.adminOnly = false;
                api.sendMessage(`『✔️』𝐓𝐚̆́𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐢̉ 𝐀𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 𝐝𝐮̛𝐨̛̣𝐜 𝐛𝐨𝐭`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
              }
				case 'pa':
        case '-p': {
            if (permssion != 3) return api.sendMessage("『❗』𝐗𝐢𝐧 𝐥𝐨̂̃𝐢! 𝐥𝐞̣̂𝐧𝐡 𝐧𝐚̀𝐲 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 𝐝𝐮̛𝐨̛̣𝐜", threadID, messageID);
            if (config.adminPaseOnly == false) {
                config.adminPaseOnly = true;
                api.sendMessage(`『✔️』𝐁𝐚̣̂𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐨𝐫 𝐚𝐝𝐦𝐢𝐧 𝐬𝐩 𝐦𝐨̛́𝐢 𝐧𝐡𝐚̆́𝐧 𝐫𝐢𝐞̂𝐧𝐠 𝐯𝐨̛́𝐢 𝐛𝐨𝐭 đ𝐮̛𝐨̛̣𝐜`, threadID, messageID);
            } else {
                config.adminPaseOnly = false;
                api.sendMessage(`『✔️』 𝐓𝐚̆́𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐨𝐫 𝐚𝐝𝐦𝐢𝐧 𝐬𝐩 𝐦𝐨̛́𝐢 𝐧𝐡𝐚̆́𝐧 𝐫𝐢𝐞̂𝐧𝐠 𝐯𝐨̛́𝐢 𝐛𝐨𝐭 đ𝐮̛𝐨̛̣𝐜`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
							}
        case 'sponly':
        case '-s': {
            if (permssion != 3) return api.sendMessage("『❗』 𝐗𝐢𝐧 𝐥𝐨̂̃𝐢! 𝐥𝐞̣̂𝐧𝐡 𝐧𝐚̀𝐲 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 𝐝𝐮̛𝐨̛̣𝐜", threadID, messageID);
            if (config.ndhOnly == false) {
                config.ndhOnly = true;
                api.sendMessage(`『✔️』𝐁𝐚̣̂𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐨𝐫 𝐚𝐝𝐦𝐢𝐧 𝐬𝐩 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 𝐛𝐨𝐭`, threadID, messageID);
            } else {
                config.ndhOnly = false;
                api.sendMessage(`『✔️』𝐓𝐚̆́𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐢̉ 𝐚𝐝𝐦𝐢𝐧 𝐨𝐫 𝐚𝐝𝐦𝐢𝐧 𝐬𝐩 𝐦𝐨̛́𝐢 𝐝𝐮̀𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 𝐛𝐨𝐭`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
							}
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
}
