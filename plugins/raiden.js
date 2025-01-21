const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "panhwar",
    alias: ["panhwar", "panhwarmd", "panhwartime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╺╺╺⟢ ᴘᴀɴʜᴡᴀʀ  ⟣╺╺╺

━━━━━━━━━━━━━━━━━━━
 ᴏᴜʀ ᴄʜᴀɴɴᴇʟ:
 https://whatsapp.com/channel/0029ValASu1IN9ifummBKW1U

━━━━━━━━━━━━━━━━━━━
 ғᴏʟʟᴏᴡ ᴜs 

 https://github.com/Panhwar110
━━━━━━━━━━━━━━━━━━━
 ʙᴏᴛ ʀᴇᴘᴏs 

 ⚡ᴘᴀɴʜᴡᴀʀ⚡
https://github.com/Panhwar110/Panhwar-MD

⚡ғʀᴇᴇ ᴅᴇᴘʟᴏʏ ᴏᴘᴛɪᴏɴs⚡
1. https://talkdrove.com/auth/signup?ref=2E22E5E8
2. Aʟʟʟ ᴏᴛʜᴇʀs

━━━━━━━━━━━━━━━━━━━
 ᴍʏ ᴡᴇʙsɪᴛᴇ 

 https://powered-by-ansar-664f9fe56b2d.herokuapp.com/

━━━━━━━━━━━━━━━━━━━

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀɴsᴀʀ-ᴘᴀɴʜᴡᴀʀ

▢━━━━━━━━━━━━━━━━━━▢`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.imgur.com/UfzyhWN.jpeg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363321103874131@newsletter',
                    newsletterName: 'the Developer03',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
