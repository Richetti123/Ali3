

const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/es.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `➩ 🩵 𝐌𝐄𝐍𝐒𝐀𝐉𝐄: ${pesan}`;
  let teks = `*🩵 𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐀 𝐆𝐄𝐍𝐄𝐑𝐀𝐋 🩵*\n${oi}\n\n*┏ ➩𝐌𝐄𝐍𝐂𝐈𝐎𝐍𝐄𝐒:*\n`;
  for (const mem of participants) {
    teks += `┃➩ @${mem.id.split('@')[0]}\n`;
  }
  teks += `┗━➤ @dxnn.lxa`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
