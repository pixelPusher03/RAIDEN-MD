const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *The developer03*

> *RAIDEN MD REPO:*
*|* *https://github.com/pixelPusher03/Raiden-MD*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029ValASu1IN9ifummBKW1U*
*╰──────────────●●►*

> *RAIDEN-MD*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363321103874131@newsletter',
      newsletterName: "The Developer03",
      serverMessageId: 144
    },
externalAdReply: { 
title: 'RAIDEN MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/pixelPusher03/Raiden-MD" ,
thumbnailUrl: "https://i.postimg.cc/s24D58SZ/raiden.png" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
