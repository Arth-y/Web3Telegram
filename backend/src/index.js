const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors');
require('dotenv').config()

const app = express();
const bot = new TelegramBot("7045386731:AAGSmPQQ_t2Po5eDob7rUEWEZ25W-s2t9fg", {polling: true});
//const bot = new TelegramBot(process.env.TOKEN, {polling: true});

app.use(express.json());

// app.use((req, res, next) => {
//     //res.setHeader('Content-Security-Policy', `default-src 'self'; connect-src 'self' ${process.env.BACK}`);
//     res.setHeader('Content-Security-Policy', `default-src 'self'; connect-src 'self' https://web3-telegram-5bmh.vercel.app/`);
//     next();
// });

app.use(cors());

app.get('/', function (req, res) {
    console.log("ok")
    return res.send("Ok")
});

app.post('/send-message', function (req, res) {

    const { message } = req.body;
    const chatId = '6064290146';

    return bot.sendMessage(chatId, message)
        .then(() => {
            console.log("done")
            return res.status(200).send('Message sent successfully!');
        })
        .catch((error) => {
            console.error('Error sending message:', error);
            return res.status(500).send('An error occurred while sending the message');
        });
});

const port = process.env.PORT || 3000;

app.listen( port,() => {
    console.log(`Server is running on https://localhost::${port}`);
    //console.log(`Server is running on ${process.env.BACK}`);
});
