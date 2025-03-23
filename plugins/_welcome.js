import { WAMessageStubType } from '@whiskeysockets/baileys'; // Para los tipos de mensajes
import fetch from 'node-fetch'; // Si vas a usar fetch
import fs from 'fs'; // Para leer archivos locales
import path from 'path'; // Para manejar rutas de archivos

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;

  // Ruta de la imagen local
  let img;
  try {
    img = fs.readFileSync(path.join(process.cwd(), 'src', 'welcome.jpg'));
  } catch (error) {
    console.error('No se pudo cargar la imagen localmente:', error);
  }

  let chat = global.db.data.chats[m.chat];

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = `「✿」Kafuu - MD \n「 Bienvenido :3 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 Bienvenido/a 」\n「 ${groupMetadata.subject} 」\n\n> ✐ Usa *#ayuda* para ver mi menu.
> 🜸 https://github.com/Legna-chan`;
    await conn.sendMini(m.chat, packname, textbot, welcome, img, img, redes, fkontak);
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = ` 「✿」Kafuu - MD \n「 Adios 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 Se fue 」\n「 Vuelve pronto :3 」\n\n> ✐ Usa *#ayuda* para ver menu.
> 🜸 https://github.com/Legna-chan`;
    await conn.sendMini(m.chat, packname, textbot, bye, img, img, redes, fkontak);
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = `「✿」Kafuu - MD \n「 Adios 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 Se fue 」\n「 Vuelve pronto :3」\n\n> ✐ Usa *#ayuda* para ver mi menu. 
> 🜸 https://github.com/Legna-chan`;
    await conn.sendMini(m.chat, packname, textbot, kick, img, img, redes, fkontak);
    await conn.sendMessage(m.chat, { image: img, caption: bye, mentions: [who] });
  }
}