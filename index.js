const Twit = require('twit')

const bot = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000
  })


// bot.post('statuses/update', {status: 'hello world!'}, (err, data, response) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(`${data.text} was twitted`)
//   }
// })

bot.get('friends/list', {screen_name: 'kpsesuo'}, (err, data, response) => {
  if(err) {
    console.log(err);
  } else {
    data.users.forEach(user =>
    console.log(`user: ${user.screen_name}`)
  )
  }
})