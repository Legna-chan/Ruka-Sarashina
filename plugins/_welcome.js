import fs from 'fs';
import path from 'path';
import { WAMessageStubType } from '@whiskeysockets/baileys';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return;

  // Verifica si la imagen se puede cargar
  let img;
  try {
    img = fs.readFileSync(path.join(process.cwd(), 'src', 'welcome.jpg'));
  } catch (error) {
    console.error('No se pudo cargar la imagen desde la ruta especificada:', error);
    return;
  }

  // Asegúrate de que `chat` y `chat.welcome` están definidos
  let chat = global.db.data.chats[m.chat];
  if (!chat || !chat.welcome) {
    console.error('No se pudo acceder a chat.welcome, asegúrate de que esté configurado correctamente.');
    return;
  }

  if (chat.welcome) {
    console.log('messageStubParameters:', m.messageStubParameters);

    // Verifica si messageStubParameters tiene datos
    if (m.messageStubParameters && m.messageStubParameters.length > 0) {
      let who = m.messageStubParameters[0]?.replace('@', '') + '@s.whatsapp.net';

      // Solo si el mensaje es de tipo 27 (nuevo miembro)
      if (m.messageStubType === WAMessageStubType.ADD) {
        let welcome = `「✿」Yami - MD \n「 Bienvenido :3 」\n「 @${m.messageStubParameters[0].split('@')[0]} 」\n「 Bienvenido/a 」\n「 ${groupMetadata.subject} 」\n\n> ✐ Usa *#ayuda* para ver mi menú.`;
        await conn.sendMini(m.chat, packname, textbot, welcome, img, img, redes, fkontak);
      }

      // Si el mensaje es de tipo 28 (miembro eliminado)
      if (m.messageStubType === WAMessageStubType.REMOVE) {
        let bye = `「✿」Kafuu - MD \n「 Adiós 」\n「 @${m.messageStubParameters[0].split('@')[0]} 」\n「 Se fue 」\n「 Vuelve pronto :3 」\n\n> ✐ Usa *#ayuda* para ver el menú.`;
        await conn.sendMini(m.chat, packname, textbot, bye, img, img, redes, fkontak);
        await conn.sendMessage(m.chat, { image: img, caption: bye, mentions: [who] });
      }

      // Si el mensaje es de tipo 32 (expulsado)
      if (m.messageStubType === WAMessageStubType.KICK) {
        let kick = `「✿」Kafuu - MD \n「 Adiós 」\n「 @${m.messageStubParameters[0].split('@')[0]} 」\n「 Se fue 」\n「 Vuelve pronto :3 」\n\n> ✐ Usa *#ayuda* para ver mi menú.`;
        await conn.sendMini(m.chat, packname, textbot, kick, img, img, redes, fkontak);
        await conn.sendMessage(m.chat, { image: img, caption: kick, mentions: [who] });
      }
    } else {
      console.error('messageStubParameters no está definido o vacío.');
    }
  }
}