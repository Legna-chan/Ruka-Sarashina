import moment from 'moment-timezone';

let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    let user = global.db.data.users[userId];
    let name = conn.getName(userId);
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let totalreg = Object.keys(global.db.data.users).length;
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
 
    let txt = `
*!𝙷𝚘𝚕𝚊! 𝚎𝚜𝚝𝚎 𝚎𝚜 𝚎𝚕 𝚖𝚎𝚗𝚞 𝚍𝚎 ${botname}*
╭┈ ↷
│✐ Cliente ➩ @${userId.split('@')[0]}
│❀ Modo ➩ Publica
│✦ Bot ➩ ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Sub-bot 🆂')}
│ⴵ Activa ➩ ${uptime}
│✰ Usuarios ➩ ${totalreg}
│❏ version ➩ 1.0.0
╰─────────────────

• :･ﾟ⊹˚• \`『 Info-Bot 』\` •˚⊹:･ﾟ•

☄︎ ᥴ᥆mᥲᥒძ᥆s ⍴ᥲrᥲ ᥎ᥱr ᥱs𝗍ᥲძ᥆ ᥱ іᥒ𝖿᥆rmᥲᥴі᥆́ᥒ ძᥱ ᥣᥲ ᑲ᥆𝗍. 

ᰔᩚ *#help • #menu*
> ✦ Ver la lista de comandos de la Bot.
ᰔᩚ *#uptime • #runtime*
> ✦ Ver tiempo activo o en linea de la Bot.
ᰔᩚ *#serbot • #serbot code*
> ✦ Crea una sesión de Sub-Bot.
ᰔᩚ *#bots • #sockets*
> ✦ Ver la lista de Sub-Bots activos.
ᰔᩚ *#links • #grupos*
> ✦ Ver los enlaces oficiales de la Bot.
ᰔᩚ *#infobot • #infobot*
> ✦ Ver la información completa de la Bot.
ᰔᩚ *#p • #ping*
> ✦ Ver la velocidad de respuesta del Bot.
ᰔᩚ *#reporte • #reportar*
> ✦ Reporta alguna falla o problema de la Bot.
ᰔᩚ *#sistema • #system*
> ✦ Ver estado del sistema de alojamiento.
ᰔᩚ *#speed • #speedtest*
> ✦ Ver las estadísticas de velocidad de la Bot.
ᰔᩚ *#views • #usuarios*
> ✦ Ver la cantidad de usuarios registrados en el sistema.
ᰔᩚ *#ds • #fixmsgespera*
> ✦ Eliminar archivos de sesión innecesarios.
ᰔᩚ *#editautoresponder*
> ✦ Configurar un Prompt personalizado de la Bot.

• :･ﾟ⊹˚• \`『 Buscadores 』\` •˚⊹:･ﾟ•

☄︎ ᥴ᥆mᥲᥒძ᥆s ⍴ᥲrᥲ rᥱᥲᥣіzᥲr ᑲᥙ́s𝗊ᥙᥱძᥲs ᥱᥒ ძіs𝗍іᥒ𝗍ᥲs ⍴ᥣᥲ𝗍ᥲ𝖿᥆rmᥲs. 

ᰔᩚ *#tiktoksearch • #tiktoks*
> ✦ Buscador de videos de tiktok.
ᰔᩚ *#tweetposts*
> ✦ Buscador de posts de Twitter/X.
ᰔᩚ *#ytsearch • #yts*
> ✦ Realiza búsquedas de Youtube.
ᰔᩚ *#githubsearch*
> ✦ Buscador de usuarios de GitHub.
ᰔᩚ *#google*
> ✦ Realiza búsquedas por Google.
ᰔᩚ *#pin • #pinterest*
> ✦ Buscador de imagenes de Pinterest.
ᰔᩚ *#imagen • #image*
> ✦ buscador de imagenes de Google.
ᰔᩚ *#animesearch • #animess*
> ✦ Buscador de animes de tioanime.
ᰔᩚ *#animei • #animeinfo*
> ✦ Buscador de capítulos de #animesearch.
ᰔᩚ *#infoanime*
> ✦ Buscador de información de anime/manga.
ᰔᩚ *#hentaisearch • #searchhentai*
> ✦ Buscador de capítulos hentai.
ᰔᩚ #xnxxsearch • #xnxxs*
> ✦ Buscador de vídeos de Xnxx.
ᰔᩚ *#xvsearch • #xvideossearch*
> ✦ Buscador de vídeos de Xvideos.
ᰔᩚ *#pornhubsearch • #phsearch*
> ✦ Buscador de videos de Pornhub.
ᰔᩚ *#npmjs*
> ✦ Buscandor de npmjs.

• :･ﾟ⊹˚• \`『 Descargas 』\` •˚⊹:･ﾟ•

☄︎ ᥴ᥆mᥲᥒძ᥆s ძᥱ ძᥱsᥴᥲrgᥲs ⍴ᥲrᥲ ᥎ᥲrі᥆s ᥲrᥴһі᥎᥆s. 
.
ᰔᩚ *#tiktok • #tt*
> ✦ Descarga videos de TikTok.
ᰔᩚ *#mediafire • #mf*
> ✦ Descargar un archivo de MediaFire.
ᰔᩚ *#pinvid • #pinvideo* + [enlacé]
> ✦ Descargar vídeos de Pinterest. 
ᰔᩚ *#mega • #mg* + [enlacé]
> ✦ Descargar un archivo de MEGA.
ᰔᩚ *#play • #play2*
> ✦ Descarga música/video de YouTube.
ᰔᩚ *#ytmp3 • #ytmp4*
> ✦ Descarga música/video de YouTube mediante url.
ᰔᩚ *#fb • #facebook*
> ✦ Descarga videos de Facebook.
ᰔᩚ *#twitter • #x* + [Link]
> ✦ Descargar un video de Twitter/X
ᰔᩚ *#ig • #instagram*
> ✦ Descarga contenido de Instagram.
ᰔᩚ *#tts • #tiktoks* + [busqueda]
> ✦ Buscar videos de tiktok 
ᰔᩚ *#gitclone* + <url> 
> ✦ Descarga un repositorio de github.
ᰔᩚ *#xvideosdl*
> ✦ Descarga videos porno de (Xvideos). 
ᰔᩚ *#xnxxdl*
> ✦ Descarga videos porno de (xnxx).
ᰔᩚ *#tiktokrandom • #ttrandom*
> ✦ Descarga un video aleatorio de tiktok.
ᰔᩚ *#npmdl • #npmdownloader*
> ✦ Descarga paquetes de NPMJs.
ᰔᩚ *#animelinks • #animedl*
> ✦ Descarga Links disponibles de descargas.

• :･ﾟ⊹˚• \`『 Economia 』\` •˚⊹:･ﾟ•

☄︎ ᥴ᥆mᥲᥒძ᥆s ძᥱ ᥱᥴ᥆ᥒ᥆mі́ᥲ ᥡ r⍴g ⍴ᥲrᥲ gᥲᥒᥲr ძіᥒᥱr᥆ ᥡ ᥆𝗍r᥆s rᥱᥴᥙrs᥆s. 

ᰔᩚ *#w • #work • #trabajar*
> ✦ Trabaja para ganar ${moneda}.
ᰔᩚ *#slut • #protituirse*
> ✦ Trabaja como prostituta y gana ${moneda}.
ᰔᩚ *#cf • #suerte*
> ✦ Apuesta tus ${moneda} a cara o cruz.
ᰔᩚ *#crime • #crimen
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

• :･ﾟ⊹˚• \`『 Stickers 』\` •˚⊹:･ﾟ•

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

• :･ﾟ⊹˚• \`『 Perfil 』\` •˚⊹:･ﾟ•

☄︎ ᥴ᥆mᥲᥒძ᥆s ძᥱ ⍴ᥱr𝖿іᥣ ⍴ᥲrᥲ ᥎ᥱr, ᥴ᥆ᥒ𝖿іgᥙrᥲr ᥡ ᥴ᥆m⍴r᥆ᑲᥲr ᥱs𝗍ᥲძ᥆s ძᥱ 𝗍ᥙ ⍴ᥱr𝖿іᥣ. 

ᰔᩚ *#reg • #verificar • #register*
> ✦ Registra tu nombre y edad en el bot.
ᰔᩚ *#unreg*
> ✦ Elimina tu registro del bot.
ᰔᩚ *#profile*
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

• :･ﾟ⊹˚• \`『 Grupos 』\` •˚⊹:･ﾟ•

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
ᰔᩚ *#banchat*
> ✦ Banear el Bot en un chat o grupo.
ᰔᩚ *#unbanchat*
> ✦ Desbanear el Bot del chat o grupo.
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

• :･ﾟ⊹˚• \`『 Anime 』\` •˚⊹:･ﾟ•

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

• :･ﾟ⊹˚• \`『 NSFW 』\` •˚⊹:･ﾟ•

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

• :･ﾟ⊹˚• \`『 Juegos 』\` •˚⊹:･ﾟ•

☄︎ ᥴ᥆mᥲᥒძ᥆s ძᥱ ȷᥙᥱg᥆s ⍴ᥲrᥲ ȷᥙgᥲr ᥡ ძі᥎ᥱr𝗍іr𝗍ᥱ ᥴ᥆ᥒ 𝗍ᥙs ᥲmіg᥆s. 

ᰔᩚ *#amistad • #amigorandom* 
> ✦ hacer amigos con un juego. 
ᰔᩚ *#chaqueta • #jalamela*
> ✦ Hacerte una chaqueta.
ᰔᩚ *#chiste*
> ✦ La bot te cuenta un chiste.
ᰔᩚ *#consejo* 
> ✦ La bot te da un consejo. 
ᰔᩚ *#doxeo • #doxear* + <mencion>
> ✦ Simular un doxeo falso.
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
ᰔᩚ *#morse*
> ✦ Convierte un texto a codigo morse. 
ᰔᩚ *#nombreninja*
> ✦ Busca un nombre ninja aleatorio. 
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
> ✦ Diviertete con la bot jugando el juego ahorcado.
ᰔᩚ *#genio*
> ✦ Comienza una pregunta con el genio.
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
      text: txt,
      contextInfo: {
          mentionedJid: [m.sender, userId],
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
              newsletterJid: channelRD.id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: botname,
              body: textbot,
              thumbnailUrl: banner,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m });

};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menu', 'ayuda', 'help'];

export default handler;

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours}h ${minutes}m ${seconds}s`;
}
