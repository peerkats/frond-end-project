import telebot

# Replace 'YOUR_TOKEN' with your actual bot token obtained from BotFather
bot = telebot.TeleBot('7357062863:AAHtwmiU5OnayqYvYiT7pDbjfiIQXEjE2TE')

@bot.message_handler(commands=['start'])
def send_welcome(message):
    bot.reply_to(message, 'Welcome to the bot!')







bot.polling()