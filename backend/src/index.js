const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors'); // Importez le module CORS
require('dotenv').config()

const app = express();
const bot = new TelegramBot("7045386731:AAGSmPQQ_t2Po5eDob7rUEWEZ25W-s2t9fg", {polling: true});
//const bot = new TelegramBot(process.env.TOKEN, {polling: true});

app.use(express.json());

app.use((req, res, next) => {
    //res.setHeader('Content-Security-Policy', `default-src 'self'; connect-src 'self' ${process.env.BACK}`);
    res.setHeader('Content-Security-Policy', `default-src 'self'; connect-src 'self' https://web3-telegram-5bmh.vercel.app/`);
    next();
});

app.use(cors());

app.post('/send-message', (req, res) => {
    const { message } = req.body;
    const chatId = '6064290146';

    bot.sendMessage(chatId, message)
        .then(() => {
            res.status(200).send('Message sent successfully!');
        })
        .catch((error) => {
            console.error('Error sending message:', error);
            res.status(500).send('An error occurred while sending the message');
        });
});

app.listen( () => {
    console.log(`Server is running on https://web3-telegram-5bmh.vercel.app/`);
    //console.log(`Server is running on ${process.env.BACK}`);
});
