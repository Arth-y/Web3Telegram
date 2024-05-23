import React from 'react';

const ModalChatIdExp = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div
            className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`}
        >
            <div
                className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-3xl bg-white"
            >
                <div>
                    <h3
                        className="text-lg text-blue-500"
                    >
                        How to get your Chat ID ?
                    </h3>
                    <div>
                        <p
                            className="text-sm text-gray-500 py-4"
                        >
                            To obtain your chat ID, simply send a direct message to the Get My ID bot, and the bot will
                            promptly respond with your user ID and Current chat ID.
                            <br/><br/>
                            <img src="/get-my-id-bot.png" alt="get-my-id-bot"/> <br/>
                            Both values are identical, so it doesn't matters which one you choose to copy and
                            paste.<br/><br/>

                            <img src="/my-chat-id.png" alt="my-chat-id"/> <br/>
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                    <button
                            className="rounded-md border-blue-700 border-2 bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-700"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalChatIdExp;
