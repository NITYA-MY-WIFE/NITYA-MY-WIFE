const fs = require("fs");
module.exports.config = {
  name: "eid mubarak",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "LEGEND ARYAN ", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("eid mubarak") ||
     react.includes("EID MUBARAK") || react.includes("🤲") || react.includes("EID MUBARAK") ||
react.includes("Eid Mubarak") ||
react.includes("🤲") ||     
react.includes("🤲")) {
    var msg = {
        body: `${name} 💐𝐘𝐄𝐇 𝐋𝐎 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐃𝐎𝐒𝐀 𝐊𝐇𝐀𝐎💐✿`,attachment: fs.createReadStream(__dirname + `/Aryan/received_1319184765957065.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
