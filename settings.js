import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─────────────────────────────────────────────────────────────────────────────*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 5216671548329

//*─────────────────────────────────────────────────────────────────────────────*

global.owner = [
  ['5216671548329', 'Legna', true],
];

//*─────────────────────────────────────────────────────────────────────────────*

global.mods = []
global.suittag = ['5216671548329'] 
global.prems = []

//*─────────────────────────────────────────────────────────────────────────────*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16' 
global.languaje = 'Español'
global.vs = '1.0.0'
global.nameqr = 'Ruka-chan'
global.namebot = 'Ruka sarashina'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.yamiJadibts = true

//*─────────────────────────────────────────────────────────────────────────────*

global.packname = 'Ruka Sarashina'
global.botname = 'Ruka Sarashina'
global.wm = 'Ruka Sarashina'
global.author = 'Desarrollado por Legna'
global.dev = 'Desarrollado por Legna'
global.textbot = 'Ruka Sarashina •  Desarrollado por Legna'
global.etiqueta = 'Legna'

//*─────────────────────────────────────────────────────────────────────────────*

global.moneda = 'RukaCoins'
global.catalogo = './src/catálogo.png';
global.banner = 'https://files.catbox.moe/68dhy7.jpg'
//*─────────────────────────────────────────────────────────────────────────────*

global.gp1 = 'https://chat.whatsapp.com/Ecz881bBgqPIWjDOaKkp7E'
global.comunidad1 = 'https://chat.whatsapp.com/EwrwcGvpLf1BnMhP3B4axD'
global.channel = 'https://whatsapp.com/channel/0029VapSIvR5EjxsD1B7hU3T'
global.channel2 = 'https://whatsapp.com/channel/0029VapSIvR5EjxsD1B7hU3T'
global.md = 'https://github.com/Legna-chan/Konjiki-No-Yami'
global.correo = 'legnakujou@gmail.com'
global.cn ='https://whatsapp.com/channel/0029VapSIvR5EjxsD1B7hU3T';

//*─────────────────────────────────────────────────────────────────────────────*

global.catalogo = fs.readFileSync('./src/catalogo.png');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363322713003916@newsletter',
}

//*─────────────────────────────────────────────────────────────────────────────*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    const emot = {
      level: 'Nivel',
      coin: 'Coin',
      exp: 'Experiencia',
      bank: 'Banco',
      diamond: 'Diamante',
      health: 'Salud',
      kyubi: 'Magia',
      joincount: 'Token',
      emerald: 'Esmeralda',
      stamina: 'Energía',
      role: 'Rango',
      premium: 'Premium',
      pointxp: 'Puntos Exp',
      gold: 'Oro',
      iron: 'Hierro',
      coal: 'Carbón',
      stone: 'Piedra',
      potion: 'Poción',
    };
    const results = Object.keys(emot).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }};
global.rpgg = { 
  emoticon(string) {
    string = string.toLowerCase();
    const emott = {
      level: 'Nivel',
      coin: 'Coin',
      exp: 'Experiencia',
      bank: 'Banco',
      diamond: 'Diamante',
      health: 'Salud',
      kyubi: 'Magia',
      joincount: 'Token',
      emerald: 'Esmeralda',
      stamina: 'Energía',
      role: 'Rango',
      premium: 'Premium',
      pointxp: 'Puntos Exp',
      gold: 'Oro',
      iron: 'Hierro',
      coal: 'Carbón',
      stone: 'Piedra',
      potion: 'Poción',
    };
    const results = Object.keys(emott).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emott[results[0][0]];
  }};  

//*─────────────────────────────────────────────────────────────────────────────*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})