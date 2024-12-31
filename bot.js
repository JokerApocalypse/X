const WhatsAppBurnoutBailey = require('./attacks/whatsappBurnoutBailey');
const config = require('./config/config');

// Créer une instance du bot et lancer l'attaque
async function startBot() {
  const bot = new WhatsAppBurnoutBailey();
  await bot.execute();
}

// Démarrer le bot
startBot().catch(err => {
  console.error('Erreur lors du démarrage du bot :', err);
});

// 
            case 'kick':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'add':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!text) return 'Text ?'
                await XeonBotInc.groupUpdateSubject(m.chat, text).then((res) => replygcxeon(mess.success)).catch((err) => replygcxeon(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!text) return 'Text ?'
                await XeonBotInc.groupUpdateDescription(m.chat, text).then((res) => replygcxeon(mess.success)).catch((err) => replygcxeon(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!quoted) return replygcxeon(`𝑺𝒆𝒏𝒅/𝑹𝒆𝒑𝒍𝒚 𝒊𝒎𝒂𝒈𝒆 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 𝒃𝒂𝒃𝒆☺️ ${prefix + command}`)
                if (!/image/.test(mime)) return replygcxeon(`𝑺𝒆𝒏𝒅/𝑹𝒆𝒑𝒍𝒚 𝒊𝒎𝒂𝒈𝒆 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 𝒃𝒂𝒃𝒆☺️ ${prefix + command}`)
                if (/webp/.test(mime)) return replygcxeon(`𝑺𝒆𝒏𝒅/𝑹𝒆𝒑𝒍𝒚 𝒊𝒎𝒂𝒈𝒆 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 𝒃𝒂𝒃𝒆☺️ ${prefix + command}`)
                var medis = await XeonBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await XeonBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                } else {
                    var memeg = await XeonBotInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replygcxeon(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replygcxeon(mess.botAdmin)
                let teks = `*╚»☻••✿︎❤︎𝐓𝐀𝐆𝐀𝐋𝐋 𝐁𝐘 𝐒𝐇𝐔𝐍𝐀❤︎✿︎••☻«╝*
                 ☺️🍭 *𝐌𝐞𝐬𝐬𝐚𝐠𝐞 : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                    teks += `💞 @${mem.id.split('@')[0]}\n`
                }
                XeonBotInc.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replygcxeon(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replygcxeon(mess.botAdmin)
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'shunatag':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isBotAdmins && !isCreator && !isPremium) return replygcxeon(mess.botAdmin)
                if (!isAdmins && !isCreator && !isPremium) return replygcxeon(mess.admin)
                if (!m.quoted) return replygcxeon(`𝑹𝒆𝒑𝒍𝒚 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒘𝒊𝒕𝒉 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 𝒃𝒂𝒃𝒆 ${prefix + command}`)
                XeonBotInc.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (args[0] === 'close') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replygcxeon(`𝑮𝒓𝒐𝒖𝒑 𝒄𝒍𝒐𝒔𝒆𝒅 𝒘𝒊𝒕𝒉 𝒔𝒖𝒄𝒄𝒆𝒔𝒔 𝒎𝒂𝒔𝒕𝒆𝒓🍭`)).catch((err) => replygcxeon(json(err)))
                } else if (args[0] === 'open') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygcxeon(`𝑮𝒓𝒐𝒖𝒑 𝒐𝒑𝒆𝒏 𝒘𝒊𝒕𝒉 𝒔𝒖𝒄𝒄𝒆𝒔𝒔 𝒎𝒂𝒔𝒕𝒆𝒓🍭`)).catch((err) => replygcxeon(json(err)))
                } else {
                    replygcxeon(`𝑴𝒐𝒅𝒆 ${command}\n\n\n𝑻𝒚𝒑𝒆 ${prefix + command}𝒐𝒑𝒆𝒏/𝒄𝒍𝒐𝒔𝒆 𝒔𝒂𝒎𝒂😇`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (args[0] === 'open') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygcxeon(`𝑮𝒓𝒐𝒖𝒑 𝒆𝒅𝒊𝒕 𝒊𝒏𝒇𝒐 𝒔𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒐𝒑𝒆𝒏𝒆𝒅 ☺️
                    > 𝒑𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 𝒍𝒊𝒎𝒖𝒍𝒆 𝒔𝒐𝒍𝒊𝒕𝒂𝒓𝒖𝒔`)).catch((err) => replygcxeon(json(err)))
                } else if (args[0] === 'close') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => replygcxeon(`𝑮𝒓𝒐𝒖𝒑 𝒆𝒅𝒊𝒕 𝒊𝒏𝒇𝒐 𝒄𝒍𝒐𝒔𝒆𝒅 𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒃𝒚 𝒔𝒉𝒖𝒏𝒂☺️ 
                    > 𝒑𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 𝒍𝒊𝒎𝒖𝒍𝒆 𝒔𝒐𝒍𝒊𝒕𝒂𝒓𝒖𝒔`)).catch((err) => replygcxeon(json(err)))
                } else {
                    replygcxeon(`𝑴𝒐𝒅𝒆 ${command}\n\n\n𝑻𝒚𝒑𝒆 ${prefix + command}𝒐𝒏/𝒐𝒇𝒇 𝒔𝒂𝒎𝒂🍭`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let response = await XeonBotInc.groupInviteCode(m.chat)
                XeonBotInc.sendText(m.chat, `👥 *𝐆𝐑𝐎𝐔𝐏 𝐋𝐈𝐍𝐊 𝐈𝐍𝐅𝐎*\n📛 *𝐍𝐚𝐦𝐞 :* ${groupMetadata.subject}\n👤 *𝐆𝐫𝐨𝐮𝐩 𝐨𝐰𝐧𝐞𝐫 :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *𝐈𝐃 :* ${groupMetadata.id}\n🔗 *𝐂𝐡𝐚𝐭 𝐋𝐢𝐧𝐤 :* https://chat.whatsapp.com/${response}\n👥 *𝐌𝐞𝐦𝐛𝐞𝐫 :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                await XeonBotInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        replygcxeon(`𝑺𝒉𝒖𝒏𝒂 𝒉𝒂𝒔 𝒔𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒓𝒆𝒗𝒐𝒌𝒆 𝒈𝒓𝒐𝒖𝒑 𝒍𝒊𝒏𝒌💞 ${groupMetadata.subject}`)
                    }).catch((err) => replygcxeon(json(err)))
                break
                case 'p':
            case 'ping':{
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
                await XeonBotInc.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${latensi.toFixed(4)} Second`,
                            thumbnailUrl: 'https://iili.io/dP0QCDg.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
