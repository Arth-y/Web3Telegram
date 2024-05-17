import { useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log(message);
            await axios.post(`${process.env.BACK}/send-message`, { message });
            setMessage('');
            console.log('Message envoyé avec succès !');
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message :', error);
        }
    };

    return (
        <div>
            <h1>Send Message to Telegram</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="message">Message:</label><br/>
                <input type="text" id="message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} /><br/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default App;
