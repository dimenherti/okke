exports.run = {
   usage: ['sc', 'tqto'],
   async: async (m, {
      client
   }) => {
      const buttons = [{
      buttonId: '.owner',
      buttonText: {
         displayText: 'OWNER'
      },
      type: 1
   }
]

const buttonMessage = {
   caption: "*BIG THANKS TO*\n\n• wildan Izzuddin\n• acuy\n• mel\n• adara cantik\n• aprildv\n• DiaryNikii\n• All creator bot",
   footer: 'Simple WhatsApp Bot',
   buttons: buttons,
   document: {
       url: 'https://telegra.ph/file/ca92b83254814827207cc.jpg'
    },
   headerType: 4,
   mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
   fileName: Func.greeting(m.pushName),
   fileLength: '990000000000000',
   pageCount: 1000,
   contextInfo: {
      externalAdReply: {
         mediaUrl: 'https://github.com',
         mediaType: 2,
         renderLargerThumbnail: false,
         showAdAttribution: true,
         title: `Script BOT? Klik ini\nAktif selama ${Func.toTime(process.uptime() * 1000)}`,
         thumbnail: await Func.fetchBuffer('https://telegra.ph/file/ca92b83254814827207cc.jpg'),
         sourceUrl: 'https://wa.me/84888725073?text=script+nya+pengen+dong+bang'
      }
   }
}

return client.sendMessage(m.chat, buttonMessage)
   },
   error: false
}
