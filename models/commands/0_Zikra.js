const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "Zikra",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "SHANKAR SUMAN",
        description: "no prefix",
        usePrefix: false,
        commandCategory: "No command marks needed",
        usages: "Yo Yo",
        cooldowns: 5,
    },

    // Array of Imgur URLs
    handleEvent: async function({ api, event, client, Users, __GLOBAL }) {
        const gifs = [
            "https://i.imgur.com/NyoG9LO.jpeg",
            "https://i.imgur.com/fbXkTeg.jpeg",
            "https://i.imgur.com/9eU4OAl.jpeg",
            "https://i.imgur.com/QgMalyI.jpeg",
            "https://i.imgur.com/Mq6Njwr.jpeg",
            "https://i.imgur.com/4ntjbKs.jpeg"
        ];

        const message = "●💐 =======❤️💐❤️💐❤️❤️  =======💐     ☟  ========== ☟ ==========  ☟  ●============================●     𝐎𝐰𝐧𝐞𝐫 ➻────╔╬⓼★⓼╃───────➣🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🄰🅁🅈🄰🄽𝄠━─━Ⓔ⧐╰✾✾®️╀✿✿╀─━ↈⓇ⧐";
        const { threadID, messageID } = event;
        const lowerCaseMessage = event.body.toLowerCase();

        if (lowerCaseMessage.startsWith("zikra")) {  
            // Select a random image URL from the array
            const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
            const downloadPath = path.join(__dirname, 'Zikra-Jpg-Images.jpg');

            // Download image from the random URL
            request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                const msg = {
                    body: message,
                    attachment: fs.createReadStream(downloadPath)
                };
                api.sendMessage(msg, threadID, messageID);
                api.setMessageReaction("🙈", event.messageID, (err) => {}, true);
            });
        }
    },

    run: function({ api, event, client, __GLOBAL }) {
        // Empty run function for module requirements
    },
}
