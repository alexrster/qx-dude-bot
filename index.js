const TG = require('telegram-bot-api');

const api = new TG({
  token: process.env.TG_API_TOKEN || "1734503359:AAEC8oGtieN3jdkGAAjsAA1wo2dHL4hcL7I"
});

// Define your message provider
const mp = new TG.GetUpdateMessageProvider();

// Set message provider and start API
api.setMessageProvider(mp);
api.start()
  .then(() => {
    console.log('API is started');
  })
  .catch(console.err);

// Receive messages via event callback
api.on('update', update => {

  // update object is defined at
  // https://core.telegram.org/bots/api#update
  console.log(update);

  const chat_id = update.message.chat.id;

  // Send text message
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
