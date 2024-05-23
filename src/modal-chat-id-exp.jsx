import React from "react";

const ModalChatIdExp = ({ show, onClose, isNightMode }) => {
  if (!show) return null;

  const modalClass = isNightMode
    ? "bg-gray-700 text-white"
    : "bg-white text-black";

  return (
    <div
      className={`fixed inset-0 ${isNightMode ? "bg-gray-900 bg-opacity-80" : "bg-gray-600 bg-opacity-50"} h-full w-full overflow-y-auto`}
    >
      <div
        className={`relative top-20 mx-auto w-96 rounded-3xl border p-5 shadow-lg ${modalClass}`}
      >
        <div>
          <h3 className="text-lg text-blue-500">How to get your Chat ID ?</h3>
          <div>
            <p className="py-4 text-sm">
              To obtain your chat ID, simply send a direct message to the Get My
              ID bot, and the bot will promptly respond with your user ID and
              Current chat ID.
              <br />
              <br />
              <img src="/get-my-id-bot.png" alt="get-my-id-bot" /> <br />
              Both values are identical, so it doesn't matter which one you
              choose to copy and paste.
              <br />
              <br />
              <img src="/my-chat-id.png" alt="my-chat-id" /> <br />
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              className={`rounded-md border-2 border-blue-700 bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-700`}
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
