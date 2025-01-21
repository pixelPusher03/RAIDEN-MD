const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs raiden-ʙᴏᴛ*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ The Developer03*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ Dev Codez*
*│  ◦* *ᴀɢᴇ➠ 300000 years*
*│  ◦* *ᴄɪᴛʏ➠ Earth 350*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • RAIDEN - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠The Developer03*
*│  ◦* *▢➠Pixel Pusher03*
*│  ◦* *▢➠Byte Smith03*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀʟᴋᴅʀᴏᴠᴇ
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
