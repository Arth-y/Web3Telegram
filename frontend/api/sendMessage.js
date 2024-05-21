import TelegramBot from 'node-telegram-bot-api';
const bot = new TelegramBot("7045386731:AAGSmPQQ_t2Po5eDob7rUEWEZ25W-s2t9fg", { polling: true });

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { message } = req.body;
        const chatId = '6064290146';
        console.log("bientot sendmsg")
        return bot.sendMessage(chatId, message)
            .then(() => {
                console.log("Message envoyé avec succès sur Telegram!");
                return res.status(200).send('Message envoyé avec succès sur Telegram!');
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi du message sur Telegram :', error);
                return res.status(500).send('Une erreur est survenue lors de l\'envoi du message sur Telegram');
            });
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
