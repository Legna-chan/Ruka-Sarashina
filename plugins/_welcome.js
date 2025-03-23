import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path'; 

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;

  let img;
  try {
    img = fs.readFileSync(path.join(process.cwd(), 'src', 'welcome.jpg'));
  } catch (error) {
    console.error('No se pudo cargar la imagen localmente:', error);
  }

  let chat = global.db.data.chats[m.chat];

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = `「❀」Yami - MD \n「 Bienvenido :3 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 Bienvenido/a 」\n「 ${groupMetadata.subject} 」\n\n> ✐ Usa *#ayuda* para ver mis comandos.
> 🌸 ⍴᥆ᥕᥱrᥱძ ᑲᥡ ᥣᥱgᥒᥲ`;
    await conn.sendMini(m.chat, packname, textbot, welcome, img, img, redes, fkontak);
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = ` 「❀」Yami - MD \n「 Adios 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 Se fue 」\n「 Vuelve pronto :3 」\n\n> ✐ Usa *#ayuda* para ver mis comandos.
> 🌸 ⍴᥆ᥕᥱrᥱძ ᑲᥡ ᥣᥱgᥒᥲ`;
    await conn.sendMini(m.chat, packname, textbot, bye, img, img, redes, fkontak);
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = `「❀」Yami - MD \n「 Adios 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 Se fue 」\n「 Vuelve pronto :3」\n\n> ✐ Usa *#ayuda* para ver mis comandos. 
> 🌸 ⍴᥆ᥕᥱrᥱძ ᑲᥡ ᥣᥱgᥒᥲ`;
    await conn.sendMini(m.chat, packname, textbot, kick, img, img, redes, fkontak);
    await conn.sendMessage(m.chat, { image: img, caption: bye, mentions: [who] });
  }
}