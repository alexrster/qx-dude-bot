const TG = require('telegram-bot-api');

const api = new TG({ token: process.env.TG_API_TOKEN });
const mp = new TG.GetUpdateMessageProvider();

api.setMessageProvider(mp);

api.start()
  .then(() => {
    console.log('API is started');
  })
  .catch(console.err);

api.on('update', update => {
  const chat_id = update.message.chat.id;

  api.sendMessage({
    chat_id: chat_id,
    text: 'I got following message from you via Webhook: *' + update.message.text + '*',
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Visit us!',
            url: 'https://github.com/mast/telegram-bot-api'
          }
        ]
      ]
    }
  });
});
