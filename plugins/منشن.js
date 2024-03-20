let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}//غير ڤينوم و حط اسم بوتك
let pesan = args.join` `
let oi = `*❈الرساله:* ${pesan}`
let teks =`『𝐵𝑅𝑈𝐶𝐸🦇𝑊𝐴𝑌𝑁𝐸』\n\n ${oi}\n\n*🗡┇الجروب :⇣*\n`
for (let mem of participants) {
teks += `*تفاعل ↫* @${mem.id.split('@')[0]}\n`}
teks += `*𝑁𝐸𝑍𝑈𝐾𝛩-𝐵𝛩𝑇*\n\n*『𝐵𝑅𝑈𝐶𝐸🦇𝑊𝐴𝑌𝑁𝐸』*

*▌│█║▌║▌║║▌║▌║▌║█*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(منشن|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
