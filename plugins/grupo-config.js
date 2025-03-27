let handler = async (m, { conn, args, command }) => {
  const defaultImage = 'https://files.catbox.moe/guceih.jpg'; // URL de la imagen

  let isClose = { // Mapa de opciones
    'open': 'not_announcement',
    'close': 'announcement',
    'abierto': 'not_announcement',
    'cerrado': 'announcement',
    'abrir': 'not_announcement',
    'cerrar': 'announcement',
  }[(args[0] || '')];

  // Si no se encuentra una opción válida, se responde con un mensaje explicativo
  if (isClose === undefined) 
    return conn.reply(m.chat, `🍬 *Elija una opción para configurar el grupo*\n\nEjemplo:\n*✰ #${command} abrir*\n*✰ #${command} cerrar*\n*✰ #${command} close*\n*✰ #${command} open*`, m);

  // Cambia la configuración del grupo
  await conn.groupSettingUpdate(m.chat, isClose);

  // Mensaje según la configuración de grupo
  if (isClose === 'not_announcement') {
    await conn.sendMessage(m.chat, { 
      text: `🍬 *Ya pueden escribir en este grupo.*`, 
      image: { url: defaultImage }
    }, { quoted: m });
  }

  if (isClose === 'announcement') {
    await conn.sendMessage(m.chat, { 
      text: `🍭 *Solo los admins pueden escribir en este grupo.*`, 
      image: { url: defaultImage }
    }, { quoted: m });
  }
}

handler.help = ['group open / close', 'grupo abrir / cerrar'];
handler.tags = ['grupo'];
handler.command = ['group', 'grupo'];
handler.admin = true;
handler.botAdmin = true;

export default handler;