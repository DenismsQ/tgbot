const { Telegraf } = require('telegraf');

const bot = new Telegraf('6042204288:AAFnXzicAe3p9g5Gr6C9AqOYdRcTInq2iFQ');

bot.start((ctx) => ctx.reply('Привет! Я загадал число от 1 до 10. Попробуйте угадать его.'));

let secretNumber = Math.floor(Math.random() * 10) + 1;
let guessed = false;

bot.on('text', (ctx) => {
  if (!guessed) {
    let guess = parseInt(ctx.message.text);
    if (isNaN(guess)) {
      ctx.reply('Пожалуйста, введите число от 1 до 10.');
    } else if (guess === secretNumber) {
      ctx.reply('Поздравляю, вы угадали число!');
      guessed = true;
    } else {
      ctx.reply('К сожалению, это не верное число. Попробуйте еще раз.');
    }
  } else {
    ctx.reply('Игра окончена. Напишите /start, чтобы начать новую игру.');
  }
});

bot.launch();