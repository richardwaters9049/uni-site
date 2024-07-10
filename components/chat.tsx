import { useState } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState<{ user: string, text: string }[]>([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { user: 'User', text: input };
        setMessages([...messages, userMessage]);
        setInput('');

        try {
            const res = await fetch('/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: input })
            });
            const data = await res.json();
            const botMessage = { user: 'Bot', text: data.response };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <div className="bg-white shadow-md rounded p-4 mb-4">
                <div className="overflow-y-auto h-64">
                    {messages.map((msg, index) => (
                        <div key={index} className={`${msg.user === 'Bot' ? 'text-left' : 'text-right'}`}>
                            <div className={`inline-block p-2 rounded mb-2 ${msg.user === 'Bot' ? 'bg-blue-200' : 'bg-green-200'}`}>
                                <strong>{msg.user}:</strong> {msg.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex">
                    <input
                        type="text"
                        className="flex-grow p-2 border rounded mr-2"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    />
                    <button
                        className="p-2 bg-blue-500 text-white rounded"
                        onClick={sendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
