import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
global.botNumberCode = '' //Ejemplo: +573218138672
global.confirmCode = ''

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
   ['201100472117', '*المترجم-المطور* 👑', true],
   ['01100472117', '*بــيــبــو-المالك* 👑', true],
   ['201100472117', 'تانجيرو-مساعد ☁️', true],
   ['201100472117', '*بــيــبــو-مساعد* 🍭', true],
]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//cambiar a true si el bot detecta sus propios comandos.
global.isBaileysFail = false
global.libreria = 'Baileys'
global.baileys = 'V 6.7.5'
global.vs = '2.0.7'
global.vsJB = '5.0'
global.nameqr = '𝑩𝑬𝑩𝑶᪶۫ b᪶۫o᪶۫t۫۫'
global.namebot = '*_بــيــبـــو-بوت_* ᰔᩚ'
global.sessions = 'GenesisSession'
global.jadi = 'GenesisJadiBot'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '⪛✰ BOT BEBO ✰⪜'
global.botname = 'BEBO_𝐁𝐎𝐓'
global.wm = 'BEBO_𝐁𝐎𝐓 🤍'
global.author = 'BEBO'
global.dev = '© 𝐁𝐘 : ''
global.textbot = '𝐁𝐘 : BEBO'
global.namebot = 'BEBO_𝐁𝐎𝐓'
global.stickpack = `© 𝑅𝐴𝐷𝐼𝑂 𝐷𝐸𝑀𝑂𝑁`
global.titulowm = '-❀ᩙ̈͟༚̮ ⡞᪲=͟͟͞BEBO_𝐁𝐎𝐓 ≼᳞ׄ ᵎ ˚꙳꤬ꨪ'
global.titulowm2 = '.‧·ீ੭ ¡ ᗃᮢ፝֟͡ BEBO_𝐁𝐎𝐓 !˚̩̩̥͙°̩̥༅˚'
global.igfg = '@ism_edit0'
global.titu = '©️ *BEBO_𝐁𝐎𝐓*'
global.listo = '*BEBO_𝐁𝐎𝐓 ฅ^•ﻌ•^ฅ*'
global.vs = '2.0.7'
global.namechannel = '𝑅𝐴𝐷𝐼𝑂 𝐷𝐸𝑀𝑂𝑁 𝐂𝐇𝐀𝐍𝐍𝐄𝐋'
global.stickauth = `© 𝑅𝐴𝐷𝐼𝑂 𝐷𝐸𝑀𝑂𝑁-BEBO_𝐁𝐎𝐓`
global.dis = ':⁖֟⊱┈֟፝❥'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.png')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = 'https://chat.whatsapp.com/IGf0EGSqhEUJYIwCbWEY6r'
global.group2 = 'https://chat.whatsapp.com/IGf0EGSqhEUJYIwCbWEY6r'
global.canal = 'https://whatsapp.com/channel/0029VaumDtWJZg4B8jLyMK2q'
global.github = 'https://github.com/Angelito-OFC/Genesis-AI' 
global.instagram = 'https://www.instagram.com/ism_edit0' 
global.whatsApp = 'https://wa.me/201063808608'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'ᰔᩚ 𝐀𝐁𝐘𝐒𝐒_𝐁𝐎𝐓', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}};

global.fakegif2 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: '𝐀𝐁𝐘𝐒𝐒_𝐁𝐎𝐓', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘݄𖠵⃕⁖𖥔*_منور_*❞ ꔷ──᜔◇⃟̣̣⃕✨', jpegThumbnail: catalogo }}};

global.fakegif3 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: '𝑅𝐴𝐷𝐼𝑂 𝐷𝐸𝑀𝑂𝑁', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘݄𖠵⃕⁖𝐀𝐁𝐘𝐒𝐒 𝐁𝐎𝐓 ♡', jpegThumbnail: catalogo }}};

global.fakegif4 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: '𝐀𝐁𝐘𝐒𝐒 𝐁𝐎𝐓', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘݄𖠵⃕⁖*_استيكر_* (^_^♪) 🤍', jpegThumbnail: catalogo }}};

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.ch = {
ch1: '120363376982425324@newsletter',
ch2: '120363376982425324@newsletter'
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69
global.maxwarn = '3'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
