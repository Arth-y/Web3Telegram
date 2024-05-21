import { useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(message);
            const res =  await axios.post(`/api/sendMessage`, { message });
            console.log(res);
            //await axios.post(`${process.env.BACK}/send-message`, { message });
            setMessage('');
            console.log('Message envoyé avec succès !');
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message :', error);
        }
    };

    return (
        <div className="h-screen flex flex-col">
            <div className="flex w-full border-b-2 border-blue-500 justify-between items-center">
                <p className="text-blue-500 text-4xl p-8">
                    Web3Telegram
                </p>
                <div className="flex flexcol">
                    <a href="https://github.com/Arth-y">
                        <img className="h-16 w-20 pr-4" src="../public/logo_github.png" alt="Logo github"/>
                    </a>

                    <a href="https://t.me/Arty3824">
                        <img className="h-16 w-16" src="../public/logo_telegram.png" alt="Logo Telegram"/>
                    </a>
                </div>
            </div>


            <div className="flex flex-1 justify-center items-center">
                <div className="border-black border-2 p-4">
                <h1 className="text-blue-500 p-4 text-2xl">Send Message to Telegram</h1>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="text-blue-500 text-lg">Username:</label><br/>
                            <input className="text-lg border-2 border-black h-12 w-96"/><br/>
                        </div>
                        <div>
                            <label className="text-blue-500 text-lg" htmlFor="message">Message:</label><br/>
                            <textarea className="border-2 border-black h-52 w-96" id="message"
                                   name="message" value={message} onChange={(event) => setMessage(event.target.value)}/><br/>
                        </div>
                        <div className="flex justify-center">
                            <button className="flex justify-center items-center bg-blue-500 text-white rounded-xl h-12 w-24 p-2 border-[3px] border-blue-700 text-xl" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
        ;
}

export default App;
