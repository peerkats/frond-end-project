import telebot

# Replace 'YOUR_TOKEN' with your actual bot token obtained from BotFather
bot = telebot.TeleBot('7357062863:AAHtwmiU5OnayqYvYiT7pDbjfiIQXEjE2TE')

@bot.message_handler(commands=['start'])
def send_welcome(message):
    bot.reply_to(message, 'Welcome to the bot!')



import http.client
import urllib.parse

params = urllib.parse.urlencode({'@number': 12524, '@type': 'issue', '@action': 'show'})
headers = {"Content-type": "application/x-www-form-urlencoded", "Accept": "text/plain"}

conn = http.client.HTTPSConnection("bugs.python.org")

conn.request("POST", "", params, headers)

response = conn.getresponse()
print(response.status, response.reason)

data = response.read()
print(data)

conn.close()



bot.polling()