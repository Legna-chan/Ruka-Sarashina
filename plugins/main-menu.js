//créditos a @deylin por el codigo

import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let handler = async (m, { conn, usedPrefix, __dirname }) => {
  try {
    let userId = m.sender
    let { exp, dragones, level, role } = global.db.data.users[userId] || { exp: 0, dragones: 0, level: 0, role: 'Sin rango' }
    let { min, xp, max } = xpRange(level, global.multiplier || 1)
    let name = await conn.getName(userId)

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let perfil = await conn.profilePictureUrl(userId, 'image').catch(_ => 'https://files.catbox.moe/qx71n6.jpg')
    let taguser = '@' + userId.split("@s.whatsapp.net")[0]

    let images = [
      'https://files.catbox.moe/kxdggo.jpg',
      'https://files.catbox.moe/qx71n6.jpg',
      'https://files.catbox.moe/kxdggo.jpg'
    ]
    let randomImage = images[Math.floor(Math.random() * images.length)]  

    let botname = '𝚛𝚞𝚔𝚊 𝚜𝚊𝚛𝚊𝚜𝚑𝚒𝚗𝚊'
    let dev = 'Desarrollado por legna'
    let redes = 'https://whatsapp.com/channel/0029VawF8fBBvvsktcInIz3m'
        let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
    let emojis = '✅'
    let error = '❌'

    let menu = `
*⌬━━━━━▣━━◤⌬◢━━▣━━━━━━⌬*

*!𝙷𝚘𝚕𝚊! 𝚎𝚜𝚝𝚎 𝚎𝚜 𝚎𝚕 𝚖𝚎𝚗𝚞 𝚍𝚎 ${botname}*
╭──❀•°❀°•❀──╮  
┃ ✐ Cliente ➩ @${userId.split('@')[0]}  
┃ ❀ Editor ➩ @Legna 
┃ ✦ Bot ➩ ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Sub-bot 🆂')}  
┃ ⴵ Activa ➩ ${uptime}  
┃ ✰ Usuarios ➩ ${totalreg}  
┃ ❏ Versión ➩ 1.0.0  
╰──❀•°❀°•❀──╯

🍃  •/• \`Info-Bot\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ⍴ᥲrᥲ ᥎ᥱr ᥱs𝗍ᥲძ᥆ ᥱ іᥒ𝖿᥆rmᥲᥴі᥆́ᥒ ძᥱ ᥣᥲ ᑲ᥆𝗍. 

✤ *#help • #menu*
> ➮ Ver la lista de comandos de la Bot.
✤ *#uptime • #runtime*
> ➮ Ver tiempo activo o en linea de la bot. 
✤ *#qr • #code*
> ➮ Crea una sesión de Sub-Bot
✤ *#bots • #sockets*
> ➮ Ver la lista de Sub-Bots activos.
✤ *#status • #estado*
> ➮ Ver el estado actual de la Bot.
✤ *#links • #grupos*
> ➮ Ver los enlaces oficiales de la Bot.
✤ *#infobot • #infobot*
> ➮ Ver la información completa de la Bot.
✤ *#p • #ping*
> ➮ Ver la velocidad de respuesta del Bot.
✤ *#reporte • #reportar*
> ➮ Reporta alguna falla o problema de la Bot.
✤ *#sistema • #system*
> ➮ Ver estado del sistema de alojamiento.
✤ *#speed • #speedtest*
> ➮ Ver las estadísticas de velocidad de la Bot.
✤ *#views • #usuarios*
> ➮ Ver la cantidad de usuarios registrados en el sistema.
✤ *#ds • #fixmsgespera*
> ➮ Eliminar archivos de sesión innecesarios.
✤ *#editautoresponder*
> ➮ Configurar un Prompt personalizado de la Bot.

🍃  •/• \`Buscadores\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ⍴ᥲrᥲ rᥱᥲᥣіzᥲr ᑲᥙ́s𝗊ᥙᥱძᥲs ᥱᥒ ძіs𝗍іᥒ𝗍ᥲs ⍴ᥣᥲ𝗍ᥲ𝖿᥆rmᥲs. 

✤ *#tiktoksearch • #tiktoks*
> ➮ Buscador de videos de tiktok.
✤ *#tweetposts*
> ➮ Buscador de posts de Twitter/X.
✤ *#ytsearch • #yts*
> ➮ Realiza búsquedas de Youtube.
✤ *#google*
> ➮ Realiza búsquedas por Google.
✤ *#imagen • #image*
> ➮ buscador de imagenes de Google.
✤ *#animesearch • #animess*
> ➮ Buscador de animes de tioanime.
✤ *#animei • #animeinfo*
> ➮ Buscador de capítulos de #animesearch.
✤ *#infoanime*
> ➮ Buscador de información de anime/manga.
✤ *#hentaisearch • #searchhentai*
> ➮ Buscador de capítulos hentai.
✤ #xnxxsearch • #xnxxs*
> ➮ Buscador de vídeos de Xnxx.
✤ *#xvsearch • #xvideossearch*
> ➮ Buscador de vídeos de Xvideos.
✤ *#pornhubsearch • #phsearch*
> ➮ Buscador de videos de Pornhub.
✤ *#npmjs*
> ➮ Buscandor de npmjs.

🍃  •/• \`Descargas\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ძᥱ ძᥱsᥴᥲrgᥲs ⍴ᥲrᥲ ᥎ᥲrі᥆s ᥲrᥴһі᥎᥆s. 
.
✤ *#tiktok • #tt*
> ➮ Descarga videos de TikTok. 
✤ *#play • #play2*
> ➮ Descarga música/video de YouTube.
✤ *#ytmp3 • #ytmp4*
> ➮ Descarga música/video de YouTube mediante url.
✤ *#fb • #facebook*
> ➮ Descarga videos de Facebook.
✤ *#twitter • #x* + [Link]
> ➮ Descargar un video de Twitter/X
✤ *#ig • #instagram*
> ➮ Descarga contenido de Instagram.
✤ *#tts • #tiktoks* + [busqueda]
> ➮ Buscar videos de tiktok 
✤ *#xvideosdl*
> ➮ Descarga videos porno de (Xvideos). 
✤ *#xnxxdl*
> ➮ Descarga videos porno de (xnxx).
✤ *#tiktokrandom • #ttrandom*
> ➮ Descarga un video aleatorio de tiktok.
✤ *#npmdl • #npmdownloader*
> ➮ Descarga paquetes de NPMJs.
✤ *#animelinks • #animedl*
> ➮ Descarga Links disponibles de descargas.

🍃  •/• \`Economia\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ძᥱ ᥱᥴ᥆ᥒ᥆mі́ᥲ ᥡ r⍴g ⍴ᥲrᥲ gᥲᥒᥲr ძіᥒᥱr᥆ ᥡ ᥆𝗍r᥆s rᥱᥴᥙrs᥆s. 

ᰔᩚ *#w • #work • #trabajar*
> ✦ Trabaja para ganar ${moneda}.
ᰔᩚ *#slut • #protituirse*
> ✦ Trabaja como prostituta y gana ${moneda}.
ᰔᩚ *#cf • #suerte*
> ✦ Apuesta tus ${moneda} a cara o cruz.
ᰔᩚ *#crime • #crimen*
> ✦ Trabaja como ladrón para ganar ${moneda}.
ᰔᩚ *#ruleta • #roulette • #rt*
> ✦ Apuesta ${moneda} al color rojo o negro.
ᰔᩚ *#casino • #apostar*
> ✦ Apuesta tus ${moneda} en el casino.
ᰔᩚ *#slot*
> ✦ Apuesta tus ${moneda} en la ruleta y prueba tu suerte.
ᰔᩚ *#cartera • #wallet*
> ✦ Ver tus ${moneda} en la cartera.
ᰔᩚ *#banco • #bank*
> ✦ Ver tus ${moneda} en el banco.
ᰔᩚ *#deposit • #depositar • #d*
> ✦ Deposita tus ${moneda} al banco.
ᰔᩚ *#with • #retirar • #withdraw*
> ✦ Retira tus ${moneda} del banco.
ᰔᩚ *#transfer • #pay*
> ✦ Transfiere ${moneda} o XP a otros usuarios.
ᰔᩚ *#miming • #minar • #mine*
> ✦ Trabaja como minero y recolecta recursos.
ᰔᩚ *#buyall • #buy*
> ✦ Compra ${moneda} con tu XP.
ᰔᩚ *#daily • #diario*
> ✦ Reclama tu recompensa diaria.
ᰔᩚ *#cofre*
> ✦ Reclama un cofre diario lleno de recursos.
ᰔᩚ *#weekly • #semanal*
> ✦ Reclama tu regalo semanal.
ᰔᩚ *#monthly • #mensual*
> ✦ Reclama tu recompensa mensual.
ᰔᩚ *#steal • #robar • #rob*
> ✦ Intenta robarle ${moneda} a alguien.
ᰔᩚ *#robarxp • #robxp*
> ✦ Intenta robar XP a un usuario.
ᰔᩚ *#eboard • #baltop*
> ✦ Ver el ranking de usuarios con más ${moneda}.
ᰔᩚ *#aventura • #adventure*
> ✦ Aventúrate en un nuevo reino y recolecta recursos.
ᰔᩚ *#curar • #heal*
> ✦ Cura tu salud para volverte aventurar.
ᰔᩚ *#cazar • #hunt • #berburu*
> ✦ Aventúrate en una caza de animales.
ᰔᩚ *#inv • #inventario*
> ✦ Ver tu inventario con todos tus ítems.
ᰔᩚ *#mazmorra • #explorar*
> ✦ Explorar mazmorras para ganar ${moneda}.
✤ *#pescar • #fishing*
> ➮ gana ${moneda} pescando.

🍃  •/• \`Stickers\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ⍴ᥲrᥲ ᥴrᥱᥲᥴі᥆ᥒᥱs ძᥱ s𝗍іᥴkᥱrs ᥱ𝗍ᥴ. 

ᰔᩚ *#sticker • #s*
> ✦ Crea stickers de (imagen/video)
ᰔᩚ *#setmeta*
> ✦ Estable un pack y autor para los stickers.
ᰔᩚ *#delmeta*
> ✦ Elimina tu pack de stickers.
ᰔᩚ *#pfp • #getpic*
> ✦ Obtén la foto de perfil de un usuario.
ᰔᩚ *#qc*
> ✦ Crea stickers con texto o de un usuario.
ᰔᩚ *#toimg • #img*
> ✦ Convierte stickers en imagen.
ᰔᩚ *#brat • #ttp • #attp*︎ 
> ✦ Crea stickers con texto.
ᰔᩚ *#emojimix*
> ✦ Fuciona 2 emojis para crear un sticker.

🍃  •/• \`Perfil\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ძᥱ ⍴ᥱr𝖿іᥣ ⍴ᥲrᥲ ᥎ᥱr, ᥴ᥆ᥒ𝖿іgᥙrᥲr ᥡ ᥴ᥆m⍴r᥆ᑲᥲr ᥱs𝗍ᥲძ᥆s ძᥱ 𝗍ᥙ ⍴ᥱr𝖿іᥣ. 

ᰔᩚ *#profile • #perfil*
> ✦ Muestra tu perfil de usuario.
ᰔᩚ *#marry* [mension / etiquetar]
> ✦ Propón matrimonio a otro usuario.
ᰔᩚ *#divorce*
> ✦ Divorciarte de tu pareja.
ᰔᩚ *#setgenre • #setgenero*
> ✦ Establece tu género en el perfil del bot.
ᰔᩚ *#delgenre • #delgenero*
> ✦ Elimina tu género del perfil del bot.
ᰔᩚ *#setbirth • #setnacimiento*
> ✦ Establece tu fecha de nacimiento en el perfil del bot.
ᰔᩚ *#delbirth • #delnacimiento*
> ✦ Elimina tu fecha de nacimiento del perfil del bot.
ᰔᩚ *#setdescription • #setdesc*
> ✦ Establece una descripción en tu perfil del bot.
ᰔᩚ *#deldescription • #deldesc*
> ✦ Elimina la descripción de tu perfil del bot.
ᰔᩚ *#lb • #lboard* + <Paginá>
> ✦ Top de usuarios con más (experiencia y nivel).
ᰔᩚ *#level • #lvl* + <@Mencion>
> ✦ Ver tu nivel y experiencia actual.
ᰔᩚ *#comprarpremium • #premium*
> ✦ Compra un pase premium para usar el bot sin límites.
ᰔᩚ *#confesiones • #confesar*
> ✦ Confiesa tus sentimientos a alguien de manera anonima.

🍃  •/• \`Grupos\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ძᥱ grᥙ⍴᥆s ⍴ᥲrᥲ ᥙᥒᥲ mᥱȷ᥆r gᥱs𝗍і᥆́ᥒ ძᥱ ᥱᥣᥣ᥆s. 

ᰔᩚ *#config • #on*
> ✦ Ver opciones de configuración de grupos.
ᰔᩚ *#hidetag*
> ✦ Envia un mensaje mencionando a todos los usuarios
ᰔᩚ *#gp • #infogrupo*
> ✦  Ver la Informacion del grupo.
ᰔᩚ *#linea • #listonline*
> ✦ Ver la lista de los usuarios en linea.
ᰔᩚ *#link*
> ✦ El bot envia el link del grupo.
ᰔᩚ *#admins • #admin*
> ✦ Mencionar a los admins para solicitar ayuda.
ᰔᩚ *#restablecer • #revoke*
> ✦ Restablecer el enlace del grupo.
ᰔᩚ *#grupo • #group* [open / abrir]
> ✦ Cambia ajustes del grupo para que todos los usuarios envien mensaje.
ᰔᩚ *#grupo • #gruop* [close / cerrar]
> ✦ Cambia ajustes del grupo para que solo los administradores envien mensaje.
ᰔᩚ *#kick* [número / mension]
> ✦ Elimina un usuario de un grupo.
ᰔᩚ *#add • #añadir • #agregar* [número]
> ✦ Invita a un usuario a tu grupo.
ᰔᩚ *#promote* [mension / etiquetar]
> ✦ El bot dara administrador al usuario mencionando.
ᰔᩚ *#demote* [mension / etiquetar]
> ✦ El bot quitara administrador al usuario mencionando.
ᰔᩚ *#gpbanner • #groupimg*
> ✦ Cambiar la imagen del grupo.
ᰔᩚ *#gpname • #groupname*
> ✦ Cambiar el nombre del grupo.
ᰔᩚ *#gpdesc • #groupdesc*
> ✦ Cambiar la descripción del grupo.
ᰔᩚ *#advertir • #warn • #warning*
> ✦ Darle una advertencia aún usuario.
ᰔᩚ ︎*#unwarn • #delwarn*
> ✦ Quitar advertencias.
ᰔᩚ *#advlist • #listadv*
> ✦ Ver lista de usuarios advertidos.
ᰔᩚ *#bot on*
> ✦ activa el bot en un grupo.
ᰔᩚ *#bot off*
> ✦ Desactiva el bot en un grupo.
ᰔᩚ *#mute* [mension / etiquetar]
> ✦ El bot elimina los mensajes del usuario.
ᰔᩚ *#unmute* [mension / etiquetar]
> ✦ El bot deja de eliminar los mensajes del usuario.
ᰔᩚ *#encuesta • #poll*
> ✦ Crea una encuesta.
ᰔᩚ *#delete • #del*
> ✦ Elimina mensaje de otros usuarios.
ᰔᩚ *#fantasmas*
> ✦ Ver lista de inactivos del grupo.
ᰔᩚ *#kickfantasmas*
> ✦ Elimina a los inactivos del grupo.
ᰔᩚ *#invocar • #tagall • #todos*
> ✦ Invoca a todos los usuarios de un grupo.
ᰔᩚ *#setemoji • #setemo*
> ✦ Cambia el emoji que se usa en la invitación de usuarios.
ᰔᩚ *#listnum • #kicknum*
> ✦ Elimine a usuario por el prefijo de país.

🍃  •/• \`Anime\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ძᥱ rᥱᥲᥴᥴі᥆́ᥒ ᥲᥒіmᥱ. 

ᰔᩚ *#angry • #enojado* + <mencion>
> ✦ Estar enojado
ᰔᩚ *#bite* + <mencion>
> ✦ Muerde a alguien
ᰔᩚ *#bleh* + <mencion>
> ✦ Sacar la lengua
ᰔᩚ *#blush* + <mencion>
> ✦ Sonrojarte
ᰔᩚ *#bored • #aburrido* + <mencion>
> ✦ Estar aburrido
ᰔᩚ *#cry* + <mencion>
> ✦ Llorar por algo o alguien
ᰔᩚ *#cuddle* + <mencion>
> ✦ Acurrucarse
ᰔᩚ *#dance* + <mencion>
> ✦ Sacate los pasitos prohíbidos
ᰔᩚ *#drunk* + <mencion>
> ✦ Estar borracho
ᰔᩚ *#eat • #comer* + <mencion>
> ✦ Comer algo delicioso
ᰔᩚ *#facepalm* + <mencion>
> ✦ Darte una palmada en la cara
ᰔᩚ *#happy • #feliz* + <mencion>
> ✦ Salta de felicidad
ᰔᩚ *#hug* + <mencion>
> ✦ Dar un abrazo
ᰔᩚ *#impregnate • #preg* + <mencion>
> ✦ Embarazar a alguien
ᰔᩚ *#kill* + <mencion>
> ✦ Toma tu arma y mata a alguien
ᰔᩚ *#kiss • #besar* • #kiss2 + <mencion>
> ✦ Dar un beso
ᰔᩚ *#laugh* + <mencion>
> ✦ Reírte de algo o alguien
ᰔᩚ *#lick* + <mencion>
> ✦ Lamer a alguien
ᰔᩚ *#love • #amor* + <mencion>
> ✦ Sentirse enamorado
ᰔᩚ *#pat* + <mencion>
> ✦ Acaricia a alguien
ᰔᩚ *#poke* + <mencion>
> ✦ Picar a alguien
ᰔᩚ *#pout* + <mencion>
> ✦ Hacer pucheros
ᰔᩚ *#punch* + <mencion>
> ✦ Dar un puñetazo
ᰔᩚ *#run* + <mencion>
> ✦ Correr
ᰔᩚ *#sad • #triste* + <mencion>
> ✦ Expresar tristeza
ᰔᩚ *#scared* + <mencion>
> ✦ Estar asustado
ᰔᩚ *#seduce* + <mencion>
> ✦ Seducir a alguien
ᰔᩚ *#shy • #timido* + <mencion>
> ✦ Sentir timidez
ᰔᩚ *#slap* + <mencion>
> ✦ Dar una bofetada
ᰔᩚ *#dias • #days*
> ✦ Darle los buenos días a alguien 
ᰔᩚ *#noches • #nights*
> ✦ Darle las buenas noches a alguien 
ᰔᩚ *#sleep* + <mencion>
> ✦ Tumbarte a dormir
ᰔᩚ *#smoke* + <mencion>
> ✦ Fumar
ᰔᩚ *#think* + <mencion>
> ✦ Pensar en algo

🍃  •/• \`Nsfw\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ᥒs𝖿ᥕ (⍴ᥲrᥲ ᥲძᥙᥣ𝗍᥆s). 

ᰔᩚ *#anal* + <mencion>
> ✦ Hacer un anal
ᰔᩚ *#waifu*
> ✦ Buscá una waifu aleatorio.
ᰔᩚ *#bath* + <mencion>
> ✦ Bañarse
ᰔᩚ *#blowjob • #mamada • #bj* + <mencion>
> ✦ Dar una mamada
ᰔᩚ *#boobjob* + <mencion>
> ✦ Hacer una rusa
ᰔᩚ *#cum* + <mencion>
> ✦ Venirse en alguien.
ᰔᩚ *#fap* + <mencion>
> ✦ Hacerse una paja
ᰔᩚ *#ppcouple • #ppcp*
> ✦ Genera imagenes para amistades o parejas.
ᰔᩚ *#footjob* + <mencion>
> ✦ Hacer una paja con los pies
ᰔᩚ *#fuck • #coger • #fuck2* + <mencion>
> ✦ Follarte a alguien
ᰔᩚ *#cafe • #coffe*
> ✦ Tomate un cafecito con alguien
ᰔᩚ *#violar • #perra + <mencion>
> ✦ Viola a alguien
ᰔᩚ *#grabboobs* + <mencion>
> ✦ Agarrrar tetas
ᰔᩚ *#grop* + <mencion>
> ✦ Manosear a alguien
ᰔᩚ *#lickpussy* + <mencion>
> ✦ Lamer un coño
ᰔᩚ *#rule34 • #r34* + [Tags]
> ✦ Buscar imagenes en Rule34
ᰔᩚ *#sixnine • #69* + <mencion>
> ✦ Haz un 69 con alguien
ᰔᩚ *#spank • #nalgada* + <mencion>
> ✦ Dar una nalgada
ᰔᩚ *#suckboobs* + <mencion>
> ✦ Chupar tetas
ᰔᩚ *#undress • #encuerar* + <mencion>
> ✦ Desnudar a alguien
ᰔᩚ *#yuri • #tijeras* + <mencion>
> ✦ Hacer tijeras.

🍃  •/• \`Juegos\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ძᥱ ȷᥙᥱg᥆s ⍴ᥲrᥲ ȷᥙgᥲr ᥡ ძі᥎ᥱr𝗍іr𝗍ᥱ ᥴ᥆ᥒ 𝗍ᥙs ᥲmіg᥆s. 

ᰔᩚ *#amistad • #amigorandom* 
> ✦ hacer amigos con un juego. 
ᰔᩚ *#chaqueta • #jalamela*
> ✦ Hacerte una chaqueta.
ᰔᩚ *#chiste*
> ✦ La bot te cuenta un chiste.
ᰔᩚ *#consejo* 
> ✦ La bot te da un consejo. 
ᰔᩚ *#facto*
> ✦ La bot te lanza un facto. 
ᰔᩚ *#formarpareja*
> ✦ Forma una pareja. 
ᰔᩚ *#formarpareja5*
> ✦ Forma 5 parejas diferentes.
ᰔᩚ *#frase*
> ✦ La bot te da una frase.
ᰔᩚ *#huevo*
> ✦ Agarrale el huevo a alguien.
ᰔᩚ *#chupalo* + <mencion>
> ✦ Hacer que un usuario te la chupe.
ᰔᩚ *#aplauso* + <mencion>
> ✦ Aplaudirle a alguien.
ᰔᩚ *#marron* + <mencion>
> ✦ Burlarte del color de piel de un usuario. 
ᰔᩚ *#suicidar*
> ✦ Suicidate. 
ᰔᩚ *#iq • #iqtest* + <mencion>
> ✦ Calcular el iq de alguna persona. 
ᰔᩚ *#meme*
> ✦ La bot te envía un meme aleatorio. 
ᰔᩚ *#paja • #pajeame* 
> ✦ La bot te hace una paja.
ᰔᩚ *#personalidad* + <mencion>
> ✦ La bot busca tu personalidad. 
ᰔᩚ *#piropo*
> ✦ Lanza un piropo.
ᰔᩚ *#pregunta*
> ✦ Hazle una pregunta a la bot.
ᰔᩚ *#ship • #pareja*
> ✦ La bot te da la probabilidad de enamorarte de una persona. 
ᰔᩚ *#sorteo*
> ✦ Empieza un sorteo. 
ᰔᩚ *#top*
> ✦ Empieza un top de personas.
ᰔᩚ *#formartrio* + <mencion>
> ✦ Forma un trio.
ᰔᩚ *#ahorcado*
> ✦ Diviertete con la bot jugando el juego del ahorcado.
ᰔᩚ *#mates • #matematicas*
> ✦ Responde las preguntas de matemáticas para ganar recompensas.
ᰔᩚ *#ppt*
> ✦ Juega piedra papel o tijeras con la bot.
ᰔᩚ *#sopa • #buscarpalabra*
> ✦ Juega el famoso juego de sopa de letras.
ᰔᩚ *#pvp • #suit* + <mencion>
> ✦ Juega un pvp contra otro usuario.
ᰔᩚ *#ttt*
> ✦ Crea una sala de juego. 
  `.trim();

    await conn.sendMessage(m.chat, {
      image: { url: randomImage },
      caption: menu,
      contextInfo: { 
        mentionedJid: [m.sender], 
        isForwarded: true, 
        forwardedNewsletterMessageInfo: { 
          newsletterJid: 'channel@example.com', 
          newsletterName: 'Canal Oficial', 
          serverMessageId: -1, 
        }, 
        forwardingScore: 999, 
        externalAdReply: { 
          title: botname, 
          body: dev, 
          thumbnailUrl: banner, 
          sourceUrl: redes, 
          mediaType: 1, 
          renderLargerThumbnail: false 
        }
      }
    })

    await m.react(emojis)    

  } catch (e) {
    await m.reply(`✘ Ocurrió un error al enviar el menú\n\n${e}`)
    await m.react(error)
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú', 'allmenú', 'allmenu', 'menucompleto']
export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}