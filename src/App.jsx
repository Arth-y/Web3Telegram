import { useState } from 'react';
import axios from 'axios';

function App() {
    const [isNightMode, setIsNightMode] = useState(false);
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

    const modeClasse = isNightMode ? 'dark' : 'light';
    function toggleNightMode() {
        setIsNightMode(!isNightMode);
    }



    return (
        <div className={`h-screen flex flex-col ${modeClasse} ${isNightMode ? 'bg-gray-700' : 'bg-gray-50 '}`}>
            <div className={`flex w-full border-b-2 ${isNightMode ? 'border-blue-300' : 'border-blue-500'} justify-between items-center`}>

                    <p className={`font-bold ${isNightMode ? 'text-blue-300' : 'text-blue-500'} sm:text-4xl text-lg p-8`}>
                        Web3Telegram
                    </p>

                <div className="flex flexcol">

                    <button className={`${isNightMode ? 'bg-white text-blue-500' : 'bg-gray-700 text-blue-300'} rounded-3xl sm:h-16 sm:w-16 h-10 w-10`} onClick={toggleNightMode}>O</button>


                    <a href="https://github.com/Arth-y">
                        <img className="sm:h-16 sm:w-24 sm:px-4 h-10 w-10" src="/logo_github.png" alt="Logo github"/>
                    </a>

                    <a href="https://t.me/Arty3824">
                        <img className="sm:h-16 sm:w-16 w-10 h-10" src="/logo_telegram.png" alt="Logo Telegram"/>
                    </a>

                </div>
            </div>


            <div className="flex flex-1 justify-center items-center">
                <div className={` ${isNightMode ? 'border-blue-500' : 'border-black'} border-2 p-4 rounded-2xl`}>
                <h1 className={`font-semibold ${isNightMode ? 'text-blue-300' : 'text-blue-500'} p-4 text-2xl`}>Send Message to Telegram</h1>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className={`${isNightMode ? 'text-blue-300' : 'text-blue-500'} text-lg`}>Username:</label><br/>
                            <input placeholder="Type here the user you want to message" className={`${isNightMode ? 'bg-gray-400 placeholder-gray-800' : 'bg-white placeholder-blue-300'} placeholder-opacity-70 p-2 text-lg border-2 border-black sm:h-12 sm:w-96 h-12 w-80`}/><br/>
                        </div>

                        <div>
                            <label className={` ${isNightMode ? 'text-blue-300' : 'text-blue-500'} text-lg`} htmlFor="message">Message:</label><br/>
                            <textarea placeholder="Type your message here" className={` ${isNightMode ? 'bg-gray-400 placeholder-gray-800' : 'bg-white placeholder-blue-300'} p-2 border-2 border-black h-52 sm:w-96 w-80 placeholder-opacity-70`} id="message"
                                   name="message" value={message} onChange={(event) => setMessage(event.target.value)}/><br/>
                        </div>
                        <div className="flex justify-center">
                            <button className={`flex justify-center items-center bg-blue-500 text-white rounded-xl h-12 w-24 p-2 border-[3px] border-blue-700 text-xl`} type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
        ;
}

export default App;
