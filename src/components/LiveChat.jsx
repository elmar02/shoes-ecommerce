import React, { useEffect, useRef, useState } from 'react';
import Avatar from '@/images/static/avatar.png';
import Image from 'next/image';
const LiveChat = () => {
    const chatRef = useRef();
    const chatbodyRef = useRef();
    const [isClosed, setIsClosed] = useState(true);
    const [messages, setMessages] = useState([]);
    const [count, setCount] = useState(0)
    const [date, setDate] = useState("00:00")
    useEffect(() => {
        if (chatbodyRef.current) {
            chatbodyRef.current.scrollTop = chatbodyRef.current.scrollHeight;
        }
        const timer = setTimeout(() => {
            chatRef.current.classList.remove('hidden');
        }, 3000);
        setDate(new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }))
        return () => {
            clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        if (chatbodyRef.current) {
            chatbodyRef.current.scrollTop = chatbodyRef.current.scrollHeight;
        }
        if (messages.length !== 0) {
            localStorage.setItem("liveChatMessages", JSON.stringify(messages))
        }
        else {
            if (count === 0) {
                const messageData = JSON.parse(localStorage.getItem("liveChatMessages")) || []
                setMessages(messageData)
            }
            setCount(count + 1)
        }
    }, [messages]);

    const toggleChar = () => {
        chatRef.current.classList.toggle('closed');
        setIsClosed(!isClosed);
        if (chatbodyRef.current) {
            chatbodyRef.current.scrollTop = chatbodyRef.current.scrollHeight;
        }
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        const input = e.target.elements.messageInput.value.trim();
        if (input) {
            const currentDate = new Date();
            const timestamp = currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false })

            const newMessage = {
                content: input,
                isSalesman: input.charAt(0) === input.charAt(0).toUpperCase(),
                timestamp: timestamp,
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            e.target.elements.messageInput.value = '';
        }
    };



    return (
        <div
            ref={chatRef}
            className="livechat hidden closed fixed bottom-0 z-30 w-64 rounded-t-sm right-20 md:right-36 dark:shadow-gray-800 shadow-gray-300 shadow-lg"
        >
            <div
                onClick={toggleChar}
                className="header cursor-pointer py-2 px-4 flex items-center rounded-t-sm justify-between bg-red-400 text-white"
            >
                <h1 className="font-bold">Live Chat</h1>
                {isClosed ? (
                    <i className="fa-solid fa-chevron-up fa-bounce"></i>
                ) : (
                    <i className="fa-solid fa-chevron-down"></i>
                )}
            </div>
            <div className="body dark:text-white dark:bg-gray-900 bg-white">
                <div className="chat-header flex p-2">
                    <div className="avatar w-11">
                        <Image width={100} src={Avatar} alt='avatar' />
                    </div>
                    <div className="name ms-2">
                        <h1 className="font-bold">Sənan A.</h1>
                        <p className="text-gray-500 dark:text-gray-300">Satış təmsilcisi</p>
                    </div>
                </div>
                <div ref={chatbodyRef} className="chat-body h-72 shadow-inner overflow-y-scroll p-2 dark:bg-gray-800 bg-gray-100">
                    <div className="salesman default flex flex-col items-start">
                        <div className="profile flex text-sm">
                            <div className="avatar w-5">
                                <Image width={100} src={Avatar} alt='avatar' />
                            </div>
                            <div className="name ms-2 text-gray-500 dark:text-gray-300">Senan A.</div>
                            <div className="date ms-1 text-gray-500 dark:text-gray-300">{date}</div>
                        </div>
                        <div className="message-box bg-white dark:bg-gray-900 rounded-lg p-3 ms-6 mt-1 mb-5">
                            Salam, hansı məhsulla maraqlanırsınız? Sizin üçün ən uyğununu seçməkdə kömək edə bilərəm.
                        </div>
                    </div>
                    {messages.map((message, index) => (
                        message.isSalesman ?
                            <div key={index} className="salesman flex flex-col items-start">
                                <div className="profile flex text-sm">
                                    <div className="avatar w-5">
                                        <Image width={100} src={Avatar} alt='avatar' />
                                    </div>
                                    <div className="name ms-2 text-gray-500 dark:text-gray-300">Senan A.</div>
                                    <div className="date ms-1 text-gray-500 dark:text-gray-300">{message.timestamp}</div>
                                </div>
                                <div className="message-box bg-white dark:bg-gray-900 rounded-lg p-3 ms-6 mt-1 mb-5">
                                    {message.content}
                                </div>
                            </div> :
                            <div key={index} className="client flex flex-col items-end">
                                <div className="profile flex text-sm">
                                    <div className="name ms-2 text-gray-500 dark:text-gray-300">Müştəri.</div>
                                    <div className="date ms-1 text-gray-500 dark:text-gray-300">{message.timestamp}</div>
                                </div>
                                <div className="message-box bg-red-400 text-white rounded-lg p-3 ms-6 mt-1 mb-5">
                                    {message.content}
                                </div>
                            </div>
                    ))}
                </div>
                <form onSubmit={handleSendMessage} className="type-box flex items-center justify-between bg-white dark:bg-gray-900">
                    <input
                        className="bg-transparent p-3 w-5/6 outline-none"
                        type="text"
                        placeholder="Mesajınızı bura yazın"
                        name="messageInput"
                    />
                    <button type="submit" className='w-1/6 text-center'>
                        <i className="ri-send-plane-2-line p-2 text-2xl cursor-pointer"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LiveChat;


