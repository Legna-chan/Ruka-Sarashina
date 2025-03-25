import _0x36ae01 from 'axios';
const {
  generateWAMessageContent,
  generateWAMessageFromContent,
  proto
} = (await import("@whiskeysockets/baileys"))["default"];

let handler = async (_0x10bd40, {
  conn: _0x9c7141,
  text: _0x27db11,
  usedPrefix: _0x55e61b,
  command: _0x5ad406
}) => {
  if (!_0x27db11) {
    return _0x9c7141.reply(_0x10bd40.chat, `Por favor, ingresa lo que deseas buscar en Pinterest.`, _0x10bd40);
  }

  await _0x10bd40.react('⌛');
  _0x9c7141.reply(_0x10bd40.chat, `Buscando imágenes... Espere un momento...`, _0x10bd40);

  async function _0x3f3fc7(_0x5f4723) {
    const {
      imageMessage: _0x14a396
    } = await generateWAMessageContent({
      'image': {
        'url': _0x5f4723
      }
    }, {
      'upload': _0x9c7141.waUploadToServer
    });
    return _0x14a396;
  }

  // Realizamos la consulta a la API de Pinterest
  let { data } = await _0x36ae01.get(`https://api.agungny.my.id/api/pinterest-download?url=https://www.pinterest.com/search/pins/?q=${encodeURIComponent(_0x27db11)}`);
  
  // Verificamos que la API haya retornado datos correctamente
  if (!data || !data[0]) {
    return _0x9c7141.reply(_0x10bd40.chat, `No se encontraron resultados para la búsqueda: ${_0x27db11}`, _0x10bd40);
  }

  // Obtenemos la URL de la primera imagen
  const imageUrl = data[0].url;

  // Enviamos la imagen al chat
  const _0x1ca5c6 = generateWAMessageFromContent(_0x10bd40.chat, {
    'imageMessage': await _0x3f3fc7(imageUrl)
  }, {
    'quoted': _0x10bd40
  });

  await _0x10bd40.react('✅');
  await _0x9c7141.relayMessage(_0x10bd40.chat, _0x1ca5c6.message, {
    'messageId': _0x1ca5c6.key.id
  });
};

handler.help = ["pinterest"];
handler.tags = ["descargas"];
handler.coin = 1;
handler.group = true;
handler.command = ['pinterest', 'pin'];

export default handler;