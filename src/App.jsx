import { useState } from "react";
import axios from "axios";
import ModalChatIdExp from "./modal-chat-id-exp.jsx";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isNightMode, setIsNightMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [chat_id, setChat_id] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (chat_id.trim() !== "" && message.trim() !== "") {
      try {
        const res = await toast.promise(
          axios.post(`/api/sendMessage`, { message, chat_id }),
          {
            pending: {
              render() {
                return "Sending message... 📤";
              },
              position: "top-center",
              autoClose: 3000,
            },
            success: "Message sent successfully! ✅",
            error: "Error sending message! ❌",
            position: "top-center",
          },
        );
        console.log(res);
        setMessage("");
      } catch (error) {
        console.error("Error sending message! ❌", error);
      }
    } else {
      toast.error("Empty field", { position: "top-center", autoClose: 3000 });
    }
  };

  const modeClasse = isNightMode ? "dark" : "light";
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
      className={`${modeClasse} ${isNightMode ? "bg-gray-700" : "bg-white "}
            flex h-screen flex-col `}
    >
      <ToastContainer />
      <div
        className={`flex w-full border-b-2 ${isNightMode ? "border-blue-500" : "border-blue-500"} 
                items-center justify-between`}
      >
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className={`font-bold ${isNightMode ? "text-blue-500" : "text-blue-500"} 
                    p-8 text-lg sm:text-4xl`}
        >
          Web3Telegram
        </a>
        <div className="flex">
          <button
            className={`${isNightMode ? "bg-blue- bg-white text-blue-500" : "bg-gray-700 text-blue-500"} 
                        flex h-10 w-10 items-center justify-center rounded-3xl sm:h-16 sm:w-16 `}
            onClick={toggleNightMode}
          >
            <img
              src={`${isNightMode ? "/sun.png" : "/moon.png"}`}
              alt="Moon"
              className="size-7 sm:size-10"
            />
          </button>
          <a href="https://github.com/Arth-y">
            <img
              className="size-10 sm:h-16 sm:w-24 sm:px-4"
              src="/logo_github.png"
              alt="Logo github"
            />
          </a>
          <a href="https://t.me/Arty3824">
            <img
              className="size-10 sm:h-16 sm:w-20 sm:pr-4"
              src="/logo_telegram.png"
              alt="Logo Telegram"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div
          className={` ${isNightMode ? "border-white" : "border-black"} rounded-2xl border-2 p-4`}
        >
          <h1
            className={`font-semibold ${isNightMode ? "text-blue-500" : "text-blue-500"} pb-4 text-2xl`}
          >
            Send Message to Telegram
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                className={`${isNightMode ? "text-blue-500" : "text-blue-500"} text-lg`}
              >
                Chat ID:
              </label>
              <br />
              <input
                placeholder="Type here the chat_id you want to message"
                className={`${isNightMode ? "border-white bg-gray-400 placeholder-gray-800" : "border-black bg-white placeholder-blue-300"} 
                                h-12 w-80 rounded-md border-2 p-2 text-lg placeholder-opacity-70 sm:h-12 sm:w-96`}
                id="chat_id"
                name="chat_id"
                value={chat_id}
                onChange={(event) => setChat_id(event.target.value)}
              />
              <br />
              <p
                className={`pb-4 pt-1 text-sm italic text-blue-500 underline`}
                onClick={handleOpenModal}
              >
                {" "}
                How to get your chat ID ?
              </p>
              <ModalChatIdExp
                show={showModal}
                onClose={handleCloseModal}
                isNightMode={isNightMode}
              />
            </div>
            <div>
              <label
                className={` ${isNightMode ? "text-blue-500" : "text-blue-500"} text-lg`}
                htmlFor="message"
              >
                Message:
              </label>
              <br />
              <textarea
                placeholder="Type your message here"
                className={` ${isNightMode ? "border-white bg-gray-400 placeholder-gray-800" : "border-black bg-white placeholder-blue-300"}
                                 h-52 w-80 rounded-md border-2 p-2 placeholder-opacity-70 sm:w-96`}
                id="message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
              <br />
            </div>
            <div className="flex justify-center">
              <button
                className={`flex h-12 w-24 items-center justify-center rounded-xl border-[3px] border-blue-700 bg-blue-500 p-2 text-xl text-white hover:bg-blue-700`}
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
