// créditos a @deylin

import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;

  let who = m.messageStubParameters[0]
  let taguser = `@${who.split('@')[0]}`  // Corrección aquí
  let chat = global.db.data.chats[m.chat]
  let totalMembers = participants.length
  let date = new Date().toLocaleString('es-ES', { timeZone: 'America/Mexico_City' })

  let frasesBienvenida = [
    "¡Esperamos que disfrutes tu estadía!",
    "Recuerda leer las reglas del grupo.",
    "Diviértete y participa en las conversaciones.",
    "¡Un placer tenerte aquí!",
    "¡Bienvenido! Esperamos que la pases genial con nosotros.",
    "¡Nuevo miembro en la casa! Siéntete como en tu hogar.",
    "¡Hola! No olvides presentarte y participar en las charlas.",
    "¡Un nuevo compañero ha llegado! Que disfrutes el grupo.",
    "¡Qué bueno verte por aquí! Esperamos que te diviertas.",
    "¡Un gusto tenerte con nosotros! Anímate a participar.",
    "¡Bienvenido! No te preocupes, aquí todos somos buena onda.",
    "¡Hola! Te estábamos esperando, siéntete libre de opinar.",
    "¡Qué alegría tenerte aquí! Disfruta del grupo.",
    "¡Un nuevo integrante ha llegado! Ponte cómodo.",
    "¡Bienvenido! Siéntete libre de compartir y disfrutar."
  ]
  let frasesDespedida = [
    "Esperamos verte pronto de nuevo.",
    "¡Suerte en tus proyectos futuros!",
    "Hasta la próxima, cuídate.",
    "Nos vemos en otra ocasión.",
    "¡Fue un placer tenerte aquí! Mucho éxito.",
    "Nos vemos, que te vaya bien en todo.",
    "¡Gracias por haber sido parte del grupo!",
    "¡Adiós! Esperamos verte en otra oportunidad.",
    "¡Te extrañaremos! Vuelve cuando quieras.",
    "Hasta luego, que la vida te sonría.",
    "¡Buena suerte en todo lo que hagas!",
    "¡Nos vemos! Que te vaya increíble.",
    "¡Hasta siempre! Te esperamos de vuelta.",
    "¡Que te vaya bien! Gracias por haber compartido con nosotros.",
    "Adiós, pero recuerda que siempre serás bienvenido de vuelta."
  ]

  let fraseRandomBienvenida = frasesBienvenida[Math.floor(Math.random() * frasesBienvenida.length)]
  let fraseRandomDespedida = frasesDespedida[Math.floor(Math.random() * frasesDespedida.length)]

  let videoUrl = 'https://files.catbox.moe/gn3p46.mp4'

  if (chat.welcome) {
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      let bienvenida = `╭─✰ *🍭 bienvenid@ al grupo!!*  
│ ❀ *Usuario:* @${taguser}  
│ ✧ *Grupo:* ${groupMetadata.subject}  
│ ✐ *Miembros:* ${totalMembers - 1}  
│ ❏ *Fecha:* ${date}  
╰──────────────────╯  
> Frase de bienvenida 🌸
${fraseRandomBienvenida}` 
      await conn.sendMessage(m.chat, { video: { url: videoUrl }, gifPlayback: true, caption: bienvenida, mentions: [who] })
    }

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE ||
        m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE) {
      let despedida = `╭─✰ *🍭 Hasta pronto*  
│ ❀ *Usuario:* @${taguser}  
│ ✧ *Grupo:* ${groupMetadata.subject}  
│ ✐ *Miembros:* ${totalMembers - 1}  
│ ❏ *Fecha:* ${date}  
╰──────────────────╯  
> frase de despedida 🌷
${fraseRandomDespedida}` 
      await conn.sendMessage(m.chat, { video: { url: videoUrl }, gifPlayback: true, caption: despedida, mentions: [who] })
    }
  }
}