import { useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(message);
            await axios.post(`http://localhost:3000/send-message`, { message });
            //await axios.post(`${process.env.BACK}/send-message`, { message });
            setMessage('');
            console.log('Message envoyé avec succès !');
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message :', error);
        }
    };

    return (
        <div className="h-screen">
            <p className="w-full p-8 border-b text-center">
                Web3Telegram
            </p>

            <div className="h-full flex justify-center items-center border-black border-2">
                <h1>Send Message to Telegram</h1>
                <form className="border-black border-2" onSubmit={handleSubmit}>
                    <label htmlFor="message">Message:</label><br/>
                    <input type="text" id="message"
                           name="message" value={message} onChange={(event) => setMessage(event.target.value)} /><br/>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
)
    ;
}

export default App;
