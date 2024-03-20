const fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❗] اهلا انا شات جي بي تي *\n\n*—◉ مثال على طلبات*\n*◉ ${usedPrefix + command} .بوت اعطني كود بايثون*\n*◉ ${usedPrefix + command} .بوت اعطني انمي*`
try {
await conn.sendPresenceUpdate('composing', m.chat)
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*[❗] خطأ لايوجد*`
}}
handler.command = ['openai', 'شات', 'ia', 'robot']
module.exports = handler
