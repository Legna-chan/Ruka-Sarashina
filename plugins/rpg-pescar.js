let cooldowns = {}

let handler = async (m, { conn, isPrems }) => {
    let user = global.db.data.users[m.sender]
    let tiempo = 15 * 60  // Cambié el cooldown a 15 minutos
    if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempo * 1000) {
        const tiempo2 = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempo * 1000 - Date.now()) / 1000))
        conn.reply(m.chat, `🌸 Debes esperar *${tiempo2}* para pescar de nuevo.`, m)
        return
    }
    
    // Generar cantidad de pescados aleatoria entre 10 y 30
    let cantidadPescados = Math.floor(Math.random() * 21) + 10 
    
    // Ganancia fija de 200 o 300 monedas
    let ganancia = Math.random() < 0.5 ? 200 : 300

    cooldowns[m.sender] = Date.now()
    await conn.reply(m.chat, `🎋 ¡Pescaste *${cantidadPescados}* peces y ganaste *${toNum(ganancia)}* ${moneda} 🍭!`, m)
    
    user.coin += ganancia
}

handler.help = ['pescar']
handler.tags = ['rpg']
handler.command = ['pescar', 'fishing']
handler.group = true;

export default handler

function toNum(number) {
    if (number >= 1000 && number < 1000000) {
        return (number / 1000).toFixed(1) + 'k'
    } else if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M'
    } else {
        return number.toString()
    }
}

function segundosAHMS(segundos) {
    let minutos = Math.floor(segundos / 60)
    let segundosRestantes = segundos % 60
    return `${minutos} minutos y ${segundosRestantes} segundos`
}