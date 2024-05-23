import { useState } from 'react';
import axios from 'axios';
import ModalChatIdExp from './modal-chat-id-exp.jsx';

function App() {
    const [isNightMode, setIsNightMode] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');
    const [chat_id, setChat_id] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(message);
            const res =  await axios.post(`/api/sendMessage`, { message, chat_id });
            console.log(res);
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

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div
            className={`${modeClasse} ${isNightMode ? 'bg-gray-700' : 'bg-white '}
            h-screen flex flex-col `}
        >
            <div
                className={`flex w-full border-b-2 ${isNightMode ? 'border-blue-500' : 'border-blue-500'} 
                justify-between items-center`}
            >
                <a
                    href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                    className={`font-bold ${isNightMode ? 'text-blue-500' : 'text-blue-500'} 
                    sm:text-4xl text-lg p-8`}
                >
                    Web3Telegram
                </a>
                <div
                    className="flex"
                >
                    <button
                        className={`${isNightMode ? 'bg-white text-blue-500 bg-blue-' : 'bg-gray-700 text-blue-500'} 
                        rounded-3xl sm:h-16 sm:w-16 h-10 w-10 items-center justify-center flex `}
                        onClick={toggleNightMode}
                    >
                        <img src={`${isNightMode ? '/sun.png' : "/moon.png"}`} alt="Moon" className="size-7 sm:size-10"/>
                    </button>
                    <a
                        href="https://github.com/Arth-y">
                        <img
                            className="sm:h-16 sm:w-24 sm:px-4 size-10"
                            src="/logo_github.png"
                            alt="Logo github"
                        />
                    </a>
                    <a
                        href="https://t.me/Arty3824">
                        <img
                            className="sm:h-16 sm:w-20 size-10 sm:pr-4"
                            src="/logo_telegram.png"
                            alt="Logo Telegram"/>
                    </a>
                </div>
            </div>
            <div
                className="flex flex-1 justify-center items-center">
                <div
                    className={` ${isNightMode ? 'border-white' : 'border-black'} border-2 p-4 rounded-2xl`}
                >
                <h1
                    className={`font-semibold ${isNightMode ? 'text-blue-500' : 'text-blue-500'} pb-4 text-2xl`}
                >
                    Send Message to Telegram
                </h1>
                    <form
                        className="space-y-4"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label
                                className={`${isNightMode ? 'text-blue-500' : 'text-blue-500'} text-lg`}
                            >
                                Chat ID:
                            </label>
                            <br/>
                            <input
                                placeholder="Type here the chat_id you want to message"
                                className={`${isNightMode ? 'border-white bg-gray-400 placeholder-gray-800' : 'border-black bg-white placeholder-blue-300'} 
                                placeholder-opacity-70 p-2 text-lg border-2 sm:h-12 sm:w-96 h-12 w-80 rounded-md`}
                                id="chat_id"
                                name="chat_id"
                                value={chat_id}
                                onChange={(event) => setChat_id(event.target.value)}
                            />
                            <br/>
                            <p className={`pb-4 pt-1 text-blue-500 underline italic text-sm`} onClick={handleOpenModal}> How to get your chat ID ?</p>
                            <ModalChatIdExp show={showModal} onClose={handleCloseModal} isNightMode={isNightMode} />

                        </div>
                        <div>
                            <label
                                className={` ${isNightMode ? 'text-blue-500' : 'text-blue-500'} text-lg`}
                                htmlFor="message"
                            >
                                Message:
                            </label>
                            <br/>
                            <textarea
                                placeholder="Type your message here"
                                className={` ${isNightMode ? 'border-white bg-gray-400 placeholder-gray-800' : 'border-black bg-white placeholder-blue-300'}
                                 p-2 border-2 h-52 sm:w-96 w-80 placeholder-opacity-70 rounded-md`}
                                id="message"
                                name="message"
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                            />
                            <br/>
                        </div>
                        <div
                            className="flex justify-center"
                        >
                            <button
                                className={`flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white rounded-xl h-12 w-24 p-2 border-[3px] border-blue-700 text-xl`}
                                type="submit"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
