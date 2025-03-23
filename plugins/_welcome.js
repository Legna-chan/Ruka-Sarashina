import fs from 'fs';
import path from 'path';
import { WAMessageStubType } from '@whiskeysockets/baileys';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return;

  let img;
  try {
    img = fs.readFileSync(path.join(process.cwd(), 'src', 'welcome.jpg'));
  } catch (error) {
    console.error('No se pudo cargar la imagen:', error);
    return;  // Salir si la imagen no se puede cargar
  }

  let chat = global.db.data.chats[m.chat];
  
  if (chat.welcome) {
    let who = m.messageStubParameters[0]?.replace('@', '') + '@s.whatsapp.net';

    if (m.messageStubType === WAMessageStubType.ADD) {
      let welcome = `「✿」Yami - MD \n「 Bienvenido :3 」\n「 @${m.messageStubParameters[0].split('@')[0]} 」\n「 Bienvenido/a 」\n「 ${groupMetadata.subject} 」\n\n> ✐ Usa *#ayuda* para ver mi menú.`;
      await conn.sendMini(m.chat, packname, textbot, welcome, img, img, redes, fkontak);
    }

    if (m.messageStubType === WAMessageStubType.REMOVE) {
      let bye = `「✿」Kafuu - MD \n「 Adiós 」\n「 @${m.messageStubParameters[0].split('@')[0]} 」\n「 Se fue 」\n「 Vuelve pronto :3 」\n\n> ✐ Usa *#ayuda* para ver el menú.`;
      await conn.sendMini(m.chat, packname, textbot, bye, img, img, redes, fkontak);
      await conn.sendMessage(m.chat, { image: img, caption: bye, mentions: [who] });
    }

    if (m.messageStubType === WAMessageStubType.KICK) {
      let kick = `「✿」Kafuu - MD \n「 Adiós 」\n「 @${m.messageStubParameters[0].split('@')[0]} 」\n「 Se fue 」\n「 Vuelve pronto :3 」\n\n> ✐ Usa *#ayuda* para ver mi menú.`;
      await conn.sendMini(m.chat, packname, textbot, kick, img, img, redes, fkontak);
      await conn.sendMessage(m.chat, { image: img, caption: kick, mentions: [who] });
    }
  }
}