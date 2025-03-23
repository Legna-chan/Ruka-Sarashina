import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return;

  let img = 'URL_O_VARIABLE_DE_IMAGEN'; // Asegúrate de definir la imagen correctamente
  let chat = global.db.data.chats[m.chat];

  if (chat.welcome) {
    let who = m.messageStubParameters[0]?.replace('@', '') + '@s.whatsapp.net';
    
    if (m.messageStubType === WAMessageStubType.ADD) {
      let welcome = `「✿」Yami - MD \n「 Bienvenido :3 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 Bienvenido/a 」\n「 ${groupMetadata.subject} 」\n\n> ✐ Usa *#ayuda* para ver mi menú.`;
      await conn.sendMini(m.chat, packname, textbot, welcome, img, img, redes, fkontak);
    }

    if (m.messageStubType === WAMessageStubType.REMOVE) {
      let bye = `「✿」Kafuu - MD \n「 Adiós 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 Se fue 」\n「 Vuelve pronto :3 」\n\n> ✐ Usa *#ayuda* para ver el menú.`;
      await conn.sendMini(m.chat, packname, textbot, bye, img, img, redes, fkontak);
      await conn.sendMessage(m.chat, { image: img, caption: bye, mentions: [who] });
    }

    if (m.messageStubType === WAMessageStubType.KICK) {
      let kick = `「✿」Kafuu - MD \n「 Adiós 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 Se fue 」\n「 Vuelve pronto :3 」\n\n> ✐ Usa *#ayuda* para ver mi menú.`;
      await conn.sendMini(m.chat, packname, textbot, kick, img, img, redes, fkontak);
      await conn.sendMessage(m.chat, { image: img, caption: kick, mentions: [who] });
    }
  }
}