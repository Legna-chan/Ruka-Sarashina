import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command, conn }) => {
    if (!text) return conn.reply(m.chat, `Escribe el nombre del scraper.\nEjemplo: ${usedPrefix + command} yt-search`, m);

    try {
        await m.react('⏳'); // Reacción de espera
        conn.reply(m.chat, '🔍 Buscando el scraper....', m);

        let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`);
        let { objects } = await res.json();

        if (!objects.length) return conn.reply(m.chat, `❌ No se encontró resultado de: ${text}`, m);

        let txt = objects.map(({ package: pkg }) => {
            return `《✧》 Scraper  -  Search 《✧》

✦ Nombre: ${pkg.name}
✦ Versión: V${pkg.version}
✦ Enlace: ${pkg.links.npm}
✦ Descripción: ${pkg.description}
\n\n----------`;
        }).join`\n\n`;

        // Enviar mensaje sin responder (para evitar que se marque como reenviado)
        await conn.sendMessage(m.chat, { text: txt });

        await m.react('✅'); // Reacción de éxito
    } catch (e) {
        await conn.reply(m.chat, `⚠️ Ocurrió un error.`, m);
        await m.react('❌');
    }
};

handler.help = ['npmjs'];
handler.tags = ['buscador'];
handler.command = ['npmjs'];

export default handler;