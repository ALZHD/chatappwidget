const pusher = new window.Pusher('ChatsAppApiProdKey', {
  wsHost: 'socket.chatapp.online',
  wssPort: 6001,
  disableStats: true,
  authEndpoint: 'https://api.chatapp.online/broadcasting/auth',
  auth: {
    headers: {
      Authorization: '$2y$10$/Y6kkxgBLJCWLp4dmkvJleuz9V9rXAaxAdoO/7w3LHpjaL23GVZxe', // персональный токен, полученный методом https://api.chatapp.online/docs/#1-v1tokens-POSTv1-tokens
    },
  },
  enabledTransports: ['ws'],
  forceTLS: true,
});
const channel = pusher.subscribe('private-v1.licenses.22453.messengers.telegram');

// channel.bind('message', (data) => {
//   console.log(data);
// });

// channel.bind('messageStatus', (data) => {
//   console.log(data);
// });

// channel.bind('chatTag', (data) => {
//   console.log(data);
// });

module.exports = channel;
